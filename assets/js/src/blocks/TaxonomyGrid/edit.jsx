import { __, sprintf } from '@wordpress/i18n';
import { useEffect, useMemo, useRef, useState } from '@wordpress/element';
import { useSelect, useDispatch } from "@wordpress/data";
import { Panel, PanelBody, Spinner } from '@wordpress/components';
import { InspectorControls, useBlockProps, InnerBlocks, RichText, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { useMergeRefs } from '@wordpress/compose';
import { withSelect, select } from '@wordpress/data';
import { alignNone } from '@wordpress/icons';
import { decodeEntities } from '@wordpress/html-entities';

import { store as persistentTabsStore } from '../../block-editor/store/persistent-tabs-store';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

import { RadioButtons } from '../../block-editor/controls/radio-buttons/radio-buttons';
import { RangeSlider } from '../../block-editor/controls/range-slider/range-slider';
import { Select } from '../../block-editor/controls/select/select';
import { TextInput } from '../../block-editor/controls/text-input/text-input';
import { SwitchToggle } from '../../block-editor/controls/switch-toggle/switch-toggle';
import { ColorPicker } from '../../block-editor/controls/color-picker/color-picker';
import { Typography } from '../../block-editor/controls/typography/typography';
import { Border } from '../../block-editor/controls/border/border';
import { Dimensions } from '../../block-editor/controls/dimensions/dimensions';
import { RadioImages } from '../../block-editor/controls/radio-images/radio-images';

import { createAttributeUpdater } from '../../utils/block-attributes';
import { withTabsNavigation } from '../../block-editor/hoc/with-tabs-navigation';
import { withAdvancedTab } from '../../block-editor/hoc/with-advanced-tab';
import { withDynamicCSS } from '../../block-editor/hoc/with-dynamic-css';
import { withPersistentPanelToggle } from '../../block-editor/hoc/with-persistent-panel-toggle';
import { withGoogleFonts } from '../../block-editor/hoc/with-google-fonts';
import { withQueryPostTypesData } from '../../block-editor/hoc/with-query-post-types-data';

import { blockPropsWithAnimation } from '../../utils/block-animations';

import { getSettingValue, getSettingUnit, getSettingDefaultValue, getSettingDefaultUnit, getInnerSettingValue, getColorPickerSettingDefaultValue, getColorPickerSettingValue, getDimensionsSettingDefaultValue, getDimensionsSettingConnectValue, getDimensionsSettingDirectionsValue, getDimensionsSettingValue } from '../../utils/settings';

import cardPresets from './presets';
import cardPresetsImages from './presets-images';

import { icons } from '../../utils/icons';

const attributesDefaults = TaxonomyGridBlockData.attributes;

const Edit = (props) => {
	const { attributes, setAttributes, clientId, postTypes, setUpdateCss, setUpdatePresetCss, isPanelOpened, onTogglePanelBodyHandler, terms, isLoading } = props;
	const { content } = attributes;
	const atts = attributes;
	const updateAttribute = createAttributeUpdater(attributes, setAttributes);
	const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());
	const currentTab = useSelect((select) => select('persistent-tabs-store').getCurrentTab());

	const swiperRef = useRef(null);

	const {

		// General.
		cardLayout,
		taxonomy,
		termsPerPage,
		excludeCurrentTerm,
		hideEmptyTerms,
		orderBy,
		order,
		displayCarousel,
		displayCarouselNavigation,
		carouselPauseOnHover,
		carouselAutoplay,
		carouselAutoplaySpeed,
		carouselLoop,
		carouselAutoHeight,
		carouselTransitionDuration,
		carouselNavigation,
		displayImage,
		imageRatio,
		imageSize,
		imagePosition,
		displayTitle,
		displayDescription,
		titleTag,
		displayButton,
		buttonOpenInNewTab,

        // Style.
		columns,
		columnsGap,
		rowsGap,
		cardBackgroundColor,
		cardBorder,
		cardHorizontalAlignment,
		cardVerticalAlignment,
		cardPadding,
		cardPaddingToContentOnly,
		carouselPadding,
		arrowSize,
		arrowBorderSize,
		arrowBorderRadius,
		arrowOffset,
		navigationColor,
		navigationBackgroundColor,
		navigationBorderColor,
		dotsColor,
		dotsOffset,
		imageWidth,
		imageGap,
		imageBottomSpacing,
		imageBorderRadius,
		imageOverlay,
		imageOverlayColor,
		imageOverlayOpacity,
		titleColor,
		titleTypography,
		titleBottomSpacing,
		descriptionColor,
		descriptionTypography,
		descriptionBottomSpacing,
		buttonColor,
		buttonTypography,
		buttonBackgroundColor,
		buttonBorder,
		buttonPadding,
		buttonBottomSpacing,

        // Advanced.
        hideOnDesktop,
		hideOnTablet,
		hideOnMobile,
    } = useMemo(() => {
		return {

			// General.
			cardLayout: atts.cardLayout,
			taxonomy: atts.taxonomy,
			termsPerPage: atts.termsPerPage,
			excludeCurrentTerm: atts.excludeCurrentTerm,
			hideEmptyTerms: atts.hideEmptyTerms,
			orderBy: atts.orderBy,
			order: atts.order,
			displayCarousel: atts.displayCarousel,
			displayCarouselNavigation: atts.displayCarouselNavigation,
			carouselPauseOnHover: atts.carouselPauseOnHover,
			carouselAutoplay: atts.carouselAutoplay,
			carouselAutoplaySpeed: atts.carouselAutoplaySpeed,
			carouselLoop: atts.carouselLoop,
			carouselAutoHeight: atts.carouselAutoHeight,
			carouselTransitionDuration: atts.carouselTransitionDuration,
			carouselNavigation: atts.carouselNavigation,
			displayImage: atts.displayImage,
			imageRatio: atts.imageRatio,
			imageSize: atts.imageSize,
			imagePosition: atts.imagePosition,
			displayTitle: atts.displayTitle,
			displayDescription: atts.displayDescription,
			titleTag: atts.titleTag,
			displayButton: atts.displayButton,
			buttonOpenInNewTab: atts.buttonOpenInNewTab,

			// Style.
			columns: getSettingValue('columns', currentDevice, atts),
			columnsGap: getSettingValue('columnsGap', currentDevice, atts),
			rowsGap: getSettingValue('rowsGap', currentDevice, atts),
			cardBackgroundColor: getSettingValue('cardBackgroundColor', 'desktop', atts),
			cardBorder: atts.cardBorder,
			cardHorizontalAlignment: getSettingValue('cardHorizontalAlignment', 'desktop', atts),
			cardVerticalAlignment: getSettingValue('cardVerticalAlignment', 'desktop', atts),
			cardPadding: getDimensionsSettingValue('cardPadding', currentDevice, atts),
			cardPaddingToContentOnly: atts.cardPaddingToContentOnly,
			carouselPadding: getDimensionsSettingValue('carouselPadding', currentDevice, atts),
			arrowSize: getSettingValue('arrowSize', 'desktop', atts),
			arrowBorderSize: getSettingValue('arrowBorderSize', 'desktop', atts),
			arrowBorderRadius: getSettingValue('arrowBorderRadius', 'desktop', atts),
			arrowOffset: getSettingValue('arrowOffset', 'desktop', atts),
			navigationColor: getSettingValue('navigationColor', 'desktop', atts),
			navigationBackgroundColor: getSettingValue('navigationBackgroundColor', 'desktop', atts),
			navigationBorderColor: getSettingValue('navigationBorderColor', 'desktop', atts),
			dotsColor: getSettingValue('dotsColor', 'desktop', atts),
			dotsOffset: getSettingValue('dotsOffset', 'desktop', atts),
			imageWidth: getSettingValue('imageWidth', currentDevice, atts),
			imageGap: getSettingValue('imageGap', currentDevice, atts),
			imageBottomSpacing: getSettingValue('imageBottomSpacing', currentDevice, atts),
			imageBorderRadius: getDimensionsSettingValue('imageBorderRadius', currentDevice, atts),
			imageOverlay: atts.imageOverlay,
			imageOverlayColor: getSettingValue('imageOverlayColor', 'desktop', atts),
			imageOverlayOpacity: getSettingValue('imageOverlayOpacity', 'desktop', atts),
			titleColor: getSettingValue('titleColor', 'desktop', atts),
			titleTypography: atts.titleTypography,
			titleBottomSpacing: getSettingValue('titleBottomSpacing', currentDevice, atts),
			descriptionColor: getSettingValue('descriptionColor', 'desktop', atts),
			descriptionTypography: atts.descriptionTypography,
			descriptionBottomSpacing: getSettingValue('descriptionBottomSpacing', currentDevice, atts),
			buttonColor: getSettingValue('buttonColor', 'desktop', atts),
			buttonTypography: atts.buttonTypography,
			buttonBackgroundColor: getSettingValue('buttonBackgroundColor', 'desktop', atts),
			buttonBorder: atts.buttonBorder,
			buttonPadding: getDimensionsSettingValue('buttonPadding', currentDevice, atts),
			buttonBottomSpacing: getSettingValue('buttonBottomSpacing', currentDevice, atts),

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

	// Prevent links clicks.
	const preventClickHandler = (event) => {
		event.preventDefault();
	};

	// Order by options.
	const orderByOptions = useMemo(() => {
		const generalOptions = [
			{ label: __( 'Name', 'athemes-blocks' ), value: 'name' },
			{ label: __( 'Slug', 'athemes-blocks' ), value: 'slug' },
			{ label: __( 'Term Group', 'athemes-blocks' ), value: 'term_group' },
			{ label: __( 'Term ID', 'athemes-blocks' ), value: 'term_id' },
			{ label: __( 'Description', 'athemes-blocks' ), value: 'description' },
			{ label: __( 'Parent', 'athemes-blocks' ), value: 'parent' },
			{ label: __( 'Term Order', 'athemes-blocks' ), value: 'term_order' },
			{ label: __( 'Term Count', 'athemes-blocks' ), value: 'count' },
		];

		return generalOptions;
	}, []);

	// Get taxonomies for the selected taxonomy.
	const taxonomies = useSelect((select) => {
		const { getTaxonomies } = select('core');
		const taxonomies = getTaxonomies({ per_page: -1, taxonomy: taxonomy }) || [];
		
		if ( taxonomies.length === 0 ) {
			return [{
				value: 0,
				label: sprintf( __( 'No taxonomies found for %s', 'athemes-blocks' ), taxonomy ),
			}];
		}

		return [
			...taxonomies.map(taxonomy => ({
				value: taxonomy.slug,
				label: taxonomy.name,
			}))
		];
	}, []);

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
		navigation: ( carouselNavigation === 'arrows' || carouselNavigation === 'both' ) && displayCarouselNavigation ? {
			enabled: true,
			nextEl: 'at-block-nav--next',
			prevEl: 'at-block-nav--prev',
		} : false,
		pagination: ( termsPerPage > 1 && termsPerPage > columns ) && ( carouselNavigation === 'dots' || carouselNavigation === 'both' ) && displayCarouselNavigation ? {
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
		if ( displayCarousel === false ) {
			return;
		}

		if ( swiperRef === null || swiperRef.current === null || swiperRef.current.swiper === null ) {
			return;
		}

		swiperRef.current.swiper.update();

		// Handle autoplay state changes
		if (carouselAutoplay) {
			swiperRef.current.swiper.autoplay.start();
		} else {
			swiperRef.current.swiper.autoplay.stop();
		}
	}, [atts]);

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
									defaultValue={ cardLayout }
									options={[
										{ label: __( 'Layout 1', 'athemes-blocks' ), value: 'layout1', image: cardPresetsImages.layout1 },
										{ label: __( 'Layout 2', 'athemes-blocks' ), value: 'layout2', image: cardPresetsImages.layout2 },
										{ label: __( 'Layout 3', 'athemes-blocks' ), value: 'layout3', image: cardPresetsImages.layout3 },
										{ label: __( 'Layout 4', 'athemes-blocks' ), value: 'layout4', image: cardPresetsImages.layout4 },
									]}
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										const presetSettings = cardPresets[value];

										setAttributes({ 
											...presetSettings,
										});

										setUpdatePresetCss(presetSettings);
									} }
									onClickReset={ () => {
										const presetSettings = cardPresets['default'];

										setAttributes({ 
											...presetSettings,
										});
										
										setUpdatePresetCss(presetSettings);
									} }
								/>
							</PanelBody>
							<PanelBody 
								title={ __( 'Query Settings', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'query-settings', true ) }
								onToggle={ () => onTogglePanelBodyHandler( 'query-settings' ) }
							>
								<Select
									label={ __( 'Taxonomy', 'athemes-blocks' ) }
									options={taxonomies}
									value={ taxonomy }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ taxonomy: value });
									} }
									onClickReset={ () => {
										setAttributes({ taxonomy: attributesDefaults.taxonomy.default });
									} }
								/>
								<RangeSlider 
									label={ __( 'Terms Per Page', 'athemes-blocks' ) }
									defaultValue={ termsPerPage }
									min={ 1 }
									max={ 100 }
									responsive={false}
									reset={true}
									units={false}
									onChange={ ( value ) => {
										setAttributes({ termsPerPage: value });
									} }
									onClickReset={ () => {
										setAttributes({ termsPerPage: attributesDefaults.termsPerPage.default });
									} }
								/>
								<SwitchToggle
									label={ __( 'Exclude Current Term', 'athemes-blocks' ) }
									value={ excludeCurrentTerm }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ excludeCurrentTerm: value });
									} }
									onClickReset={ () => {
										setAttributes({ excludeCurrentTerm: attributesDefaults.excludeCurrentTerm.default });
									} }
								/>
								<SwitchToggle
									label={ __( 'Hide Empty Terms', 'athemes-blocks' ) }
									value={ hideEmptyTerms }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ hideEmptyTerms: value });
									} }
									onClickReset={ () => {
										setAttributes({ hideEmptyTerms: attributesDefaults.hideEmptyTerms.default });
									} }
								/>
								<Select
									label={ __( 'Order By', 'athemes-blocks' ) }
									options={orderByOptions}
									value={ orderBy }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ orderBy: value });
									} }
									onClickReset={ () => {
										setAttributes({ orderBy: attributesDefaults.orderBy.default });
									} }
								/>
								<Select
									label={ __( 'Order', 'athemes-blocks' ) }
									options={[
										{ label: __( 'Ascending', 'athemes-blocks' ), value: 'asc' },
										{ label: __( 'Descending', 'athemes-blocks' ), value: 'desc' },
									]}
									value={ order }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ order: value });
									} }
									onClickReset={ () => {
										setAttributes({ order: attributesDefaults.order.default });
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
									label={ __( 'Enable', 'athemes-blocks' ) }
									value={ displayCarousel }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ displayCarousel: value });
									} }
									onClickReset={ () => {
										setAttributes({ displayCarousel: attributesDefaults.displayCarousel.default });
									} }
								/>
								{
									( displayCarousel && displayCarouselNavigation ) && (
										<>
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
										</>
									)
								}
							</PanelBody>
							{
								( taxonomy === 'product_cat' || taxonomy === 'product_brand' ) && (
									<PanelBody 
										title={ __( 'Image', 'athemes-blocks' ) } 
										initialOpen={false}
										opened={ isPanelOpened( 'image' ) }
										onToggle={ () => onTogglePanelBodyHandler( 'image' ) }
									>
										<SwitchToggle
											label={ __( 'Display Image', 'athemes-blocks' ) }
											value={ displayImage }
											responsive={false}
											reset={true}
											onChange={ ( value ) => {
												setAttributes({ displayImage: value });
											} }
											onClickReset={ () => {
												setAttributes({ displayImage: attributesDefaults.displayImage.default });
											} }
										/>
										{
											displayImage && (
												<>
													<Select
														label={ __( 'Image Ratio', 'athemes-blocks' ) }
														options={[
															{ label: __( 'Default', 'athemes-blocks' ), value: 'default' },
															{ label: '1:1', value: '1-1' },
															{ label: '2:1', value: '2-1' },
															{ label: '3:2', value: '3-2' },
															{ label: '4:3', value: '4-3' },
															{ label: '16:9', value: '16-9' },
														]}
														value={ imageRatio }
														responsive={false}
														reset={true}
														onChange={ ( value ) => {
															setAttributes({ imageRatio: value });
														} }
														onClickReset={ () => {
															setAttributes({ imageRatio: attributesDefaults.imageRatio.default });
														} }
													/>
													<Select
														label={ __( 'Image Size', 'athemes-blocks' ) }
														options={athemesBlocksAvailableImageSizes || []}
														value={ imageSize }
														responsive={false}
														reset={true}
														onChange={ ( value ) => {
															setAttributes({ imageSize: value });
														} }
														onClickReset={ () => {
															setAttributes({ imageSize: attributesDefaults.imageSize.default });
														} }
													/>
													<Select
														label={ __( 'Image Position', 'athemes-blocks' ) }
														options={[
															{ label: __( 'Top', 'athemes-blocks' ), value: 'top' },
															{ label: __( 'Background', 'athemes-blocks' ), value: 'background' },
															{ label: __( 'Left', 'athemes-blocks' ), value: 'left' },
															{ label: __( 'Right', 'athemes-blocks' ), value: 'right' },
														]}
														value={ imagePosition }
														responsive={false}
														reset={true}
														onChange={ ( value ) => {
															setAttributes({ imagePosition: value });
														} }
														onClickReset={ () => {
															setAttributes({ imagePosition: attributesDefaults.imagePosition.default });
														} }
													/>	
												</>	
											)
										}
									</PanelBody>
								)
							}
							<PanelBody 
								title={ __( 'Content', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'content' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'content' ) }
							>
								<SwitchToggle
									label={ __( 'Display Title', 'athemes-blocks' ) }
									value={ displayTitle }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ displayTitle: value });
									} }
									onClickReset={ () => {
										setAttributes({ displayTitle: attributesDefaults.displayTitle.default });
									} }
								/>
								{
									displayTitle && (
										<Select
											label={ __( 'Title Tag', 'athemes-blocks' ) }
											options={[
												{ label: __( 'H1', 'athemes-blocks' ), value: 'h1' },
												{ label: __( 'H2', 'athemes-blocks' ), value: 'h2' },
												{ label: __( 'H3', 'athemes-blocks' ), value: 'h3' },
												{ label: __( 'H4', 'athemes-blocks' ), value: 'h4' },
												{ label: __( 'H5', 'athemes-blocks' ), value: 'h5' },
												{ label: __( 'H6', 'athemes-blocks' ), value: 'h6' },
											]}
											value={ titleTag }
											responsive={false}
											reset={true}
											onChange={ ( value ) => {
												setAttributes({ titleTag: value });
											} }
											onClickReset={ () => {
												setAttributes({ titleTag: attributesDefaults.titleTag.default });
											} }
										/>	
									)
								}
								<SwitchToggle
									label={ __( 'Display Description', 'athemes-blocks' ) }
									value={ displayDescription }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ displayDescription: value });
									} }
									onClickReset={ () => {
										setAttributes({ displayDescription: attributesDefaults.displayDescription.default });
									} }
								/>
							</PanelBody>
							<PanelBody 
								title={ __( 'Button', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'button' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'button' ) }
							>
								<SwitchToggle
									label={ __( 'Display Button', 'athemes-blocks' ) }
									value={ displayButton }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ displayButton: value });
									} }
									onClickReset={ () => {
										setAttributes({ displayButton: attributesDefaults.displayButton.default });
									} }
								/>
								{
									displayButton && (
										<>
											<SwitchToggle
												label={ __( 'Open in New Tab', 'athemes-blocks' ) }
												value={ buttonOpenInNewTab }
												responsive={false}
												reset={true}
												onChange={ ( value ) => {
													setAttributes({ buttonOpenInNewTab: value });
												} }
												onClickReset={ () => {
													setAttributes({ buttonOpenInNewTab: attributesDefaults.buttonOpenInNewTab.default });
												} }
											/>
										</>
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
								title={ __( 'Layout', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'layout', true ) }
								onToggle={ () => onTogglePanelBodyHandler( 'layout' ) }
							>
								<RangeSlider 
									label={ __( 'Columns', 'athemes-blocks' ) }
									defaultValue={ columns }
									defaultUnit={ getSettingUnit( 'columns', currentDevice, atts ) }
									min={ 1 }
									max={ 6 }
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
									label={ __( 'Rows Gap', 'athemes-blocks' ) }
									defaultValue={ rowsGap }
									defaultUnit={ getSettingUnit( 'rowsGap', currentDevice, atts ) }
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
								<ColorPicker
									label={ __( 'Background Color', 'athemes-blocks' ) }
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
								<Border
									label=""
									settingId="cardBorder"
									attributes={ atts }
									setAttributes={ setAttributes }
									attributesDefaults={ attributesDefaults }
									setUpdateCss={ setUpdateCss }
									subFields={['borderStyle', 'borderWidth', 'borderRadius', 'borderColor']}
								/>
								{
									displayCarousel === false && (
										<RadioButtons 
											label={ __( 'Vertical Alignment', 'athemes-blocks' ) }
											defaultValue={ cardVerticalAlignment }
											options={[
												{ label: __( 'Start', 'athemes-blocks' ), value: 'flex-start', icon: icons.alignTop },
												{ label: __( 'Center', 'athemes-blocks' ), value: 'center', icon: icons.alignMiddle },
												{ label: __( 'End', 'athemes-blocks' ), value: 'flex-end', icon: icons.alignBottom },
												{ label: __( 'Stretch', 'athemes-blocks' ), value: 'stretch', icon: icons.stretchVertical },
											]}
											responsive={false}
											reset={true}
											onChange={ ( value ) => {
												updateAttribute( 'cardVerticalAlignment', {
													value: value
												}, 'desktop' );

												setUpdateCss( { settingId: 'cardVerticalAlignment', value: value } );
											} }
											onClickReset={ () => {
												updateAttribute( 'cardVerticalAlignment', {
													value: getSettingDefaultValue( 'cardVerticalAlignment', 'desktop', attributesDefaults )
												}, 'desktop' );
												
												setUpdateCss( { settingId: 'cardVerticalAlignment', value: getSettingDefaultValue( 'cardVerticalAlignment', 'desktop', attributesDefaults ) } );
											} }
										/>		
									)
								}
								<RadioButtons 
									label={ __( 'Horizontal Alignment', 'athemes-blocks' ) }
									defaultValue={ cardHorizontalAlignment }
									options={[
										{ label: __( 'Start', 'athemes-blocks' ), value: 'left', icon: icons.alignLeft },
										{ label: __( 'Center', 'athemes-blocks' ), value: 'center', icon: icons.alignCenter },
										{ label: __( 'End', 'athemes-blocks' ), value: 'right', icon: icons.alignRight },
									]}
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'cardHorizontalAlignment', {
											value: value
										}, 'desktop' );

										setUpdateCss( { settingId: 'cardHorizontalAlignment', value: value } );
									} }
									onClickReset={ () => {
										updateAttribute( 'cardHorizontalAlignment', {
											value: getSettingDefaultValue( 'cardHorizontalAlignment', 'desktop', attributesDefaults )
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'cardHorizontalAlignment', value: getSettingDefaultValue( 'cardHorizontalAlignment', 'desktop', attributesDefaults ) } );
									} }
								/>
								<Dimensions
									label={ __( 'Card Padding', 'athemes-blocks' ) }
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
								<SwitchToggle
									label={ __( 'Apply padding to content', 'athemes-blocks' ) }
									value={ cardPaddingToContentOnly }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ cardPaddingToContentOnly: value });
									} }
									onClickReset={ () => {
										setAttributes({ cardPaddingToContentOnly: attributesDefaults.cardPaddingToContentOnly.default });
									} }
								/>
								{
									displayCarousel && columns === 1 && (
										<>
											<Dimensions
												label={ __( 'Carousel Padding', 'athemes-blocks' ) }
												directions={[
													{ label: __( 'Top', 'athemes-blocks' ), value: 'top' },
													{ label: __( 'Right', 'athemes-blocks' ), value: 'right' },
													{ label: __( 'Bottom', 'athemes-blocks' ), value: 'bottom' },
													{ label: __( 'Left', 'athemes-blocks' ), value: 'left' },
												]}
												value={ carouselPadding }
												defaultUnit={ getSettingUnit('carouselPadding', currentDevice, atts) }
												directionsValue={ getDimensionsSettingDirectionsValue('carouselPadding', currentDevice, atts) }
												connect={ getDimensionsSettingConnectValue('carouselPadding', currentDevice, atts) }
												responsive={ true }
												units={['px', '%', 'em', 'rem', 'vh', 'vw']}
												reset={true}
												onChange={ ( value ) => {
													updateAttribute( 'carouselPadding', {
														value: value.value,
														unit: getSettingUnit( 'carouselPadding', currentDevice, atts ),
														connect: getDimensionsSettingConnectValue( 'carouselPadding', currentDevice, atts )
													}, currentDevice );

													setUpdateCss( { settingId: 'carouselPadding', value: value.value } );
												} }
												onChangeUnit={ ( value ) => {
													updateAttribute( 'carouselPadding', {
														value: getSettingValue( 'carouselPadding', currentDevice, atts ),
														unit: value,
														connect: getDimensionsSettingConnectValue( 'carouselPadding', currentDevice, atts )
													}, currentDevice );

													setUpdateCss( { settingId: 'carouselPadding', value: getSettingValue( 'carouselPadding', currentDevice, atts ) } );
												} }
												onClickReset={ () => {
													updateAttribute( 'carouselPadding', getDimensionsSettingDefaultValue( 'carouselPadding', currentDevice, attributesDefaults ), currentDevice );

													setUpdateCss( { settingId: 'carouselPadding', value: getDimensionsSettingDefaultValue( 'carouselPadding', currentDevice, attributesDefaults ) } );
												} }
											/>
										</>
									)
								}
							</PanelBody>
							{
								displayCarousel && (
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
							{
								( taxonomy === 'product_cat' || taxonomy === 'product_brand' ) && (
									<PanelBody 
										title={ __( 'Image', 'athemes-blocks' ) } 
										initialOpen={false}
										opened={ isPanelOpened( 'image' ) }
										onToggle={ () => onTogglePanelBodyHandler( 'image' ) }
									>
										{
											( imagePosition === 'left' || imagePosition === 'right' )&& (
												<>
													<RangeSlider 
														label={ __( 'Width', 'athemes-blocks' ) }
														defaultValue={ imageWidth }
														defaultUnit={ getSettingUnit( 'imageWidth', currentDevice, atts ) }
														min={ 0 }
														max={ {
															'%': 100,
															px: 1000,
														} }
														responsive={true}
														reset={true}
														units={['%', 'px']}
														onChange={ ( value ) => {
															updateAttribute( 'imageWidth', {
																value: value,
																unit: getSettingUnit( 'imageWidth', currentDevice, atts )
															}, currentDevice );

															setUpdateCss( { settingId: 'imageWidth', value: value } );
														} }
														onChangeUnit={ ( value ) => {
															updateAttribute( 'imageWidth', {
																value: imageWidth,
																unit: value,
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
													<RangeSlider 
														label={ __( 'Gap', 'athemes-blocks' ) }
														defaultValue={ imageGap }
														defaultUnit={ getSettingUnit( 'imageGap', currentDevice, atts ) }
														min={ 1 }
														max={ 100 }
														responsive={true}
														reset={true}
														units={['px']}
														onChange={ ( value ) => {
															updateAttribute( 'imageGap', {
																value: value,
																unit: getSettingUnit( 'imageGap', currentDevice, atts )
															}, currentDevice );

															setUpdateCss( { settingId: 'imageGap', value: value } );
														} }
														onChangeUnit={ ( value ) => {
															updateAttribute( 'imageGap', {
																value: imageGap,
																unit: value,
															}, currentDevice );

															setUpdateCss( { settingId: 'imageGap', value: value } );								
														} }
														onClickReset={ () => {
															updateAttribute( 'imageGap', {
																value: getSettingDefaultValue( 'imageGap', currentDevice, attributesDefaults ),
																unit: getSettingDefaultUnit( 'imageGap', currentDevice, attributesDefaults )
															}, currentDevice );							

															setUpdateCss( { settingId: 'imageGap', value: getSettingDefaultValue( 'imageGap', currentDevice, attributesDefaults ) } );								
														} }
													/>
												</>
											)
										}
										<Dimensions
											label={ __( 'Border Radius', 'athemes-blocks' ) }
											directions={[
												{ label: __( 'Top', 'athemes-blocks' ), value: 'top' },
												{ label: __( 'Right', 'athemes-blocks' ), value: 'right' },
												{ label: __( 'Bottom', 'athemes-blocks' ), value: 'bottom' },
												{ label: __( 'Left', 'athemes-blocks' ), value: 'left' },
											]}
											value={ imageBorderRadius }
											defaultUnit={ getSettingUnit('imageBorderRadius', currentDevice, atts) }
											directionsValue={ getDimensionsSettingDirectionsValue('imageBorderRadius', currentDevice, atts) }
											connect={ getDimensionsSettingConnectValue('imageBorderRadius', currentDevice, atts) }
											responsive={ true }
											units={['px', '%']}
											reset={true}
											onChange={ ( value ) => {
												updateAttribute( 'imageBorderRadius', {
													value: value.value,
													unit: getSettingUnit( 'imageBorderRadius', currentDevice, atts ),
													connect: getDimensionsSettingConnectValue( 'imageBorderRadius', currentDevice, atts )
												}, currentDevice );

												setUpdateCss( { settingId: 'imageBorderRadius', value: value.value } );
											} }
											onChangeUnit={ ( value ) => {
												updateAttribute( 'imageBorderRadius', {
													value: getSettingValue( 'imageBorderRadius', currentDevice, atts ),
													unit: value,
													connect: getDimensionsSettingConnectValue( 'imageBorderRadius', currentDevice, atts )
												}, currentDevice );

												setUpdateCss( { settingId: 'imageBorderRadius', value: getSettingValue( 'imageBorderRadius', currentDevice, atts ) } );
											} }
											onClickReset={ () => {
												updateAttribute( 'imageBorderRadius', getDimensionsSettingDefaultValue( 'imageBorderRadius', currentDevice, attributesDefaults ), currentDevice );

												setUpdateCss( { settingId: 'imageBorderRadius', value: getDimensionsSettingDefaultValue( 'imageBorderRadius', currentDevice, attributesDefaults ) } );
											} }
										/>
										<SwitchToggle
											label={ __( 'Overlay', 'athemes-blocks' ) }
											value={ imageOverlay }
											responsive={false}
											reset={true}
											onChange={ ( value ) => {
												updateAttribute( 'imageOverlay', value );
											} }
											onClickReset={ () => {
												updateAttribute( 'imageOverlay', getSettingDefaultValue( 'imageOverlay', '', attributesDefaults ) );
											} }
										/>
										{
											imageOverlay && (
												<>
													<ColorPicker
														label={ __( 'Overlay Color', 'athemes-blocks' ) }
														value={ imageOverlayColor }
														hover={false}
														responsive={false}
														reset={true}
														enableAlpha={false}
														defaultStateOnChangeComplete={ ( value ) => {
															updateAttribute( 'imageOverlayColor', {
																value: {
																	defaultState: value,
																	hoverState: getColorPickerSettingValue( 'imageOverlayColor', 'desktop', 'hoverState', atts )
																}
															}, 'desktop' );
															
															setUpdateCss( { settingId: 'imageOverlayColor', value: getColorPickerSettingValue( 'imageOverlayColor', 'desktop', 'defaultState', atts ) } );
														} }
														hoverStateOnChangeComplete={ ( value ) => {
															updateAttribute( 'imageOverlayColor', {
																value: {
																	defaultState: getColorPickerSettingValue( 'imageOverlayColor', 'desktop', 'defaultState', atts ),
																	hoverState: value	
																}
															}, 'desktop' );

															setUpdateCss( { settingId: 'imageOverlayColor', value: getColorPickerSettingValue( 'imageOverlayColor', 'desktop', 'hoverState', atts ) } );
														} }
														onClickReset={ () => {
															updateAttribute( 'imageOverlayColor', {
																value: {
																	defaultState: getColorPickerSettingDefaultValue( 'imageOverlayColor', 'desktop', 'defaultState', attributesDefaults ),
																	hoverState: getColorPickerSettingDefaultValue( 'imageOverlayColor', 'desktop', 'hoverState', attributesDefaults )	
																}
															}, 'desktop' ); 

															setUpdateCss( { settingId: 'imageOverlayColor', value: getColorPickerSettingDefaultValue( 'imageOverlayColor', 'desktop', 'defaultState', attributesDefaults ) } );
														} }
													/>
													<RangeSlider 
														label={ __( 'Overlay Opacity', 'athemes-blocks' ) }
														defaultValue={ imageOverlayOpacity }
														defaultUnit=""
														min={0}
														step={0.1}
														max={1}
														responsive={false}
														reset={true}
														units={false}
														onChange={ ( value ) => {
															updateAttribute( 'imageOverlayOpacity', {
																value: value,
																unit: ''
															}, 'desktop' );

															setUpdateCss( { settingId: 'imageOverlayOpacity', value: value } );
														} }
														onClickReset={ () => {
															updateAttribute( 'imageOverlayOpacity', getSettingDefaultValue( 'imageOverlayOpacity', 'desktop', attributesDefaults ), 'desktop' );

															setUpdateCss( { settingId: 'imageOverlayOpacity', value: getSettingDefaultValue( 'imageOverlayOpacity', 'desktop', attributesDefaults ) } );
														} }
													/>
												</>
											)
										}
										<RangeSlider 
											label={ __( 'Bottom Spacing', 'athemes-blocks' ) }
											defaultValue={ imageBottomSpacing }
											defaultUnit={ getSettingUnit( 'imageBottomSpacing', currentDevice, atts ) }
											min={ 0 }
											max={ {
												px: 150,
												em: 20,
												rem: 20
											} }
											responsive={true}
											reset={true}
											units={['px', 'em', 'rem']}
											onChange={ ( value ) => {
												updateAttribute( 'imageBottomSpacing', {
													value: value,
													unit: getSettingUnit( 'imageBottomSpacing', currentDevice, atts )
												}, currentDevice );

												setUpdateCss( { settingId: 'imageBottomSpacing', value: value } );
											} }
											onChangeUnit={ ( value ) => {
												updateAttribute( 'imageBottomSpacing', {
													value: imageBottomSpacing,
													unit: value,
												}, currentDevice );

												setUpdateCss( { settingId: 'imageBottomSpacing', value: value } );								
											} }
											onClickReset={ () => {
												updateAttribute( 'imageBottomSpacing', {
													value: getSettingDefaultValue( 'imageBottomSpacing', currentDevice, attributesDefaults ),
													unit: getSettingDefaultUnit( 'imageBottomSpacing', currentDevice, attributesDefaults )
												}, currentDevice );							

												setUpdateCss( { settingId: 'imageBottomSpacing', value: getSettingDefaultValue( 'imageBottomSpacing', currentDevice, attributesDefaults ) } );								
											} }
										/>
									</PanelBody>		
								)
							}
							<PanelBody 
								title={ __( 'Title', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'title' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'title' ) }
							>
								<ColorPicker
									label={ __( 'Color', 'athemes-blocks' ) }
									value={ titleColor }
									hover={true}
									responsive={false}
									reset={true}
									enableAlpha={true}
									defaultStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'titleColor', {
											value: {
												defaultState: value,
												hoverState: getColorPickerSettingValue( 'titleColor', 'desktop', 'hoverState', atts )
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'titleColor', value: getColorPickerSettingValue( 'titleColor', 'desktop', 'defaultState', atts ) } );
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'titleColor', {
											value: {
												defaultState: getColorPickerSettingValue( 'titleColor', 'desktop', 'defaultState', atts ),
												hoverState: value	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'titleColor', value: getColorPickerSettingValue( 'titleColor', 'desktop', 'hoverState', atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'titleColor', {
											value: {
												defaultState: getColorPickerSettingDefaultValue( 'titleColor', 'desktop', 'defaultState', attributesDefaults ),
												hoverState: getColorPickerSettingDefaultValue( 'titleColor', 'desktop', 'hoverState', attributesDefaults )	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'titleColor', value: getColorPickerSettingDefaultValue( 'titleColor', 'desktop', 'defaultState', attributesDefaults ) } );
									} }
								/>
								<Typography
									label={ __( 'Typography', 'athemes-blocks' ) }
									settingId="titleTypography"
									attributes={ atts }
									setAttributes={ setAttributes }
									attributesDefaults={ attributesDefaults }
									setUpdateCss={ setUpdateCss }
									subFields={['fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'textTransform', 'textDecoration', 'lineHeight', 'letterSpacing']}
								/>
								<RangeSlider 
									label={ __( 'Bottom Spacing', 'athemes-blocks' ) }
									defaultValue={ titleBottomSpacing }
									defaultUnit={ getSettingUnit( 'titleBottomSpacing', currentDevice, atts ) }
									min={ 0 }
									max={ {
										px: 150,
										em: 20,
										rem: 20
									} }
									responsive={false}
									reset={true}
									units={['px', 'em', 'rem']}
									onChange={ ( value ) => {
										updateAttribute( 'titleBottomSpacing', {
											value: value,
											unit: getSettingUnit( 'titleBottomSpacing', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'titleBottomSpacing', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'titleBottomSpacing', {
											value: titleBottomSpacing,
											unit: value,
										}, currentDevice );

										setUpdateCss( { settingId: 'titleBottomSpacing', value: value } );								
									} }
									onClickReset={ () => {
										updateAttribute( 'titleBottomSpacing', {
											value: getSettingDefaultValue( 'titleBottomSpacing', currentDevice, attributesDefaults ),
											unit: getSettingDefaultUnit( 'titleBottomSpacing', currentDevice, attributesDefaults )
										}, currentDevice );							

										setUpdateCss( { settingId: 'titleBottomSpacing', value: getSettingDefaultValue( 'titleBottomSpacing', currentDevice, attributesDefaults ) } );								
									} }
								/>
							</PanelBody>
							<PanelBody 
								title={ __( 'Description', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'description' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'description' ) }
							>
								<ColorPicker
									label={ __( 'Color', 'athemes-blocks' ) }
									value={ descriptionColor }
									hover={true}
									responsive={false}
									reset={true}
									enableAlpha={true}
									defaultStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'descriptionColor', {
											value: {
												defaultState: value,
												hoverState: getColorPickerSettingValue( 'descriptionColor', 'desktop', 'hoverState', atts )
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'descriptionColor', value: getColorPickerSettingValue( 'descriptionColor', 'desktop', 'defaultState', atts ) } );
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'descriptionColor', {
											value: {
												defaultState: getColorPickerSettingValue( 'descriptionColor', 'desktop', 'defaultState', atts ),
												hoverState: value	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'descriptionColor', value: getColorPickerSettingValue( 'descriptionColor', 'desktop', 'hoverState', atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'descriptionColor', {
											value: {
												defaultState: getColorPickerSettingDefaultValue( 'descriptionColor', 'desktop', 'defaultState', attributesDefaults ),
												hoverState: getColorPickerSettingDefaultValue( 'descriptionColor', 'desktop', 'hoverState', attributesDefaults )	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'descriptionColor', value: getColorPickerSettingDefaultValue( 'descriptionColor', 'desktop', 'defaultState', attributesDefaults ) } );
									} }
								/>
								<Typography
									label={ __( 'Typography', 'athemes-blocks' ) }
									settingId="descriptionTypography"
									attributes={ atts }
									setAttributes={ setAttributes }
									attributesDefaults={ attributesDefaults }
									setUpdateCss={ setUpdateCss }
									subFields={['fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'textTransform', 'textDecoration', 'lineHeight', 'letterSpacing']}
								/>
								<RangeSlider 
									label={ __( 'Bottom Spacing', 'athemes-blocks' ) }
									defaultValue={ descriptionBottomSpacing }
									defaultUnit={ getSettingUnit( 'descriptionBottomSpacing', currentDevice, atts ) }
									min={ 0 }
									max={ {
										px: 150,
										em: 20,
										rem: 20
									} }
									responsive={false}
									reset={true}
									units={['px', 'em', 'rem']}
									onChange={ ( value ) => {
										updateAttribute( 'descriptionBottomSpacing', {
											value: value,
											unit: getSettingUnit( 'descriptionBottomSpacing', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'descriptionBottomSpacing', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'descriptionBottomSpacing', {
											value: descriptionBottomSpacing,
											unit: value,
										}, currentDevice );

										setUpdateCss( { settingId: 'descriptionBottomSpacing', value: value } );								
									} }
									onClickReset={ () => {
										updateAttribute( 'descriptionBottomSpacing', {
											value: getSettingDefaultValue( 'descriptionBottomSpacing', currentDevice, attributesDefaults ),
											unit: getSettingDefaultUnit( 'descriptionBottomSpacing', currentDevice, attributesDefaults )
										}, currentDevice );							

										setUpdateCss( { settingId: 'descriptionBottomSpacing', value: getSettingDefaultValue( 'descriptionBottomSpacing', currentDevice, attributesDefaults ) } );								
									} }
								/>
							</PanelBody>
							<PanelBody 
								title={ __( 'Button', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'button' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'button' ) }
							>
								<ColorPicker
									label={ __( 'Text Color', 'athemes-blocks' ) }
									value={ buttonColor }
									hover={true}
									responsive={false}
									reset={true}
									defaultStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'buttonColor', {
											value: {
												defaultState: value,
												hoverState: getColorPickerSettingValue( 'buttonColor', 'desktop', 'hoverState', atts )
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'buttonColor', value: getColorPickerSettingValue( 'buttonColor', 'desktop', 'defaultState', atts ) } );
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'buttonColor', {
											value: {
												defaultState: getColorPickerSettingValue( 'buttonColor', 'desktop', 'defaultState', atts ),
												hoverState: value	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'buttonColor', value: getColorPickerSettingValue( 'buttonColor', 'desktop', 'hoverState', atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'buttonColor', {
											value: {
												defaultState: getColorPickerSettingDefaultValue( 'buttonColor', 'desktop', 'defaultState', attributesDefaults ),
												hoverState: getColorPickerSettingDefaultValue( 'buttonColor', 'desktop', 'hoverState', attributesDefaults )	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'buttonColor', value: getColorPickerSettingDefaultValue( 'buttonColor', 'desktop', 'defaultState', attributesDefaults ) } );
									} }
								/>
								<Typography
									label={ __( 'Typography', 'athemes-blocks' ) }
									settingId="buttonTypography"
									attributes={ atts }
									setAttributes={ setAttributes }
									attributesDefaults={ attributesDefaults }
									setUpdateCss={ setUpdateCss }
									subFields={['fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'textTransform', 'textDecoration', 'lineHeight', 'letterSpacing']}
								/>
								<ColorPicker
									label={ __( 'Background Color', 'athemes-blocks' ) }
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
								<Border
									label=""
									settingId="buttonBorder"
									attributes={ atts }
									setAttributes={ setAttributes }
									attributesDefaults={ attributesDefaults }
									setUpdateCss={ setUpdateCss }
									subFields={['borderStyle', 'borderWidth', 'borderRadius', 'borderColor']}
								/>
								<Dimensions
									label={ __( 'Padding', 'athemes-blocks' ) }
									directions={[
										{ label: __( 'Top', 'athemes-blocks' ), value: 'top' },
										{ label: __( 'Right', 'athemes-blocks' ), value: 'right' },
										{ label: __( 'Bottom', 'athemes-blocks' ), value: 'bottom' },
										{ label: __( 'Left', 'athemes-blocks' ), value: 'left' },
									]}
									value={ buttonPadding }
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
								<RangeSlider 
									label={ __( 'Bottom Spacing', 'athemes-blocks' ) }
									defaultValue={ buttonBottomSpacing }
									defaultUnit={ getSettingUnit( 'buttonBottomSpacing', currentDevice, atts ) }
									min={ 0 }
									max={ {
										px: 150,
										em: 20,
										rem: 20
									} }
									responsive={false}
									reset={true}
									units={['px', 'em', 'rem']}
									onChange={ ( value ) => {
										updateAttribute( 'buttonBottomSpacing', {
											value: value,
											unit: getSettingUnit( 'buttonBottomSpacing', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'buttonBottomSpacing', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'buttonBottomSpacing', {
											value: buttonBottomSpacing,
											unit: value,
										}, currentDevice );

										setUpdateCss( { settingId: 'buttonBottomSpacing', value: value } );								
									} }
									onClickReset={ () => {
										updateAttribute( 'buttonBottomSpacing', {
											value: getSettingDefaultValue( 'buttonBottomSpacing', currentDevice, attributesDefaults ),
											unit: getSettingDefaultUnit( 'buttonBottomSpacing', currentDevice, attributesDefaults )
										}, currentDevice );							

										setUpdateCss( { settingId: 'buttonBottomSpacing', value: getSettingDefaultValue( 'buttonBottomSpacing', currentDevice, attributesDefaults ) } );								
									} }
								/>
							</PanelBody>
						</Panel>
					)
				}
			</InspectorControls>
			
			{(() => {
				const TitleTag = titleTag;
				let blockPropsClassName = `at-block at-block-taxonomy-grid`;

				let blockProps = useBlockProps({
					className: blockPropsClassName
				});

				// Block alignment.
				if (attributes.align) {
					blockProps.className += ` align${attributes.align}`;
					blockProps['data-align'] = attributes.align;
				}

				// Image Ratio.
				blockProps.className += ` atb-image-ratio-${imageRatio}`;

				// Image Size.
				blockProps.className += ` atb-image-size-${imageSize}`;

				// Image Position.
				blockProps.className += ` atb-image-position-${imagePosition}`;

				// Image overlay.
				if ( imageOverlay ) {
					blockProps.className += ' has-image-overlay';
				}

				// Card Vertical Alignment.
				if (cardVerticalAlignment) {
					blockProps.className += ` atb-card-vertical-alignment-${cardVerticalAlignment}`;
				}

				// Has carousel dots.
				if (displayCarousel && (carouselNavigation === 'dots' || carouselNavigation === 'both')) {
					blockProps.className += ' atb-has-carousel-dots';
				}

				// Card padding to content only.
				if (cardPaddingToContentOnly) {
					blockProps.className += ' content-padding';
				} else {
					blockProps.className += ' card-padding';
				}

				// Content horizontal alignment.
				if (cardHorizontalAlignment) {
					blockProps.className += ` content-align-${cardHorizontalAlignment}`;
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

				// Post Content.
				const PostContent = (props) => {
					const { term } = props;

					let termMedia = false;
					let image = {
						src: '',
						width: 200,
						height: 200,
						alt: decodeEntities(term.name) || 'alt'
					};

					// Handle product category image
					if ( (taxonomy === 'product_cat' || taxonomy === 'product_brand') && term.meta && term.meta.thumbnail_id) {
						const media = select('core').getMedia(term.meta.thumbnail_id);
						if (media) {
							termMedia = media;
							image = {
								src: media.source_url,
								width: media.media_details?.width || 200,
								height: media.media_details?.height || 200,
								alt: media.alt_text || decodeEntities(term.name) || 'alt'
							};
						}
					}

					return (
						<div key={term.id} className="at-block-taxonomy-grid__item">
							{ displayImage && (termMedia || image.src) && (
								<div className="at-block-taxonomy-grid__image">
									<img 
										src={image.src}
										className="at-block-taxonomy-grid__image-image"
										width={image.width}
										height={image.height}
										alt={image.alt}
									/>
								</div>
							)}
							
							<div className="at-block-taxonomy-grid__content">
								{displayTitle && (
									<TitleTag className="at-block-taxonomy-grid__title">
										<a href="#" onClick={ preventClickHandler }>{ decodeEntities(term.name) }</a>
									</TitleTag>
								)}

								{displayDescription && (
									<div className="at-block-taxonomy-grid__description">
										{decodeEntities(term.description)}
									</div>
								)}

								{displayButton && (
									<div className="at-block-taxonomy-grid__button">
										<a 
											href="#"
											onClick={ preventClickHandler }
											className="at-block-taxonomy-grid__button-button"
											target={buttonOpenInNewTab ? '_blank' : undefined}
											rel={buttonOpenInNewTab ? 'noopener noreferrer' : undefined}
										>
											{__( 'Read More', 'athemes-blocks' )}
										</a>
									</div>
								)}
							</div>
						</div>
					)
				}

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

						{isLoading ? (
							<div className="at-block-taxonomy-grid__loading">
								<Spinner />
							</div>
						) : terms && terms.length > 0 ? (
							<>
								{displayCarousel ? (
									<div 
										className="at-block-swiper-wrapper"
										onMouseEnter={ swiperPauseMouseEnterHandler }
										onMouseLeave={ swiperPauseMouseLeaveHandler }
									>
										<Swiper
											ref={swiperRef}
											modules={[Pagination, Navigation, Autoplay]}
											className="at-block-taxonomy-grid__swiper"
											{...swiperOptions}
										>
											{terms.map((term) => {
												return (
													<SwiperSlide key={term.id}>
														<PostContent term={term} />
													</SwiperSlide>
												)
											})}
										</Swiper>

										{
											( ( termsPerPage > 1 && termsPerPage > columns ) && ( carouselNavigation === 'arrows' || carouselNavigation === 'both' ) && displayCarouselNavigation ) && (
												<>
													<div className="at-block-nav at-block-nav--next" onClick={ swiperNavigationNextHandler }></div>
													<div className="at-block-nav at-block-nav--prev" onClick={ swiperNavigationPrevHandler }></div>
												</>
											)
										}
									</div>
								) : (
									<>
										<div className="at-block-taxonomy-grid__items">
											{terms.map((term) => {
												return (
													<PostContent term={term} key={term.id} />
												)
											})}
										</div>
									</>
								)}
							</>
						) : (
							<p className="at-block-taxonomy-grid__no-terms">
								{__('No terms found.', 'athemes-blocks')}
							</p>
						)}
					</div>
				);
			})()}
		</>
	);
};

const applyWithSelect = withSelect((select, props) => {
	const { attributes } = props;
	const {
		taxonomy,
		termsPerPage,
		hideEmptyTerms,
		orderBy,
		order,
	} = attributes;

	// Don't fetch if no post type is selected
	if (!taxonomy) {
		return {
			terms: [],
			isLoading: false
		};
	}

	const queryArgs = {
		per_page: termsPerPage || 10,
		orderby: orderBy,
		order: order || 'desc',
	};

	// Add taxonomy query if taxonomy and terms are set
	if (taxonomy && taxonomy !== 'all') {
		queryArgs[taxonomy] = taxonomy;
	}

	// Hide empty terms if enabled
	if ( hideEmptyTerms) {
		queryArgs['hide_empty'] = true;
	}

	// Get terms from the WordPress REST API
	let terms = select('core').getEntityRecords('taxonomy', taxonomy, queryArgs);

	// Check if the data is still being fetched
	const isLoading = select('core/data').isResolving('core', 'getEntityRecords', [
		'taxonomy',
		taxonomy,
		queryArgs
	]);

	return {
		terms: terms || [],
		isLoading: isLoading || false
	};
});

export default withDynamicCSS(
	withQueryPostTypesData(
		withTabsNavigation(
			withPersistentPanelToggle(	
				withAdvancedTab(
					withGoogleFonts(applyWithSelect(Edit)),
					attributesDefaults
				)
			)
		),
	),
	attributesDefaults
);