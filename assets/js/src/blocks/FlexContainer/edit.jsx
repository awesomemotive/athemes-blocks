import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from "@wordpress/data";
import { Panel, PanelBody, BaseControl, SelectControl } from '@wordpress/components';
import { InspectorControls, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { RadioButtons } from '../../block-editor/controls/radio-buttons/radio-buttons';
import { RangeSlider } from '../../block-editor/controls/range-slider/range-slider';
import { Select } from '../../block-editor/controls/select/select';
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
		<div>
		
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
								<RadioButtons 
									label={ __( 'Container Width', 'athemes-blocks' ) }
									defaultValue={ getSettingValue( 'containerWidth', currentDevice, atts ) }
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
								{
									atts.containerWidth.desktop.value === 'full-width' && (
										<>
											<RadioButtons 
												label={ __( 'Content Width', 'athemes-blocks' ) }
												defaultValue={ getSettingValue( 'contentWidth', currentDevice, atts ) }
												options={[
													{ label: __( 'Boxed', 'athemes-blocks' ), value: 'boxed' },
													{ label: __( 'Full Width', 'athemes-blocks' ), value: 'full-width' },
												]}
												responsive={ true }
												reset={true}
												onChange={ ( value ) => {
													updateAttribute( 'contentWidth', {
														value: value
													}, currentDevice );

													setUpdateCss( { settingId: 'contentWidth', value: value } );
												} }
												onClickReset={ () => {
													updateAttribute( 'contentWidth', {
														value: getSettingDefaultValue( 'contentWidth', currentDevice, attributesDefaults )
													}, currentDevice );
													
													setUpdateCss( { settingId: 'contentWidth', value: getSettingDefaultValue( 'contentWidth', currentDevice, attributesDefaults ) } );
												} }
											/>
											<RangeSlider 
												label={ __( 'Content Box Width', 'athemes-blocks' ) }
												defaultValue={ getSettingValue( 'contentBoxWidth', currentDevice, atts ) }
												defaultUnit={ getSettingUnit( 'contentBoxWidth', currentDevice, atts ) }
												min={ 10 }
												max={ 200 }
												responsive={ true }
												reset={ true }
												units={['px', 'em', 'rem']}
												onChange={ ( value ) => {
													updateAttribute( 'contentBoxWidth', {
														value: value,
														unit: getSettingUnit( 'contentBoxWidth', currentDevice, atts )
													}, currentDevice );

													setUpdateCss( { settingId: 'contentBoxWidth', value: value } );
												} }
												onChangeUnit={ ( value ) => {
													updateAttribute( 'contentBoxWidth', {
														value: getSettingValue( 'contentBoxWidth', currentDevice, atts ),
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
										</>
									)
								}
								<RangeSlider 
									label={ __( 'Minimum Height', 'athemes-blocks' ) }
									defaultValue={ getSettingValue( 'minHeight', currentDevice, atts ) }
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
											value: getSettingValue( 'minHeight', currentDevice, atts ),
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
									value={ getSettingValue( 'equalHeight', currentDevice, atts ) }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'equalHeight', {
											value: value
										}, currentDevice );
									} }
									onClickReset={ () => {
										updateAttribute( 'equalHeight', {
											value: getSettingDefaultValue( 'equalHeight', currentDevice, attributesDefaults )
										}, currentDevice );
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
										{ label: __( 'Link', 'athemes-blocks' ), value: 'link' },
									]}
									value={ getSettingValue( 'htmlTag', currentDevice, atts ) }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'htmlTag', {
											value: value,
										}, currentDevice );

										setUpdateCss( { settingId: 'htmlTag', value: value } );										
									} }
									onClickReset={ () => {
										updateAttribute( 'htmlTag', {
											value: getSettingDefaultValue( 'htmlTag', currentDevice, attributesDefaults )
										}, currentDevice );

										setUpdateCss( { settingId: 'htmlTag', value: getSettingDefaultValue( 'htmlTag', currentDevice, attributesDefaults ) } );
									} }
								/>
								<RadioButtons 
									label={ __( 'Overflow', 'athemes-blocks' ) }
									defaultValue={ getSettingValue( 'overflow', currentDevice, atts ) }
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
									defaultValue={ getSettingValue( 'layout', currentDevice, atts ) }
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
									defaultValue={ getSettingValue( 'direction', currentDevice, atts ) }
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
									defaultValue={ getSettingValue( 'childrenWidth', currentDevice, atts ) }
									options={[
										{ label: __( 'Auto', 'athemes-blocks' ), value: 'auto' },
										{ label: __( 'Full', 'athemes-blocks' ), value: 'full' },
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
									defaultValue={ getSettingValue( 'alignItems', currentDevice, atts ) }
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
									defaultValue={ getSettingValue( 'justifyContent', currentDevice, atts ) }
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
									defaultValue={ getSettingValue( 'wrap', currentDevice, atts ) }
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
							</PanelBody>
						</Panel>
					)
				}
			</InspectorControls>
			
			<div class="at-block" { ...useBlockProps() }>
				{
					atts.containerWidth.desktop.value === 'boxed' ? (
						<InnerBlocks
							templateLock={ false }
							renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
						/>
					) : atts.containerWidth.desktop.value === 'custom' ? (
						<div class="at-block-flex-container__inner-blocks-wrapper">
							<InnerBlocks
								templateLock={ false }
								renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
							/>
						</div>
					) : (
						<div class="at-block-flex-container__inner-blocks-wrapper">
							<InnerBlocks
								templateLock={ false }
								renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
							/>
						</div>
					)
				}
			</div>

		</div>
	);
}