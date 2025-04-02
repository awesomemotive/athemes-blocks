import { __ } from '@wordpress/i18n';
import { useState, useEffect, useMemo } from '@wordpress/element';
import { useSelect } from "@wordpress/data";
import { Panel, PanelBody, TextControl } from '@wordpress/components';
import { InspectorControls, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { RadioButtons } from '../../block-editor/controls/radio-buttons/radio-buttons';
import { RangeSlider } from '../../block-editor/controls/range-slider/range-slider';
import { Select } from '../../block-editor/controls/select/select';
import { TextInput } from '../../block-editor/controls/text-input/text-input';
import { SwitchToggle } from '../../block-editor/controls/switch-toggle/switch-toggle';
import { ColorPicker } from '../../block-editor/controls/color-picker/color-picker';
import { Typography } from '../../block-editor/controls/typography/typography';
import { Dimensions } from '../../block-editor/controls/dimensions/dimensions';
import { createAttributeUpdater } from '../../utils/block-attributes';

import { TabsNavigation } from '../../block-editor/controls/tabs/tabs-navigation';

import { getSettingValue, getSettingUnit, getSettingDefaultValue, getSettingDefaultUnit, getColorPickerSettingValue, getColorPickerSettingDefaultValue, getDimensionsSettingValue, getDimensionsSettingDirectionsValue, getDimensionsSettingConnectValue, getDimensionsSettingDefaultValue, getInnerSettingValue } from '../../utils/settings';
import { applyPreviewCSS, getControlCSS } from '../../utils/css';

const attributesDefaults = FlexContainerBlockData.attributes;

export default function Edit( props ) {
	const { attributes, setAttributes, clientId } = props;
	const atts = attributes;
	const updateAttribute = createAttributeUpdater(attributes, setAttributes);
	const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());
	const currentTab = useSelect((select) => select('persistent-tabs-store').getCurrentTab());

	const [ updateCss, setUpdateCss ] = useState(false);

	// Detect if this block is a child of a flex-container block.
	const parentBlock = useSelect(select => {
		const parents = select('core/block-editor').getBlockParents(clientId);
		if (parents.length === 0) return null;
		
		// Get the immediate parent block
		const parentId = parents[parents.length - 1];
		const parentBlock = select('core/block-editor').getBlock(parentId);
		
		return parentBlock?.name === 'athemes-blocks/flex-container' ? parentBlock : null;
	}, [clientId]);

	const isChildOfFlexContainer = parentBlock !== null;

	// Remove some attributes when it is a child block.
	if ( isChildOfFlexContainer ) {
		atts.containerWidth = {
			desktop: {
				value: 'custom',
			},
			tablet: {
				value: 'custom',
			},
			mobile: {
				value: 'custom',
			},
		};
	}

	// Move renderAppender outside the render cycle.
	const renderAppender = () => <InnerBlocks.DefaultBlockAppender />;

	const innerBlocks = useMemo(
		() => (
			<InnerBlocks
				templateLock={ false }
				renderAppender={ renderAppender }
			/>
		),
		[ renderAppender ]
	);

	const {

		// Type settings.
		containerWidth,
		contentWidth,
		contentBoxWidth,
		customWidth,
		minHeight,
		equalHeight,
		htmlTag,
		htmlTagLink,
		htmlTagLinkOpenInNewWindow,
		overflow,

		// Layout settings.
		layout,
		direction,
		childrenWidth,
		alignItems,
		justifyContent,
		wrap,
		alignContent,
	} = useMemo(() => {
		return {

			// Type settings.
			containerWidth: getSettingValue('containerWidth', 'desktop', atts),
			contentWidth: getSettingValue('contentWidth', 'desktop', atts),
			contentBoxWidth: getSettingValue('contentBoxWidth', currentDevice, atts),
			customWidth: getSettingValue('customWidth', currentDevice, atts),
			minHeight: getSettingValue('minHeight', currentDevice, atts),
			equalHeight: getSettingValue('equalHeight', 'desktop', atts),
			htmlTag: getSettingValue('htmlTag', 'desktop', atts),
			htmlTagLink: getSettingValue('htmlTagLink', 'desktop', atts),
			htmlTagLinkOpenInNewWindow: getSettingValue('htmlTagLinkOpenInNewWindow', 'desktop', atts),
			overflow: getSettingValue('overflow', currentDevice, atts),

			// Layout settings.
			layout: getSettingValue('layout', 'desktop', atts),
			direction: getSettingValue('direction', 'desktop', atts),
			childrenWidth: getSettingValue('childrenWidth', 'desktop', atts),
			alignItems: getSettingValue('alignItems', 'desktop', atts),
			justifyContent: getSettingValue('justifyContent', 'desktop', atts),
			wrap: getSettingValue('wrap', 'desktop', atts),
			alignContent: getSettingValue('alignContent', 'desktop', atts),
		};
	}, [atts, currentDevice]);

	// Save the Client ID to attributes.
	useEffect(() => {
		setAttributes({ clientId: clientId });
	}, [clientId]);

	// Watch for changes in the updateCss state and apply the CSS.
	useEffect(() => {
		if ( updateCss ) {
			if ( updateCss.type === 'all' ) {
				updateCss.settings.forEach( setting => {
					const cssData = {
						css: setting.css,
						settingId: setting.settingId,
						innerSettingId: setting?.innerSettingId ? setting.innerSettingId : null
					};
					const css = getControlCSS( cssData, clientId, atts );

					applyPreviewCSS( css, clientId, setting.settingId, setting.innerSettingId );
				});
			} else if ( updateCss.type === 'inner-control' ) {
				const cssData = {
					css: attributesDefaults[updateCss.settingId].default?.innerSettings[updateCss.innerSettingId]?.css,
					settingId: updateCss.settingId,
					innerSettingId: updateCss.innerSettingId
				};
				const css = getControlCSS( cssData, clientId, atts );

				applyPreviewCSS( css, clientId, updateCss.settingId, updateCss.innerSettingId );
			} else {
				const settingId = updateCss?.settingId;
				const cssData = {
					css: attributesDefaults[settingId]?.css,
					settingId: settingId
				};
				const css = getControlCSS( cssData, clientId, atts );

				applyPreviewCSS( css, clientId, settingId );
			}
		}
	}, [ updateCss ]);

	// Render the CSS for the first load.
	useEffect(() => {
		const allSettings = Object.keys( attributesDefaults );
		const allSettingsStyles = [];

		allSettings.forEach(settingId => {
			const isInnerSetting = attributesDefaults[settingId]?.default?.innerSettings;

			if ( isInnerSetting ) {
				const allInnerSettings = Object.keys( attributesDefaults[settingId].default.innerSettings );

				allInnerSettings.forEach(innerSettingId => {
					allSettingsStyles.push({
						type: 'inner-setting',
						settingId: settingId,
						innerSettingId: innerSettingId,
						value: getInnerSettingValue( settingId, innerSettingId, currentDevice, atts ),
						css: attributesDefaults[settingId].default.innerSettings[innerSettingId].css
					});
				});
			} else {
				allSettingsStyles.push({
					type: 'setting',
					settingId: settingId,
					value: getSettingValue( settingId, currentDevice, atts ),
					css: attributesDefaults[settingId].css
				});
			}
		});

		setUpdateCss({
			type: 'all',
			settings: allSettingsStyles
		});
	}, []);

	return (
		<>
			<InspectorControls>
				<TabsNavigation
					value="general"
					options={[
						{ label: __( 'General', 'botiga-pro' ), value: 'general' },
						{ label: __( 'Style', 'botiga-pro' ), value: 'style' },
						{ label: __( 'Advanced', 'botiga-pro' ), value: 'advanced' },
					]}
				/>

				{
					currentTab === 'general' && (
						<Panel>
							<PanelBody title={ __( 'Type', 'botiga-pro' ) }>
								{
									isChildOfFlexContainer === false && (
										<RadioButtons 
											label={ __( 'Container Width', 'athemes-blocks' ) }
											defaultValue={ containerWidth }
											options={[
												{ label: __( 'Full Width', 'athemes-blocks' ), value: 'full-width' },
												{ label: __( 'Boxed', 'athemes-blocks' ), value: 'boxed' },
												{ label: __( 'Custom', 'athemes-blocks' ), value: 'custom' },
											]}
											responsive={false}
											reset={true}
											onChange={ ( value ) => {
												updateAttribute( 'containerWidth', {
													value: value
												}, 'desktop' );

												setUpdateCss( { settingId: 'containerWidth', value: value } );
											} }
											onClickReset={ () => {
												updateAttribute( 'containerWidth', {
													value: getSettingDefaultValue( 'containerWidth', 'desktop', attributesDefaults )
												}, 'desktop' );
												
												setUpdateCss( { settingId: 'containerWidth', value: getSettingDefaultValue( 'containerWidth', 'desktop', attributesDefaults ) } );
											} }
										/>
									) 
								}
								{
									containerWidth === 'full-width' && (
										<>
											<RadioButtons 
												label={ __( 'Content Width', 'athemes-blocks' ) }
												defaultValue={ contentWidth }
												options={[
													{ label: __( 'Boxed', 'athemes-blocks' ), value: 'boxed' },
													{ label: __( 'Full Width', 'athemes-blocks' ), value: 'full-width' },
												]}
												responsive={false}
												reset={true}
												onChange={ ( value ) => {
													updateAttribute( 'contentWidth', {
														value: value
													}, 'desktop' );

													setUpdateCss( { settingId: 'contentWidth', value: value } );
												} }
												onClickReset={ () => {
													updateAttribute( 'contentWidth', {
														value: getSettingDefaultValue( 'contentWidth', 'desktop', attributesDefaults )
													}, 'desktop' );
													
													setUpdateCss( { settingId: 'contentWidth', value: getSettingDefaultValue( 'contentWidth', 'desktop', attributesDefaults ) } );
												} }
											/>
											{
												contentWidth === 'boxed' && (
													<RangeSlider 
														label={ __( 'Content Box Width', 'athemes-blocks' ) }
														defaultValue={ contentBoxWidth }
														defaultUnit={ getSettingUnit( 'contentBoxWidth', currentDevice, atts ) }
														min={ 10 }
														max={ 2000 }
														responsive={ true }
														reset={ true }
														units={['px', '%', 'vw']}
														onChange={ ( value ) => {
															updateAttribute( 'contentBoxWidth', {
																value: value,
																unit: getSettingUnit( 'contentBoxWidth', currentDevice, atts )
															}, currentDevice );

															setUpdateCss( { settingId: 'contentBoxWidth', value: value } );
														} }
														onChangeUnit={ ( value ) => {
															updateAttribute( 'contentBoxWidth', {
																value: contentBoxWidth,
																unit: value,
															}, currentDevice );

															setUpdateCss( { settingId: 'contentBoxWidth', value: value } );								
														} }
														onClickReset={ () => {
															updateAttribute( 'contentBoxWidth', {
																value: getSettingDefaultValue( 'contentBoxWidth', currentDevice, attributesDefaults ),
																unit: getSettingDefaultUnit( 'contentBoxWidth', currentDevice, attributesDefaults )
															}, currentDevice );							

															setUpdateCss( { settingId: 'contentBoxWidth', value: getSettingDefaultValue( 'contentBoxWidth', currentDevice, attributesDefaults ) } );								
														} }
													/>
												)
											}
										</>
									)
								}
								{
									containerWidth === 'custom' && (
										<RangeSlider 
											label={ __( 'Custom Width', 'athemes-blocks' ) }
											defaultValue={ customWidth }
											defaultUnit={ getSettingUnit( 'customWidth', currentDevice, atts ) }
											min={ 0 }
											max={ 2000 }
											responsive={ true }
											reset={ true }
											units={['px', '%', 'vw']}
											onChange={ ( value ) => {
												updateAttribute( 'customWidth', {
													value: value,
													unit: getSettingUnit( 'customWidth', currentDevice, atts )
												}, currentDevice );

												setUpdateCss( { settingId: 'customWidth', value: value } );
											} }
											onChangeUnit={ ( value ) => {
												updateAttribute( 'customWidth', {
													value: customWidth,
													unit: value,
												}, currentDevice );

												setUpdateCss( { settingId: 'customWidth', value: value } );								
											} }
											onClickReset={ () => {
												updateAttribute( 'customWidth', {
													value: getSettingDefaultValue( 'customWidth', currentDevice, attributesDefaults ),
													unit: getSettingDefaultUnit( 'customWidth', currentDevice, attributesDefaults )
												}, currentDevice );							

												setUpdateCss( { settingId: 'customWidth', value: getSettingDefaultValue( 'customWidth', currentDevice, attributesDefaults ) } );								
											} }
										/>
									)
								}
								<RangeSlider 
									label={ __( 'Minimum Height', 'athemes-blocks' ) }
									defaultValue={ minHeight }
									defaultUnit={ getSettingUnit( 'minHeight', currentDevice, atts ) }
									min={ 10 }
									max={ 200 }
									responsive={ true }
									reset={ true }
									units={['px', 'vh']}
									onChange={ ( value ) => {
										updateAttribute( 'minHeight', {
											value: value,
											unit: getSettingUnit( 'minHeight', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'minHeight', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'minHeight', {
											value: minHeight,
											unit: value,
										}, currentDevice );

										setUpdateCss( { settingId: 'minHeight', value: value } );								
									} }
									onClickReset={ () => {
										updateAttribute( 'minHeight', {
											value: getSettingDefaultValue( 'minHeight', currentDevice, attributesDefaults ),
											unit: getSettingDefaultUnit( 'minHeight', currentDevice, attributesDefaults )
										}, currentDevice );							

										setUpdateCss( { settingId: 'minHeight', value: getSettingDefaultValue( 'minHeight', currentDevice, attributesDefaults ) } );								
									} }
								/>
								<SwitchToggle
									label={ __( 'Equal Height', 'athemes-blocks' ) }
									value={ equalHeight }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'equalHeight', {
											value: value
										}, 'desktop' );
									} }
									onClickReset={ () => {
										updateAttribute( 'equalHeight', {
											value: getSettingDefaultValue( 'equalHeight', 'desktop', attributesDefaults )
										}, 'desktop' );
									} }
								/>
								<Select
									label={ __( 'HTML Tag', 'athemes-blocks' ) }
									options={[
										{ label: __( 'Div', 'athemes-blocks' ), value: 'div' },
										{ label: __( 'Header', 'athemes-blocks' ), value: 'header' },
										{ label: __( 'Footer', 'athemes-blocks' ), value: 'footer' },
										{ label: __( 'Main', 'athemes-blocks' ), value: 'main' },
										{ label: __( 'Article', 'athemes-blocks' ), value: 'article' },
										{ label: __( 'Section', 'athemes-blocks' ), value: 'section' },
										{ label: __( 'Aside', 'athemes-blocks' ), value: 'aside' },
										{ label: __( 'Figure', 'athemes-blocks' ), value: 'figure' },
										{ label: __( 'Figcaption', 'athemes-blocks' ), value: 'figcaption' },
										{ label: __( 'Summary', 'athemes-blocks' ), value: 'summary' },
										{ label: __( 'Nav', 'athemes-blocks' ), value: 'nav' },
										{ label: __( 'Link', 'athemes-blocks' ), value: 'a' },
									]}
									value={ htmlTag }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'htmlTag', {
											value: value,
										}, 'desktop' );

										setUpdateCss( { settingId: 'htmlTag', value: value } );										
									} }
									onClickReset={ () => {
										updateAttribute( 'htmlTag', {
											value: getSettingDefaultValue( 'htmlTag', 'desktop', attributesDefaults )
										}, 'desktop' );

										setUpdateCss( { settingId: 'htmlTag', value: getSettingDefaultValue( 'htmlTag', 'desktop', attributesDefaults ) } );
									} }
								/>
								{
									htmlTag === 'a' && (
										<>
											<TextInput
												label={ __( 'Link', 'athemes-blocks' ) }
												value={ htmlTagLink }
												responsive={false}
												reset={true}
												onChange={ ( value ) => {
													updateAttribute( 'htmlTagLink', {
														value: value
													}, 'desktop' );
												} }
												onClickReset={ () => {
													updateAttribute( 'htmlTagLink', {
														value: getSettingDefaultValue( 'htmlTagLink', 'desktop', attributesDefaults )
													}, 'desktop' );
												} }
											/>
											<SwitchToggle
												label={ __( 'Open in new window', 'athemes-blocks' ) }
												value={ htmlTagLinkOpenInNewWindow }
												responsive={false}
												reset={true}
												onChange={ ( value ) => {
													updateAttribute( 'htmlTagLinkOpenInNewWindow', {
														value: value
													}, 'desktop' );
												} }
												onClickReset={ () => {
													updateAttribute( 'htmlTagLinkOpenInNewWindow', {
														value: getSettingDefaultValue( 'htmlTagLinkOpenInNewWindow', 'desktop', attributesDefaults )
													}, 'desktop' );
												} }
											/>
										</>
									)
								}
								<RadioButtons 
									label={ __( 'Overflow', 'athemes-blocks' ) }
									defaultValue={ overflow }
									options={[
										{ label: __( 'Visible', 'athemes-blocks' ), value: 'visible' },
										{ label: __( 'Hidden', 'athemes-blocks' ), value: 'hidden' },
										{ label: __( 'Auto', 'athemes-blocks' ), value: 'auto' },
									]}
									responsive={ true }
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'overflow', {
											value: value
										}, currentDevice );

										setUpdateCss( { settingId: 'overflow', value: value } );
									} }
									onClickReset={ () => {
										updateAttribute( 'overflow', {
											value: getSettingDefaultValue( 'overflow', currentDevice, attributesDefaults )
										}, currentDevice );
										
										setUpdateCss( { settingId: 'overflow', value: getSettingDefaultValue( 'overflow', currentDevice, attributesDefaults ) } );
									} }
								/>
							</PanelBody>
							<PanelBody title={ __( 'Layout', 'botiga-pro' ) } initialOpen={ false }>
								<RadioButtons 
									label={ __( 'Layout', 'athemes-blocks' ) }
									defaultValue={ layout }
									options={[
										{ label: __( 'Flex', 'athemes-blocks' ), value: 'flex' },
										{ label: __( 'Grid', 'athemes-blocks' ), value: 'grid' },
									]}
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'layout', {
											value: value
										}, currentDevice );

										setUpdateCss( { settingId: 'layout', value: value } );
									} }
									onClickReset={ () => {
										updateAttribute( 'layout', {
											value: getSettingDefaultValue( 'layout', currentDevice, attributesDefaults )
										}, currentDevice );
										
										setUpdateCss( { settingId: 'layout', value: getSettingDefaultValue( 'layout', currentDevice, attributesDefaults ) } );
									} }
								/>
								<RadioButtons 
									label={ __( 'Direction', 'athemes-blocks' ) }
									defaultValue={ direction }
									options={[
										{ label: __( 'Row', 'athemes-blocks' ), value: 'row' },
										{ label: __( 'Column', 'athemes-blocks' ), value: 'column' },
										{ label: __( 'Row Reverse', 'athemes-blocks' ), value: 'row-reverse' },
										{ label: __( 'Column Reverse', 'athemes-blocks' ), value: 'column-reverse' },
									]}
									responsive={true}
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'direction', {
											value: value
										}, currentDevice );

										setUpdateCss( { settingId: 'direction', value: value } );
									} }
									onClickReset={ () => {
										updateAttribute( 'direction', {
											value: getSettingDefaultValue( 'direction', currentDevice, attributesDefaults )
										}, currentDevice );
										
										setUpdateCss( { settingId: 'direction', value: getSettingDefaultValue( 'direction', currentDevice, attributesDefaults ) } );
									} }
								/>
								<RadioButtons 
									label={ __( 'Children Width', 'athemes-blocks' ) }
									defaultValue={ childrenWidth }
									options={[
										{ label: __( 'Auto', 'athemes-blocks' ), value: 'auto' },
										{ label: __( 'Equal', 'athemes-blocks' ), value: 'equal' },
									]}
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'childrenWidth', {
											value: value
										}, currentDevice );

										setUpdateCss( { settingId: 'childrenWidth', value: value } );
									} }
									onClickReset={ () => {
										updateAttribute( 'childrenWidth', {
											value: getSettingDefaultValue( 'childrenWidth', currentDevice, attributesDefaults )
										}, currentDevice );
										
										setUpdateCss( { settingId: 'childrenWidth', value: getSettingDefaultValue( 'childrenWidth', currentDevice, attributesDefaults ) } );
									} }
								/>
								<RadioButtons 
									label={ __( 'Align Items', 'athemes-blocks' ) }
									defaultValue={ alignItems }
									options={[
										{ label: __( 'Flex Start', 'athemes-blocks' ), value: 'flex-start' },
										{ label: __( 'Center', 'athemes-blocks' ), value: 'center' },
										{ label: __( 'Flex End', 'athemes-blocks' ), value: 'flex-end' },
										{ label: __( 'Stretch', 'athemes-blocks' ), value: 'stretch' },
									]}
									responsive={true}
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'alignItems', {
											value: value
										}, currentDevice );

										setUpdateCss( { settingId: 'alignItems', value: value } );
									} }
									onClickReset={ () => {
										updateAttribute( 'alignItems', {
											value: getSettingDefaultValue( 'alignItems', currentDevice, attributesDefaults )
										}, currentDevice );
										
										setUpdateCss( { settingId: 'alignItems', value: getSettingDefaultValue( 'alignItems', currentDevice, attributesDefaults ) } );
									} }
								/>
								<RadioButtons 
									label={ __( 'Justify Content', 'athemes-blocks' ) }
									defaultValue={ justifyContent }
									options={[
										{ label: __( 'Flex Start', 'athemes-blocks' ), value: 'flex-start' },
										{ label: __( 'Center', 'athemes-blocks' ), value: 'center' },
										{ label: __( 'Flex End', 'athemes-blocks' ), value: 'flex-end' },
										{ label: __( 'Space Between', 'athemes-blocks' ), value: 'space-between' },
										{ label: __( 'Space Around', 'athemes-blocks' ), value: 'space-around' },
										{ label: __( 'Space Evenly', 'athemes-blocks' ), value: 'space-evenly' },
									]}
									responsive={true}
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'justifyContent', {
											value: value
										}, currentDevice );

										setUpdateCss( { settingId: 'justifyContent', value: value } );
									} }
									onClickReset={ () => {
										updateAttribute( 'justifyContent', {
											value: getSettingDefaultValue( 'justifyContent', currentDevice, attributesDefaults )
										}, currentDevice );
										
										setUpdateCss( { settingId: 'justifyContent', value: getSettingDefaultValue( 'justifyContent', currentDevice, attributesDefaults ) } );
									} }
								/>
								<RadioButtons 
									label={ __( 'Wrap', 'athemes-blocks' ) }
									defaultValue={ wrap }
									options={[
										{ label: __( 'Wrap', 'athemes-blocks' ), value: 'wrap' },
										{ label: __( 'No Wrap', 'athemes-blocks' ), value: 'nowrap' },
										{ label: __( 'Wrap Reverse', 'athemes-blocks' ), value: 'wrap-reverse' },
									]}
									responsive={true}
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'wrap', {
											value: value
										}, currentDevice );

										setUpdateCss( { settingId: 'wrap', value: value } );
									} }
									onClickReset={ () => {
										updateAttribute( 'wrap', {
											value: getSettingDefaultValue( 'wrap', currentDevice, attributesDefaults )
										}, currentDevice );
										
										setUpdateCss( { settingId: 'wrap', value: getSettingDefaultValue( 'wrap', currentDevice, attributesDefaults ) } );
									} }
								/>
								{
									wrap !== 'nowrap' && (
										<RadioButtons 
											label={ __( 'Align Content', 'athemes-blocks' ) }
											defaultValue={ alignContent }
											options={[
												{ label: __( 'Flex Start', 'athemes-blocks' ), value: 'flex-start' },
												{ label: __( 'Center', 'athemes-blocks' ), value: 'center' },
												{ label: __( 'Flex End', 'athemes-blocks' ), value: 'flex-end' },
												{ label: __( 'Space Between', 'athemes-blocks' ), value: 'space-between' },
												{ label: __( 'Space Around', 'athemes-blocks' ), value: 'space-around' },
												{ label: __( 'Space Evenly', 'athemes-blocks' ), value: 'space-evenly' },
											]}
											responsive={true}
											reset={true}
											onChange={ ( value ) => {
												updateAttribute( 'alignContent', {
													value: value
												}, currentDevice );

												setUpdateCss( { settingId: 'alignContent', value: value } );
											} }
											onClickReset={ () => {
												updateAttribute( 'alignContent', {
													value: getSettingDefaultValue( 'alignContent', currentDevice, attributesDefaults )
												}, currentDevice );
												
												setUpdateCss( { settingId: 'alignContent', value: getSettingDefaultValue( 'alignContent', currentDevice, attributesDefaults ) } );
											} }
										/>
									)
								}
							</PanelBody>
						</Panel>
					)
				}
			</InspectorControls>
			
			{(() => {
				const Tag = htmlTag;
				let blockPropsClassName = `at-block at-block-flex-container at-block-flex-container--container-${containerWidth}`;

				if ( layout === 'flex' && childrenWidth === 'equal' ) {
					blockPropsClassName += ' at-block-flex-container--children-w-equal';
				} else if ( layout === 'flex' && childrenWidth === 'auto' ) {
					blockPropsClassName += ' at-block-flex-container--children-w-auto';
				}

				const blockProps = useBlockProps({
					className: blockPropsClassName
				});

				// Add link properties if the tag is 'a'.
				if (htmlTag === 'a' && htmlTagLink) {
					blockProps.href = htmlTagLink;
					
					if (htmlTagLinkOpenInNewWindow) {
						blockProps.target = '_blank';
					}
				}
				
				return (
					<Tag { ...blockProps }>
						{
							// Full width container with boxed content.
							containerWidth === 'full-width' && contentWidth === 'boxed' ? (
								<div class="at-block-flex-container__inner-blocks-wrapper">
									{innerBlocks}
								</div>
							) : (
								innerBlocks
							)
						}
					</Tag>
				);
			})()}
		</>
	);
}