import { __ } from '@wordpress/i18n';
import { useEffect, useMemo, useRef, useState } from '@wordpress/element';
import { useSelect, useDispatch } from "@wordpress/data";
import { Panel, PanelBody } from '@wordpress/components';
import { InspectorControls, useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import { useMergeRefs } from '@wordpress/compose';

import { store as persistentTabsStore } from '../../block-editor/store/persistent-tabs-store';

import { RadioButtons } from '../../block-editor/controls/radio-buttons/radio-buttons';
import { RangeSlider } from '../../block-editor/controls/range-slider/range-slider';
import { Select } from '../../block-editor/controls/select/select';
import { TextInput } from '../../block-editor/controls/text-input/text-input';
import { SwitchToggle } from '../../block-editor/controls/switch-toggle/switch-toggle';
import { ColorPicker } from '../../block-editor/controls/color-picker/color-picker';
import { Typography } from '../../block-editor/controls/typography/typography';
import { Border } from '../../block-editor/controls/border/border';
import { createAttributeUpdater } from '../../utils/block-attributes';
import { withTabsNavigation } from '../../block-editor/hoc/with-tabs-navigation';
import { withAdvancedTab } from '../../block-editor/hoc/with-advanced-tab';
import { withDynamicCSS } from '../../block-editor/hoc/with-dynamic-css';
import { withPersistentPanelToggle } from '../../block-editor/hoc/with-persistent-panel-toggle';
import { withGoogleFonts } from '../../block-editor/hoc/with-google-fonts';

import { blockPropsWithAnimation } from '../../utils/block-animations';
import { getSettingValue, getSettingUnit, getSettingDefaultValue, getSettingDefaultUnit, getInnerSettingValue, getColorPickerSettingDefaultValue, getColorPickerSettingValue } from '../../utils/settings';

const attributesDefaults = TextBlockData.attributes;

const Edit = (props) => {
	const { attributes, setAttributes, clientId, setUpdateCss, isPanelOpened, onTogglePanelBodyHandler } = props;
	const { content } = attributes;
	const atts = attributes;
	const updateAttribute = createAttributeUpdater(attributes, setAttributes);
	const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());
	const currentTab = useSelect((select) => select('persistent-tabs-store').getCurrentTab());

	const {

		// General.
        htmlTag,
		dropCap,
		columns,
		columnsGap,

        // Style.
        alignment,
        typography,
        color,
		linkColor,
		dropCapColor,

        // Advanced.
        hideOnDesktop,
		hideOnTablet,
		hideOnMobile,
    } = useMemo(() => {
		return {

			// General.
			htmlTag: atts.htmlTag,
			dropCap: atts.dropCap,
			columns: getSettingValue('columns', currentDevice, atts),
			columnsGap: getSettingValue('columnsGap', currentDevice, atts),

			// Style.
			alignment: getSettingValue('alignment', currentDevice, atts),
			color: getSettingValue('color', 'desktop', atts),
			linkColor: getSettingValue('linkColor', 'desktop', atts),
			dropCapColor: getSettingValue('dropCapColor', 'desktop', atts),
			
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

	return (
		<>
			<InspectorControls>
				{
					currentTab === 'general' && (
						<Panel>
							<PanelBody 
								title={ __( 'Content', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'content' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'content' ) }
							>
								<Select
									label={ __( 'HTML Tag', 'athemes-blocks' ) }
									options={[
										{ label: __( 'div', 'athemes-blocks' ), value: 'div' },
										{ label: __( 'span', 'athemes-blocks' ), value: 'span' },
										{ label: __( 'p', 'athemes-blocks' ), value: 'p' },
									]}
									value={ htmlTag }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ htmlTag: value });

										setUpdateCss( { settingId: 'htmlTag', value: value } );										
									} }
									onClickReset={ () => {
										setAttributes({ htmlTag: getSettingDefaultValue( 'htmlTag', '', attributesDefaults ) });

										setUpdateCss( { settingId: 'htmlTag', value: getSettingDefaultValue( 'htmlTag', '', attributesDefaults ) } );
									} }
								/>
								<SwitchToggle
									label={ __( 'Drop Cap', 'athemes-blocks' ) }
									value={ dropCap }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ dropCap: value });
									} }
									onClickReset={ () => {
										setAttributes( { dropCap: getSettingDefaultValue( 'dropCap', '', attributesDefaults ) } );
									} }
								/>
								<RangeSlider 
									label={ __( 'Columns', 'athemes-blocks' ) }
									defaultValue={ columns }
									defaultUnit={ getSettingUnit( 'columns', currentDevice, atts ) }
									min={ 1 }
									max={ 10 }
									responsive={ true }
									reset={ true }
									units={false}
									onChange={ ( value ) => {
										updateAttribute( 'columns', {
											value: value,
										}, currentDevice );

										setUpdateCss( { settingId: 'columns', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'columns', {
											value: columns,
										}, currentDevice );

										setUpdateCss( { settingId: 'columns', value: value } );								
									} }
									onClickReset={ () => {
										updateAttribute( 'columns', {
											value: getSettingDefaultValue( 'columns', currentDevice, attributesDefaults ),
										}, currentDevice );							

										setUpdateCss( { settingId: 'columns', value: getSettingDefaultValue( 'columns', currentDevice, attributesDefaults ) } );								
									} }
								/>
								{
									columns > 1 && (
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
								title={ __( 'Content', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'content' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'content' ) }
							>
								<RadioButtons 
									label={ __( 'Alignment', 'athemes-blocks' ) }
									defaultValue={ alignment }
									options={[
										{ label: __( 'Left', 'athemes-blocks' ), value: 'left' },
										{ label: __( 'Center', 'athemes-blocks' ), value: 'center' },
										{ label: __( 'Right', 'athemes-blocks' ), value: 'right' },
										{ label: __( 'Justified', 'athemes-blocks' ), value: 'justify' },
									]}
									responsive={true}
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'alignment', {
											value: value
										}, currentDevice );

										setUpdateCss( { settingId: 'alignment', value: value } );
									} }
									onClickReset={ () => {
										updateAttribute( 'alignment', {
											value: getSettingDefaultValue( 'alignment', currentDevice, attributesDefaults )
										}, currentDevice );
										
										setUpdateCss( { settingId: 'alignment', value: getSettingDefaultValue( 'alignment', currentDevice, attributesDefaults ) } );
									} }
								/>
							</PanelBody>
							<PanelBody 
								title={ __( 'Text', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'text' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'text' ) }
							>
								<Typography
									label={ __( 'Typography', 'athemes-blocks' ) }
									settingId="typography"
									attributes={ atts }
									setAttributes={ setAttributes }
									attributesDefaults={ attributesDefaults }
									setUpdateCss={ setUpdateCss }
									subFields={['fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'textTransform', 'textDecoration', 'lineHeight', 'letterSpacing']}
								/>
								<ColorPicker
									label={ __( 'Color', 'athemes-blocks' ) }
									value={ color }
									hover={true}
									responsive={false}
									reset={true}
									defaultStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'color', {
											value: {
												defaultState: value,
												hoverState: getColorPickerSettingValue( 'color', 'desktop', 'hoverState', atts )
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'color', value: getColorPickerSettingValue( 'color', 'desktop', 'defaultState', atts ) } );
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'color', {
											value: {
												defaultState: getColorPickerSettingValue( 'color', 'desktop', 'defaultState', atts ),
												hoverState: value	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'color', value: getColorPickerSettingValue( 'color', 'desktop', 'hoverState', atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'color', {
											value: {
												defaultState: getColorPickerSettingDefaultValue( 'color', 'desktop', 'defaultState', attributesDefaults ),
												hoverState: getColorPickerSettingDefaultValue( 'color', 'desktop', 'hoverState', attributesDefaults )	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'color', value: getColorPickerSettingDefaultValue( 'color', 'desktop', 'defaultState', attributesDefaults ) } );
									} }
								/>
							</PanelBody>
							<PanelBody 
								title={ __( 'Link', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'link' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'link' ) }
							>
								<ColorPicker
									label={ __( 'Color', 'athemes-blocks' ) }
									value={ linkColor }
									hover={true}
									responsive={false}
									reset={true}
									defaultStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'linkColor', {
											value: {
												defaultState: value,
												hoverState: getColorPickerSettingValue( 'linkColor', 'desktop', 'hoverState', atts )
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'linkColor', value: getColorPickerSettingValue( 'linkColor', 'desktop', 'defaultState', atts ) } );
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'linkColor', {
											value: {
												defaultState: getColorPickerSettingValue( 'linkColor', 'desktop', 'defaultState', atts ),
												hoverState: value	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'linkColor', value: getColorPickerSettingValue( 'linkColor', 'desktop', 'hoverState', atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'linkColor', {
											value: {
												defaultState: getColorPickerSettingDefaultValue( 'linkColor', 'desktop', 'defaultState', attributesDefaults ),
												hoverState: getColorPickerSettingDefaultValue( 'linkColor', 'desktop', 'hoverState', attributesDefaults )	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'linkColor', value: getColorPickerSettingDefaultValue( 'linkColor', 'desktop', 'defaultState', attributesDefaults ) } );
									} }
								/>
							</PanelBody>
							{
								dropCap && (
									<PanelBody 
										title={ __( 'Drop Cap', 'athemes-blocks' ) } 
										initialOpen={false}
										opened={ isPanelOpened( 'dropCap' ) }
										onToggle={ () => onTogglePanelBodyHandler( 'dropCap' ) }
									>
										<ColorPicker
											label={ __( 'Color', 'athemes-blocks' ) }
											value={ dropCapColor }
											hover={false}
											responsive={false}
											reset={true}
											defaultStateOnChangeComplete={ ( value ) => {
												updateAttribute( 'dropCapColor', {
													value: {
														defaultState: value,
														hoverState: getColorPickerSettingValue( 'dropCapColor', 'desktop', 'hoverState', atts )
													}
												}, 'desktop' );

												setUpdateCss( { settingId: 'dropCapColor', value: getColorPickerSettingValue( 'dropCapColor', 'desktop', 'defaultState', atts ) } );
											} }
											onClickReset={ () => {
												updateAttribute( 'dropCapColor', {
													value: {
														defaultState: getColorPickerSettingDefaultValue( 'dropCapColor', 'desktop', 'defaultState', attributesDefaults ),
														hoverState: getColorPickerSettingDefaultValue( 'dropCapColor', 'desktop', 'hoverState', attributesDefaults )	
													}
												}, 'desktop' );
												
												setUpdateCss( { settingId: 'dropCapColor', value: getColorPickerSettingDefaultValue( 'dropCapColor', 'desktop', 'defaultState', attributesDefaults ) } );
											} }
										/>
									</PanelBody>
								)
							}
						</Panel>
					)
				}
			</InspectorControls>
			
			{(() => {
				const Tag = htmlTag;
				let blockPropsClassName = `at-block at-block-text`;

				let blockProps = useBlockProps({
					className: blockPropsClassName
				});

				// Font size.
				const hasFontSize = getInnerSettingValue('typography', 'fontSize', currentDevice, atts) > 0;
				if (hasFontSize) {
					blockProps.className += ` atb-has-font-size`;
				}

				// Drop cap.
				if (dropCap) {
					blockProps.className += ` at-block-text--has-drop-cap`;
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

				// Animation.
				blockProps = blockPropsWithAnimation(blockProps, attributes);
				
				return (
					<RichText
						{ ...blockProps }
						ref={useMergeRefs([blockProps.ref, blockRef])}
						tagName={ htmlTag }
						value={ content }
						multiline={false}
						onChange={ ( newContent ) => setAttributes( { content: newContent } ) }
						placeholder={ __( 'Type your content here...', 'athemes-blocks' ) }
					/>
				);
			})()}
		</>
	);
};

export default withDynamicCSS(
	withTabsNavigation(
		withPersistentPanelToggle(	
			withAdvancedTab(
				withGoogleFonts(Edit),
				attributesDefaults
			)
		)
	),
	attributesDefaults
);