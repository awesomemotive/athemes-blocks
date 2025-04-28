import { __ } from '@wordpress/i18n';
import { useEffect, useMemo, useRef, useState } from '@wordpress/element';
import { useSelect, useDispatch } from "@wordpress/data";
import { Panel, PanelBody, ResizableBox } from '@wordpress/components';
import { InspectorControls, useBlockProps, InnerBlocks, RichText, MediaPlaceholder } from '@wordpress/block-editor';
import { useMergeRefs } from '@wordpress/compose';

import { RadioButtons } from '../../block-editor/controls/radio-buttons/radio-buttons';
import { RangeSlider } from '../../block-editor/controls/range-slider/range-slider';
import { Select } from '../../block-editor/controls/select/select';
import { SwitchToggle } from '../../block-editor/controls/switch-toggle/switch-toggle';
import { ColorPicker } from '../../block-editor/controls/color-picker/color-picker';
import { Typography } from '../../block-editor/controls/typography/typography';
import { Icon } from '../../block-editor/controls/icon/icon';
import { Link } from '../../block-editor/controls/link/link';
import { ImageUpload } from '../../block-editor/controls/image-upload/image-upload';

import { createAttributeUpdater } from '../../utils/block-attributes';
import { withTabsNavigation } from '../../block-editor/hoc/with-tabs-navigation';
import { withAdvancedTab } from '../../block-editor/hoc/with-advanced-tab';
import { withDynamicCSS } from '../../block-editor/hoc/with-dynamic-css';
import { withPersistentPanelToggle } from '../../block-editor/hoc/with-persistent-panel-toggle';
import { withGoogleFonts } from '../../block-editor/hoc/with-google-fonts';

import { blockPropsWithAnimation } from '../../utils/block-animations';
import { getSettingValue, getSettingUnit, getSettingDefaultValue, getSettingDefaultUnit, getInnerSettingValue, getColorPickerSettingDefaultValue, getColorPickerSettingValue } from '../../utils/settings';

const attributesDefaults = ImageBlockData.attributes;

const Edit = (props) => {
	const { attributes, setAttributes, clientId, setUpdateCss, isPanelOpened, onTogglePanelBodyHandler } = props;
	const { content } = attributes;
	const atts = attributes;
	const updateAttribute = createAttributeUpdater(attributes, setAttributes);
	const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());
	const currentTab = useSelect((select) => select('persistent-tabs-store').getCurrentTab());

	const {

		// General.
		image,

        // Style.
        alignment,
		width,
		maxWidth,
		height,
		hoverAnimation,
		caption,
		captionAlignment,
		captionTextColor,
		captionBackgroundColor,
		captionSpacing,

        // Advanced.
        hideOnDesktop,
		hideOnTablet,
		hideOnMobile,
    } = useMemo(() => {
		return {

			// General.
			image: getInnerSettingValue('image', 'image', '', atts),
		
			// Style.
			alignment: getSettingValue('alignment', currentDevice, atts),
			width: getSettingValue('width', currentDevice, atts),
			maxWidth: getSettingValue('maxWidth', currentDevice, atts),
			height: getSettingValue('height', currentDevice, atts),
			hoverAnimation: atts.hoverAnimation,
			caption: atts.image.innerSettings.caption.default,
			captionAlignment: getSettingValue('captionAlignment', currentDevice, atts),
			captionTextColor: getSettingValue('captionTextColor', 'desktop', atts),
			captionBackgroundColor: getSettingValue('captionBackgroundColor', 'desktop', atts),
			captionSpacing: getSettingValue('captionSpacing', currentDevice, atts),

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

	const mediaPlaceholder = <MediaPlaceholder
		onSelect = {
			( el ) => {
				setAttributes( { image: el.url } );
			}
		}
		allowedTypes = { [ 'image' ] }
		multiple = { false }
		labels = { { title: 'The Image' } }
	>
		"extra content"
	</MediaPlaceholder>;

	return (
		<>
			<InspectorControls>
				{
					currentTab === 'general' && (
						<Panel>
							<PanelBody 
								className="panel-id-content"
								title={ __( 'Content', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'content', true ) }
								onToggle={ () => onTogglePanelBodyHandler( 'content' ) }
							>
								<ImageUpload
									label=""
									settingId="image"
									attributes={ atts }
									setAttributes={ setAttributes }
									attributesDefaults={ attributesDefaults }
									setUpdateCss={ setUpdateCss }
									subFields={['image', 'disableLazyLoad', 'size', 'caption', 'captionText']}
								/>
								<Link
									label=""
									settingId="link"
									attributes={ atts }
									setAttributes={ setAttributes }
									attributesDefaults={ attributesDefaults }
									setUpdateCss={ setUpdateCss }
									subFields={['linkUrl', 'linkTarget', 'linkNoFollow']}
								/>
							</PanelBody>
						</Panel>
					)
				}
				{
					currentTab === 'style' && (
						<Panel>
							<PanelBody 
								className="panel-id-content"
								title={ __( 'Content', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'content', true ) }
								onToggle={ () => onTogglePanelBodyHandler( 'content' ) }
							>
								<RadioButtons 
									label={ __( 'Alignment', 'athemes-blocks' ) }
									defaultValue={ alignment }
									options={[
										{ label: __( 'Flex Start', 'athemes-blocks' ), value: 'flex-start' },
										{ label: __( 'Center', 'athemes-blocks' ), value: 'center' },
										{ label: __( 'Flex End', 'athemes-blocks' ), value: 'flex-end' },
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
								<RangeSlider 
									label={ __( 'Width', 'athemes-blocks' ) }
									defaultValue={ width }
									defaultUnit={ getSettingUnit( 'width', currentDevice, atts ) }
									min={ {
										px: 1,
										em: 0.1,
										rem: 0.1,
										percent: 1,
										vw: 1,
										vh: 1,
									} }
									max={ {
										px: 2100,
										em: 100,
										rem: 100,
										percent: 100,
										vw: 100,
										vh: 100,
									} }
									responsive={ true }
									reset={ true }
									units={['px', '%', 'vw', 'vh']}
									onChange={ ( value ) => {
										updateAttribute( 'width', {
											value: value,
											unit: getSettingUnit( 'width', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'width', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'width', {
											value: getSettingValue( 'width', currentDevice, atts ),
											unit: value
										}, currentDevice );

										setUpdateCss( { settingId: 'width', value: value } );
									} }
									onClickReset={ () => {
										updateAttribute( 'width', {
											value: getSettingDefaultValue( 'width', currentDevice, attributesDefaults ),
											unit: getSettingDefaultUnit( 'width', currentDevice, attributesDefaults )
										}, currentDevice ); 

										setUpdateCss( { settingId: 'width', value: getSettingDefaultValue( 'width', currentDevice, attributesDefaults ) } );
									} }
								/>
								<RangeSlider 
									label={ __( 'Max Width', 'athemes-blocks' ) }
									defaultValue={ maxWidth }
									defaultUnit={ getSettingUnit( 'maxWidth', currentDevice, atts ) }
									min={ {
										px: 1,
										em: 0.1,
										rem: 0.1,
										percent: 1,
										vw: 1,
										vh: 1,
									} }
									max={ {
										px: 2100,
										em: 100,
										rem: 100,
										percent: 100,
										vw: 100,
										vh: 100,
									} }
									responsive={ true }
									reset={ true }
									units={['px', '%', 'vw', 'vh']}
									onChange={ ( value ) => {
										updateAttribute( 'maxWidth', {
											value: value,
											unit: getSettingUnit( 'maxWidth', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'maxWidth', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'maxWidth', {
											value: getSettingValue( 'maxWidth', currentDevice, atts ),
											unit: value
										}, currentDevice );

										setUpdateCss( { settingId: 'maxWidth', value: value } );
									} }
									onClickReset={ () => {
										updateAttribute( 'maxWidth', {
											value: getSettingDefaultValue( 'maxWidth', currentDevice, attributesDefaults ),
											unit: getSettingDefaultUnit( 'maxWidth', currentDevice, attributesDefaults )
										}, currentDevice ); 

										setUpdateCss( { settingId: 'maxWidth', value: getSettingDefaultValue( 'maxWidth', currentDevice, attributesDefaults ) } );
									} }
								/>
								<RangeSlider 
									label={ __( 'Height', 'athemes-blocks' ) }
									defaultValue={ height }
									defaultUnit={ getSettingUnit( 'height', currentDevice, atts ) }
									min={ {
										px: 1,
										em: 0.1,
										rem: 0.1,
										percent: 1,
										vw: 1,
										vh: 1,
									} }
									max={ {
										px: 1500,
										em: 100,
										rem: 100,
										percent: 100,
										vw: 100,
										vh: 100,
									} }
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
											value: getSettingValue( 'height', currentDevice, atts ),
											unit: value
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
								<Select
									label={ __( 'Hover Animation', 'athemes-blocks' ) }
									options={[
										{ label: __( 'None', 'athemes-blocks' ), value: 'none' },
										{ label: __( 'Fade In', 'athemes-blocks' ), value: 'fade-in' },
										{ label: __( 'Slide In', 'athemes-blocks' ), value: 'slide-in' },
										{ label: __( 'Zoom In', 'athemes-blocks' ), value: 'zoom-in' },
										{ label: __( 'Rotate In', 'athemes-blocks' ), value: 'rotate-in' },
										{ label: __( 'Flip In', 'athemes-blocks' ), value: 'flip-in' },
										{ label: __( 'Slide In', 'athemes-blocks' ), value: 'slide-in' },
									]}
									value={ hoverAnimation }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ hoverAnimation: value });
									} }
									onClickReset={ () => {
										setAttributes({ hoverAnimation: getSettingDefaultValue( 'hoverAnimation', '', attributesDefaults ) });
									} }
								/>
							</PanelBody>
							{
								caption && (
									<PanelBody 
										className="panel-id-caption"
										title={ __( 'Caption', 'athemes-blocks' ) } 
										initialOpen={false}
										opened={ isPanelOpened( 'caption' ) }
										onToggle={ () => onTogglePanelBodyHandler( 'caption' ) }
									>
										<RadioButtons 
											label={ __( 'Alignment', 'athemes-blocks' ) }
											defaultValue={ captionAlignment }
											options={[
												{ label: __( 'Flex Start', 'athemes-blocks' ), value: 'flex-start' },
												{ label: __( 'Center', 'athemes-blocks' ), value: 'center' },
												{ label: __( 'Flex End', 'athemes-blocks' ), value: 'flex-end' },
											]}
											responsive={true}
											reset={true}
											onChange={ ( value ) => {
												updateAttribute( 'captionAlignment', {
													value: value
												}, currentDevice );

												setUpdateCss( { settingId: 'captionAlignment', value: value } );
											} }
											onClickReset={ () => {
												updateAttribute( 'captionAlignment', {
													value: getSettingDefaultValue( 'captionAlignment', currentDevice, attributesDefaults )
												}, currentDevice );
												
												setUpdateCss( { settingId: 'captionAlignment', value: getSettingDefaultValue( 'captionAlignment', currentDevice, attributesDefaults ) } );
											} }
										/>
										<ColorPicker
											label={ __( 'Color', 'athemes-blocks' ) }
											value={ captionTextColor }
											hover={true}
											responsive={false}
											reset={true}
											defaultStateOnChangeComplete={ ( value ) => {
												updateAttribute( 'captionTextColor', {
													value: {
														defaultState: value.hex,
														hoverState: getColorPickerSettingValue( 'captionTextColor', 'desktop', 'hoverState', atts )
													}
												}, 'desktop' );

												setUpdateCss( { settingId: 'captionTextColor', value: getColorPickerSettingValue( 'captionTextColor', 'desktop', 'defaultState', atts ) } );
											} }
											hoverStateOnChangeComplete={ ( value ) => {
												updateAttribute( 'color', {
													value: {
														defaultState: getColorPickerSettingValue( 'captionTextColor', 'desktop', 'defaultState', atts ),
														hoverState: value.hex	
													}
												}, 'desktop' );
												
												setUpdateCss( { settingId: 'captionTextColor', value: getColorPickerSettingValue( 'captionTextColor', 'desktop', 'hoverState', atts ) } );
											} }
											onClickReset={ () => {
												updateAttribute( 'captionTextColor', {
													value: {
														defaultState: getColorPickerSettingDefaultValue( 'captionTextColor', 'desktop', 'defaultState', attributesDefaults ),
														hoverState: getColorPickerSettingDefaultValue( 'captionTextColor', 'desktop', 'hoverState', attributesDefaults )	
													}
												}, 'desktop' );
												
												setUpdateCss( { settingId: 'captionTextColor', value: getColorPickerSettingDefaultValue( 'captionTextColor', 'desktop', 'defaultState', attributesDefaults ) } );
											} }
										/>
										<ColorPicker
											label={ __( 'Background Color', 'athemes-blocks' ) }
											value={ captionBackgroundColor }
											hover={true}
											responsive={false}
											reset={true}
											defaultStateOnChangeComplete={ ( value ) => {
												updateAttribute( 'captionBackgroundColor', {
													value: {
														defaultState: value.hex,
														hoverState: getColorPickerSettingValue( 'captionBackgroundColor', 'desktop', 'hoverState', atts )
													}
												}, 'desktop' );

												setUpdateCss( { settingId: 'captionBackgroundColor', value: getColorPickerSettingValue( 'captionBackgroundColor', 'desktop', 'defaultState', atts ) } );
											} }
											hoverStateOnChangeComplete={ ( value ) => {
												updateAttribute( 'color', {
													value: {
														defaultState: getColorPickerSettingValue( 'captionBackgroundColor', 'desktop', 'defaultState', atts ),
														hoverState: value.hex	
													}
												}, 'desktop' );
												
												setUpdateCss( { settingId: 'captionBackgroundColor', value: getColorPickerSettingValue( 'captionBackgroundColor', 'desktop', 'hoverState', atts ) } );
											} }
											onClickReset={ () => {
												updateAttribute( 'captionBackgroundColor', {
													value: {
														defaultState: getColorPickerSettingDefaultValue( 'captionBackgroundColor', 'desktop', 'defaultState', attributesDefaults ),
														hoverState: getColorPickerSettingDefaultValue( 'captionBackgroundColor', 'desktop', 'hoverState', attributesDefaults )	
													}
												}, 'desktop' );
												
												setUpdateCss( { settingId: 'captionBackgroundColor', value: getColorPickerSettingDefaultValue( 'captionBackgroundColor', 'desktop', 'defaultState', attributesDefaults ) } );
											} }
										/>
										<Typography
											label={ __( 'Typography', 'athemes-blocks' ) }
											settingId="captionTypography"
											attributes={ atts }
											setAttributes={ setAttributes }
											attributesDefaults={ attributesDefaults }
											setUpdateCss={ setUpdateCss }
											subFields={['fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'textTransform', 'textDecoration', 'lineHeight', 'letterSpacing']}
										/>
										<RangeSlider 
											label={ __( 'Spacing', 'athemes-blocks' ) }
											defaultValue={ captionSpacing }
											defaultUnit={ getSettingUnit( 'captionSpacing', currentDevice, atts ) }
											min={ 0 }
											max={ 200 }
											responsive={ true }
											reset={ true }
											units={['px', '%', 'vw']}
											onChange={ ( value ) => {
												updateAttribute( 'captionSpacing', {
													value: value,
													unit: getSettingUnit( 'captionSpacing', currentDevice, atts )
												}, currentDevice );

												setUpdateCss( { settingId: 'captionSpacing', value: value } );
											} }
											onChangeUnit={ ( value ) => {
												updateAttribute( 'captionSpacing', {
													value: captionSpacing,
													unit: value,
												}, currentDevice );

												setUpdateCss( { settingId: 'captionSpacing', value: value } );								
											} }
											onClickReset={ () => {
												updateAttribute( 'captionSpacing', {
													value: getSettingDefaultValue( 'captionSpacing', currentDevice, attributesDefaults ),
													unit: getSettingDefaultUnit( 'captionSpacing', currentDevice, attributesDefaults )
												}, currentDevice );							

												setUpdateCss( { settingId: 'captionSpacing', value: getSettingDefaultValue( 'captionSpacing', currentDevice, attributesDefaults ) } );								
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
				let blockPropsClassName = `at-block at-block-image`;

				let blockProps = useBlockProps({
					className: blockPropsClassName
				});

				// Block HTML tag.
				let Tag = 'div';

				// Link.
				const linkUrl = getInnerSettingValue( 'link', 'linkUrl', '', atts );
				const linkTarget = getInnerSettingValue( 'link', 'linkTarget', '', atts );
				const linkNoFollow = getInnerSettingValue( 'link', 'linkNoFollow', '', atts );

				if (linkUrl) {
					Tag = 'a';
					blockProps.href = linkUrl;
					
					if (linkTarget) {
						blockProps.target = '_blank';
					}

					if (linkNoFollow) {
						blockProps.rel = 'nofollow';
					}
				}

				// Image.
				const image = getInnerSettingValue( 'image', 'image', '', atts );
				const ImageHTML = () => {
					return (
						<div className="at-block-image__image">
							<img src={ image.url } alt={ image.alt } />
						</div>
					)
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
					<>
						<Tag { ...blockProps } ref={useMergeRefs([blockProps.ref, blockRef])}>
							<ImageHTML />
						</Tag>
					</>
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