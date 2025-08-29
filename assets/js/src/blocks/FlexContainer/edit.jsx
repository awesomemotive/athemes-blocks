import { __ } from '@wordpress/i18n';
import { useEffect, useMemo, useRef, useState } from '@wordpress/element';
import { useSelect, useDispatch } from "@wordpress/data";
import { Panel, PanelBody } from '@wordpress/components';
import { InspectorControls, useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useMergeRefs } from '@wordpress/compose';

import { store as persistentTabsStore } from '../../block-editor/store/persistent-tabs-store';

import { RadioButtons } from '../../block-editor/controls/radio-buttons/radio-buttons';
import { RangeSlider } from '../../block-editor/controls/range-slider/range-slider';
import { Select } from '../../block-editor/controls/select/select';
import { TextInput } from '../../block-editor/controls/text-input/text-input';
import { SwitchToggle } from '../../block-editor/controls/switch-toggle/switch-toggle';
import { ColorPicker } from '../../block-editor/controls/color-picker/color-picker';
import { Border } from '../../block-editor/controls/border/border';
import { ColorPickerAdvanced } from '../../block-editor/controls/color-picker-advanced/color-picker-advanced';

import { createAttributeUpdater } from '../../utils/block-attributes';
import { withTabsNavigation } from '../../block-editor/hoc/with-tabs-navigation';
import { withAdvancedTab } from '../../block-editor/hoc/with-advanced-tab';
import { withDynamicCSS } from '../../block-editor/hoc/with-dynamic-css';
import { withPersistentPanelToggle } from '../../block-editor/hoc/with-persistent-panel-toggle';

import { blockPropsWithAnimation } from '../../utils/block-animations';
import { getSettingValue, getSettingUnit, getSettingDefaultValue, getSettingDefaultUnit, getInnerSettingValue, getColorPickerSettingDefaultValue, getColorPickerSettingValue } from '../../utils/settings';

import LayoutSelector from './layout-selector';

import { icons } from '../../utils/icons';

const attributesDefaults = FlexContainerBlockData.attributes;

const Edit = (props) => {
	const { attributes, setAttributes, clientId, setUpdateCss, isPanelOpened, onTogglePanelBodyHandler } = props;
	const atts = attributes;
	const updateAttribute = createAttributeUpdater(attributes, setAttributes);
	const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());
	const currentTab = useSelect((select) => select('persistent-tabs-store').getCurrentTab());
	const { switchTabTo } = useDispatch(persistentTabsStore);


	const [selectedLayout, setSelectedLayout] = useState(null);
	
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

	// Remove some attributes when it is a child block from a flex-container block (nested flex-container).
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

	// Check if has inner blocks.
	const hasInnerBlocks = useSelect((select) => {
		const { getBlockCount } = select('core/block-editor');

		return getBlockCount(clientId) > 0;
	}, [clientId]);

	const handleLayoutSelect = (layout) => {
		Object.entries(layout.attributes).forEach(([key, value]) => {
			setAttributes({
				[key]: value
			});
		});

		setSelectedLayout(layout);
	};

	const {

		// General - Type settings.
		containerWidth,
		contentWidth,
		contentBoxWidth,
		customWidth,
		minHeight,
		htmlTag,
		htmlTagLink,
		htmlTagLinkOpenInNewWindow,
		overflow,

		// General - Layout settings.
		layout,
		layoutGridColumns,
		direction,
		columnsGap,
		rowsGap,
		childrenWidth,
		alignItems,
		justifyItems,
		justifyContent,
		wrap,
		alignContent,

		// Style.
		textColor,
		linkColor,

		// Advanced.
		hideOnDesktop,
		hideOnTablet,
		hideOnMobile,
	} = useMemo(() => {
		return {

			// General - Type settings.
			containerWidth: getSettingValue('containerWidth', 'desktop', atts),
			contentWidth: getSettingValue('contentWidth', 'desktop', atts),
			contentBoxWidth: getSettingValue('contentBoxWidth', currentDevice, atts),
			customWidth: getSettingValue('customWidth', currentDevice, atts),
			minHeight: getSettingValue('minHeight', currentDevice, atts),
			htmlTag: getSettingValue('htmlTag', 'desktop', atts),
			htmlTagLink: getSettingValue('htmlTagLink', 'desktop', atts),
			htmlTagLinkOpenInNewWindow: getSettingValue('htmlTagLinkOpenInNewWindow', 'desktop', atts),
			overflow: getSettingValue('overflow', currentDevice, atts),

			// General - Layout settings.
			layout: getSettingValue('layout', 'desktop', atts),
			layoutGridColumns: getSettingValue('layoutGridColumns', currentDevice, atts),
			direction: getSettingValue('direction', currentDevice, atts),
			columnsGap: getSettingValue('columnsGap', currentDevice, atts),
			rowsGap: getSettingValue('rowsGap', currentDevice, atts),
			childrenWidth: getSettingValue('childrenWidth', 'desktop', atts),
			alignItems: getSettingValue('alignItems', currentDevice, atts),
			justifyItems: getSettingValue('justifyItems', currentDevice, atts),
			justifyContent: getSettingValue('justifyContent', currentDevice, atts),
			wrap: getSettingValue('wrap', currentDevice, atts),
			alignContent: getSettingValue('alignContent', currentDevice, atts),

			// Style.
			textColor: getSettingValue('textColor', 'desktop', atts),
			linkColor: getSettingValue('linkColor', 'desktop', atts),

			// Advanced.
			hideOnDesktop: getSettingValue('hideOnDesktop', 'desktop', atts),
			hideOnTablet: getSettingValue('hideOnTablet', 'desktop', atts),
			hideOnMobile: getSettingValue('hideOnMobile', 'desktop', atts),
		};
	}, [atts, currentDevice]);

	// Save the Client ID to attributes.
	useEffect(() => {
		setAttributes({ clientId: clientId });
	}, [clientId]);

	// useEffect(() => {
	// 	if ( isChildOfFlexContainer ) {
	// 		setAttributes({
	// 			direction: {
	// 				desktop: { value: 'column' },
	// 				tablet: { value: 'column' },
	// 				mobile: { value: 'column' }
	// 			}
	// 		});
	// 	}
	// }, []);

	// Move renderAppender outside the render cycle.
	const renderAppender = () => hasInnerBlocks ? <InnerBlocks.DefaultBlockAppender /> : <InnerBlocks.ButtonBlockAppender />;

	const innerBlocks = useMemo(
		() => {
			return (
				<InnerBlocks
					template={selectedLayout?.template || []}
					templateLock={false}
					renderAppender={renderAppender}
					orientation={ isChildOfFlexContainer && direction === 'column' ? 'vertical' : 'horizontal' }
					prioritizedInserterBlocks={['athemes-blocks/flex-container']}
				/>
			);
		},
		[renderAppender, selectedLayout]
	);

	// Prevent the default click event handler for the block if the html tag is 'a'.
	const blockRef = useRef(null);

	useEffect(() => {
		if ( blockRef === null ) {
			return;
		}
		
		if (htmlTag === 'a' && blockRef.current) {
			const handleClick = (event) => {
				event.preventDefault();
			};

			if ( blockRef.current ) {
				blockRef.current.addEventListener('click', handleClick);
			}

			return () => {
				if ( blockRef.current ) {
					blockRef.current.removeEventListener('click', handleClick);
				}
			};
		}
	}, [htmlTag]);

	if ( !hasInnerBlocks && !selectedLayout && !isChildOfFlexContainer ) {
		switchTabTo('general');
	}

	return (
		<>
			<InspectorControls>
				{
					currentTab === 'general' && (
						<Panel>
							<PanelBody 
								title={ __( 'Type', 'botiga-pro' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'type' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'type' ) }
							>
								{
									isChildOfFlexContainer === false && (
										<RadioButtons 
											label={ __( 'Container Width', 'athemes-blocks' ) }
											defaultValue={ containerWidth }
											options={[
												{ label: __( 'Full', 'athemes-blocks' ), value: 'full-width' },
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
									( containerWidth === 'custom' ) && (
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
									min={ 0 }
									max={{
										px: 1000,
										vh: 100,
									}}
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
							<PanelBody 
								title={ __( 'Layout', 'botiga-pro' ) } 
								initialOpen={false} 
								opened={ isPanelOpened( 'layout' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'layout' ) }
							>
								<RadioButtons 
									label={ __( 'Layout', 'athemes-blocks' ) }
									defaultValue={ layout }
									options={[
										{ label: __( 'Flex', 'athemes-blocks' ), value: 'flex' },
										{ label: __( 'Grid', 'athemes-blocks' ), value: 'grid' },
									]}
									responsive={false}
									reset={true}
									hidden={false}
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
								{
									layout === 'grid' && (
										<RangeSlider 
											label={ __( 'Columns', 'athemes-blocks' ) }
											defaultValue={ layoutGridColumns }
											defaultUnit={ getSettingUnit( 'layoutGridColumns', currentDevice, atts ) }
											min={ 1 }
											max={ 12 }
											responsive={ true }
											reset={ true }
											units={false}
											onChange={ ( value ) => {
												updateAttribute( 'layoutGridColumns', {
													value: value,
												}, currentDevice );

												setUpdateCss( { settingId: 'layoutGridColumns', value: value } );
											} }
											onChangeUnit={ ( value ) => {
												updateAttribute( 'layoutGridColumns', {
													value: layoutGridColumns,
												}, currentDevice );

												setUpdateCss( { settingId: 'layoutGridColumns', value: value } );
											} }
											onClickReset={ () => {
												updateAttribute( 'layoutGridColumns', {
													value: getSettingDefaultValue( 'layoutGridColumns', currentDevice, attributesDefaults ),
												}, currentDevice );							

												setUpdateCss( { settingId: 'layoutGridColumns', value: getSettingDefaultValue( 'layoutGridColumns', currentDevice, attributesDefaults ) } );
											} }
										/>		
									)
								}
								{
									layout === 'flex' && (
										<RadioButtons 
											label={ __( 'Direction', 'athemes-blocks' ) }
											defaultValue={ direction }
											options={[
												{ label: __( 'Row', 'athemes-blocks' ), value: 'row', icon: icons.arrowRight },
												{ label: __( 'Column', 'athemes-blocks' ), value: 'column', icon: icons.arrowDown },
												{ label: __( 'Row Reverse', 'athemes-blocks' ), value: 'row-reverse', icon: icons.arrowLeft },
												{ label: __( 'Column Reverse', 'athemes-blocks' ), value: 'column-reverse', icon: icons.arrowUp },
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
									)
								}
								<RangeSlider 
									label={ __( 'Columns Gap', 'athemes-blocks' ) }
									defaultValue={ columnsGap }
									defaultUnit={ getSettingUnit( 'columnsGap', currentDevice, atts ) }
									min={ 0 }
									max={ 200 }
									responsive={ true }
									reset={ true }
									units={['px', '%', 'vw']}
									onChange={ ( value ) => {
										updateAttribute( 'columnsGap', {
											value: value,
											unit: getSettingUnit( 'columnsGap', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'columnsGap', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'columnsGap', {
											value: columnsGap,
											unit: value,
										}, currentDevice );

										setUpdateCss( { settingId: 'columnsGap', value: value } );								
									} }
									onClickReset={ () => {
										updateAttribute( 'columnsGap', {
											value: getSettingDefaultValue( 'columnsGap', currentDevice, attributesDefaults ),
											unit: getSettingDefaultUnit( 'columnsGap', currentDevice, attributesDefaults )
										}, currentDevice );							

										setUpdateCss( { settingId: 'columnsGap', value: getSettingDefaultValue( 'columnsGap', currentDevice, attributesDefaults ) } );								
									} }
								/>
								<RangeSlider 
									label={ __( 'Rows Gap', 'athemes-blocks' ) }
									defaultValue={ rowsGap }
									defaultUnit={ getSettingUnit( 'rowsGap', currentDevice, atts ) }
									min={ 0 }
									max={ 200 }
									responsive={ true }
									reset={ true }
									units={['px', '%', 'vw']}
									onChange={ ( value ) => {
										updateAttribute( 'rowsGap', {
											value: value,
											unit: getSettingUnit( 'rowsGap', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'rowsGap', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'rowsGap', {
											value: rowsGap,
											unit: value,
										}, currentDevice );

										setUpdateCss( { settingId: 'rowsGap', value: value } );								
									} }
									onClickReset={ () => {
										updateAttribute( 'rowsGap', {
											value: getSettingDefaultValue( 'rowsGap', currentDevice, attributesDefaults ),
											unit: getSettingDefaultUnit( 'rowsGap', currentDevice, attributesDefaults )
										}, currentDevice );							

										setUpdateCss( { settingId: 'rowsGap', value: getSettingDefaultValue( 'rowsGap', currentDevice, attributesDefaults ) } );								
									} }
								/>
								{
									layout === 'flex' && (
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
									)
								}
								<RadioButtons 
									label={ __( 'Align Items', 'athemes-blocks' ) }
									defaultValue={ alignItems }
									options={[
										{ label: __( 'Flex Start', 'athemes-blocks' ), value: 'flex-start', icon: icons.alignTop },
										{ label: __( 'Center', 'athemes-blocks' ), value: 'center', icon: icons.alignMiddle },
										{ label: __( 'Flex End', 'athemes-blocks' ), value: 'flex-end', icon: icons.alignBottom },
										{ label: __( 'Stretch', 'athemes-blocks' ), value: 'stretch', icon: icons.stretchVertical },
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
								{
									layout === 'grid' && (
										<RadioButtons 
											label={ __( 'Justify Items', 'athemes-blocks' ) }
											defaultValue={ justifyItems }
											options={[
												{ label: __( 'Start', 'athemes-blocks' ), value: 'start', icon: icons.alignLeft },
												{ label: __( 'Center', 'athemes-blocks' ), value: 'center', icon: icons.alignCenter },
												{ label: __( 'End', 'athemes-blocks' ), value: 'end', icon: icons.alignRight },
												{ label: __( 'Stretch', 'athemes-blocks' ), value: 'stretch', icon: icons.stretchHorizontal },
											]}
											responsive={true}
											reset={true}
											onChange={ ( value ) => {
												updateAttribute( 'justifyItems', {
													value: value
												}, currentDevice );

												setUpdateCss( { settingId: 'justifyItems', value: value } );
											} }
											onClickReset={ () => {
												updateAttribute( 'justifyItems', {
													value: getSettingDefaultValue( 'justifyItems', currentDevice, attributesDefaults )
												}, currentDevice );
												
												setUpdateCss( { settingId: 'justifyItems', value: getSettingDefaultValue( 'justifyItems', currentDevice, attributesDefaults ) } );
											} }
										/>
									)
								}
								{
									layout === 'flex' && (
										<RadioButtons 
											label={ __( 'Justify Content', 'athemes-blocks' ) }
											defaultValue={ justifyContent }
											options={[
												{ label: __( 'Flex Start', 'athemes-blocks' ), value: 'flex-start', icon: icons.alignTop },
												{ label: __( 'Center', 'athemes-blocks' ), value: 'center', icon: icons.alignMiddle },
												{ label: __( 'Flex End', 'athemes-blocks' ), value: 'flex-end', icon: icons.alignBottom },
												{ label: __( 'Space Between', 'athemes-blocks' ), value: 'space-between', icon: icons.spaceBetween },
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
									)
								}
								{
									layout === 'flex' && (
										<RadioButtons 
											label={ __( 'Wrap', 'athemes-blocks' ) }
											defaultValue={ wrap }
											options={[
												{ label: __( 'Wrap', 'athemes-blocks' ), value: 'wrap', icon: icons.arrowDown },
												{ label: __( 'No Wrap', 'athemes-blocks' ), value: 'nowrap', icon: icons.arrowRight },
												{ label: __( 'Wrap Reverse', 'athemes-blocks' ), value: 'wrap-reverse', icon: icons.arrowUp },
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
									)
								}
								{
									( wrap !== 'nowrap' && layout === 'flex' ) && (
										<RadioButtons 
											label={ __( 'Align Content', 'athemes-blocks' ) }
											defaultValue={ alignContent }
											options={[
												{ label: __( 'Flex Start', 'athemes-blocks' ), value: 'flex-start', icon: icons.alignTop },
												{ label: __( 'Center', 'athemes-blocks' ), value: 'center', icon: icons.alignMiddle },
												{ label: __( 'Flex End', 'athemes-blocks' ), value: 'flex-end', icon: icons.alignBottom },
												{ label: __( 'Space Between', 'athemes-blocks' ), value: 'space-between', icon: icons.spaceBetween },
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
				{
					currentTab === 'style' && (
						<Panel>
							<PanelBody 
								title={ __( 'Background', 'botiga-pro' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'background' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'background' ) }
							>
								<ColorPickerAdvanced
									settingId="bgColor"
									attributes={ atts }
									setAttributes={ setAttributes }
									attributesDefaults={ attributesDefaults }
									setUpdateCss={ setUpdateCss }
									subFields={['color', 'gradient', 'backgroundImage', 'backgroundImagePosition', 'backgroundImageAttachment', 'backgroundImageRepeat', 'backgroundImageSize', 'backgroundImageOverlay', 'backgroundImageOverlayColor', 'backgroundImageOverlayOpacity']}
								/>
							</PanelBody>
							<PanelBody 
								title={ __( 'Color', 'botiga-pro' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'color' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'color' ) }
							>
								<ColorPicker
									label={ __( 'Text Color', 'athemes-blocks' ) }
									value={ textColor }
									hover={true}
									responsive={false}
									reset={true}
									defaultStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'textColor', {
											value: {
												defaultState: value,
												hoverState: textColor.hoverState
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'textColor', value: textColor.defaultState } );                          
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'textColor', {
											value: {
												defaultState: textColor.defaultState,
												hoverState: value
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'textColor', value: textColor.hoverState } );                           
									} }
									onClickReset={ () => {
										updateAttribute( 'textColor', {
											value: getSettingDefaultValue( 'textColor', 'desktop', attributesDefaults )
										}, 'desktop' ); 

										setUpdateCss( { settingId: 'textColor', value: getSettingDefaultValue( 'textColor', 'desktop', attributesDefaults ) } );                            
									} }
								/>
								<ColorPicker
									label={ __( 'Link Color', 'athemes-blocks' ) }
									value={ linkColor }
									hover={true}
									responsive={false}
									reset={true}
									defaultStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'linkColor', {
											value: {
												defaultState: value,
												hoverState: linkColor.hoverState
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'linkColor', value: linkColor.defaultState } );                          
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'linkColor', {
											value: {
												defaultState: linkColor.defaultState,
												hoverState: value
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'linkColor', value: linkColor.hoverState } );                           
									} }
									onClickReset={ () => {
										updateAttribute( 'linkColor', {
											value: getSettingDefaultValue( 'linkColor', 'desktop', attributesDefaults )
										}, 'desktop' ); 

										setUpdateCss( { settingId: 'linkColor', value: getSettingDefaultValue( 'linkColor', 'desktop', attributesDefaults ) } );                            
									} }
								/>
							</PanelBody>
							<PanelBody 
								title={ __( 'Border', 'botiga-pro' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'border' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'border' ) }
							>
								<Border
									label=""
									settingId="border"
									attributes={ atts }
									setAttributes={ setAttributes }
									attributesDefaults={ attributesDefaults }
									setUpdateCss={ setUpdateCss }
									subFields={['borderStyle', 'borderWidth', 'borderRadius', 'borderColor']}
								/>
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

				let blockProps = useBlockProps({
					className: blockPropsClassName
				});

				// Layout.
				blockProps.className += ` at-block-flex-container--layout-${layout}`;

				// Add link properties if the tag is 'a'.
				if (htmlTag === 'a' && htmlTagLink) {
					blockProps.href = htmlTagLink;
					
					if (htmlTagLinkOpenInNewWindow) {
						blockProps.target = '_blank';
					}
				}

				// Background Image Overlay.
				const backgroundImageOverlayValue = getInnerSettingValue( 'bgColor', 'backgroundImageOverlay', '', atts );
				if ( backgroundImageOverlayValue ) {
					blockProps.className += ' has-background-image-overlay';
				}

				if (hasInnerBlocks) {
					blockProps.className += ' has-inner-blocks';
				}

				if (hideOnDesktop) {
					blockProps.className += ' atb-hide-desktop';
				}

				if (hideOnTablet) {
					blockProps.className += ' atb-hide-tablet';
				}

				if (hideOnMobile) {
					blockProps.className += ' atb-hide-mobile';
				}

				if (isChildOfFlexContainer) {
					blockProps.className += ' is-child-container';
				}

				// Animation.
				blockProps = blockPropsWithAnimation(blockProps, attributes);
				
				return (
					<Tag { ...blockProps } ref={useMergeRefs([blockProps.ref, blockRef])}>
						{!hasInnerBlocks && !selectedLayout && !isChildOfFlexContainer ? (
							<LayoutSelector onSelect={handleLayoutSelect} />
						) : (
							containerWidth === 'full-width' && contentWidth === 'boxed' ? (
								<div class="at-block-flex-container__inner-blocks-wrapper">
									{innerBlocks}
								</div>
							) : (
								innerBlocks
							)
						)}
					</Tag>
				);
			})()}
		</>
	);
};

export default withDynamicCSS(
	withTabsNavigation(
		withPersistentPanelToggle(	
			withAdvancedTab(Edit, attributesDefaults)
		)
	),
	attributesDefaults
);