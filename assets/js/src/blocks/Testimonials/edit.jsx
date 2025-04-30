import { __ } from '@wordpress/i18n';
import { useRefEffect } from '@wordpress/compose';
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
import { Border } from '../../block-editor/controls/border/border';
import { Dimensions } from '../../block-editor/controls/dimensions/dimensions';

import { createAttributeUpdater, createInnerControlAttributeUpdater } from '../../utils/block-attributes';
import { withTabsNavigation } from '../../block-editor/hoc/with-tabs-navigation';
import { withAdvancedTab } from '../../block-editor/hoc/with-advanced-tab';
import { withDynamicCSS } from '../../block-editor/hoc/with-dynamic-css';
import { withPersistentPanelToggle } from '../../block-editor/hoc/with-persistent-panel-toggle';
import { withGoogleFonts } from '../../block-editor/hoc/with-google-fonts';

import { blockPropsWithAnimation } from '../../utils/block-animations';
import { getSettingValue, getSettingUnit, getSettingDefaultValue, getSettingDefaultUnit, getInnerSettingValue, getColorPickerSettingDefaultValue, getColorPickerSettingValue, getDimensionsSettingValue, getDimensionsSettingUnit, getDimensionsSettingDefaultValue, getDimensionsSettingDirectionsValue, getDimensionsSettingConnectValue } from '../../utils/settings';

const attributesDefaults = TestimonialsBlockData.attributes;

const Edit = (props) => {
	const { attributes, setAttributes, clientId, setUpdateCss, isPanelOpened, onTogglePanelBodyHandler } = props;
	const { content } = attributes;
	const atts = attributes;
	const updateAttribute = createAttributeUpdater(attributes, setAttributes);
	const updateImageInnerControlAttribute = createInnerControlAttributeUpdater('image', attributes, setAttributes);
	const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());
	const currentTab = useSelect((select) => select('persistent-tabs-store').getCurrentTab());

	const {
		// General.
		alignment,
		testimonialsAmount,
		testimonialsAmountMax,
		columns,
		columnsGap,
		imagePosition,
		imageStyle,
		imageSize,
		imageWidth,
		carouselPauseOnHover,
		carouselAutoplay,
		carouselAutoplaySpeed,
		carouselLoop,
		carouselTransitionDuration,
		carouselNavigation,
		
		// Style.
		contentColor,
		contentBottomSpacing,
		nameColor,
		nameBottomSpacing,
		companyColor,
		arrowSize,
		arrowBorderSize,
		arrowBorderRadius,
		dotsVerticalSpacing,
		navigationColor,
		cardBackgroundColor,
		cardPadding,

		// Advanced.
		hideOnDesktop,
		hideOnTablet,
		hideOnMobile,
	} = useMemo(() => {
		return {
			// General.
			alignment: getSettingValue('alignment', currentDevice, atts),
			testimonialsAmount: atts.testimonialsAmount,
			testimonialsAmountMax: athemesBlocksGeneralData ? athemesBlocksGeneralData.testimonialsAmount : 40,
			columns: getSettingValue('columns', currentDevice, atts),
			imagePosition: atts.imagePosition,
			imageStyle: atts.imageStyle,
			imageSize: atts.imageSize,
			imageWidth: getSettingValue('imageWidth', currentDevice, atts),
			carouselPauseOnHover: atts.carouselPauseOnHover,
			carouselAutoplay: atts.carouselAutoplay,
			carouselAutoplaySpeed: atts.carouselAutoplaySpeed,
			carouselLoop: atts.carouselLoop,
			carouselTransitionDuration: atts.carouselTransitionDuration,
			carouselNavigation: atts.carouselNavigation,

			// Style.
			contentColor: atts.contentColor,
			contentBottomSpacing: getSettingValue('contentBottomSpacing', currentDevice, atts),
			nameColor: atts.nameColor,
			nameBottomSpacing: getSettingValue('nameBottomSpacing', currentDevice, atts),
			companyColor: atts.companyColor,
			arrowSize: getSettingValue('arrowSize', 'desktop', atts),
			arrowBorderSize: getSettingValue('arrowBorderSize', 'desktop', atts),
			arrowBorderRadius: getSettingValue('arrowBorderRadius', 'desktop', atts),
			dotsVerticalSpacing: getSettingValue('dotsVerticalSpacing', currentDevice, atts),
			navigationColor: getSettingValue('navigationColor', 'desktop', atts),
			cardBackgroundColor: getSettingValue('cardBackgroundColor', 'desktop', atts),
			columnsGap: getSettingValue('columnsGap', currentDevice, atts),
			cardPadding: getDimensionsSettingValue('cardPadding', currentDevice, atts),

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

	let blockPropsClassName = `at-block at-block-testimonials`;

	let blockProps = useBlockProps({
		className: blockPropsClassName
	});

	// Prevent the default click event handler for the block if the html tag is 'a'.
	const ref = useRefEffect( ( node ) => {
		if (node === null) {
			return;
		}

		const handleClick = (event) => {
			event.preventDefault();
		};

		if (node) {
			node.addEventListener('click', handleClick);
		}

		return () => {
			if (node) {
				node.removeEventListener('click', handleClick);
			}
		};
	}, []);

	// Merge the refs.
	const mergedRefs = useMergeRefs([blockProps.ref, ref]);

	return (
		<>
			<InspectorControls>
				{
					currentTab === 'general' && (
						<Panel>
							<PanelBody 
								title={ __( 'Content', 'athemes-blocks' ) }
								initialOpen={false}
								opened={ isPanelOpened( 'content', true ) }
								onToggle={ () => onTogglePanelBodyHandler( 'content' ) }
							>
								<RadioButtons 
									label={ __( 'Alignment', 'athemes-blocks' ) }
									defaultValue={ alignment }
									options={[
										{ label: __( 'Start', 'athemes-blocks' ), value: 'flex-start' },
										{ label: __( 'Center', 'athemes-blocks' ), value: 'center' },
										{ label: __( 'End', 'athemes-blocks' ), value: 'flex-end' },
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
									label={ __( 'Number of Testimonials', 'athemes-blocks' ) }
									defaultValue={ testimonialsAmount }
									min={ 1 }
									max={ testimonialsAmountMax }
									responsive={false}
									reset={true}
									units={false}
									onChange={ ( value ) => {
										setAttributes({ testimonialsAmount: value });
									} }
									onClickReset={ () => {
										setAttributes({ testimonialsAmount: getSettingDefaultValue( 'testimonialsAmount', '', attributesDefaults ) });
									} }
								/>
								<RangeSlider 
									label={ __( 'Columns', 'athemes-blocks' ) }
									defaultValue={ columns }
									defaultUnit={ getSettingUnit( 'columns', currentDevice, atts ) }
									min={ 1 }
									max={ testimonialsAmount }
									responsive={true}
									reset={true}
									units={false}
									onChange={ ( value ) => {
										updateAttribute( 'columns', {
											value: value,
											unit: getSettingUnit( 'columns', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'columns', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'columns', {
											value: columns,
											unit: value,
										}, currentDevice );

										setUpdateCss( { settingId: 'columns', value: value } );								
									} }
									onClickReset={ () => {
										updateAttribute( 'columns', {
											value: getSettingDefaultValue( 'columns', currentDevice, attributesDefaults ),
											unit: getSettingDefaultUnit( 'columns', currentDevice, attributesDefaults )
										}, currentDevice );							

										setUpdateCss( { settingId: 'columns', value: getSettingDefaultValue( 'columns', currentDevice, attributesDefaults ) } );								
									} }
								/>
								<RangeSlider 
									label={ __( 'Columns Gap', 'athemes-blocks' ) }
									defaultValue={ columnsGap }
									defaultUnit={ getSettingUnit( 'columnsGap', currentDevice, atts ) }
									min={ 1 }
									max={ {
										px: 150,
										em: 20,
										rem: 20
									} }
									responsive={false}
									reset={true}
									units={['px', 'em', 'rem']}
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
							</PanelBody>
							<PanelBody 
								title={ __( 'Image', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'image' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'image' ) }
							>
								{
									Array.from({ length: testimonialsAmount }, (_, index) => (
										<ImageUpload
											key={index}
											label=""
											settingId={ `image${index + 1}`	 }
											attributes={ atts }
											setAttributes={ setAttributes }
											attributesDefaults={ attributesDefaults }
											setUpdateCss={ setUpdateCss }
											subFields={['image']}
										/>
									))
								}
								<RadioButtons 
									label={ __( 'Position', 'athemes-blocks' ) }
									defaultValue={ imagePosition }
									options={[
										{ label: __( 'Top', 'athemes-blocks' ), value: 'top' },
										{ label: __( 'Bottom', 'athemes-blocks' ), value: 'bottom' },
										{ label: __( 'Left', 'athemes-blocks' ), value: 'left' },
										{ label: __( 'Right', 'athemes-blocks' ), value: 'right' },
									]}
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ imagePosition: value });
									} }
									onClickReset={ () => {
										setAttributes({ imagePosition: getSettingDefaultValue( 'imagePosition', '', attributesDefaults ) });
									} }
								/>
								<RadioButtons 
									label={ __( 'Style', 'athemes-blocks' ) }
									defaultValue={ imageStyle }
									options={[
										{ label: __( 'Normal', 'athemes-blocks' ), value: 'normal' },
										{ label: __( 'Circle', 'athemes-blocks' ), value: 'circle' },
										{ label: __( 'Square', 'athemes-blocks' ), value: 'square' },
									]}
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ imageStyle: value });
									} }
									onClickReset={ () => {
										setAttributes({ imageStyle: getSettingDefaultValue( 'imageStyle', '', attributesDefaults ) });
									} }
								/>
								<Select
									label={ __( 'Size', 'athemes-blocks' ) }
									options={[
										{ label: __( 'Thumbnail', 'athemes-blocks' ), value: 'thumbnail' },
										{ label: __( 'Medium', 'athemes-blocks' ), value: 'medium' },
										{ label: __( 'Large', 'athemes-blocks' ), value: 'large' },
										{ label: __( 'Full', 'athemes-blocks' ), value: 'full' },
									]}
									value={ imageSize }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ imageSize: value });
									} }
									onClickReset={ () => {
										setAttributes({ imageSize: getSettingDefaultValue( 'imageSize', '', attributesDefaults ) });
									} }
								/>
								<RangeSlider 
									label={ __( 'Width', 'athemes-blocks' ) }
									defaultValue={ imageWidth }
									defaultUnit={ getSettingUnit( 'imageWidth', currentDevice, atts ) }
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
										updateAttribute( 'imageWidth', {
											value: value,
											unit: getSettingUnit( 'imageWidth', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'imageWidth', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'imageWidth', {
											value: getSettingValue( 'imageWidth', currentDevice, atts ),
											unit: value
										}, currentDevice );

										setUpdateCss( { settingId: 'imageWidth', value: value } );
									} }
									onClickReset={ () => {
										updateAttribute( 'imageWidth', {
											value: getSettingDefaultValue( 'imageWidth', currentDevice, attributesDefaults ),
											unit: getSettingDefaultUnit( 'imageWidth', currentDevice, attributesDefaults )
										}, currentDevice ); 

										setUpdateCss( { settingId: 'imageWidth', value: getSettingDefaultValue( 'imageWidth', currentDevice, attributesDefaults ) } );
									} }
								/>
							</PanelBody>
							<PanelBody 
								title={ __( 'Carousel', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'carousel' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'carousel' ) }
							>
								<SwitchToggle
									label={ __( 'Pause on hover', 'athemes-blocks' ) }
									value={ carouselPauseOnHover }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ carouselPauseOnHover: value });
									} }
									onClickReset={ () => {
										setAttributes({ carouselPauseOnHover: getSettingDefaultValue( 'carouselPauseOnHover', '', attributesDefaults ) });
									} }
								/>
								<SwitchToggle
									label={ __( 'Autoplay', 'athemes-blocks' ) }
									value={ carouselAutoplay }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ carouselAutoplay: value });
									} }
									onClickReset={ () => {
										setAttributes({ carouselAutoplay: getSettingDefaultValue( 'carouselAutoplay', '', attributesDefaults ) });
									} }
								/>
								{
									carouselAutoplay && (
										<RangeSlider 
											label={ __( 'Autoplay speed (ms)', 'athemes-blocks' ) }
											defaultValue={ carouselAutoplaySpeed }
											min={ 1000 }
											max={ 10000 }
											responsive={false}
											reset={true}
											units={false}
											onChange={ ( value ) => {
												setAttributes({ carouselAutoplaySpeed: value });
											} }
											onClickReset={ () => {
												setAttributes({ carouselAutoplaySpeed: getSettingDefaultValue( 'carouselAutoplaySpeed', '', attributesDefaults ) });
											} }
										/>
									)
								}
								<SwitchToggle
									label={ __( 'Loop', 'athemes-blocks' ) }
									value={ carouselLoop }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ carouselLoop: value });
									} }
									onClickReset={ () => {
										setAttributes({ carouselLoop: getSettingDefaultValue( 'carouselLoop', '', attributesDefaults ) });
									} }
								/>
								<RangeSlider 
									label={ __( 'Transition duration (ms)', 'athemes-blocks' ) }
									defaultValue={ carouselTransitionDuration }
									min={ 100 }
									max={ 1000 }
									responsive={false}
									reset={true}
									units={false}
									onChange={ ( value ) => {
										setAttributes({ carouselTransitionDuration: value });
									} }
									onClickReset={ () => {
										setAttributes({ carouselTransitionDuration: getSettingDefaultValue( 'carouselTransitionDuration', '', attributesDefaults ) });
									} }
								/>
								<RadioButtons 
									label={ __( 'Navigation', 'athemes-blocks' ) }
									defaultValue={ carouselNavigation }
									options={[
										{ label: __( 'Arrows', 'athemes-blocks' ), value: 'arrows' },
										{ label: __( 'Dots', 'athemes-blocks' ), value: 'dots' },
										{ label: __( 'Both', 'athemes-blocks' ), value: 'both' },
									]}
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ carouselNavigation: value });
									} }
									onClickReset={ () => {
										setAttributes({ carouselNavigation: getSettingDefaultValue( 'carouselNavigation', '', attributesDefaults ) });
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
								title={ __( 'Content', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'content', true ) }
								onToggle={ () => onTogglePanelBodyHandler( 'content' ) }
							>
								<ColorPicker
									label={ __( 'Color', 'athemes-blocks' ) }
									value={ contentColor }
									hover={false}
									responsive={false}
									reset={true}
									defaultStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'contentColor', {
											value: {
												defaultState: value.hex,
												hoverState: getColorPickerSettingValue( 'contentColor', 'desktop', 'hoverState', atts )
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'contentColor', value: getColorPickerSettingValue( 'contentColor', 'desktop', 'defaultState', atts ) } );
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'contentColor', {
											value: {
												defaultState: getColorPickerSettingValue( 'contentColor', 'desktop', 'defaultState', atts ),
												hoverState: value.hex	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'contentColor', value: getColorPickerSettingValue( 'contentColor', 'desktop', 'hoverState', atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'contentColor', {
											value: {
												defaultState: getColorPickerSettingDefaultValue( 'contentColor', 'desktop', 'defaultState', attributesDefaults ),
												hoverState: getColorPickerSettingDefaultValue( 'contentColor', 'desktop', 'hoverState', attributesDefaults )	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'contentColor', value: getColorPickerSettingDefaultValue( 'contentColor', 'desktop', 'defaultState', attributesDefaults ) } );
									} }
								/>
								<Typography
									label={ __( 'Typography', 'athemes-blocks' ) }
									settingId="contentTypography"
									attributes={ atts }
									setAttributes={ setAttributes }
									attributesDefaults={ attributesDefaults }
									setUpdateCss={ setUpdateCss }
									subFields={['fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'textTransform', 'textDecoration', 'lineHeight', 'letterSpacing']}
								/>
								<RangeSlider 
									label={ __( 'Bottom Spacing', 'athemes-blocks' ) }
									defaultValue={ contentBottomSpacing }
									defaultUnit={ getSettingUnit( 'contentBottomSpacing', currentDevice, atts ) }
									min={ 1 }
									max={ 150 }
									responsive={true}
									reset={true}
									units={['px', 'em', 'rem']}
									onChange={ ( value ) => {
										updateAttribute( 'contentBottomSpacing', {
											value: value,
											unit: getSettingUnit( 'contentBottomSpacing', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'contentBottomSpacing', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'contentBottomSpacing', {
											value: contentBottomSpacing,
											unit: value,
										}, currentDevice );

										setUpdateCss( { settingId: 'contentBottomSpacing', value: value } );								
									} }
									onClickReset={ () => {
										updateAttribute( 'contentBottomSpacing', {
											value: getSettingDefaultValue( 'contentBottomSpacing', currentDevice, attributesDefaults ),
											unit: getSettingDefaultUnit( 'contentBottomSpacing', currentDevice, attributesDefaults )
										}, currentDevice );							

										setUpdateCss( { settingId: 'contentBottomSpacing', value: getSettingDefaultValue( 'contentBottomSpacing', currentDevice, attributesDefaults ) } );								
									} }
								/>
							</PanelBody>
							<PanelBody 
								title={ __( 'Name', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'name' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'name' ) }
							>
								<ColorPicker
									label={ __( 'Color', 'athemes-blocks' ) }
									value={ nameColor }
									hover={false}
									responsive={false}
									reset={true}
									defaultStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'nameColor', {
											value: {
												defaultState: value.hex,
												hoverState: getColorPickerSettingValue( 'nameColor', 'desktop', 'hoverState', atts )
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'nameColor', value: getColorPickerSettingValue( 'nameColor', 'desktop', 'defaultState', atts ) } );
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'nameColor', {
											value: {
												defaultState: getColorPickerSettingValue( 'nameColor', 'desktop', 'defaultState', atts ),
												hoverState: value.hex	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'nameColor', value: getColorPickerSettingValue( 'nameColor', 'desktop', 'hoverState', atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'nameColor', {
											value: {
												defaultState: getColorPickerSettingDefaultValue( 'nameColor', 'desktop', 'defaultState', attributesDefaults ),
												hoverState: getColorPickerSettingDefaultValue( 'nameColor', 'desktop', 'hoverState', attributesDefaults )	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'nameColor', value: getColorPickerSettingDefaultValue( 'nameColor', 'desktop', 'defaultState', attributesDefaults ) } );
									} }
								/>
								<Typography
									label={ __( 'Typography', 'athemes-blocks' ) }
									settingId="nameTypography"
									attributes={ atts }
									setAttributes={ setAttributes }
									attributesDefaults={ attributesDefaults }
									setUpdateCss={ setUpdateCss }
									subFields={['fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'textTransform', 'textDecoration', 'lineHeight', 'letterSpacing']}
								/>
								<RangeSlider 
									label={ __( 'Bottom Spacing', 'athemes-blocks' ) }
									defaultValue={ nameBottomSpacing }
									defaultUnit={ getSettingUnit( 'nameBottomSpacing', currentDevice, atts ) }
									min={ 1 }
									max={ 150 }
									responsive={true}
									reset={true}
									units={['px', 'em', 'rem']}
									onChange={ ( value ) => {
										updateAttribute( 'nameBottomSpacing', {
											value: value,
											unit: getSettingUnit( 'nameBottomSpacing', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'nameBottomSpacing', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'nameBottomSpacing', {
											value: nameBottomSpacing,
											unit: value,
										}, currentDevice );

										setUpdateCss( { settingId: 'nameBottomSpacing', value: value } );								
									} }
									onClickReset={ () => {
										updateAttribute( 'nameBottomSpacing', {
											value: getSettingDefaultValue( 'nameBottomSpacing', currentDevice, attributesDefaults ),
											unit: getSettingDefaultUnit( 'nameBottomSpacing', currentDevice, attributesDefaults )
										}, currentDevice );							

										setUpdateCss( { settingId: 'nameBottomSpacing', value: getSettingDefaultValue( 'nameBottomSpacing', currentDevice, attributesDefaults ) } );								
									} }
								/>
							</PanelBody>
							<PanelBody 
								title={ __( 'Company', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'company' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'company' ) }
							>
								<ColorPicker
									label={ __( 'Color', 'athemes-blocks' ) }
									value={ companyColor }
									hover={false}
									responsive={false}
									reset={true}
									defaultStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'companyColor', {
											value: {
												defaultState: value.hex,
												hoverState: getColorPickerSettingValue( 'companyColor', 'desktop', 'hoverState', atts )
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'companyColor', value: getColorPickerSettingValue( 'companyColor', 'desktop', 'defaultState', atts ) } );
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'companyColor', {
											value: {
												defaultState: getColorPickerSettingValue( 'companyColor', 'desktop', 'defaultState', atts ),
												hoverState: value.hex	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'companyColor', value: getColorPickerSettingValue( 'companyColor', 'desktop', 'hoverState', atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'companyColor', {
											value: {
												defaultState: getColorPickerSettingDefaultValue( 'companyColor', 'desktop', 'defaultState', attributesDefaults ),
												hoverState: getColorPickerSettingDefaultValue( 'companyColor', 'desktop', 'hoverState', attributesDefaults )	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'companyColor', value: getColorPickerSettingDefaultValue( 'companyColor', 'desktop', 'defaultState', attributesDefaults ) } );
									} }
								/>
								<Typography
									label={ __( 'Typography', 'athemes-blocks' ) }
									settingId="companyTypography"
									attributes={ atts }
									setAttributes={ setAttributes }
									attributesDefaults={ attributesDefaults }
									setUpdateCss={ setUpdateCss }
									subFields={['fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'textTransform', 'textDecoration', 'lineHeight', 'letterSpacing']}
								/>
							</PanelBody>
							<PanelBody 
								title={ __( 'Navigation', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'navigation' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'navigation' ) }
							>
								<RangeSlider 
									label={ __( 'Arrow Size', 'athemes-blocks' ) }
									defaultValue={ arrowSize }
									defaultUnit={ getSettingUnit( 'arrowSize', 'desktop', atts ) }
									min={ 1 }
									max={ {
										px: 150,
										em: 20,
										rem: 20
									} }
									responsive={false}
									reset={true}
									units={['px', 'em', 'rem']}
									onChange={ ( value ) => {
										updateAttribute( 'arrowSize', {
											value: value,
											unit: getSettingUnit( 'arrowSize', 'desktop', atts )
										}, 'desktop' );

										setUpdateCss( { settingId: 'arrowSize', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'arrowSize', {
											value: arrowSize,
											unit: value,
										}, 'desktop' );

										setUpdateCss( { settingId: 'arrowSize', value: value } );								
									} }
									onClickReset={ () => {
										updateAttribute( 'arrowSize', {
											value: getSettingDefaultValue( 'arrowSize', 'desktop', attributesDefaults ),
											unit: getSettingDefaultUnit( 'arrowSize', 'desktop', attributesDefaults )
										}, 'desktop' );							

										setUpdateCss( { settingId: 'arrowSize', value: getSettingDefaultValue( 'arrowSize', 'desktop', attributesDefaults ) } );								
									} }
								/>
								<RangeSlider 
									label={ __( 'Arrow Border Size', 'athemes-blocks' ) }
									defaultValue={ arrowBorderSize }
									defaultUnit={ getSettingUnit( 'arrowBorderSize', 'desktop', atts ) }
									min={ 1 }
									max={ 10 }
									responsive={false}
									reset={true}
									units={['px']}
									onChange={ ( value ) => {
										updateAttribute( 'arrowBorderSize', {
											value: value,
											unit: getSettingUnit( 'arrowBorderSize', 'desktop', atts )
										}, 'desktop' );

										setUpdateCss( { settingId: 'arrowBorderSize', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'arrowBorderSize', {
											value: arrowBorderSize,
											unit: value,
										}, 'desktop' );

										setUpdateCss( { settingId: 'arrowBorderSize', value: value } );								
									} }
									onClickReset={ () => {
										updateAttribute( 'arrowBorderSize', {
											value: getSettingDefaultValue( 'arrowBorderSize', 'desktop', attributesDefaults ),
											unit: getSettingDefaultUnit( 'arrowBorderSize', 'desktop', attributesDefaults )
										}, 'desktop' );							

										setUpdateCss( { settingId: 'arrowBorderSize', value: getSettingDefaultValue( 'arrowBorderSize', 'desktop', attributesDefaults ) } );								
									} }
								/>
								<RangeSlider 
									label={ __( 'Arrow Border Radius', 'athemes-blocks' ) }
									defaultValue={ arrowBorderRadius }
									defaultUnit={ getSettingUnit( 'arrowBorderRadius', 'desktop', atts ) }
									min={ 1 }
									max={ 100 }
									responsive={false}
									reset={true}
									units={['px']}
									onChange={ ( value ) => {
										updateAttribute( 'arrowBorderRadius', {
											value: value,
											unit: getSettingUnit( 'arrowBorderRadius', 'desktop', atts )
										}, 'desktop' );

										setUpdateCss( { settingId: 'arrowBorderRadius', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'arrowBorderRadius', {
											value: arrowBorderRadius,
											unit: value,
										}, 'desktop' );

										setUpdateCss( { settingId: 'arrowBorderRadius', value: value } );								
									} }
									onClickReset={ () => {
										updateAttribute( 'arrowBorderRadius', {
											value: getSettingDefaultValue( 'arrowBorderRadius', 'desktop', attributesDefaults ),
											unit: getSettingDefaultUnit( 'arrowBorderRadius', 'desktop', attributesDefaults )
										}, 'desktop' );							

										setUpdateCss( { settingId: 'arrowBorderRadius', value: getSettingDefaultValue( 'arrowBorderRadius', 'desktop', attributesDefaults ) } );								
									} }
								/>
								<RangeSlider 
									label={ __( 'Dots Vertical Spacing', 'athemes-blocks' ) }
									defaultValue={ dotsVerticalSpacing }
									defaultUnit={ getSettingUnit( 'dotsVerticalSpacing', currentDevice, atts ) }
									min={ 1 }
									max={ {
										px: 150,
										em: 20,
										rem: 20
									} }
									responsive={false}
									reset={true}
									units={['px', 'em', 'rem']}
									onChange={ ( value ) => {
										updateAttribute( 'dotsVerticalSpacing', {
											value: value,
											unit: getSettingUnit( 'dotsVerticalSpacing', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'dotsVerticalSpacing', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'dotsVerticalSpacing', {
											value: dotsVerticalSpacing,
											unit: value,
										}, currentDevice );

										setUpdateCss( { settingId: 'dotsVerticalSpacing', value: value } );								
									} }
									onClickReset={ () => {
										updateAttribute( 'dotsVerticalSpacing', {
											value: getSettingDefaultValue( 'dotsVerticalSpacing', currentDevice, attributesDefaults ),
											unit: getSettingDefaultUnit( 'dotsVerticalSpacing', currentDevice, attributesDefaults )
										}, currentDevice );							

										setUpdateCss( { settingId: 'dotsVerticalSpacing', value: getSettingDefaultValue( 'dotsVerticalSpacing', currentDevice, attributesDefaults ) } );								
									} }
								/>
								<ColorPicker
									label={ __( 'Color', 'athemes-blocks' ) }
									value={ navigationColor }
									hover={false}
									responsive={false}
									reset={true}
									defaultStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'navigationColor', {
											value: {
												defaultState: value.hex,
												hoverState: getColorPickerSettingValue( 'navigationColor', 'desktop', 'hoverState', atts )
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'navigationColor', value: getColorPickerSettingValue( 'navigationColor', 'desktop', 'defaultState', atts ) } );
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'navigationColor', {
											value: {
												defaultState: getColorPickerSettingValue( 'navigationColor', 'desktop', 'defaultState', atts ),
												hoverState: value.hex	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'navigationColor', value: getColorPickerSettingValue( 'navigationColor', 'desktop', 'hoverState', atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'navigationColor', {
											value: {
												defaultState: getColorPickerSettingDefaultValue( 'navigationColor', 'desktop', 'defaultState', attributesDefaults ),
												hoverState: getColorPickerSettingDefaultValue( 'navigationColor', 'desktop', 'hoverState', attributesDefaults )	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'navigationColor', value: getColorPickerSettingDefaultValue( 'navigationColor', 'desktop', 'defaultState', attributesDefaults ) } );
									} }
								/>
							</PanelBody>
							<PanelBody 
								title={ __( 'Background', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'background' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'background' ) }
							>
								<ColorPicker
									label={ __( 'Color', 'athemes-blocks' ) }
									value={ cardBackgroundColor }
									hover={false}
									responsive={false}
									reset={true}
									defaultStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'cardBackgroundColor', {
											value: {
												defaultState: value.hex,
												hoverState: getColorPickerSettingValue( 'cardBackgroundColor', 'desktop', 'hoverState', atts )
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'cardBackgroundColor', value: getColorPickerSettingValue( 'cardBackgroundColor', 'desktop', 'defaultState', atts ) } );
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'cardBackgroundColor', {
											value: {
												defaultState: getColorPickerSettingValue( 'cardBackgroundColor', 'desktop', 'defaultState', atts ),
												hoverState: value.hex	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'cardBackgroundColor', value: getColorPickerSettingValue( 'cardBackgroundColor', 'desktop', 'hoverState', atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'cardBackgroundColor', {
											value: {
												defaultState: getColorPickerSettingDefaultValue( 'cardBackgroundColor', 'desktop', 'defaultState', attributesDefaults ),
												hoverState: getColorPickerSettingDefaultValue( 'cardBackgroundColor', 'desktop', 'hoverState', attributesDefaults )	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'cardBackgroundColor', value: getColorPickerSettingDefaultValue( 'cardBackgroundColor', 'desktop', 'defaultState', attributesDefaults ) } );
									} }
								/>
							</PanelBody>
							<PanelBody 
								title={ __( 'Border', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'border' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'border' ) }
							>
								<Border
									label=""
									settingId="cardBorder"
									attributes={ atts }
									setAttributes={ setAttributes }
									attributesDefaults={ attributesDefaults }
									setUpdateCss={ setUpdateCss }
									subFields={['borderStyle', 'borderWidth', 'borderRadius', 'borderColor']}
								/>
							</PanelBody>
							<PanelBody 
								title={ __( 'Spacing', 'athemes-blocks' ) } 
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
									value={ cardPadding }
									defaultUnit={ getSettingUnit('cardPadding', currentDevice, atts) }
									directionsValue={ getDimensionsSettingDirectionsValue('cardPadding', currentDevice, atts) }
									connect={ getDimensionsSettingConnectValue('cardPadding', currentDevice, atts) }
									responsive={ true }
									units={['px', '%', 'em', 'rem', 'vh', 'vw']}
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'cardPadding', {
											value: value.value,
											unit: getSettingUnit( 'cardPadding', currentDevice, atts ),
											connect: getDimensionsSettingConnectValue( 'cardPadding', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'cardPadding', value: value.value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'cardPadding', {
											value: getSettingValue( 'cardPadding', currentDevice, atts ),
											unit: value,
											connect: getDimensionsSettingConnectValue( 'cardPadding', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'cardPadding', value: getSettingValue( 'cardPadding', currentDevice, atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'cardPadding', getDimensionsSettingDefaultValue( 'cardPadding', currentDevice, attributesDefaults ), currentDevice );

										setUpdateCss( { settingId: 'cardPadding', value: getDimensionsSettingDefaultValue( 'cardPadding', currentDevice, attributesDefaults ) } );
									} }
								/>
							</PanelBody>
						</Panel>
					)
				}
			</InspectorControls>
			
			{(() => {
				// Block HTML tag.
				let Tag = 'div';

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
				
				// Display the image.
				return (
					<Tag {...blockProps} ref={mergedRefs}>
						asdasd
					</Tag>
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