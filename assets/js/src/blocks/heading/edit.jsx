import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { use, useSelect } from "@wordpress/data";
import { Panel, PanelBody, BaseControl, SelectControl } from '@wordpress/components';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

import { RadioButtons } from '../../block-editor/controls/radio-buttons';
import { RangeSlider } from '../../block-editor/controls/range-slider';
import { createAttributeUpdater } from '../../utils/block-attributes';

import attributesDefaults from './attributes';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const atts = attributes;
	const updateAttribute = createAttributeUpdater(attributes, setAttributes);
	const currentDevice = useSelect((select) => select('device-switcher-store').getCurrentDevice());
console.log(attributesDefaults);
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
							onChange={ ( value ) => updateAttribute( 'alignment', value, currentDevice ) }
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
					</PanelBody>
				</Panel>
			</InspectorControls>

			<h1 { ...useBlockProps() }>
				The heading text here.
			</h1>			

		</div>
	);
}