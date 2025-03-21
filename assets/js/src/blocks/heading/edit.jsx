import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from "@wordpress/data";
import { store as viewportStore } from '@wordpress/viewport';
import { Panel, PanelBody, BaseControl, SelectControl } from '@wordpress/components';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

import { RichText } from '@wordpress/block-editor';

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

const attributesDefaults = athemesBlocksAttributes.heading.attributes;

export default function Edit( props ) {
	const { attributes, setAttributes, clientId } = props;
	const { content } = attributes;
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
							<PanelBody title={ __( 'General', 'botiga-pro' ) }>
								<RadioButtons 
									label={ __( 'Alignment', 'athemes-blocks' ) }
									defaultValue={ getSettingValue( 'alignment', currentDevice, atts ) }
									options={[
										{ label: __( 'Left', 'athemes-blocks' ), value: 'left' },
										{ label: __( 'Center', 'athemes-blocks' ), value: 'center' },
										{ label: __( 'Right', 'athemes-blocks' ), value: 'right' },
									]}
									responsive={ true }
									reset={true}
									onChange={ ( value ) => {
										console.log(value);
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

								{/* <RangeSlider 
									label={ __( 'Font size', 'athemes-blocks' ) }
									defaultValue={ getSettingValue( 'fontSize', currentDevice, atts ) }
									defaultUnit={ getSettingUnit( 'fontSize', currentDevice, atts ) }
									min={ 1 }
									max={ 200 }
									responsive={ true }
									units={['px', 'em', 'rem']}
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'fontSize', {
											value: value,
											unit: getSettingUnit( 'fontSize', currentDevice, atts )
										}, currentDevice );
										
										setUpdateCss( { settingId: 'fontSize', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'fontSize', {
											value: getSettingValue( 'fontSize', currentDevice, atts ),
											unit: value
										}, currentDevice );
										
										setUpdateCss( { settingId: 'fontSize', value: getSettingValue( 'fontSize', currentDevice, atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'fontSize', {
											value: getSettingDefaultValue( 'fontSize', currentDevice, attributesDefaults ),
											unit: getSettingDefaultUnit( 'fontSize', currentDevice, attributesDefaults )
										}, currentDevice );
										
										setUpdateCss( { settingId: 'fontSize', value: getSettingDefaultValue( 'fontSize', currentDevice, attributesDefaults ) } );
									} }
								/> */}

								<Select
									label={ __( 'Font family', 'athemes-blocks' ) }
									options={[
										{ label: __( 'Arial', 'athemes-blocks' ), value: 'Arial' },
										{ label: __( 'Helvetica', 'athemes-blocks' ), value: 'Helvetica' },
										{ label: __( 'Times New Roman', 'athemes-blocks' ), value: 'Times New Roman' },
									]}
									value={ getSettingValue( 'fontFamily', currentDevice, atts ) }
									responsive={ true }
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'fontFamily', {
											value: value
										}, currentDevice );
										
										setUpdateCss( { settingId: 'fontFamily', value: getSettingDefaultValue( 'fontFamily', currentDevice, atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'fontFamily', {
											value: getSettingDefaultValue( 'fontFamily', currentDevice, attributesDefaults )
										}, currentDevice );

										setUpdateCss( { settingId: 'fontFamily', value: getSettingDefaultValue( 'fontFamily', currentDevice, attributesDefaults ) } );
									} }
								/>

								<SwitchToggle
									label={ __( 'Show border', 'athemes-blocks' ) }
									value={ getSettingValue( 'showBorder', currentDevice, atts ) }
									responsive={ true }
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'showBorder', {
											value: value
										}, currentDevice );
									} }
									onClickReset={ () => {
										updateAttribute( 'showBorder', {
											value: getSettingDefaultValue( 'showBorder', currentDevice, attributesDefaults )
										}, currentDevice );
									} }
								/>

								<ColorPicker
									label={ __( 'Text color', 'athemes-blocks' ) }
									value={ getSettingValue( 'textColor', currentDevice, atts ) }
									hover={true}
									responsive={true}
									reset={true}
									defaultStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'textColor', {
											value: {
												defaultState: value.hex,
												hoverState: getColorPickerSettingValue( 'textColor', currentDevice, 'hoverState', atts )
											}
										}, currentDevice );

										setUpdateCss( { settingId: 'textColor', value: getColorPickerSettingValue( 'textColor', currentDevice, 'defaultState', atts ) } );
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'textColor', {
											value: {
												defaultState: getColorPickerSettingValue( 'textColor', currentDevice, 'defaultState', atts ),
												hoverState: value.hex	
											}
										}, currentDevice );
										
										setUpdateCss( { settingId: 'textColor', value: getColorPickerSettingValue( 'textColor', currentDevice, 'hoverState', atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'textColor', {
											value: {
												defaultState: getColorPickerSettingDefaultValue( 'textColor', currentDevice, 'defaultState', attributesDefaults ),
												hoverState: getColorPickerSettingDefaultValue( 'textColor', currentDevice, 'hoverState', attributesDefaults )	
											}
										}, currentDevice );
										
										setUpdateCss( { settingId: 'textColor', value: getColorPickerSettingDefaultValue( 'textColor', currentDevice, 'defaultState', attributesDefaults ) } );
									} }
								/>

								<Typography
									label={ __( 'Typography', 'athemes-blocks' ) }
									settingId="textTypography"
									attributes={ atts }
									setAttributes={ setAttributes }
									attributesDefaults={ attributesDefaults }
									setUpdateCss={ setUpdateCss }
									subFields={['fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'textTransform', 'textDecoration', 'lineHeight', 'letterSpacing']}
								/>

								<Dimensions
									label={ __( 'Padding', 'athemes-blocks' ) }
									directions={[
										{ label: __( 'Top', 'athemes-blocks' ), value: 'top' },
										{ label: __( 'Right', 'athemes-blocks' ), value: 'right' },
										{ label: __( 'Bottom', 'athemes-blocks' ), value: 'bottom' },
										{ label: __( 'Left', 'athemes-blocks' ), value: 'left' },
									]}
									value={ getDimensionsSettingValue( 'padding', currentDevice, atts ) }
									defaultUnit={ getSettingUnit( 'padding', currentDevice, atts ) }
									directionsValue={ getDimensionsSettingDirectionsValue( 'padding', currentDevice, atts ) }
									connect={getDimensionsSettingConnectValue( 'padding', currentDevice, atts )}
									responsive={ true }
									units={['px', 'em', 'rem']}
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'padding', {
											value: value.value,
											unit: getSettingUnit( 'padding', currentDevice, atts ),
											connect: getDimensionsSettingConnectValue( 'padding', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'padding', value: value.value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'padding', {
											value: getSettingValue( 'padding', currentDevice, atts ),
											unit: value,
											connect: getDimensionsSettingConnectValue( 'padding', currentDevice, atts )
										}, currentDevice );
										
										setUpdateCss( { settingId: 'padding', value: getSettingValue( 'padding', currentDevice, atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'padding', getDimensionsSettingDefaultValue( 'padding', currentDevice, attributesDefaults ), currentDevice );

										setUpdateCss( { settingId: 'padding', value: getDimensionsSettingDefaultValue( 'padding', currentDevice, attributesDefaults ) } );
									} }
								/>
							</PanelBody>
						</Panel>
					)
				}
			</InspectorControls>
			
			<div class="at-block" { ...useBlockProps() }>
				<RichText
					tagName="h1"
					value={ content }
					onChange={ ( newContent ) => setAttributes( { content: newContent } ) }
					placeholder={ __( 'Type your heading here...', 'text-domain' ) }
				/>
			</div>

		</div>
	);
}