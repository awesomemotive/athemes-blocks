import { __, sprintf } from '@wordpress/i18n';
import { useEffect, useMemo, useRef, useState } from '@wordpress/element';
import { useSelect, useDispatch } from "@wordpress/data";
import { Panel, PanelBody, Spinner } from '@wordpress/components';
import { InspectorControls, useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import { useMergeRefs } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';

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
const attributesDefaults = PostGridBlockData.attributes;

const Edit = (props) => {
	const { attributes, setAttributes, clientId, postTypes, setUpdateCss, isPanelOpened, onTogglePanelBodyHandler, posts, isLoading } = props;
	const { content } = attributes;
	const atts = attributes;
	const updateAttribute = createAttributeUpdater(attributes, setAttributes);
	const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());
	const currentTab = useSelect((select) => select('persistent-tabs-store').getCurrentTab());

	const swiperRef = useRef(null);

	const {

		// General.
        postType,
		taxonomy,
		taxonomyTerm,
		postsPerPage,
		excludeCurrentPost,
		offsetStartingPoint,
		offsetStartingPointValue,
		orderBy,
		order,
		displayCarousel,
		carouselPauseOnHover,
		carouselAutoplay,
		carouselAutoplaySpeed,
		carouselLoop,
		carouselAutoHeight,
		carouselTransitionDuration,
		carouselNavigation,
		pagination,
		paginationPageLimit,
		paginationType,
		paginationAlignment,
		displayImage,
		imageRatio,
		imageSize,
		imagePosition,
		displayTitle,
		titleTag,
		displayAuthor,
		displayDate,
		displayComments,
		displayTaxonomy,
		displayMetaIcon,
		displayExcerpt,
		excerptMaxWords,
		displayReadMore,
		readMoreOpenInNewTab,
		readMoreText,

        // Style.
		columns,
		columnsGap,
		rowsGap,
		cardBackgroundColor,
		cardBorder,
		cardVerticalAlignment,
		cardPadding,
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
		imageBottomSpacing,
		imageBorderRadius,
		titleColor,
		titleTypography,
		titleBottomSpacing,
		metaColor,
		metaIconColor,
		metaTypography,
		metaBottomSpacing,
		excerptColor,
		excerptTypography,
		excerptBottomSpacing,
		readMoreButtonColor,
		readMoreButtonTypography,
		readMoreButtonBackgroundColor,
		readMoreButtonBorder,
		readMoreButtonPadding,
		readMoreButtonBottomSpacing,
		paginationTextColor,
		paginationActiveBackgroundColor,
		paginationActiveTextColor,
		paginationBorder,
		paginationItemsGap,
		paginationTopSpacing,
		paginationButtonBackgroundColor,
		paginationButtonTextColor,
		paginationButtonBorder,
		paginationButtonPadding,

        // Advanced.
        hideOnDesktop,
		hideOnTablet,
		hideOnMobile,
    } = useMemo(() => {
		return {

			// General.
			postType: atts.postType,
			taxonomy: atts.taxonomy,
			taxonomyTerm: atts.taxonomyTerm,
			postsPerPage: atts.postsPerPage,
			excludeCurrentPost: atts.excludeCurrentPost,
			offsetStartingPoint: atts.offsetStartingPoint,
			offsetStartingPointValue: atts.offsetStartingPointValue,
			orderBy: atts.orderBy,
			order: atts.order,
			displayCarousel: atts.displayCarousel,
			carouselPauseOnHover: atts.carouselPauseOnHover,
			carouselAutoplay: atts.carouselAutoplay,
			carouselAutoplaySpeed: atts.carouselAutoplaySpeed,
			carouselLoop: atts.carouselLoop,
			carouselAutoHeight: atts.carouselAutoHeight,
			carouselTransitionDuration: atts.carouselTransitionDuration,
			carouselNavigation: atts.carouselNavigation,
			pagination: atts.pagination,
			paginationPageLimit: atts.paginationPageLimit,
			paginationType: atts.paginationType,
			paginationAlignment: getSettingValue('paginationAlignment', currentDevice, atts),
			displayImage: atts.displayImage,
			imageRatio: atts.imageRatio,
			imageSize: atts.imageSize,
			imagePosition: atts.imagePosition,
			displayTitle: atts.displayTitle,
			titleTag: atts.titleTag,
			displayAuthor: atts.displayAuthor,
			displayDate: atts.displayDate,
			displayComments: atts.displayComments,
			displayTaxonomy: atts.displayTaxonomy,
			displayMetaIcon: atts.displayMetaIcon,
			displayExcerpt: atts.displayExcerpt,
			excerptMaxWords: atts.excerptMaxWords,
			displayReadMore: atts.displayReadMore,
			readMoreOpenInNewTab: atts.readMoreOpenInNewTab,
			readMoreText: atts.readMoreText,

			// Style.
			columns: getSettingValue('columns', currentDevice, atts),
			columnsGap: getSettingValue('columnsGap', currentDevice, atts),
			rowsGap: getSettingValue('rowsGap', currentDevice, atts),
			cardBackgroundColor: getSettingValue('cardBackgroundColor', 'desktop', atts),
			cardVerticalAlignment: getSettingValue('cardVerticalAlignment', 'desktop', atts),
			cardPadding: getDimensionsSettingValue('cardPadding', currentDevice, atts),
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
			imageBottomSpacing: getSettingValue('imageBottomSpacing', currentDevice, atts),
			imageBorderRadius: getSettingValue('imageBorderRadius', 'desktop', atts),
			titleColor: getSettingValue('titleColor', 'desktop', atts),
			titleTypography: atts.titleTypography,
			titleBottomSpacing: getSettingValue('titleBottomSpacing', currentDevice, atts),
			metaColor: getSettingValue('metaColor', 'desktop', atts),
			metaIconColor: getSettingValue('metaIconColor', 'desktop', atts),
			metaTypography: atts.metaTypography,
			metaBottomSpacing: getSettingValue('metaBottomSpacing', currentDevice, atts),
			excerptColor: getSettingValue('excerptColor', 'desktop', atts),
			excerptTypography: atts.excerptTypography,
			excerptBottomSpacing: getSettingValue('excerptBottomSpacing', currentDevice, atts),
			readMoreButtonColor: getSettingValue('readMoreButtonColor', 'desktop', atts),
			readMoreButtonTypography: atts.readMoreButtonTypography,
			readMoreButtonBackgroundColor: getSettingValue('readMoreButtonBackgroundColor', 'desktop', atts),
			readMoreButtonBorder: atts.readMoreButtonBorder,
			readMoreButtonPadding: getDimensionsSettingValue('readMoreButtonPadding', currentDevice, atts),
			readMoreButtonBottomSpacing: getSettingValue('readMoreButtonBottomSpacing', currentDevice, atts),
			paginationTextColor: getSettingValue('paginationTextColor', 'desktop', atts),
			paginationActiveBackgroundColor: getSettingValue('paginationActiveBackgroundColor', 'desktop', atts),
			paginationActiveTextColor: getSettingValue('paginationActiveTextColor', 'desktop', atts),
			paginationBorder: atts.paginationBorder,
			paginationItemsGap: getSettingValue('paginationItemsGap', currentDevice, atts),
			paginationTopSpacing: getSettingValue('paginationTopSpacing', currentDevice, atts),
			paginationButtonBackgroundColor: getSettingValue('paginationButtonBackgroundColor', 'desktop', atts),
			paginationButtonTextColor: getSettingValue('paginationButtonTextColor', 'desktop', atts),
			paginationButtonBorder: atts.paginationButtonBorder,
			paginationButtonPadding: getDimensionsSettingValue('paginationButtonPadding', currentDevice, atts),
			cardBorder: atts.cardBorder,

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

	// Order by options.
	const orderByOptions = useMemo(() => {
		const generalOptions = [
			{ label: __( 'Date', 'athemes-blocks' ), value: 'date' },
			{ label: __( 'Modified', 'athemes-blocks' ), value: 'modified' },
			{ label: __( 'Title', 'athemes-blocks' ), value: 'title' },
			{ label: __( 'Author', 'athemes-blocks' ), value: 'author' },
			{ label: __( 'Random', 'athemes-blocks' ), value: 'random' },
		]

		if ( postType === 'product' ) {
			return [
				...generalOptions,
				{ label: __( 'Popularity', 'athemes-blocks' ), value: 'popularity' },
				{ label: __( 'Rating', 'athemes-blocks' ), value: 'rating' },
				{ label: __( 'Price', 'athemes-blocks' ), value: 'price' },
				{ label: __( 'Sales', 'athemes-blocks' ), value: 'sales' },
				{ label: __( 'Menu Order', 'athemes-blocks' ), value: 'menu_order' },
			];
		}

		return generalOptions;
	}, [postType]);

	// Get taxonomies for the selected post type.
	const taxonomies = useSelect((select) => {
		const { getTaxonomies } = select('core');
		const taxonomies = getTaxonomies({ per_page: -1, post: postType }) || [];
		const filteredTaxonomies = taxonomies.filter(taxonomy => taxonomy.types.includes(postType));
		
		if ( filteredTaxonomies.length === 0 ) {
			return [{
				value: 0,
				label: sprintf( __( 'No taxonomies found for %s', 'athemes-blocks' ), postType ),
			}];
		}

		return [
			{ value: 'all', label: __( 'All', 'athemes-blocks' ) },
			...filteredTaxonomies.map(taxonomy => ({
				value: taxonomy.slug,
				label: taxonomy.name,
			}))
		];
	}, [postType]);

	// Get taxonomy terms for the selected taxonomy.
	const taxonomyTerms = useSelect((select) => {
		const { getEntityRecords } = select('core');
		const terms = getEntityRecords('taxonomy', taxonomy, { per_page: -1, type: postType }) || [];

		if ( terms.length === 0 ) {
			return [{
				value: 0,
				label: sprintf( __( 'No terms found for %s', 'athemes-blocks' ), taxonomy ),
			}];
		}

		return [
			{ value: 'all', label: __( 'All', 'athemes-blocks' ) },
			...terms.map(term => ({
				value: term.id,
				label: term.name,
			}))
		];
	}, [taxonomy, postType]);

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
		pagination: ( postsPerPage > 1 && postsPerPage > columns ) && ( carouselNavigation === 'dots' || carouselNavigation === 'both' ) ? {
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
								title={ __( 'Query Settings', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'query-settings', true ) }
								onToggle={ () => onTogglePanelBodyHandler( 'query-settings' ) }
							>
								<Select
									label={ __( 'Post Type', 'athemes-blocks' ) }
									options={postTypes}
									value={ postType }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ postType: value });
									} }
									onClickReset={ () => {
										setAttributes({ postType: attributesDefaults.postType.default });
									} }
								/>
								{
									postType !== 'page' && (
										<>
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
										</>
									)
								}
								{
									( postType !== 'page' && taxonomy !== 'all' ) && (
										<>
											<Select
												label={ __( 'Taxonomy Term', 'athemes-blocks' ) }
												options={taxonomyTerms}
												value={ taxonomyTerm }
												responsive={false}
												reset={true}
												onChange={ ( value ) => {
													setAttributes({ taxonomyTerm: value });
												} }
												onClickReset={ () => {
													setAttributes({ taxonomyTerm: attributesDefaults.taxonomyTerm.default });
												} }
											/>
										</>
									)
								}
								<RangeSlider 
									label={ __( 'Posts Per Page', 'athemes-blocks' ) }
									defaultValue={ postsPerPage }
									min={ 1 }
									max={ 100 }
									responsive={false}
									reset={true}
									units={false}
									onChange={ ( value ) => {
										setAttributes({ postsPerPage: value });
									} }
									onClickReset={ () => {
										setAttributes({ postsPerPage: attributesDefaults.postsPerPage.default });
									} }
								/>
								<SwitchToggle
									label={ __( 'Exclude Current Post', 'athemes-blocks' ) }
									value={ excludeCurrentPost }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ excludeCurrentPost: value });
									} }
									onClickReset={ () => {
										setAttributes({ excludeCurrentPost: attributesDefaults.excludeCurrentPost.default });
									} }
								/>
								<SwitchToggle
									label={ __( 'Offset Starting Point', 'athemes-blocks' ) }
									value={ offsetStartingPoint }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ offsetStartingPoint: value });
									} }
									onClickReset={ () => {
										setAttributes({ offsetStartingPoint: attributesDefaults.offsetStartingPoint.default });
									} }
								/>
								{
									offsetStartingPoint && (
										<RangeSlider 
											label={ __( 'Offset Value', 'athemes-blocks' ) }
											defaultValue={ offsetStartingPointValue }
											min={ 0 }
											max={ 50 }
											responsive={false}
											reset={true}
											units={false}
											onChange={ ( value ) => {
												setAttributes({ offsetStartingPointValue: value });
											} }
											onClickReset={ () => {
												setAttributes({ offsetStartingPointValue: attributesDefaults.offsetStartingPointValue.default });
											} }
										/>											
									)
								}
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
									displayCarousel && (
										<>
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
								displayCarousel === false && (
									<PanelBody 
										title={ __( 'Pagination', 'athemes-blocks' ) } 
										initialOpen={false}
										opened={ isPanelOpened( 'pagination' ) }
										onToggle={ () => onTogglePanelBodyHandler( 'pagination' ) }
									>
										<SwitchToggle
											label={ __( 'Pagination', 'athemes-blocks' ) }
											value={ pagination }
											responsive={false}
											reset={true}
											onChange={ ( value ) => {
												setAttributes({ pagination: value });
											} }
											onClickReset={ () => {
												setAttributes({ pagination: attributesDefaults.pagination.default });
											} }
										/>
										{
											pagination && (
												<>
													<RangeSlider 
														label={ __( 'Page Limit', 'athemes-blocks' ) }
														defaultValue={ paginationPageLimit }
														min={ 1 }
														max={ 100 }
														responsive={false}
														reset={true}
														units={false}
														onChange={ ( value ) => {
															setAttributes({ paginationPageLimit: value });
														} }
														onClickReset={ () => {
															setAttributes({ paginationPageLimit: attributesDefaults.paginationPageLimit.default });
														} }
													/>
													<Select
														label={ __( 'Pagination Type', 'athemes-blocks' ) }
														options={[
															{ label: __( 'Default', 'athemes-blocks' ), value: 'default' },
															{ label: __( 'Load More', 'athemes-blocks' ), value: 'load-more' },
															{ label: __( 'Infinite Scroll', 'athemes-blocks' ), value: 'infinite-scroll' },
														]}
														value={ paginationType }
														responsive={false}
														reset={true}
														onChange={ ( value ) => {
															setAttributes({ paginationType: value });
														} }
														onClickReset={ () => {
															setAttributes({ paginationType: attributesDefaults.paginationType.default });
														} }
													/>
													<RadioButtons 
														label={ __( 'Alignment', 'athemes-blocks' ) }
														defaultValue={ paginationAlignment }
														options={[
															{ label: __( 'Start', 'athemes-blocks' ), value: 'flex-start' },
															{ label: __( 'Center', 'athemes-blocks' ), value: 'center' },
															{ label: __( 'End', 'athemes-blocks' ), value: 'flex-end' },
														]}
														responsive={true}
														reset={true}
														onChange={ ( value ) => {
															updateAttribute( 'paginationAlignment', {
																value: value
															}, currentDevice );

															setUpdateCss( { settingId: 'paginationAlignment', value: value } );
														} }
														onClickReset={ () => {
															updateAttribute( 'paginationAlignment', {
																value: getSettingDefaultValue( 'paginationAlignment', currentDevice, attributesDefaults )
															}, currentDevice );
															
															setUpdateCss( { settingId: 'paginationAlignment', value: getSettingDefaultValue( 'paginationAlignment', currentDevice, attributesDefaults ) } );
														} }
													/>
												</>
											)
										}
									</PanelBody>
								)
							}
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
									label={ __( 'Display Author', 'athemes-blocks' ) }
									value={ displayAuthor }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ displayAuthor: value });
									} }
									onClickReset={ () => {
										setAttributes({ displayAuthor: attributesDefaults.displayAuthor.default });
									} }
								/>
								<SwitchToggle
									label={ __( 'Display Date', 'athemes-blocks' ) }
									value={ displayDate }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ displayDate: value });
									} }
									onClickReset={ () => {
										setAttributes({ displayDate: attributesDefaults.displayDate.default });
									} }
								/>
								<SwitchToggle
									label={ __( 'Display Comments', 'athemes-blocks' ) }
									value={ displayComments }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ displayComments: value });
									} }
									onClickReset={ () => {
										setAttributes({ displayComments: attributesDefaults.displayComments.default });
									} }
								/>
								<SwitchToggle
									label={ __( 'Display Taxonomy', 'athemes-blocks' ) }
									value={ displayTaxonomy }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ displayTaxonomy: value });
									} }
									onClickReset={ () => {
										setAttributes({ displayTaxonomy: attributesDefaults.displayTaxonomy.default });
									} }
								/>
								<SwitchToggle
									label={ __( 'Display Meta Icon', 'athemes-blocks' ) }
									value={ displayMetaIcon }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ displayMetaIcon: value });
									} }
									onClickReset={ () => {
										setAttributes({ displayMetaIcon: attributesDefaults.displayMetaIcon.default });
									} }
								/>
								<SwitchToggle
									label={ __( 'Display Excerpt', 'athemes-blocks' ) }
									value={ displayExcerpt }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ displayExcerpt: value });
									} }
									onClickReset={ () => {
										setAttributes({ displayExcerpt: attributesDefaults.displayExcerpt.default });
									} }
								/>
								<RangeSlider
									label={ __( 'Excerpt Length', 'athemes-blocks' ) }
									defaultValue={ excerptMaxWords }
									min={ 1 }
									max={ 100 }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ excerptMaxWords: value });
									} }
									onClickReset={ () => {
										setAttributes({ excerptMaxWords: attributesDefaults.excerptMaxWords.default });
									} }
								/>
							</PanelBody>
							<PanelBody 
								title={ __( 'Read More Button', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'read-more-button' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'read-more-button' ) }
							>
								<SwitchToggle
									label={ __( 'Display Read More Button', 'athemes-blocks' ) }
									value={ displayReadMore }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ displayReadMore: value });
									} }
									onClickReset={ () => {
										setAttributes({ displayReadMore: attributesDefaults.displayReadMore.default });
									} }
								/>
								<SwitchToggle
									label={ __( 'Open in New Tab', 'athemes-blocks' ) }
									value={ readMoreOpenInNewTab }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ readMoreOpenInNewTab: value });
									} }
									onClickReset={ () => {
										setAttributes({ readMoreOpenInNewTab: attributesDefaults.readMoreOpenInNewTab.default });
									} }
								/>
								<TextInput
									label={ __( 'Text', 'athemes-blocks' ) }
									value={ readMoreText }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										setAttributes({ readMoreText: value });
									} }
									onClickReset={ () => {
										setAttributes({ readMoreText: attributesDefaults.readMoreText.default });
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
												{ label: __( 'Start', 'athemes-blocks' ), value: 'flex-start' },
												{ label: __( 'Center', 'athemes-blocks' ), value: 'center' },
												{ label: __( 'End', 'athemes-blocks' ), value: 'flex-end' },
												{ label: __( 'Stretch', 'athemes-blocks' ), value: 'stretch' },
											]}
											responsive={true}
											reset={true}
											onChange={ ( value ) => {
												updateAttribute( 'cardVerticalAlignment', {
													value: value
												}, currentDevice );

												setUpdateCss( { settingId: 'cardVerticalAlignment', value: value } );
											} }
											onClickReset={ () => {
												updateAttribute( 'cardVerticalAlignment', {
													value: getSettingDefaultValue( 'cardVerticalAlignment', currentDevice, attributesDefaults )
												}, currentDevice );
												
												setUpdateCss( { settingId: 'cardVerticalAlignment', value: getSettingDefaultValue( 'cardVerticalAlignment', currentDevice, attributesDefaults ) } );
											} }
										/>		
									)
								}
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
											min={ 0 }
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
								title={ __( 'Image', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'image' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'image' ) }
							>
								<RangeSlider 
									label={ __( 'Border Radius', 'athemes-blocks' ) }
									defaultValue={ imageBorderRadius }
									defaultUnit="px"	
									min={0}
									max={100}
									responsive={false}
									reset={true}
									units={false}
									onChange={ ( value ) => {
										updateAttribute( 'imageBorderRadius', {
											value: value,
											unit: 'px'
										}, currentDevice );

										setUpdateCss( { settingId: 'imageBorderRadius', value: value } );
									} }
									onClickReset={ () => {
										updateAttribute( 'imageBorderRadius', {
											value: getSettingDefaultValue( 'imageBorderRadius', currentDevice, attributesDefaults ),
											unit: 'px'
										}, currentDevice );							

										setUpdateCss( { settingId: 'imageBorderRadius', value: getSettingDefaultValue( 'imageBorderRadius', currentDevice, attributesDefaults ) } );								
									} }
								/>
								<RangeSlider 
									label={ __( 'Bottom Spacing', 'athemes-blocks' ) }
									defaultValue={ imageBottomSpacing }
									defaultUnit={ getSettingUnit( 'imageBottomSpacing', currentDevice, atts ) }
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
							<PanelBody 
								title={ __( 'Title', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'title' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'title' ) }
							>
								<ColorPicker
									label={ __( 'Color', 'athemes-blocks' ) }
									value={ titleColor }
									hover={false}
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
								title={ __( 'Meta', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'meta' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'meta' ) }
							>
								<ColorPicker
									label={ __( 'Color', 'athemes-blocks' ) }
									value={ metaColor }
									hover={false}
									responsive={false}
									reset={true}
									defaultStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'metaColor', {
											value: {
												defaultState: value,
												hoverState: getColorPickerSettingValue( 'metaColor', 'desktop', 'hoverState', atts )
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'metaColor', value: getColorPickerSettingValue( 'metaColor', 'desktop', 'defaultState', atts ) } );
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'metaColor', {
											value: {
												defaultState: getColorPickerSettingValue( 'metaColor', 'desktop', 'defaultState', atts ),
												hoverState: value	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'metaColor', value: getColorPickerSettingValue( 'metaColor', 'desktop', 'hoverState', atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'metaColor', {
											value: {
												defaultState: getColorPickerSettingDefaultValue( 'metaColor', 'desktop', 'defaultState', attributesDefaults ),
												hoverState: getColorPickerSettingDefaultValue( 'metaColor', 'desktop', 'hoverState', attributesDefaults )	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'metaColor', value: getColorPickerSettingDefaultValue( 'metaColor', 'desktop', 'defaultState', attributesDefaults ) } );
									} }
								/>
								{
									displayMetaIcon && (
										<ColorPicker
											label={ __( 'Icon Color', 'athemes-blocks' ) }
											value={ metaIconColor }
											hover={false}
											responsive={false}
											reset={true}
											defaultStateOnChangeComplete={ ( value ) => {
												updateAttribute( 'metaIconColor', {
													value: {
														defaultState: value,
														hoverState: getColorPickerSettingValue( 'metaIconColor', 'desktop', 'hoverState', atts )
													}
												}, 'desktop' );

												setUpdateCss( { settingId: 'metaIconColor', value: getColorPickerSettingValue( 'metaIconColor', 'desktop', 'defaultState', atts ) } );
											} }
											hoverStateOnChangeComplete={ ( value ) => {
												updateAttribute( 'metaIconColor', {
													value: {
														defaultState: getColorPickerSettingValue( 'metaIconColor', 'desktop', 'defaultState', atts ),
														hoverState: value	
													}
												}, 'desktop' );
												
												setUpdateCss( { settingId: 'metaIconColor', value: getColorPickerSettingValue( 'metaIconColor', 'desktop', 'hoverState', atts ) } );
											} }
											onClickReset={ () => {
												updateAttribute( 'metaIconColor', {
													value: {
														defaultState: getColorPickerSettingDefaultValue( 'metaIconColor', 'desktop', 'defaultState', attributesDefaults ),
														hoverState: getColorPickerSettingDefaultValue( 'metaIconColor', 'desktop', 'hoverState', attributesDefaults )	
													}
												}, 'desktop' );
												
												setUpdateCss( { settingId: 'metaIconColor', value: getColorPickerSettingDefaultValue( 'metaIconColor', 'desktop', 'defaultState', attributesDefaults ) } );
											} }
										/>
									)
								}
								<Typography
									label={ __( 'Typography', 'athemes-blocks' ) }
									settingId="metaTypography"
									attributes={ atts }
									setAttributes={ setAttributes }
									attributesDefaults={ attributesDefaults }
									setUpdateCss={ setUpdateCss }
									subFields={['fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'textTransform', 'textDecoration', 'lineHeight', 'letterSpacing']}
								/>
								<RangeSlider 
									label={ __( 'Bottom Spacing', 'athemes-blocks' ) }
									defaultValue={ metaBottomSpacing }
									defaultUnit={ getSettingUnit( 'metaBottomSpacing', currentDevice, atts ) }
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
										updateAttribute( 'metaBottomSpacing', {
											value: value,
											unit: getSettingUnit( 'metaBottomSpacing', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'metaBottomSpacing', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'metaBottomSpacing', {
											value: metaBottomSpacing,
											unit: value,
										}, currentDevice );

										setUpdateCss( { settingId: 'metaBottomSpacing', value: value } );								
									} }
									onClickReset={ () => {
										updateAttribute( 'metaBottomSpacing', {
											value: getSettingDefaultValue( 'metaBottomSpacing', currentDevice, attributesDefaults ),
											unit: getSettingDefaultUnit( 'metaBottomSpacing', currentDevice, attributesDefaults )
										}, currentDevice );							

										setUpdateCss( { settingId: 'metaBottomSpacing', value: getSettingDefaultValue( 'metaBottomSpacing', currentDevice, attributesDefaults ) } );								
									} }
								/>
							</PanelBody>
							<PanelBody 
								title={ __( 'Excerpt', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'excerpt' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'excerpt' ) }
							>
								<ColorPicker
									label={ __( 'Color', 'athemes-blocks' ) }
									value={ excerptColor }
									hover={false}
									responsive={false}
									reset={true}
									defaultStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'excerptColor', {
											value: {
												defaultState: value,
												hoverState: getColorPickerSettingValue( 'excerptColor', 'desktop', 'hoverState', atts )
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'excerptColor', value: getColorPickerSettingValue( 'excerptColor', 'desktop', 'defaultState', atts ) } );
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'excerptColor', {
											value: {
												defaultState: getColorPickerSettingValue( 'excerptColor', 'desktop', 'defaultState', atts ),
												hoverState: value	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'excerptColor', value: getColorPickerSettingValue( 'excerptColor', 'desktop', 'hoverState', atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'excerptColor', {
											value: {
												defaultState: getColorPickerSettingDefaultValue( 'excerptColor', 'desktop', 'defaultState', attributesDefaults ),
												hoverState: getColorPickerSettingDefaultValue( 'excerptColor', 'desktop', 'hoverState', attributesDefaults )	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'excerptColor', value: getColorPickerSettingDefaultValue( 'excerptColor', 'desktop', 'defaultState', attributesDefaults ) } );
									} }
								/>
								<Typography
									label={ __( 'Typography', 'athemes-blocks' ) }
									settingId="excerptTypography"
									attributes={ atts }
									setAttributes={ setAttributes }
									attributesDefaults={ attributesDefaults }
									setUpdateCss={ setUpdateCss }
									subFields={['fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'textTransform', 'textDecoration', 'lineHeight', 'letterSpacing']}
								/>
								<RangeSlider 
									label={ __( 'Bottom Spacing', 'athemes-blocks' ) }
									defaultValue={ excerptBottomSpacing }
									defaultUnit={ getSettingUnit( 'excerptBottomSpacing', currentDevice, atts ) }
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
										updateAttribute( 'excerptBottomSpacing', {
											value: value,
											unit: getSettingUnit( 'excerptBottomSpacing', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'excerptBottomSpacing', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'excerptBottomSpacing', {
											value: excerptBottomSpacing,
											unit: value,
										}, currentDevice );

										setUpdateCss( { settingId: 'excerptBottomSpacing', value: value } );								
									} }
									onClickReset={ () => {
										updateAttribute( 'excerptBottomSpacing', {
											value: getSettingDefaultValue( 'excerptBottomSpacing', currentDevice, attributesDefaults ),
											unit: getSettingDefaultUnit( 'excerptBottomSpacing', currentDevice, attributesDefaults )
										}, currentDevice );							

										setUpdateCss( { settingId: 'excerptBottomSpacing', value: getSettingDefaultValue( 'excerptBottomSpacing', currentDevice, attributesDefaults ) } );								
									} }
								/>
							</PanelBody>
							<PanelBody 
								title={ __( 'Read More Button', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'read-more-button' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'read-more-button' ) }
							>
								<ColorPicker
									label={ __( 'Text Color', 'athemes-blocks' ) }
									value={ readMoreButtonColor }
									hover={true}
									responsive={false}
									reset={true}
									defaultStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'readMoreButtonColor', {
											value: {
												defaultState: value,
												hoverState: getColorPickerSettingValue( 'readMoreButtonColor', 'desktop', 'hoverState', atts )
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'readMoreButtonColor', value: getColorPickerSettingValue( 'readMoreButtonColor', 'desktop', 'defaultState', atts ) } );
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'readMoreButtonColor', {
											value: {
												defaultState: getColorPickerSettingValue( 'readMoreButtonColor', 'desktop', 'defaultState', atts ),
												hoverState: value	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'readMoreButtonColor', value: getColorPickerSettingValue( 'readMoreButtonColor', 'desktop', 'hoverState', atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'readMoreButtonColor', {
											value: {
												defaultState: getColorPickerSettingDefaultValue( 'readMoreButtonColor', 'desktop', 'defaultState', attributesDefaults ),
												hoverState: getColorPickerSettingDefaultValue( 'readMoreButtonColor', 'desktop', 'hoverState', attributesDefaults )	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'readMoreButtonColor', value: getColorPickerSettingDefaultValue( 'readMoreButtonColor', 'desktop', 'defaultState', attributesDefaults ) } );
									} }
								/>
								<Typography
									label={ __( 'Typography', 'athemes-blocks' ) }
									settingId="readMoreButtonTypography"
									attributes={ atts }
									setAttributes={ setAttributes }
									attributesDefaults={ attributesDefaults }
									setUpdateCss={ setUpdateCss }
									subFields={['fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'textTransform', 'textDecoration', 'lineHeight', 'letterSpacing']}
								/>
								<ColorPicker
									label={ __( 'Background Color', 'athemes-blocks' ) }
									value={ readMoreButtonBackgroundColor }
									hover={true}
									responsive={false}
									reset={true}
									defaultStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'readMoreButtonBackgroundColor', {
											value: {
												defaultState: value,
												hoverState: getColorPickerSettingValue( 'readMoreButtonBackgroundColor', 'desktop', 'hoverState', atts )
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'readMoreButtonBackgroundColor', value: getColorPickerSettingValue( 'readMoreButtonBackgroundColor', 'desktop', 'defaultState', atts ) } );
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'readMoreButtonBackgroundColor', {
											value: {
												defaultState: getColorPickerSettingValue( 'readMoreButtonBackgroundColor', 'desktop', 'defaultState', atts ),
												hoverState: value	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'readMoreButtonBackgroundColor', value: getColorPickerSettingValue( 'readMoreButtonBackgroundColor', 'desktop', 'hoverState', atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'readMoreButtonBackgroundColor', {
											value: {
												defaultState: getColorPickerSettingDefaultValue( 'readMoreButtonBackgroundColor', 'desktop', 'defaultState', attributesDefaults ),
												hoverState: getColorPickerSettingDefaultValue( 'readMoreButtonBackgroundColor', 'desktop', 'hoverState', attributesDefaults )	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'readMoreButtonBackgroundColor', value: getColorPickerSettingDefaultValue( 'readMoreButtonBackgroundColor', 'desktop', 'defaultState', attributesDefaults ) } );
									} }
								/>
								<Border
									label=""
									settingId="readMoreButtonBorder"
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
									value={ readMoreButtonPadding }
									defaultUnit={ getSettingUnit('readMoreButtonPadding', currentDevice, atts) }
									directionsValue={ getDimensionsSettingDirectionsValue('readMoreButtonPadding', currentDevice, atts) }
									connect={ getDimensionsSettingConnectValue('readMoreButtonPadding', currentDevice, atts) }
									responsive={ true }
									units={['px', '%', 'em', 'rem', 'vh', 'vw']}
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'readMoreButtonPadding', {
											value: value.value,
											unit: getSettingUnit( 'readMoreButtonPadding', currentDevice, atts ),
											connect: getDimensionsSettingConnectValue( 'readMoreButtonPadding', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'readMoreButtonPadding', value: value.value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'readMoreButtonPadding', {
											value: getSettingValue( 'readMoreButtonPadding', currentDevice, atts ),
											unit: value,
											connect: getDimensionsSettingConnectValue( 'readMoreButtonPadding', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'readMoreButtonPadding', value: getSettingValue( 'readMoreButtonPadding', currentDevice, atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'readMoreButtonPadding', getDimensionsSettingDefaultValue( 'readMoreButtonPadding', currentDevice, attributesDefaults ), currentDevice );

										setUpdateCss( { settingId: 'readMoreButtonPadding', value: getDimensionsSettingDefaultValue( 'readMoreButtonPadding', currentDevice, attributesDefaults ) } );
									} }
								/>
								<RangeSlider 
									label={ __( 'Bottom Spacing', 'athemes-blocks' ) }
									defaultValue={ readMoreButtonBottomSpacing }
									defaultUnit={ getSettingUnit( 'readMoreButtonBottomSpacing', currentDevice, atts ) }
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
										updateAttribute( 'readMoreButtonBottomSpacing', {
											value: value,
											unit: getSettingUnit( 'readMoreButtonBottomSpacing', currentDevice, atts )
										}, currentDevice );

										setUpdateCss( { settingId: 'readMoreButtonBottomSpacing', value: value } );
									} }
									onChangeUnit={ ( value ) => {
										updateAttribute( 'readMoreButtonBottomSpacing', {
											value: readMoreButtonBottomSpacing,
											unit: value,
										}, currentDevice );

										setUpdateCss( { settingId: 'readMoreButtonBottomSpacing', value: value } );								
									} }
									onClickReset={ () => {
										updateAttribute( 'readMoreButtonBottomSpacing', {
											value: getSettingDefaultValue( 'readMoreButtonBottomSpacing', currentDevice, attributesDefaults ),
											unit: getSettingDefaultUnit( 'readMoreButtonBottomSpacing', currentDevice, attributesDefaults )
										}, currentDevice );							

										setUpdateCss( { settingId: 'readMoreButtonBottomSpacing', value: getSettingDefaultValue( 'readMoreButtonBottomSpacing', currentDevice, attributesDefaults ) } );								
									} }
								/>
							</PanelBody>
							{
								pagination && displayCarousel === false && (
									<PanelBody 
										title={ __( 'Pagination', 'athemes-blocks' ) } 
										initialOpen={false}
										opened={ isPanelOpened( 'pagination' ) }
										onToggle={ () => onTogglePanelBodyHandler( 'pagination' ) }
									>
										{
											paginationType === 'default' && (
												<>
													<ColorPicker
														label={ __( 'Text Color', 'athemes-blocks' ) }
														value={ paginationTextColor }
														hover={true}
														responsive={false}
														reset={true}
														defaultStateOnChangeComplete={ ( value ) => {
															updateAttribute( 'paginationTextColor', {
																value: {
																	defaultState: value,
																	hoverState: getColorPickerSettingValue( 'paginationTextColor', 'desktop', 'hoverState', atts )
																}
															}, 'desktop' );

															setUpdateCss( { settingId: 'paginationTextColor', value: getColorPickerSettingValue( 'paginationTextColor', 'desktop', 'defaultState', atts ) } );
														} }
														hoverStateOnChangeComplete={ ( value ) => {
															updateAttribute( 'paginationTextColor', {
																value: {
																	defaultState: getColorPickerSettingValue( 'paginationTextColor', 'desktop', 'defaultState', atts ),
																	hoverState: value
																}
															}, 'desktop' );
															
															setUpdateCss( { settingId: 'paginationTextColor', value: getColorPickerSettingValue( 'paginationTextColor', 'desktop', 'hoverState', atts ) } );
														} }
														onClickReset={ () => {
															updateAttribute( 'paginationTextColor', {
																value: {
																	defaultState: getColorPickerSettingDefaultValue( 'paginationTextColor', 'desktop', 'defaultState', attributesDefaults ),
																	hoverState: getColorPickerSettingDefaultValue( 'paginationTextColor', 'desktop', 'hoverState', attributesDefaults )	
																}
															}, 'desktop' );
															
															setUpdateCss( { settingId: 'paginationTextColor', value: getColorPickerSettingDefaultValue( 'paginationTextColor', 'desktop', 'defaultState', attributesDefaults ) } );
														} }
													/>
													<ColorPicker
														label={ __( 'Active Background Color', 'athemes-blocks' ) }
														value={ paginationActiveBackgroundColor }
														hover={false}
														responsive={false}
														reset={true}
														defaultStateOnChangeComplete={ ( value ) => {
															updateAttribute( 'paginationActiveBackgroundColor', {
																value: {
																	defaultState: value,
																	hoverState: getColorPickerSettingValue( 'paginationActiveBackgroundColor', 'desktop', 'hoverState', atts )
																}
															}, 'desktop' );

															setUpdateCss( { settingId: 'paginationActiveBackgroundColor', value: getColorPickerSettingValue( 'paginationActiveBackgroundColor', 'desktop', 'defaultState', atts ) } );
														} }
														hoverStateOnChangeComplete={ ( value ) => {
															updateAttribute( 'paginationActiveBackgroundColor', {
																value: {
																	defaultState: getColorPickerSettingValue( 'paginationActiveBackgroundColor', 'desktop', 'defaultState', atts ),
																	hoverState: value	
																}
															}, 'desktop' );
															
															setUpdateCss( { settingId: 'paginationActiveBackgroundColor', value: getColorPickerSettingValue( 'paginationActiveBackgroundColor', 'desktop', 'hoverState', atts ) } );
														} }
														onClickReset={ () => {
															updateAttribute( 'paginationActiveBackgroundColor', {
																value: {
																	defaultState: getColorPickerSettingDefaultValue( 'paginationActiveBackgroundColor', 'desktop', 'defaultState', attributesDefaults ),
																	hoverState: getColorPickerSettingDefaultValue( 'paginationActiveBackgroundColor', 'desktop', 'hoverState', attributesDefaults )	
																}
															}, 'desktop' );
															
															setUpdateCss( { settingId: 'paginationActiveBackgroundColor', value: getColorPickerSettingDefaultValue( 'paginationActiveBackgroundColor', 'desktop', 'defaultState', attributesDefaults ) } );
														} }
													/>
													<ColorPicker
														label={ __( 'Active Text Color', 'athemes-blocks' ) }
														value={ paginationActiveTextColor }
														hover={false}
														responsive={false}
														reset={true}
														defaultStateOnChangeComplete={ ( value ) => {
															updateAttribute( 'paginationActiveTextColor', {
																value: {
																	defaultState: value,
																	hoverState: getColorPickerSettingValue( 'paginationActiveTextColor', 'desktop', 'hoverState', atts )
																}
															}, 'desktop' );

															setUpdateCss( { settingId: 'paginationActiveTextColor', value: getColorPickerSettingValue( 'paginationActiveTextColor', 'desktop', 'defaultState', atts ) } );
														} }
														hoverStateOnChangeComplete={ ( value ) => {
															updateAttribute( 'paginationActiveTextColor', {
																value: {
																	defaultState: getColorPickerSettingValue( 'paginationActiveTextColor', 'desktop', 'defaultState', atts ),
																	hoverState: value	
																}
															}, 'desktop' );
															
															setUpdateCss( { settingId: 'paginationActiveTextColor', value: getColorPickerSettingValue( 'paginationActiveTextColor', 'desktop', 'hoverState', atts ) } );
														} }
														onClickReset={ () => {
															updateAttribute( 'paginationActiveTextColor', {
																value: {
																	defaultState: getColorPickerSettingDefaultValue( 'paginationActiveTextColor', 'desktop', 'defaultState', attributesDefaults ),
																	hoverState: getColorPickerSettingDefaultValue( 'paginationActiveTextColor', 'desktop', 'hoverState', attributesDefaults )	
																}
															}, 'desktop' );
															
															setUpdateCss( { settingId: 'paginationActiveTextColor', value: getColorPickerSettingDefaultValue( 'paginationActiveTextColor', 'desktop', 'defaultState', attributesDefaults ) } );
														} }
													/>
													<Border
														label=""
														settingId="paginationBorder"
														attributes={ atts }
														setAttributes={ setAttributes }
														attributesDefaults={ attributesDefaults }
														setUpdateCss={ setUpdateCss }
														subFields={['borderStyle', 'borderWidth', 'borderRadius', 'borderColor']}
													/>
													<RangeSlider 
														label={ __( 'Items Gap', 'athemes-blocks' ) }
														defaultValue={ paginationItemsGap }
														defaultUnit={ getSettingUnit( 'paginationItemsGap', currentDevice, atts ) }
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
															updateAttribute( 'paginationItemsGap', {
																value: value,
																unit: getSettingUnit( 'paginationItemsGap', currentDevice, atts )
															}, currentDevice );

															setUpdateCss( { settingId: 'paginationItemsGap', value: value } );
														} }
														onChangeUnit={ ( value ) => {
															updateAttribute( 'paginationItemsGap', {
																value: paginationItemsGap,
																unit: value,
															}, currentDevice );

															setUpdateCss( { settingId: 'paginationItemsGap', value: value } );								
														} }
														onClickReset={ () => {
															updateAttribute( 'paginationItemsGap', {
																value: getSettingDefaultValue( 'paginationItemsGap', currentDevice, attributesDefaults ),
																unit: getSettingDefaultUnit( 'paginationItemsGap', currentDevice, attributesDefaults )
															}, currentDevice );							

															setUpdateCss( { settingId: 'paginationItemsGap', value: getSettingDefaultValue( 'paginationItemsGap', currentDevice, attributesDefaults ) } );								
														} }
													/>
												</>
											)
										}
										{
											paginationType === 'load-more' && (
												<>
													<ColorPicker
														label={ __( 'Button Background Color', 'athemes-blocks' ) }
														value={ paginationButtonBackgroundColor }
														hover={true}
														responsive={false}
														reset={true}
														defaultStateOnChangeComplete={ ( value ) => {
															updateAttribute( 'paginationButtonBackgroundColor', {
																value: {
																	defaultState: value,
																	hoverState: getColorPickerSettingValue( 'paginationButtonBackgroundColor', 'desktop', 'hoverState', atts )
																}
															}, 'desktop' );

															setUpdateCss( { settingId: 'paginationButtonBackgroundColor', value: getColorPickerSettingValue( 'paginationButtonBackgroundColor', 'desktop', 'defaultState', atts ) } );
														} }
														hoverStateOnChangeComplete={ ( value ) => {
															updateAttribute( 'paginationButtonBackgroundColor', {
																value: {
																	defaultState: getColorPickerSettingValue( 'paginationButtonBackgroundColor', 'desktop', 'defaultState', atts ),
																	hoverState: value	
																}
															}, 'desktop' );
															
															setUpdateCss( { settingId: 'paginationButtonBackgroundColor', value: getColorPickerSettingValue( 'paginationButtonBackgroundColor', 'desktop', 'hoverState', atts ) } );
														} }
														onClickReset={ () => {
															updateAttribute( 'paginationButtonBackgroundColor', {
																value: {
																	defaultState: getColorPickerSettingDefaultValue( 'paginationButtonBackgroundColor', 'desktop', 'defaultState', attributesDefaults ),
																	hoverState: getColorPickerSettingDefaultValue( 'paginationButtonBackgroundColor', 'desktop', 'hoverState', attributesDefaults )	
																}
															}, 'desktop' );
															
															setUpdateCss( { settingId: 'paginationButtonBackgroundColor', value: getColorPickerSettingDefaultValue( 'paginationButtonBackgroundColor', 'desktop', 'defaultState', attributesDefaults ) } );
														} }
													/>
													<ColorPicker
														label={ __( 'Button Text Color', 'athemes-blocks' ) }
														value={ paginationButtonTextColor }
														hover={true}
														responsive={false}
														reset={true}
														defaultStateOnChangeComplete={ ( value ) => {
															updateAttribute( 'paginationButtonTextColor', {
																value: {
																	defaultState: value,
																	hoverState: getColorPickerSettingValue( 'paginationButtonTextColor', 'desktop', 'hoverState', atts )
																}
															}, 'desktop' );

															setUpdateCss( { settingId: 'paginationButtonTextColor', value: getColorPickerSettingValue( 'paginationButtonTextColor', 'desktop', 'defaultState', atts ) } );
														} }
														hoverStateOnChangeComplete={ ( value ) => {
															updateAttribute( 'paginationButtonTextColor', {
																value: {
																	defaultState: getColorPickerSettingValue( 'paginationButtonTextColor', 'desktop', 'defaultState', atts ),
																	hoverState: value	
																}
															}, 'desktop' );
															
															setUpdateCss( { settingId: 'paginationButtonTextColor', value: getColorPickerSettingValue( 'paginationButtonTextColor', 'desktop', 'hoverState', atts ) } );
														} }
														onClickReset={ () => {
															updateAttribute( 'paginationButtonTextColor', {
																value: {
																	defaultState: getColorPickerSettingDefaultValue( 'paginationButtonTextColor', 'desktop', 'defaultState', attributesDefaults ),
																	hoverState: getColorPickerSettingDefaultValue( 'paginationButtonTextColor', 'desktop', 'hoverState', attributesDefaults )	
																}
															}, 'desktop' );
															
															setUpdateCss( { settingId: 'paginationButtonTextColor', value: getColorPickerSettingDefaultValue( 'paginationButtonTextColor', 'desktop', 'defaultState', attributesDefaults ) } );
														} }
													/>
													<Border
														label=""
														settingId="paginationButtonBorder"
														attributes={ atts }
														setAttributes={ setAttributes }
														attributesDefaults={ attributesDefaults }
														setUpdateCss={ setUpdateCss }
														subFields={['borderStyle', 'borderWidth', 'borderRadius', 'borderColor']}
													/>
													<Dimensions
														label={ __( 'Button Padding', 'athemes-blocks' ) }
														directions={[
															{ label: __( 'Top', 'athemes-blocks' ), value: 'top' },
															{ label: __( 'Right', 'athemes-blocks' ), value: 'right' },
															{ label: __( 'Bottom', 'athemes-blocks' ), value: 'bottom' },
															{ label: __( 'Left', 'athemes-blocks' ), value: 'left' },
														]}
														value={ getDimensionsSettingValue( 'paginationButtonPadding', currentDevice, atts ) }
														defaultUnit={ getSettingUnit('paginationButtonPadding', currentDevice, atts) }
														directionsValue={ getDimensionsSettingDirectionsValue('paginationButtonPadding', currentDevice, atts) }
														connect={ getDimensionsSettingConnectValue('paginationButtonPadding', currentDevice, atts) }
														responsive={ true }
														units={['px', '%', 'em', 'rem', 'vh', 'vw']}
														reset={true}
														onChange={ ( value ) => {
															updateAttribute( 'paginationButtonPadding', {
																value: value.value,
																unit: getSettingUnit( 'paginationButtonPadding', currentDevice, atts ),
																connect: getDimensionsSettingConnectValue( 'paginationButtonPadding', currentDevice, atts )
															}, currentDevice );

															setUpdateCss( { settingId: 'paginationButtonPadding', value: value.value } );
														} }
														onChangeUnit={ ( value ) => {
															updateAttribute( 'paginationButtonPadding', {
																value: getSettingValue( 'paginationButtonPadding', currentDevice, atts ),
																unit: value,
																connect: getDimensionsSettingConnectValue( 'paginationButtonPadding', currentDevice, atts )
															}, currentDevice );

															setUpdateCss( { settingId: 'paginationButtonPadding', value: getSettingValue( 'paginationButtonPadding', currentDevice, atts ) } );
														} }
														onClickReset={ () => {
															updateAttribute( 'paginationButtonPadding', getDimensionsSettingDefaultValue( 'paginationButtonPadding', currentDevice, attributesDefaults ), currentDevice );

															setUpdateCss( { settingId: 'paginationButtonPadding', value: getDimensionsSettingDefaultValue( 'paginationButtonPadding', currentDevice, attributesDefaults ) } );
														} }
													/>
												</>
											)
										}
										<RangeSlider 
											label={ __( 'Top Spacing', 'athemes-blocks' ) }
											defaultValue={ paginationTopSpacing }
											defaultUnit={ getSettingUnit( 'paginationTopSpacing', currentDevice, atts ) }
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
												updateAttribute( 'paginationTopSpacing', {
													value: value,
													unit: getSettingUnit( 'paginationTopSpacing', currentDevice, atts )
												}, currentDevice );

												setUpdateCss( { settingId: 'paginationTopSpacing', value: value } );
											} }
											onChangeUnit={ ( value ) => {
												updateAttribute( 'paginationTopSpacing', {
													value: paginationTopSpacing,
													unit: value,
												}, currentDevice );

												setUpdateCss( { settingId: 'paginationTopSpacing', value: value } );								
											} }
											onClickReset={ () => {
												updateAttribute( 'paginationTopSpacing', {
													value: getSettingDefaultValue( 'paginationTopSpacing', currentDevice, attributesDefaults ),
													unit: getSettingDefaultUnit( 'paginationTopSpacing', currentDevice, attributesDefaults )
												}, currentDevice );							

												setUpdateCss( { settingId: 'paginationTopSpacing', value: getSettingDefaultValue( 'paginationTopSpacing', currentDevice, attributesDefaults ) } );								
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
				const TitleTag = titleTag;
				let blockPropsClassName = `at-block at-block-post-grid`;

				let blockProps = useBlockProps({
					className: blockPropsClassName
				});

				// Image Ratio.
				blockProps.className += ` atb-image-ratio-${imageRatio}`;

				// Image Size.
				blockProps.className += ` atb-image-size-${imageSize}`;

				// Image Position.
				blockProps.className += ` atb-image-position-${imagePosition}`;

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
					const { post } = props;

					const postFeaturedMedia = post._embedded?.['wp:featuredmedia']?.[0];
					const image = {
						src: postFeaturedMedia?.media_details ? postFeaturedMedia?.media_details?.sizes[imageSize]?.source_url : postFeaturedMedia?.source_url,
						width: postFeaturedMedia?.media_details ? postFeaturedMedia?.media_details?.sizes[imageSize]?.width : postFeaturedMedia?.media_details?.width,
						height: postFeaturedMedia?.media_details ? postFeaturedMedia?.media_details?.sizes[imageSize]?.height : postFeaturedMedia?.media_details?.height,
						alt: post.title.rendered
					}

					const hasTaxonomyTerms = post._embedded?.[`wp:term`]?.find(terms => terms[0]?.taxonomy === taxonomy);
					const taxonomyTerms = hasTaxonomyTerms ? hasTaxonomyTerms.map(term => term.name) : [];

					return (
						<div key={post.id} className="at-block-post-grid__item">
							{ displayImage && postFeaturedMedia && image.src && (
								<div className="at-block-post-grid__image">
									<img 
										src={image.src || postFeaturedMedia?.source_url}
										className="at-block-post-grid__image-image"
										width={image.width}
										height={image.height}
										alt={image.alt}
									/>
								</div>
							)}
							
							<div className="at-block-post-grid__content">
								{displayTitle && (
									<TitleTag className="at-block-post-grid__title">{ post.title.rendered }</TitleTag>
								)}

								{(displayAuthor || displayDate || displayComments || displayTaxonomy) && (
									<div className="at-block-post-grid__meta">
										{ ( postType !== 'product' && displayAuthor ) && (
											<a href="#" className="at-block-post-grid__author">
												{displayMetaIcon && (
													<div
														className="at-block-post-grid__meta-icon" 
														dangerouslySetInnerHTML={{ __html: athemesBlocksIconBoxLibrary['bx-user-circle-regular'] }} 
													/>
												)}
												{post._embedded?.author?.[0]?.name || ''}
											</a>
										)}
										
										{displayDate && (
											<a href="#" className="at-block-post-grid__date">
												{displayMetaIcon && (
													<div
														className="at-block-post-grid__meta-icon" 
														dangerouslySetInnerHTML={{ __html: athemesBlocksIconBoxLibrary['bx-calendar-regular'] }} 
													/>
												)}
												{new Date(post.date).toLocaleDateString()}
											</a>
										)}
										
										{( postType !== 'page' && displayComments ) && (
											<a href="#" className="at-block-post-grid__comments">
												{displayMetaIcon && (
													<div
														className="at-block-post-grid__meta-icon" 
														dangerouslySetInnerHTML={{ __html: athemesBlocksIconBoxLibrary['bx-chat-regular'] }} 
													/>
												)}
												{post._embedded?.replies?.[0]?.length || '0'}
											</a>
										)}
										
										{postType !== 'page' && displayTaxonomy && taxonomy !== 'all' && taxonomyTerms.length > 0 && (
											<span className="at-block-post-grid__taxonomy">
												{displayMetaIcon && (
													<div
														className="at-block-post-grid__meta-icon" 
														dangerouslySetInnerHTML={{ __html: athemesBlocksIconBoxLibrary['bx-purchase-tag-alt-regular'] }} 
													/>
												)}
												{taxonomyTerms.map((term, index) => (
													<a href="#" className="at-block-post-grid__taxonomy-link" key={index}>{term}{index < taxonomyTerms.length - 1 && ', '}</a>
												))}
											</span>
										)}
									</div>
								)}

								{displayExcerpt && (
									<div 
										className="at-block-post-grid__excerpt"
										dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.split(' ').slice(0, excerptMaxWords).join(' ') + (post.excerpt.rendered.split(' ').length > excerptMaxWords ? '...' : '') }}
									/>
								)}

								{displayReadMore && (
									<a 
										href={post.link} 
										className="at-block-post-grid__read-more"
										target={readMoreOpenInNewTab ? '_blank' : undefined}
										rel={readMoreOpenInNewTab ? 'noopener noreferrer' : undefined}
									>
										{readMoreText}
									</a>
								)}
							</div>
						</div>
					)
				}

				return (
					<div { ...blockProps }>
						{isLoading ? (
							<div className="at-block-post-grid__loading">
								<Spinner />
							</div>
						) : posts && posts.length > 0 ? (
							<>
								{displayCarousel ? (
									<div 
										onMouseEnter={ swiperPauseMouseEnterHandler }
										onMouseLeave={ swiperPauseMouseLeaveHandler }
									>
										<Swiper
											ref={swiperRef}
											modules={[Pagination, Navigation, Autoplay]}
											className="at-block-post-grid__swiper"
											{...swiperOptions}
										>
											{posts.map((post) => {
												const postFeaturedMedia = post._embedded?.['wp:featuredmedia']?.[0];
												const image = {
													src: postFeaturedMedia?.media_details ? postFeaturedMedia?.media_details?.sizes[imageSize]?.source_url : postFeaturedMedia?.source_url,
													width: postFeaturedMedia?.media_details ? postFeaturedMedia?.media_details?.sizes[imageSize]?.width : postFeaturedMedia?.media_details?.width,
													height: postFeaturedMedia?.media_details ? postFeaturedMedia?.media_details?.sizes[imageSize]?.height : postFeaturedMedia?.media_details?.height,
													alt: post.title.rendered
												}

												return (
													<SwiperSlide key={post.id}>
														<PostContent post={post} />
													</SwiperSlide>
												)
											})}

											{
												( ( postsPerPage > 1 && postsPerPage > columns ) && ( carouselNavigation === 'arrows' || carouselNavigation === 'both' ) ) && (
													<>
														<div className="at-block-nav at-block-nav--next" onClick={ swiperNavigationNextHandler }></div>
														<div className="at-block-nav at-block-nav--prev" onClick={ swiperNavigationPrevHandler }></div>
													</>
												)
											}
										</Swiper>
									</div>
								) : (
									<>
										<div className="at-block-post-grid__items">
											{posts.map((post) => {
												return (
													<PostContent post={post} key={post.id} />
												)
											})}
										</div>
									</>
								)}	

								{pagination && displayCarousel === false && posts.length >= postsPerPage && (
									<div className="at-block-post-grid__pagination">
										{
											paginationType === 'default' && (
												<div className="at-block-post-grid__pagination-numbers">
													<span className="at-block-post-grid__pagination-number at-block-post-grid__pagination-number--active">1</span>
													<span className="at-block-post-grid__pagination-number">2</span>
													<span className="at-block-post-grid__pagination-number">3</span>
													<span className="at-block-post-grid__pagination-number at-block-post-grid__pagination-number--next">→</span>
												</div>	
											)
										}
										{
											paginationType === 'load-more' && (
												<a href="#" className="at-block-post-grid__pagination-button at-block-post-grid__pagination-button--load-more">{ __( 'Load More', 'athemes-blocks' ) }</a>
											)
										}
									</div>
								)}
							</>
						) : (
							<p className="at-block-post-grid__no-posts">
								{__('No posts found.', 'athemes-blocks')}
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
		postType,
		taxonomy,
		taxonomyTerm,
		postsPerPage,
		offsetStartingPoint,
		offsetStartingPointValue,
		orderBy,
		order,
	} = attributes;

	// Don't fetch if no post type is selected
	if (!postType) {
		return {
			posts: [],
			isLoading: false
		};
	}

	const queryArgs = {
		per_page: postsPerPage || 10,
		orderby: orderBy || 'date',
		order: order || 'desc',
		_embed: true, // This ensures we get featured images, authors, and terms
	};

	// Add taxonomy query if taxonomy and terms are set
	if (taxonomy && taxonomy !== 'all' && taxonomyTerm && taxonomyTerm !== 'all') {
		queryArgs[taxonomy] = taxonomyTerm;
	}

	// Add offset if set
	if (offsetStartingPoint) {
		queryArgs.offset = offsetStartingPointValue;
	}

	// Get posts from the WordPress REST API
	const posts = select('core').getEntityRecords('postType', postType, queryArgs);
	
	// Check if the data is still being fetched
	const isLoading = select('core/data').isResolving('core', 'getEntityRecords', [
		'postType',
		postType,
		queryArgs
	]);

	return {
		posts: posts || [],
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