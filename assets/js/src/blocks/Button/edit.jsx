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
import { Icon } from '../../block-editor/controls/icon/icon';
import { RadioImages } from '../../block-editor/controls/radio-images/radio-images';
import { createAttributeUpdater, createInnerControlAttributeUpdater } from '../../utils/block-attributes';
import { withTabsNavigation } from '../../block-editor/hoc/with-tabs-navigation';
import { withAdvancedTab } from '../../block-editor/hoc/with-advanced-tab';
import { withDynamicCSS } from '../../block-editor/hoc/with-dynamic-css';
import { withPersistentPanelToggle } from '../../block-editor/hoc/with-persistent-panel-toggle';
import { withGoogleFonts } from '../../block-editor/hoc/with-google-fonts';
import { blockPropsWithAnimation } from '../../utils/block-animations';

import { getSettingValue, getSettingUnit, getSettingDefaultValue, getSettingDefaultUnit, getInnerSettingValue, getColorPickerSettingDefaultValue, getColorPickerSettingValue, getDimensionsSettingValue, getDimensionsSettingDirectionsValue, getDimensionsSettingConnectValue, getDimensionsSettingDefaultValue, getPresetResponsiveAttributeValueObject } from '../../utils/settings';

import buttonPresets from './presets';
import buttonPresetsImages from './presets-images';

import { icons } from '../../utils/icons';

const attributesDefaults = ButtonBlockData.attributes;

const Edit = (props) => {
	const { attributes, setAttributes, clientId, setUpdateCss, setUpdatePresetCss, isPanelOpened, onTogglePanelBodyHandler } = props;
	let { content } = attributes;
	const atts = attributes;
	const updateAttribute = createAttributeUpdater(attributes, setAttributes);
	const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());
	const currentTab = useSelect((select) => select('persistent-tabs-store').getCurrentTab());

	const allIcons = {
        ...window?.athemesBlocksFontAwesomeLibrary,
        ...window?.athemesBlocksIconBoxLibrary,
    }

	const {

		// General.
		layout,
		enableIcon,
		buttonId,

        // Style.
		alignment,
		color,
		iconColor,
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
			iconColor: getSettingValue('iconColor', 'desktop', atts),
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
								<RadioImages 
									label={ __( 'Layout', 'athemes-blocks' ) }
									defaultValue={ layout }
									options={[
										{ label: __( 'Default', 'athemes-blocks' ), value: 'default', image: buttonPresetsImages.default },
										{ label: __( 'Squared', 'athemes-blocks' ), value: 'squared', image: buttonPresetsImages.squared },
										{ label: __( 'Rounded', 'athemes-blocks' ), value: 'rounded', image: buttonPresetsImages.rounded },
										{ label: __( 'With Icon', 'athemes-blocks' ), value: 'with-icon', image: buttonPresetsImages.withIcon },
										{ label: __( 'Squared Outline', 'athemes-blocks' ), value: 'squared-outline', image: buttonPresetsImages.squaredOutline },
										{ label: __( 'Rounded Outline', 'athemes-blocks' ), value: 'rounded-outline', image: buttonPresetsImages.roundedOutline },
										{ label: __( 'With Icon Outline', 'athemes-blocks' ), value: 'with-icon-outline', image: buttonPresetsImages.withIconOutline },
									]}
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										const presetSettings = buttonPresets[value];

										setAttributes({ 
											...presetSettings,
										});

										setUpdatePresetCss(presetSettings);
									} }
									onClickReset={ () => {
										const presetSettings = buttonPresets['default'];

										setAttributes({ 
											...presetSettings,
										});
										
										setUpdatePresetCss(presetSettings);
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
										<Icon
											label=""
											settingId="icon"
											attributes={ atts }
											setAttributes={ setAttributes }
											attributesDefaults={ attributesDefaults }
											setUpdateCss={ setUpdateCss }
											subFields={['iconData', 'iconPosition', 'iconGap']}
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
										{ label: __( 'Left', 'athemes-blocks' ), value: 'flex-start', icon: icons.alignLeft },
										{ label: __( 'Center', 'athemes-blocks' ), value: 'center', icon: icons.alignCenter },
										{ label: __( 'Right', 'athemes-blocks' ), value: 'flex-end', icon: icons.alignRight },
										{ label: __( 'Full Width', 'athemes-blocks' ), value: 'full-width', icon: icons.stretchHorizontal },
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
							{
								enableIcon && (
									<PanelBody 
										title={ __( 'Icon', 'botiga-pro' ) } 
										initialOpen={false}
										opened={ isPanelOpened( 'icon' ) }
										onToggle={ () => onTogglePanelBodyHandler( 'icon' ) }
									>
										<ColorPicker
											label={ __( 'Color', 'athemes-blocks' ) }
											value={ iconColor }
											hover={true}
											responsive={false}
											reset={true}
											defaultStateOnChangeComplete={ ( value ) => {
												updateAttribute( 'iconColor', {
													value: {
														defaultState: value,
														hoverState: getColorPickerSettingValue( 'iconColor', 'desktop', 'hoverState', atts )
													}
												}, 'desktop' );

												setUpdateCss( { settingId: 'iconColor', value: getColorPickerSettingValue( 'iconColor', 'desktop', 'defaultState', atts ) } );
											} }
											hoverStateOnChangeComplete={ ( value ) => {
												updateAttribute( 'iconColor', {
													value: {
														defaultState: getColorPickerSettingValue( 'iconColor', 'desktop', 'defaultState', atts ),
														hoverState: value	
													}
												}, 'desktop' );
												
												setUpdateCss( { settingId: 'iconColor', value: getColorPickerSettingValue( 'iconColor', 'desktop', 'hoverState', atts ) } );
											} }
											onClickReset={ () => {
												updateAttribute( 'iconColor', {
													value: {
														defaultState: getColorPickerSettingDefaultValue( 'iconColor', 'desktop', 'defaultState', attributesDefaults ),
														hoverState: getColorPickerSettingDefaultValue( 'iconColor', 'desktop', 'hoverState', attributesDefaults )	
													}
												}, 'desktop' );
												
												setUpdateCss( { settingId: 'iconColor', value: getColorPickerSettingDefaultValue( 'iconColor', 'desktop', 'defaultState', attributesDefaults ) } );
											} }
										/>
									</PanelBody>
								)
							}
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
												defaultState: value,
												hoverState: getColorPickerSettingValue( 'buttonBackgroundColor', 'desktop', 'hoverState', atts )
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'buttonBackgroundColor', value: getColorPickerSettingValue( 'buttonBackgroundColor', 'desktop', 'defaultState', atts ) } );
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'buttonBackgroundColor', {
											value: {
												defaultState: getColorPickerSettingValue( 'buttonBackgroundColor', 'desktop', 'defaultState', atts ),
												hoverState: value	
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

				// Icon.
				const { icon } = getInnerSettingValue( 'icon', 'iconData', '', atts );
				const iconPosition = getInnerSettingValue( 'icon', 'iconPosition', '', atts );
				const IconHTML = () => {
					return (
						<div className="at-block-button__icon">
							<div 
								dataIconName={ icon } 
								dangerouslySetInnerHTML={{ __html: allIcons[icon] }} 
							/>
						</div>
					)
				}

				// Icon.
				if ( icon ) {
					blockPropsClassName += ` at-block-button--has-icon`;
				}

				let blockProps = useBlockProps({
					className: blockPropsClassName
				});

				// Alignment.
				if ( alignment === 'full-width' ) {
					blockProps.className += ' at-block-button--full-width';
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
					<div { ...blockProps } ref={useMergeRefs([blockProps.ref, blockRef])}>
						<div className="at-block-button__wrapper">
							{
								enableIcon && icon && iconPosition === 'before' && (
									<IconHTML />
								)
							}
							<RichText
								tagName={ 'a' }
								value={ content }
								onChange={ ( newContent ) => setAttributes( { content: newContent } ) }
								placeholder={ __( 'Type your text here...', 'athemes-blocks' ) }
							/>
							{
								enableIcon && icon && iconPosition === 'after' && (
									<IconHTML />
								)
							}
						</div>
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