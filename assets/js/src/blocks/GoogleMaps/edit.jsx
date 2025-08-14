import { __ } from '@wordpress/i18n';
import { useEffect, useMemo, useRef, useState } from '@wordpress/element';
import { useSelect, useDispatch } from "@wordpress/data";
import { Panel, PanelBody } from '@wordpress/components';
import { InspectorControls, useBlockProps, InnerBlocks, RichText, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { useMergeRefs } from '@wordpress/compose';
import { alignNone } from '@wordpress/icons';

import { RadioButtons } from '../../block-editor/controls/radio-buttons/radio-buttons';
import { RangeSlider } from '../../block-editor/controls/range-slider/range-slider';
import { Select } from '../../block-editor/controls/select/select';
import { SwitchToggle } from '../../block-editor/controls/switch-toggle/switch-toggle';
import { ColorPicker } from '../../block-editor/controls/color-picker/color-picker';
import { Typography } from '../../block-editor/controls/typography/typography';
import { Icon } from '../../block-editor/controls/icon/icon';
import { Link } from '../../block-editor/controls/link/link';
import { Border } from '../../block-editor/controls/border/border';
import { TextInput } from '../../block-editor/controls/text-input/text-input';

import { createAttributeUpdater } from '../../utils/block-attributes';
import { withTabsNavigation } from '../../block-editor/hoc/with-tabs-navigation';
import { withAdvancedTab } from '../../block-editor/hoc/with-advanced-tab';
import { withDynamicCSS } from '../../block-editor/hoc/with-dynamic-css';
import { withPersistentPanelToggle } from '../../block-editor/hoc/with-persistent-panel-toggle';
import { withGoogleFonts } from '../../block-editor/hoc/with-google-fonts';

import { blockPropsWithAnimation } from '../../utils/block-animations';
import { getSettingValue, getSettingUnit, getSettingDefaultValue, getSettingDefaultUnit, getInnerSettingValue, getColorPickerSettingDefaultValue, getColorPickerSettingValue } from '../../utils/settings';

const attributesDefaults = GoogleMapsBlockData.attributes;

const Edit = (props) => {
	const { attributes, setAttributes, clientId, setUpdateCss, isPanelOpened, onTogglePanelBodyHandler } = props;
	const { content } = attributes;
	const atts = attributes;
	const updateAttribute = createAttributeUpdater(attributes, setAttributes);
	const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());
	const currentTab = useSelect((select) => select('persistent-tabs-store').getCurrentTab());

	const {

		// General.
		location,
		zoom,
		height,
		satelliteView,
		language,

        // Advanced.
        hideOnDesktop,
		hideOnTablet,
		hideOnMobile,
    } = useMemo(() => {
		return {

			// General.
			location: atts.location,
			zoom: atts.zoom,
			height: getSettingValue('height', currentDevice, atts),
			satelliteView: atts.satelliteView,
			language: atts.language,

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

	// Languages options.
	const languages = typeof athemesBlocksGoogleMapsLanguages === 'object' ? 
		Object.entries(athemesBlocksGoogleMapsLanguages).map(([key, value]) => {
			return {
				label: value,
				value: key,
			};
		}) 
		: [];

	return (
		<>
			<InspectorControls>
				{
					currentTab === 'general' && (
						<Panel>
							<PanelBody 
								title={ __( 'Map Settings', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'map-settings', true ) }
								onToggle={ () => onTogglePanelBodyHandler( 'map-settings' ) }
							>
								<TextInput
									label={ __( 'Location', 'athemes-blocks' ) }
									value={ location }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'location', value );   
									} }
									onClickReset={ () => {
										updateAttribute( 'location', attributesDefaults.location.default );
									} }
								/>
								<RangeSlider 
									label={ __( 'Zoom', 'athemes-blocks' ) }
									defaultValue={ zoom }
									min={ 0 }
									max={ 21 }
									responsive={false}
									reset={true}
									units={false}
									onChange={ ( value ) => {
										updateAttribute( 'zoom', value );
									} }
									onClickReset={ () => {
										updateAttribute( 'zoom', attributesDefaults.zoom.default );
									} }
								/>
								<RangeSlider 
									label={ __( 'Height', 'athemes-blocks' ) }
									defaultValue={ height }
									defaultUnit={ getSettingUnit( 'height', currentDevice, atts ) }
									min={ 0 }
									max={{
										px: 1000,
										'%': 100,
										vw: 100,
										vh: 100,
									}}
									responsive={ true }
									reset={ true }
									units={['px', '%', 'vw', 'vh']}
									onChange={ ( value ) => {
										updateAttribute( 'height', {
											value: value,
											unit: getSettingUnit( 'height', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'height', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'height', {
											value: height,
											unit: value,
										}, currentDevice );

										setUpdateCss( { settingId: 'height', value: value } );								
									} }
									onClickReset={ () => {
										updateAttribute( 'height', {
											value: getSettingDefaultValue( 'height', currentDevice, attributesDefaults ),
											unit: getSettingDefaultUnit( 'height', currentDevice, attributesDefaults )
										}, currentDevice );							

										setUpdateCss( { settingId: 'height', value: getSettingDefaultValue( 'height', currentDevice, attributesDefaults ) } );								
									} }
								/>
								<SwitchToggle
									label={ __( 'Satellite View', 'athemes-blocks' ) }
									value={ satelliteView }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'satelliteView', value );                            
									} }
									onClickReset={ () => {
										updateAttribute( 'satelliteView', attributesDefaults.satelliteView.default );
									} }
								/>
								<Select
									label={ __( 'Language', 'athemes-blocks' ) }
									options={languages}
									value={ language }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ language: value });
									} }
									onClickReset={ () => {
										setAttributes({ language: attributesDefaults.language.default });
									} }
								/>
							</PanelBody>
						</Panel>
					)
				}
			</InspectorControls>
			
			{(() => {
				let blockPropsClassName = `at-block at-block-google-maps`;

				let blockProps = useBlockProps({
					className: blockPropsClassName
				});

				// Block alignment.
				if (attributes.align) {
					blockProps.className += ` align${attributes.align}`;
					blockProps['data-align'] = attributes.align;
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
					<div { ...blockProps }>
						<BlockControls>
							<AlignmentToolbar
								label={ __( 'Align', 'athemes-blocks' ) }
								alignmentControls={[
									{
										align: 'none',
										icon: alignNone,
										title: __( 'None', 'athemes-blocks' )
									},
									{
										align: 'wide',
										icon: 'align-wide',
										title: __( 'Wide Width', 'athemes-blocks' )
									},
									{
										align: 'full',
										icon: 'align-full-width',
										title: __( 'Full Width', 'athemes-blocks' )
									}
								]}
								value={attributes.align}
								onChange={(align) => setAttributes({ align })}
							/>
						</BlockControls>

						<div 
							style={{ position: 'relative' }}
							onClick={(e) => e.preventDefault()}
						>
							<iframe
								title={__('Google Maps', 'athemes-blocks')}
								className="at-block-google-maps__iframe"
								width="100%"
								style={{ border: 0, pointerEvents: 'none' }}
								loading="lazy"
								allowFullScreen
								src={`https://maps.google.com/maps?q=${encodeURIComponent(location)}&z=${zoom}&t=${satelliteView ? 'k' : 'm'}&hl=${language}&output=embed`}
							/>
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
		),
		['general', 'advanced']
	),
	attributesDefaults
);