import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from "@wordpress/data";
import { Panel, PanelBody, BaseControl, SelectControl } from '@wordpress/components';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

import { RadioButtons } from '../../block-editor/controls/radio-buttons/radio-buttons';
import { RangeSlider } from '../../block-editor/controls/range-slider/range-slider';
import { Select } from '../../block-editor/controls/select/select';
import { SwitchToggle } from '../../block-editor/controls/switch-toggle/switch-toggle';
import { ColorPicker } from '../../block-editor/controls/color-picker/color-picker';
import { Typography } from '../../block-editor/controls/typography/typography';
import { Dimensions } from '../../block-editor/controls/dimensions/dimensions';
import { createAttributeUpdater } from '../../utils/block-attributes';

import attributesDefaults from './attributes';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const atts = attributes;
	const updateAttribute = createAttributeUpdater(attributes, setAttributes);
	const currentDevice = useSelect((select) => select('device-switcher-store').getCurrentDevice());

	return (
		<div>
		
			<InspectorControls>
				<Panel>
					<PanelBody title={ __( 'General', 'botiga-pro' ) }>
						<RadioButtons 
							label={ __( 'Alignment', 'athemes-blocks' ) }
							defaultValue={ atts.alignment?.[currentDevice] }
							options={[
								{ label: __( 'Left', 'athemes-blocks' ), value: 'left' },
								{ label: __( 'Center', 'athemes-blocks' ), value: 'center' },
								{ label: __( 'Right', 'athemes-blocks' ), value: 'right' },
							]}
							responsive={ true }
							reset={true}
							onChange={ ( value ) => updateAttribute( 'alignment', value, currentDevice ) }
							onClickReset={ () => updateAttribute( 'alignment', attributesDefaults.alignment.default?.[currentDevice], currentDevice ) }
						/>

						<RangeSlider 
							label={ __( 'Font size', 'athemes-blocks' ) }
							defaultValue={ atts.fontSize?.[currentDevice] }
							min={ 10 }
							max={ 100 }
							responsive={ true }
							units={['px', 'em', 'rem']}
							reset={true}
							onChange={ ( value ) => updateAttribute( 'fontSize', {
								value: value,
								unit: atts.fontSize?.[currentDevice].unit
							}, currentDevice ) }
							onChangeUnit={ ( value ) => updateAttribute( 'fontSize', {
								value: atts.fontSize?.[currentDevice].value,
								unit: value
							}, currentDevice ) }
							onClickReset={ () => updateAttribute( 'fontSize', {
								value: attributesDefaults.fontSize.default?.[currentDevice].value,
								unit: attributesDefaults.fontSize.default?.[currentDevice].unit
							}, currentDevice ) }
						/>

						<RangeSlider 
							label={ __( 'Font size2', 'athemes-blocks' ) }
							defaultValue={ atts.fontSizeTwo?.[currentDevice] }
							min={ 10 }
							max={ 200 }
							responsive={ true }
							units={['px', 'em', 'rem']}
							onChange={ ( value ) => updateAttribute( 'fontSizeTwo', {
								value: value,
								unit: atts.fontSizeTwo?.[currentDevice].unit
							}, currentDevice ) }
							onChangeUnit={ ( value ) => updateAttribute( 'fontSizeTwo', {
								value: atts.fontSizeTwo?.[currentDevice].value,
								unit: value
							}, currentDevice ) }
						/>

						<Select
							label={ __( 'Font family', 'athemes-blocks' ) }
							options={[
								{ label: __( 'Arial', 'athemes-blocks' ), value: 'Arial' },
								{ label: __( 'Helvetica', 'athemes-blocks' ), value: 'Helvetica' },
								{ label: __( 'Times New Roman', 'athemes-blocks' ), value: 'Times New Roman' },
							]}
							value={ atts.fontFamily?.[currentDevice] }
							responsive={ true }
							reset={true}
							onChange={ ( value ) => updateAttribute( 'fontFamily', value, currentDevice ) }
							onClickReset={ () => updateAttribute( 'fontFamily', attributesDefaults.fontFamily.default?.[currentDevice], currentDevice ) }
						/>

						<SwitchToggle
							label={ __( 'Show border', 'athemes-blocks' ) }
							value={ atts.showBorder?.[currentDevice] }
							responsive={ true }
							reset={true}
							onChange={ ( value ) => updateAttribute( 'showBorder', value, currentDevice ) }
							onClickReset={ () => updateAttribute( 'showBorder', attributesDefaults.showBorder.default?.[currentDevice], currentDevice ) }
						/>

						<ColorPicker
							label={ __( 'Text color', 'athemes-blocks' ) }
							value={ atts.textColor?.[currentDevice] }
							hover={true}
							responsive={true}
							reset={true}
							defaultStateOnChangeComplete={ ( value ) => updateAttribute( 'textColor', {
								defaultState: value.hex,
								hoverState: atts.textColor?.[currentDevice].hoverState
							}, currentDevice ) }
							hoverStateOnChangeComplete={ ( value ) => updateAttribute( 'textColor', {
								defaultState: atts.textColor?.[currentDevice].defaultState,
								hoverState: value.hex
							}, currentDevice ) }
							onClickReset={ () => updateAttribute( 'textColor', {
								defaultState: attributesDefaults.textColor.default?.[currentDevice].defaultState,
								hoverState: attributesDefaults.textColor.default?.[currentDevice].hoverState
							}, currentDevice ) }
						/>

						<Typography
							label={ __( 'Typography', 'athemes-blocks' ) }
							attributeId="textTypography"
							attributes={ atts }
							setAttributes={ setAttributes }
							attributesDefaults={ attributesDefaults }
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
							// value={ atts.padding?.[currentDevice] }
							responsive={ true }
							reset={true}
							// onChange={ ( value ) => updateAttribute( 'padding', value, currentDevice ) }
							// onClickReset={ () => updateAttribute( 'padding', attributesDefaults.padding.default?.[currentDevice], currentDevice ) }
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>

			<h1 { ...useBlockProps() }>
				The heading text here.
			</h1>			

		</div>
	);
}