import { __ } from '@wordpress/i18n';
import { useEffect, useMemo, useRef, useState } from '@wordpress/element';
import { useSelect, useDispatch } from "@wordpress/data";
import { Panel, PanelBody } from '@wordpress/components';
import { InspectorControls, useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import { useMergeRefs } from '@wordpress/compose';

import { RadioButtons } from '../../block-editor/controls/radio-buttons/radio-buttons';
import { RangeSlider } from '../../block-editor/controls/range-slider/range-slider';
import { Select } from '../../block-editor/controls/select/select';
import { SwitchToggle } from '../../block-editor/controls/switch-toggle/switch-toggle';
import { ColorPicker } from '../../block-editor/controls/color-picker/color-picker';
import { Typography } from '../../block-editor/controls/typography/typography';
import { Icon } from '../../block-editor/controls/icon/icon';
import { Link } from '../../block-editor/controls/link/link';

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

        // Style.
        alignment,

        // Advanced.
        hideOnDesktop,
		hideOnTablet,
		hideOnMobile,
    } = useMemo(() => {
		return {

			// General.

			// Style.
			alignment: getSettingValue('alignment', currentDevice, atts),
			
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
								className="panel-id-content"
								title={ __( 'Content', 'athemes-blocks' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'content', true ) }
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
							</PanelBody>
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
							<img src="" alt="" />
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
					<Tag { ...blockProps } ref={useMergeRefs([blockProps.ref, blockRef])}>
						<ImageHTML />
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