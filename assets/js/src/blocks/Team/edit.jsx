import { __ } from '@wordpress/i18n';
import { useRefEffect } from '@wordpress/compose';
import { useEffect, useMemo, useRef, useState, useCallback } from '@wordpress/element';
import { useSelect, useDispatch } from "@wordpress/data";
import { Panel, PanelBody, ResizableBox } from '@wordpress/components';
import { InspectorControls, useBlockProps, InnerBlocks, RichText, MediaPlaceholder, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { useMergeRefs } from '@wordpress/compose';
import { alignNone } from '@wordpress/icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

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

import { icons } from '../../utils/icons';

const attributesDefaults = TeamBlockData.attributes;

const Edit = (props) => {
	const { attributes, setAttributes, clientId, setUpdateCss, isPanelOpened, onTogglePanelBodyHandler } = props;
	const { content } = attributes;
	const atts = attributes;
	const updateAttribute = createAttributeUpdater(attributes, setAttributes);
	const updateImageInnerControlAttribute = createInnerControlAttributeUpdater('image', attributes, setAttributes);
	const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());
	const currentTab = useSelect((select) => select('persistent-tabs-store').getCurrentTab());
	const swiperRef = useRef(null);
	const swiperInstanceRef = useRef(null);

	const {
		// General.
		alignment,
		verticalAlignment,
		teamMembersAmount,
		teamMembersAmountMax,
		columns,
		columnsGap,
		contentGap,
		imagePosition,
		imageStyle,
		imageSize,
		imageWidth,
		displayCarouselNavigation,
		carouselPauseOnHover,
		carouselAutoplay,
		carouselAutoplaySpeed,
		carouselLoop,
		carouselAutoHeight,
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
		arrowOffset,
		navigationColor,
		navigationBackgroundColor,
		navigationBorderColor,
		dotsColor,
		dotsOffset,
		cardBackgroundColor,
		cardPadding,
		cardMargin,
		// Advanced.
		hideOnDesktop,
		hideOnTablet,
		hideOnMobile,
	} = useMemo(() => {
		return {
			// General.
			alignment: atts.alignment,
			verticalAlignment: getSettingValue('verticalAlignment', 'desktop', atts),
			teamMembersAmount: atts.teamMembersAmount,
			teamMembersAmountMax: athemesBlocksGeneralData ? athemesBlocksGeneralData.teamMembersAmount : 40,
			columns: getSettingValue('columns', currentDevice, atts),
			imagePosition: atts.imagePosition,
			imageStyle: atts.imageStyle,
			imageSize: atts.imageSize,
			imageWidth: getSettingValue('imageWidth', currentDevice, atts),
			displayCarouselNavigation: atts.displayCarouselNavigation,
			carouselPauseOnHover: atts.carouselPauseOnHover,
			carouselAutoplay: atts.carouselAutoplay,
			carouselAutoplaySpeed: atts.carouselAutoplaySpeed,
			carouselLoop: atts.carouselLoop,
			carouselAutoHeight: atts.carouselAutoHeight,
			carouselTransitionDuration: atts.carouselTransitionDuration,
			carouselNavigation: atts.carouselNavigation,

			// Style.
			contentColor: getSettingValue('contentColor', 'desktop', atts),
			contentBottomSpacing: getSettingValue('contentBottomSpacing', 'desktop', atts),
			nameColor: getSettingValue('nameColor', 'desktop', atts),
			nameBottomSpacing: getSettingValue('nameBottomSpacing', 'desktop', atts),
			companyColor: getSettingValue('companyColor', 'desktop', atts),
			arrowSize: getSettingValue('arrowSize', 'desktop', atts),
			arrowBorderSize: getSettingValue('arrowBorderSize', 'desktop', atts),
			arrowBorderRadius: getSettingValue('arrowBorderRadius', 'desktop', atts),
			arrowOffset: getSettingValue('arrowOffset', 'desktop', atts),
			navigationColor: getSettingValue('navigationColor', 'desktop', atts),
			navigationBackgroundColor: getSettingValue('navigationBackgroundColor', 'desktop', atts),
			navigationBorderColor: getSettingValue('navigationBorderColor', 'desktop', atts),
			dotsColor: getSettingValue('dotsColor', 'desktop', atts),
			dotsOffset: getSettingValue('dotsOffset', 'desktop', atts),
			cardBackgroundColor: getSettingValue('cardBackgroundColor', 'desktop', atts),
			columnsGap: getSettingValue('columnsGap', currentDevice, atts),
			contentGap: getSettingValue('contentGap', currentDevice, atts),
			cardPadding: getDimensionsSettingValue('cardPadding', currentDevice, atts),
			cardMargin: getDimensionsSettingValue('cardMargin', currentDevice, atts),
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

	let blockPropsClassName = `at-block at-block-team`;

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

	// Swiper Options.
	const swiperOptions = {
		slidesPerView: columns,
		spaceBetween: columnsGap,
		loop: carouselLoop,
		autoplay: carouselAutoplay ? {
			delay: carouselAutoplaySpeed,
			disableOnInteraction: false,
			pauseOnMouseEnter: carouselPauseOnHover
		} : false,
		speed: carouselTransitionDuration,
		navigation: carouselNavigation === 'arrows' || carouselNavigation === 'both' ? {
			enabled: true,
			nextEl: 'at-block-nav--next',
			prevEl: 'at-block-nav--prev',
		} : false,
		pagination: ( teamMembersAmount > 1 && teamMembersAmount > columns ) && ( carouselNavigation === 'dots' || carouselNavigation === 'both' ) ? {
			type: 'bullets',
			bulletClass: 'at-block-bullets--bullet',
			bulletActiveClass: 'at-block-bullets--bullet-active',
			clickable: true,
		} : false,
		draggable: false,
		allowTouchMove: false,
		autoHeight: carouselAutoHeight,
	};

	// Swiper Navigation.
	const swiperNavigationPrevHandler = () => {
		if ( ! swiperRef.current ) return;

		swiperRef.current.swiper.slidePrev();
	};
	
	const swiperNavigationNextHandler = () => {
		if ( ! swiperRef.current ) return;

		swiperRef.current.swiper.slideNext();
	};

	// Swiper Pause on Hover.
	const swiperPauseMouseEnterHandler = () => {
		if ( ! swiperRef.current ) return;

		if ( carouselPauseOnHover && carouselAutoplay ) {
			console.log('PAUSE!');
			swiperRef.current.swiper.autoplay.stop();
		}
	};

	const swiperPauseMouseLeaveHandler = () => {
		if ( ! swiperRef.current ) return;

		if ( carouselPauseOnHover && carouselAutoplay ) {
			console.log('RESUME!');
			swiperRef.current.swiper.autoplay.start();
		}
	};

	// Refresh the swiper every time a attribute change.
	useEffect(() => {
		if ( swiperRef.current ) {
			swiperRef.current.swiper.update();

			// Handle autoplay state changes
			if (carouselAutoplay) {
				swiperRef.current.swiper.autoplay.start();
			} else {
				swiperRef.current.swiper.autoplay.stop();
			}
		}
	}, [atts]);

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
								<RangeSlider 
									label={ __( 'Number of Team Members', 'athemes-blocks' ) }
									defaultValue={ teamMembersAmount }
									min={ 1 }
									max={ teamMembersAmountMax }
									responsive={false}
									reset={true}
									units={false}
									onChange={ ( value ) => {
										setAttributes({ teamMembersAmount: value });
									} }
									onClickReset={ () => {
										setAttributes({ teamMembersAmount: getSettingDefaultValue( 'teamMembersAmount', '', attributesDefaults ) });
									} }
								/>
								<RangeSlider 
									label={ __( 'Columns', 'athemes-blocks' ) }
									defaultValue={ columns }
									defaultUnit={ getSettingUnit( 'columns', currentDevice, atts ) }
									min={ 1 }
									max={ teamMembersAmount }
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
								<RangeSlider 
									label={ __( 'Content Gap', 'athemes-blocks' ) }
									defaultValue={ contentGap }
									defaultUnit={ getSettingUnit( 'contentGap', currentDevice, atts ) }
									min={ 1 }
									max={ {
										px: 150,
										em: 20,
										rem: 20
									} }
									responsive={true}
									reset={true}
									units={['px', 'em', 'rem']}
									onChange={ ( value ) => {
										updateAttribute( 'contentGap', {
											value: value,
											unit: getSettingUnit( 'contentGap', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'contentGap', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'contentGap', {
											value: contentGap,
											unit: value,
										}, currentDevice );

										setUpdateCss( { settingId: 'contentGap', value: value } );								
									} }
									onClickReset={ () => {
										updateAttribute( 'contentGap', {
											value: getSettingDefaultValue( 'contentGap', currentDevice, attributesDefaults ),
											unit: getSettingDefaultUnit( 'contentGap', currentDevice, attributesDefaults )
										}, currentDevice );							

										setUpdateCss( { settingId: 'contentGap', value: getSettingDefaultValue( 'contentGap', currentDevice, attributesDefaults ) } );								
									} }
								/>
								<RadioButtons 
									label={ __( 'Horizontal Alignment', 'athemes-blocks' ) }
									defaultValue={ alignment }
									options={[
										{ label: __( 'Start', 'athemes-blocks' ), value: 'left', icon: icons.alignLeft },
										{ label: __( 'Center', 'athemes-blocks' ), value: 'center', icon: icons.alignCenter },
										{ label: __( 'End', 'athemes-blocks' ), value: 'right', icon: icons.alignRight },
									]}
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ alignment: value });
									} }
									onClickReset={ () => {
										setAttributes({ alignment: attributesDefaults.alignment.default.value });										
									} }
								/>
								{
									( imagePosition === 'left' || imagePosition === 'right' ) && (
										<RadioButtons 
											label={ __( 'Vertical Alignment', 'athemes-blocks' ) }
											defaultValue={ verticalAlignment }
											options={[
												{ label: __( 'Start', 'athemes-blocks' ), value: 'flex-start', icon: icons.alignTop },
												{ label: __( 'Center', 'athemes-blocks' ), value: 'center', icon: icons.alignMiddle },
												{ label: __( 'End', 'athemes-blocks' ), value: 'flex-end', icon: icons.alignBottom },
											]}
											responsive={false}
											reset={true}
											onChange={ ( value ) => {
												updateAttribute( 'verticalAlignment', {
													value: value
												}, 'desktop' );

												setUpdateCss( { settingId: 'verticalAlignment', value: value } );
											} }
											onClickReset={ () => {
												updateAttribute( 'verticalAlignment', {
													value: getSettingDefaultValue( 'verticalAlignment', 'desktop', attributesDefaults )
												}, 'desktop' );
												
												setUpdateCss( { settingId: 'verticalAlignment', value: getSettingDefaultValue( 'verticalAlignment', 'desktop', attributesDefaults ) } );
											} }
										/>
									)
								}
							</PanelBody>
							<PanelBody 
								title={ __( 'Image', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'image' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'image' ) }
							>
								{
									Array.from({ length: teamMembersAmount }, (_, index) => (
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
										{ label: __( 'Rounded', 'athemes-blocks' ), value: 'rounded' },
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
										px: 600,
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
									label={ __( 'Navigation', 'athemes-blocks' ) }
									value={ displayCarouselNavigation }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ displayCarouselNavigation: value });
									} }
									onClickReset={ () => {
										setAttributes({ displayCarouselNavigation: attributesDefaults.displayCarouselNavigation.default });
									} }
								/>
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
								<SwitchToggle
									label={ __( 'Auto Height', 'athemes-blocks' ) }
									value={ carouselAutoHeight }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ carouselAutoHeight: value });
									} }
									onClickReset={ () => {
										setAttributes({ carouselAutoHeight: getSettingDefaultValue( 'carouselAutoHeight', '', attributesDefaults ) });
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
								{
									displayCarouselNavigation && (
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
												defaultState: value,
												hoverState: getColorPickerSettingValue( 'nameColor', 'desktop', 'hoverState', atts )
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'nameColor', value: getColorPickerSettingValue( 'nameColor', 'desktop', 'defaultState', atts ) } );
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'nameColor', {
											value: {
												defaultState: getColorPickerSettingValue( 'nameColor', 'desktop', 'defaultState', atts ),
												hoverState: value	
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
									min={ 0 }
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
												defaultState: value,
												hoverState: getColorPickerSettingValue( 'companyColor', 'desktop', 'hoverState', atts )
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'companyColor', value: getColorPickerSettingValue( 'companyColor', 'desktop', 'defaultState', atts ) } );
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'companyColor', {
											value: {
												defaultState: getColorPickerSettingValue( 'companyColor', 'desktop', 'defaultState', atts ),
												hoverState: value	
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
							{
								displayCarouselNavigation && (
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
											min={ 0 }
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
											label={ __( 'Arrow Offset', 'athemes-blocks' ) }
											defaultValue={ arrowOffset }
											defaultUnit={ getSettingUnit( 'arrowOffset', 'desktop', atts ) }
											min={ -100 }
											max={ 100 }
											responsive={false}
											reset={true}
											units={['px']}
											onChange={ ( value ) => {
												updateAttribute( 'arrowOffset', {
													value: value,
													unit: getSettingUnit( 'arrowOffset', 'desktop', atts )
												}, 'desktop' );

												setUpdateCss( { settingId: 'arrowOffset', value: value } );
											} }
											onChangeUnit={ ( value ) => {
												updateAttribute( 'arrowOffset', {
													value: arrowOffset,
													unit: value,
												}, 'desktop' );

												setUpdateCss( { settingId: 'arrowOffset', value: value } );								
											} }
											onClickReset={ () => {
												updateAttribute( 'arrowOffset', {
													value: getSettingDefaultValue( 'arrowOffset', 'desktop', attributesDefaults ),
													unit: getSettingDefaultUnit( 'arrowOffset', 'desktop', attributesDefaults )
												}, 'desktop' );							

												setUpdateCss( { settingId: 'arrowOffset', value: getSettingDefaultValue( 'arrowOffset', 'desktop', attributesDefaults ) } );								
											} }
										/>
										<ColorPicker
											label={ __( 'Arrow Color', 'athemes-blocks' ) }
											value={ navigationColor }
											hover={true}
											responsive={false}
											reset={true}
											defaultStateOnChangeComplete={ ( value ) => {
												updateAttribute( 'navigationColor', {
													value: {
														defaultState: value,
														hoverState: getColorPickerSettingValue( 'navigationColor', 'desktop', 'hoverState', atts )
													}
												}, 'desktop' );

												setUpdateCss( { settingId: 'navigationColor', value: getColorPickerSettingValue( 'navigationColor', 'desktop', 'defaultState', atts ) } );
											} }
											hoverStateOnChangeComplete={ ( value ) => {
												updateAttribute( 'navigationColor', {
													value: {
														defaultState: getColorPickerSettingValue( 'navigationColor', 'desktop', 'defaultState', atts ),
														hoverState: value	
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
										<ColorPicker
											label={ __( 'Arrow Background Color', 'athemes-blocks' ) }
											value={ navigationBackgroundColor }
											hover={true}
											responsive={false}
											reset={true}
											defaultStateOnChangeComplete={ ( value ) => {
												updateAttribute( 'navigationBackgroundColor', {
													value: {
														defaultState: value,
														hoverState: getColorPickerSettingValue( 'navigationBackgroundColor', 'desktop', 'hoverState', atts )
													}
												}, 'desktop' );

												setUpdateCss( { settingId: 'navigationBackgroundColor', value: getColorPickerSettingValue( 'navigationBackgroundColor', 'desktop', 'defaultState', atts ) } );
											} }
											hoverStateOnChangeComplete={ ( value ) => {
												updateAttribute( 'navigationBackgroundColor', {
													value: {
														defaultState: getColorPickerSettingValue( 'navigationBackgroundColor', 'desktop', 'defaultState', atts ),
														hoverState: value	
													}
												}, 'desktop' );
												
												setUpdateCss( { settingId: 'navigationBackgroundColor', value: getColorPickerSettingValue( 'navigationBackgroundColor', 'desktop', 'hoverState', atts ) } );
											} }
											onClickReset={ () => {
												updateAttribute( 'navigationBackgroundColor', {
													value: {
														defaultState: getColorPickerSettingDefaultValue( 'navigationBackgroundColor', 'desktop', 'defaultState', attributesDefaults ),
														hoverState: getColorPickerSettingDefaultValue( 'navigationBackgroundColor', 'desktop', 'hoverState', attributesDefaults )	
													}
												}, 'desktop' );
												
												setUpdateCss( { settingId: 'navigationBackgroundColor', value: getColorPickerSettingDefaultValue( 'navigationBackgroundColor', 'desktop', 'defaultState', attributesDefaults ) } );
											} }
										/>
										<ColorPicker
											label={ __( 'Arrow Border Color', 'athemes-blocks' ) }
											value={ navigationBorderColor }
											hover={true}
											responsive={false}
											reset={true}
											defaultStateOnChangeComplete={ ( value ) => {
												updateAttribute( 'navigationBorderColor', {
													value: {
														defaultState: value,
														hoverState: getColorPickerSettingValue( 'navigationBorderColor', 'desktop', 'hoverState', atts )
													}
												}, 'desktop' );

												setUpdateCss( { settingId: 'navigationBorderColor', value: getColorPickerSettingValue( 'navigationBorderColor', 'desktop', 'defaultState', atts ) } );
											} }
											hoverStateOnChangeComplete={ ( value ) => {
												updateAttribute( 'navigationBorderColor', {
													value: {
														defaultState: getColorPickerSettingValue( 'navigationBorderColor', 'desktop', 'defaultState', atts ),
														hoverState: value	
													}
												}, 'desktop' );
												
												setUpdateCss( { settingId: 'navigationBorderColor', value: getColorPickerSettingValue( 'navigationBorderColor', 'desktop', 'hoverState', atts ) } );
											} }
											onClickReset={ () => {
												updateAttribute( 'navigationBorderColor', {
													value: {
														defaultState: getColorPickerSettingDefaultValue( 'navigationBorderColor', 'desktop', 'defaultState', attributesDefaults ),
														hoverState: getColorPickerSettingDefaultValue( 'navigationBorderColor', 'desktop', 'hoverState', attributesDefaults )	
													}
												}, 'desktop' );
												
												setUpdateCss( { settingId: 'navigationBorderColor', value: getColorPickerSettingDefaultValue( 'navigationBorderColor', 'desktop', 'defaultState', attributesDefaults ) } );
											} }
										/>
										<RangeSlider 
											label={ __( 'Dots Offset', 'athemes-blocks' ) }
											defaultValue={ dotsOffset }
											defaultUnit={ getSettingUnit( 'dotsOffset', 'desktop', atts ) }
											min={ 0 }
											max={ 100 }
											responsive={false}
											reset={true}
											units={['px']}
											onChange={ ( value ) => {
												updateAttribute( 'dotsOffset', {
													value: value,
													unit: getSettingUnit( 'dotsOffset', 'desktop', atts )
												}, 'desktop' );

												setUpdateCss( { settingId: 'dotsOffset', value: value } );
											} }
											onChangeUnit={ ( value ) => {
												updateAttribute( 'dotsOffset', {
													value: dotsOffset,
													unit: value,
												}, 'desktop' );

												setUpdateCss( { settingId: 'dotsOffset', value: value } );								
											} }
											onClickReset={ () => {
												updateAttribute( 'dotsOffset', {
													value: getSettingDefaultValue( 'dotsOffset', 'desktop', attributesDefaults ),
													unit: getSettingDefaultUnit( 'dotsOffset', 'desktop', attributesDefaults )
												}, 'desktop' );							

												setUpdateCss( { settingId: 'dotsOffset', value: getSettingDefaultValue( 'dotsOffset', 'desktop', attributesDefaults ) } );								
											} }
										/>
										<ColorPicker
											label={ __( 'Dots Color', 'athemes-blocks' ) }
											value={ dotsColor }
											hover={false}
											responsive={false}
											reset={true}
											defaultStateOnChangeComplete={ ( value ) => {
												updateAttribute( 'dotsColor', {
													value: {
														defaultState: value,
														hoverState: getColorPickerSettingValue( 'dotsColor', 'desktop', 'hoverState', atts )
													}
												}, 'desktop' );

												setUpdateCss( { settingId: 'dotsColor', value: getColorPickerSettingValue( 'dotsColor', 'desktop', 'defaultState', atts ) } );
											} }
											hoverStateOnChangeComplete={ ( value ) => {
												updateAttribute( 'dotsColor', {
													value: {
														defaultState: getColorPickerSettingValue( 'dotsColor', 'desktop', 'defaultState', atts ),
														hoverState: value	
													}
												}, 'desktop' );
												
												setUpdateCss( { settingId: 'dotsColor', value: getColorPickerSettingValue( 'dotsColor', 'desktop', 'hoverState', atts ) } );
											} }
											onClickReset={ () => {
												updateAttribute( 'dotsColor', {
													value: {
														defaultState: getColorPickerSettingDefaultValue( 'dotsColor', 'desktop', 'defaultState', attributesDefaults ),
														hoverState: getColorPickerSettingDefaultValue( 'dotsColor', 'desktop', 'hoverState', attributesDefaults )	
													}
												}, 'desktop' );
												
												setUpdateCss( { settingId: 'dotsColor', value: getColorPickerSettingDefaultValue( 'dotsColor', 'desktop', 'defaultState', attributesDefaults ) } );
											} }
										/>
									</PanelBody>
								)
							}
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
												defaultState: value,
												hoverState: getColorPickerSettingValue( 'cardBackgroundColor', 'desktop', 'hoverState', atts )
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'cardBackgroundColor', value: getColorPickerSettingValue( 'cardBackgroundColor', 'desktop', 'defaultState', atts ) } );
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'cardBackgroundColor', {
											value: {
												defaultState: getColorPickerSettingValue( 'cardBackgroundColor', 'desktop', 'defaultState', atts ),
												hoverState: value	
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
								<Dimensions
									label={ __( 'Margin', 'athemes-blocks' ) }
									directions={[
										{ label: __( 'Top', 'athemes-blocks' ), value: 'top' },
										{ label: __( 'Right', 'athemes-blocks' ), value: 'right' },
										{ label: __( 'Bottom', 'athemes-blocks' ), value: 'bottom' },
										{ label: __( 'Left', 'athemes-blocks' ), value: 'left' },
									]}
									value={ cardMargin }
									defaultUnit={ getSettingUnit('cardMargin', currentDevice, atts) }
									directionsValue={ getDimensionsSettingDirectionsValue('cardMargin', currentDevice, atts) }
									connect={ getDimensionsSettingConnectValue('cardMargin', currentDevice, atts) }
									responsive={ true }
									units={['px', '%', 'em', 'rem', 'vh', 'vw']}
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'cardMargin', {
											value: value.value,
											unit: getSettingUnit( 'cardMargin', currentDevice, atts ),
											connect: getDimensionsSettingConnectValue( 'cardMargin', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'cardMargin', value: value.value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'cardMargin', {
											value: getSettingValue( 'cardMargin', currentDevice, atts ),
											unit: value,
											connect: getDimensionsSettingConnectValue( 'cardMargin', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'cardMargin', value: getSettingValue( 'cardMargin', currentDevice, atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'cardMargin', getDimensionsSettingDefaultValue( 'cardMargin', currentDevice, attributesDefaults ), currentDevice );

										setUpdateCss( { settingId: 'cardMargin', value: getDimensionsSettingDefaultValue( 'cardMargin', currentDevice, attributesDefaults ) } );
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

				// Block alignment.
				if (attributes.align) {
					blockProps.className += ` align${attributes.align}`;
					blockProps['data-align'] = attributes.align;
				}

				// Alignment.
				blockProps.className += ` at-block-team--${alignment}`;	
				
				// Vertical Alignment.
				blockProps.className += ` at-block-team--vertical-alignment-${verticalAlignment}`;

				// Image Position.
				blockProps.className += ` at-block-team--image-${imagePosition}`;

				// Image Style.
				blockProps.className += ` at-block-team--image-style-${imageStyle}`;

				// Reponsive display.
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
					<Tag {...blockProps}>
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
							className="at-block-swiper-wrapper"
							onMouseEnter={ swiperPauseMouseEnterHandler }
							onMouseLeave={ swiperPauseMouseLeaveHandler }
						>	
							<Swiper
								ref={ swiperRef }
								modules={[Pagination, Navigation, Autoplay]} 
								className="at-block-team__swiper" 
								{ ...swiperOptions } 
							>
								{
									Array.from({ length: teamMembersAmount }, (_, index) => {

										// Image.
										const image = getInnerSettingValue( `image${index + 1}`, 'image', '', atts );

										let imageUrlToDisplay = '';
										let imageWidth = 0;
										let imageHeight = 0;

										if ( image.sizes && image.sizes[imageSize] ) {
											imageUrlToDisplay = image.sizes[imageSize].url;
											imageWidth = image.sizes[imageSize].width;
											imageHeight = image.sizes[imageSize].height;
										} else if ( image.media_details && image.media_details.sizes[imageSize] ) {
											imageUrlToDisplay = image.media_details.sizes[imageSize].source_url;
											imageWidth = image.media_details.sizes[imageSize].width;
											imageHeight = image.media_details.sizes[imageSize].height;
										} else {
											imageUrlToDisplay = imageUrlToDisplay;
											imageWidth = image.width;
											imageHeight = image.height;
										}

										const hasImage = image && imageUrlToDisplay ? true : false;

										// Other content.
										const name = atts[`name${index + 1}`];
										const company = atts[`company${index + 1}`];

										return (
											<SwiperSlide className="at-block-team__item swiper-slide">
												<div className="at-block-team__item-inner">
													{
														(imagePosition === 'top' || imagePosition === 'left' || imagePosition === 'right') && (
															<>
																{
																	hasImage && (
																		<div className="at-block-team__item-image-wrapper">
																			<div className="at-block-team__item-image">
																				<img src={imageUrlToDisplay} width={imageWidth} height={imageHeight} alt={image.alt} />
																			</div>
																		</div>
																	)
																}
																<div className="at-block-team__item-content">
																	<div>
																		<RichText
																			tagName="div"
																			className="at-block-team__item-name"
																			value={ name }
																			placeholder={ __( 'Name', 'athemes-blocks' ) }
																			allowedFormats={['core/bold', 'core/italic']}
																			onChange={ ( value ) => {
																				setAttributes( { [`name${index + 1}`]: value } );
																			} }
																		/>
																		<RichText
																			tagName="div"
																			className="at-block-team__item-company"
																			value={ company }
																			placeholder={ __( 'Company', 'athemes-blocks' ) }
																			allowedFormats={['core/bold', 'core/italic']}
																			onChange={ ( value ) => {
																				setAttributes( { [`company${index + 1}`]: value } );
																			} }
																		/>
																	</div>
																</div>
															</>
														)
													}
													{
														imagePosition === 'bottom' && (
															<>
																<div className="at-block-team__item-content">
																	{
																		hasImage && (
																			<div>
																				<div className="at-block-team__item-image-wrapper">
																					<div className="at-block-team__item-image">
																						<img src={imageUrlToDisplay} width={imageWidth} height={imageHeight} alt={image.alt} />
																					</div>
																				</div>
																			</div>
																		)
																	}
																	<div>
																		<RichText
																			tagName="div"
																			className="at-block-team__item-name"
																			value={ name }
																			placeholder={ __( 'Name', 'athemes-blocks' ) }
																			allowedFormats={['core/bold', 'core/italic']}
																			onChange={ ( value ) => {
																				setAttributes( { [`name${index + 1}`]: value } );
																			} }
																		/>
																		<RichText
																			tagName="div"
																			className="at-block-team__item-company"
																			value={ company }
																			placeholder={ __( 'Company', 'athemes-blocks' ) }
																			allowedFormats={['core/bold', 'core/italic']}
																			onChange={ ( value ) => {
																				setAttributes( { [`company${index + 1}`]: value } );
																			} }
																		/>
																	</div>
																</div>
															</>														
														)
													}
													
												</div>
											</SwiperSlide>
										);
									})
								}
							</Swiper>

							{
								( ( teamMembersAmount > 1 && teamMembersAmount > columns ) && ( carouselNavigation === 'arrows' || carouselNavigation === 'both' ) && displayCarouselNavigation ) && (
									<>
										<div className="at-block-nav at-block-nav--next" onClick={ swiperNavigationNextHandler }></div>
										<div className="at-block-nav at-block-nav--prev" onClick={ swiperNavigationPrevHandler }></div>
									</>
								)
							}
						</div>
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