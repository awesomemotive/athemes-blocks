import { __ } from '@wordpress/i18n';
import { useEffect, useMemo, useRef, useState } from '@wordpress/element';
import { useSelect, useDispatch } from "@wordpress/data";
import { Panel, PanelBody } from '@wordpress/components';
import { InspectorControls, useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import { useMergeRefs } from '@wordpress/compose';

import { RadioButtons } from '../../block-editor/controls/radio-buttons/radio-buttons';
import { Select } from '../../block-editor/controls/select/select';
import { ColorPicker } from '../../block-editor/controls/color-picker/color-picker';
import { Typography } from '../../block-editor/controls/typography/typography';
import { createAttributeUpdater } from '../../utils/block-attributes';
import { withTabsNavigation } from '../../block-editor/hoc/with-tabs-navigation';
import { withAdvancedTab } from '../../block-editor/hoc/with-advanced-tab';
import { withDynamicCSS } from '../../block-editor/hoc/with-dynamic-css';
import { withPersistentPanelToggle } from '../../block-editor/hoc/with-persistent-panel-toggle';
import { withGoogleFonts } from '../../block-editor/hoc/with-google-fonts';

import { blockPropsWithAnimation } from '../../utils/block-animations';
import { getSettingValue, getSettingUnit, getSettingDefaultValue, getSettingDefaultUnit, getInnerSettingValue, getColorPickerSettingDefaultValue, getColorPickerSettingValue } from '../../utils/settings';

const attributesDefaults = HeadingBlockData.attributes;

const Edit = (props) => {
	const { attributes, setAttributes, clientId, setUpdateCss, isPanelOpened, onTogglePanelBodyHandler } = props;
	const { content } = attributes;
	const atts = attributes;
	const updateAttribute = createAttributeUpdater(attributes, setAttributes);
	const currentDevice = useSelect((select) => select('core/edit-post').__experimentalGetPreviewDeviceType().toLowerCase());
	const currentTab = useSelect((select) => select('persistent-tabs-store').getCurrentTab());

	const {

		// General.
        htmlTag,

        // Style.
        alignment,
        typography,
        color,
		linkColor,

        // Advanced.
        hideOnDesktop,
		hideOnTablet,
		hideOnMobile,
    } = useMemo(() => {
		return {

			// General.
			htmlTag: getSettingValue('htmlTag', 'desktop', atts),

			// Style.
			alignment: getSettingValue('alignment', currentDevice, atts),
			color: getSettingValue('color', 'desktop', atts),
			linkColor: getSettingValue('linkColor', 'desktop', atts),
			
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
		
		if (htmlTag === 'a' && blockRef.current) {
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
	}, [htmlTag]);

	return (
		<>
			<InspectorControls>
				{
					currentTab === 'general' && (
						<Panel>
							<PanelBody 
								title={ __( 'Heading', 'botiga-pro' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'heading' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'heading' ) }
							>
								<Select
									label={ __( 'HTML Tag', 'athemes-blocks' ) }
									options={[
										{ label: __( 'H1', 'athemes-blocks' ), value: 'h1' },
										{ label: __( 'H2', 'athemes-blocks' ), value: 'h2' },
										{ label: __( 'H3', 'athemes-blocks' ), value: 'h3' },
										{ label: __( 'H4', 'athemes-blocks' ), value: 'h4' },
										{ label: __( 'H5', 'athemes-blocks' ), value: 'h5' },
										{ label: __( 'H6', 'athemes-blocks' ), value: 'h6' },
										{ label: __( 'Div', 'athemes-blocks' ), value: 'div' },
										{ label: __( 'Span', 'athemes-blocks' ), value: 'span' },
										{ label: __( 'P', 'athemes-blocks' ), value: 'p' },
									]}
									value={ htmlTag }
									responsive={false}
									reset={true}
									onChange={ ( value ) => {
										updateAttribute( 'htmlTag', {
											value: value,
										}, 'desktop' );

										setUpdateCss( { settingId: 'htmlTag', value: value } );										
									} }
									onClickReset={ () => {
										updateAttribute( 'htmlTag', {
											value: getSettingDefaultValue( 'htmlTag', 'desktop', attributesDefaults )
										}, 'desktop' );

										setUpdateCss( { settingId: 'htmlTag', value: getSettingDefaultValue( 'htmlTag', 'desktop', attributesDefaults ) } );
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
								title={ __( 'Heading', 'botiga-pro' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'heading' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'heading' ) }
							>
								<RadioButtons 
									label={ __( 'Alignment', 'athemes-blocks' ) }
									defaultValue={ alignment }
									options={[
										{ label: __( 'Left', 'athemes-blocks' ), value: 'left' },
										{ label: __( 'Center', 'athemes-blocks' ), value: 'center' },
										{ label: __( 'Right', 'athemes-blocks' ), value: 'right' },
										{ label: __( 'Justified', 'athemes-blocks' ), value: 'justify' },
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
							<PanelBody 
								title={ __( 'Link', 'botiga-pro' ) } 
								initialOpen={false}
								opened={ isPanelOpened( 'link' ) }
								onToggle={ () => onTogglePanelBodyHandler( 'link' ) }
							>
								<ColorPicker
									label={ __( 'Color', 'athemes-blocks' ) }
									value={ linkColor }
									hover={true}
									responsive={false}
									reset={true}
									defaultStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'linkColor', {
											value: {
												defaultState: value,
												hoverState: getColorPickerSettingValue( 'linkColor', 'desktop', 'hoverState', atts )
											}
										}, 'desktop' );

										setUpdateCss( { settingId: 'linkColor', value: getColorPickerSettingValue( 'linkColor', 'desktop', 'defaultState', atts ) } );
									} }
									hoverStateOnChangeComplete={ ( value ) => {
										updateAttribute( 'linkColor', {
											value: {
												defaultState: getColorPickerSettingValue( 'linkColor', 'desktop', 'defaultState', atts ),
												hoverState: value	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'linkColor', value: getColorPickerSettingValue( 'linkColor', 'desktop', 'hoverState', atts ) } );
									} }
									onClickReset={ () => {
										updateAttribute( 'linkColor', {
											value: {
												defaultState: getColorPickerSettingDefaultValue( 'linkColor', 'desktop', 'defaultState', attributesDefaults ),
												hoverState: getColorPickerSettingDefaultValue( 'linkColor', 'desktop', 'hoverState', attributesDefaults )	
											}
										}, 'desktop' );
										
										setUpdateCss( { settingId: 'linkColor', value: getColorPickerSettingDefaultValue( 'linkColor', 'desktop', 'defaultState', attributesDefaults ) } );
									} }
								/>
							</PanelBody>
						</Panel>
					)
				}
			</InspectorControls>
			
			{(() => {
				const Tag = htmlTag;
				let blockPropsClassName = `at-block at-block-heading`;

				let blockProps = useBlockProps({
					className: blockPropsClassName
				});

				// Font size.
				const hasFontSize = getInnerSettingValue('typography', 'fontSize', currentDevice, atts) > 0;
				if (hasFontSize) {
					blockProps.className += ` atb-has-font-size`;
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
					htmlTag === 'div' ? (
						<RichText
							{ ...blockProps }
							ref={useMergeRefs([blockProps.ref, blockRef])}
							tagName={ htmlTag }
							value={ content }
							onChange={ ( newContent ) => setAttributes( { content: newContent } ) }
							placeholder={ __( 'Type your heading here...', 'athemes-blocks' ) }
						/>
					) : (
						<div { ...blockProps } ref={useMergeRefs([blockProps.ref, blockRef])}>
							<RichText
								tagName={ htmlTag }
								value={ content }
								onChange={ ( newContent ) => setAttributes( { content: newContent } ) }
								placeholder={ __( 'Type your heading here...', 'athemes-blocks' ) }
							/>
						</div>
					)
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