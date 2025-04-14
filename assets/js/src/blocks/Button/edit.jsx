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
import { Link } from '../../block-editor/controls/link/link';
import { Dimensions } from '../../block-editor/controls/dimensions/dimensions';
import { IconLibrary } from '../../block-editor/controls/icon-library/icon-library';

import { createAttributeUpdater } from '../../utils/block-attributes';
import { withTabsNavigation } from '../../block-editor/hoc/with-tabs-navigation';
import { withAdvancedTab } from '../../block-editor/hoc/with-advanced-tab';
import { withDynamicCSS } from '../../block-editor/hoc/with-dynamic-css';
import { withPersistentPanelToggle } from '../../block-editor/hoc/with-persistent-panel-toggle';
import { withGoogleFonts } from '../../block-editor/hoc/with-google-fonts';
import { blockPropsWithAnimation } from '../../utils/block-animations';

import { getSettingValue, getSettingUnit, getSettingDefaultValue, getSettingDefaultUnit, getInnerSettingValue, getColorPickerSettingDefaultValue, getColorPickerSettingValue, getDimensionsSettingValue, getDimensionsSettingDirectionsValue, getDimensionsSettingConnectValue, getDimensionsSettingDefaultValue } from '../../utils/settings';

const attributesDefaults = ButtonBlockData.attributes;

const Edit = (props) => {
	const { attributes, setAttributes, clientId, setUpdateCss, isPanelOpened, onTogglePanelBodyHandler } = props;
	const { content } = attributes;
	const atts = attributes;
	const updateAttribute = createAttributeUpdater(attributes, setAttributes);
	const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());
	const currentTab = useSelect((select) => select('persistent-tabs-store').getCurrentTab());

	const {

		// General.
		layout,
		enableIcon,
		buttonId,
		icon,

        // Style.
		alignment,
		color,
		buttonBackgroundColor,
		buttonPadding,

        // Advanced.
        hideOnDesktop,
		hideOnTablet,
		hideOnMobile,
    } = useMemo(() => {
		return {

			// General.
			layout: atts.layout,
			enableIcon: atts.enableIcon,
			buttonId: atts.buttonId,
			icon: atts.icon,

			// Style.
			alignment: getSettingValue('alignment', currentDevice, atts),
			color: getSettingValue('color', 'desktop', atts),
			buttonBackgroundColor: getSettingValue('buttonBackgroundColor', 'desktop', atts),
			buttonPadding: getSettingValue('buttonPadding', currentDevice, atts),

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
		
		if (blockRef.current) {
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
	}, []);

	return (
		<>
			<InspectorControls>
				{
					currentTab === 'general' && (
						<Panel>
							<PanelBody 
								title={ __( 'Presets', 'botiga-pro' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'presets' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'presets' ) }
							>
								<RadioButtons 
									label={ __( 'Layout', 'athemes-blocks' ) }
									defaultValue={ layout }
									options={[
										{ label: __( 'Default', 'athemes-blocks' ), value: 'default' },
										{ label: __( 'Squared', 'athemes-blocks' ), value: 'squared' },
										{ label: __( 'Rounded', 'athemes-blocks' ), value: 'rounded' },
										{ label: __( 'With Icon', 'athemes-blocks' ), value: 'with-icon' },
										{ label: __( 'Default Outline', 'athemes-blocks' ), value: 'default-outline' },
										{ label: __( 'Squared Outline', 'athemes-blocks' ), value: 'squared-outline' },
										{ label: __( 'Rounded Outline', 'athemes-blocks' ), value: 'rounded-outline' },
										{ label: __( 'With Icon Outline', 'athemes-blocks' ), value: 'with-icon-outline' },
									]}
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ layout: value });
									} }
									onClickReset={ () => {
										setAttributes({ layout: getSettingDefaultValue( 'layout', false, attributesDefaults ) });
									} }
								/>
							</PanelBody>
							<PanelBody 
								title={ __( 'Content', 'botiga-pro' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'content' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'content' ) }
							>
								<Link
									label=""
									settingId="link"
									attributes={ atts }
									setAttributes={ setAttributes }
									attributesDefaults={ attributesDefaults }
									setUpdateCss={ setUpdateCss }
									subFields={['linkUrl', 'linkTarget', 'linkNoFollow']}
								/>
								<SwitchToggle
									label={ __( 'Show Icon', 'athemes-blocks' ) }
									value={ enableIcon }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ enableIcon: value });
									} }
									onClickReset={ () => {
										setAttributes({ enableIcon: getSettingDefaultValue( 'enableIcon', '', attributesDefaults ) });
									} }
								/>
								{
									enableIcon && (
										<IconLibrary
											label={ __( 'Icon Library', 'athemes-blocks' ) }
											value={ icon }
											responsive={false}
											reset={true}
											onChange={ ( value ) => {
												setAttributes({ icon: value });
											} }
											onClickReset={ () => {
												setAttributes({ icon: getSettingDefaultValue( 'icon', '', attributesDefaults ) });
											} }
										/>
									)
								}
								<TextInput
									label={ __( 'Button ID', 'athemes-blocks' ) }
									value={ buttonId }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ buttonId: value });
									} }
									onClickReset={ () => {
										setAttributes({ buttonId: getSettingDefaultValue( 'buttonId', '', attributesDefaults ) });
									} }
								/>
							</PanelBody>
						</Panel>
					)
				}
				{
					currentTab === 'style' && (
						<Panel>
							<PanelBody 
								title={ __( 'Content', 'botiga-pro' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'content' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'content' ) }
							>
								<RadioButtons 
									label={ __( 'Alignment', 'athemes-blocks' ) }
									defaultValue={ alignment }
									options={[
										{ label: __( 'Left', 'athemes-blocks' ), value: 'flex-start' },
										{ label: __( 'Center', 'athemes-blocks' ), value: 'center' },
										{ label: __( 'Right', 'athemes-blocks' ), value: 'flex-end' },
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
								title={ __( 'Text', 'botiga-pro' ) } 
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
												defaultState: value.hex,
												hoverState: getColorPickerSettingValue( 'color', 'desktop', 'hoverState', atts )
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'color', value: getColorPickerSettingValue( 'color', 'desktop', 'defaultState', atts ) } );
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'color', {
											value: {
												defaultState: getColorPickerSettingValue( 'color', 'desktop', 'defaultState', atts ),
												hoverState: value.hex	
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
								title={ __( 'Background', 'botiga-pro' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'background' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'background' ) }
							>
								<ColorPicker
									label={ __( 'Color', 'athemes-blocks' ) }
									value={ buttonBackgroundColor }
									hover={true}
									responsive={false}
									reset={true}
									defaultStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'buttonBackgroundColor', {
											value: {
												defaultState: value.hex,
												hoverState: getColorPickerSettingValue( 'buttonBackgroundColor', 'desktop', 'hoverState', atts )
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'buttonBackgroundColor', value: getColorPickerSettingValue( 'buttonBackgroundColor', 'desktop', 'defaultState', atts ) } );
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'buttonBackgroundColor', {
											value: {
												defaultState: getColorPickerSettingValue( 'buttonBackgroundColor', 'desktop', 'defaultState', atts ),
												hoverState: value.hex	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'buttonBackgroundColor', value: getColorPickerSettingValue( 'buttonBackgroundColor', 'desktop', 'hoverState', atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'buttonBackgroundColor', {
											value: {
												defaultState: getColorPickerSettingDefaultValue( 'buttonBackgroundColor', 'desktop', 'defaultState', attributesDefaults ),
												hoverState: getColorPickerSettingDefaultValue( 'buttonBackgroundColor', 'desktop', 'hoverState', attributesDefaults )	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'buttonBackgroundColor', value: getColorPickerSettingDefaultValue( 'buttonBackgroundColor', 'desktop', 'defaultState', attributesDefaults ) } );
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
									settingId="buttonBorder"
									attributes={ atts }
									setAttributes={ setAttributes }
									attributesDefaults={ attributesDefaults }
									setUpdateCss={ setUpdateCss }
									subFields={['borderStyle', 'borderWidth', 'borderRadius', 'borderColor']}
								/>
							</PanelBody>
							<PanelBody 
								title={ __( 'Spacing', 'botiga-pro' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'spacing' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'spacing' ) }
							>
								<Dimensions
									label={ __( 'Padding', 'athemes-blocks' ) }
									directions={[
										{ label: __( 'Top', 'athemes-blocks' ), value: 'top' },
										{ label: __( 'Right', 'athemes-blocks' ), value: 'right' },
										{ label: __( 'Bottom', 'athemes-blocks' ), value: 'bottom' },
										{ label: __( 'Left', 'athemes-blocks' ), value: 'left' },
									]}
									value={ getDimensionsSettingValue( 'buttonPadding', currentDevice, atts ) }
									defaultUnit={ getSettingUnit('buttonPadding', currentDevice, atts) }
									directionsValue={ getDimensionsSettingDirectionsValue('buttonPadding', currentDevice, atts) }
									connect={ getDimensionsSettingConnectValue('buttonPadding', currentDevice, atts) }
									responsive={ true }
									units={['px', '%', 'em', 'rem', 'vh', 'vw']}
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'buttonPadding', {
											value: value.value,
											unit: getSettingUnit( 'buttonPadding', currentDevice, atts ),
											connect: getDimensionsSettingConnectValue( 'buttonPadding', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'buttonPadding', value: value.value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'buttonPadding', {
											value: getSettingValue( 'buttonPadding', currentDevice, atts ),
											unit: value,
											connect: getDimensionsSettingConnectValue( 'buttonPadding', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'buttonPadding', value: getSettingValue( 'buttonPadding', currentDevice, atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'buttonPadding', getDimensionsSettingDefaultValue( 'buttonPadding', currentDevice, attributesDefaults ), currentDevice );

										setUpdateCss( { settingId: 'buttonPadding', value: getDimensionsSettingDefaultValue( 'buttonPadding', currentDevice, attributesDefaults ) } );
									} }
								/>
							</PanelBody>
						</Panel>
					)
				}
			</InspectorControls>
			
			{(() => {
				let blockPropsClassName = `at-block at-block-button`;

				let blockProps = useBlockProps({
					className: blockPropsClassName
				});

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
					<div { ...blockProps } ref={useMergeRefs([blockProps.ref, blockRef])}>
						<RichText
							tagName={ 'a' }
							className="at-block-button__button"
							value={ content }
							onChange={ ( newContent ) => setAttributes( { content: newContent } ) }
							placeholder={ __( 'Type your text here...', 'athemes-blocks' ) }
						/>
					</div>
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