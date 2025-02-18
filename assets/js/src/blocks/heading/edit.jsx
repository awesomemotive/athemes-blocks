import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { Panel, PanelBody, BaseControl, SelectControl } from '@wordpress/components';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

import { RadioButtons } from '../../block-editor/controls/radio-buttons';

export default function Edit( props ) {
	const { setAttributes } = props;
	const atts = props.attributes;

	return (
		<div>
		
			<InspectorControls>
				<Panel>
					<PanelBody title={ __( 'General', 'botiga-pro' ) }>
						<RadioButtons 
							label={ __( 'Alignment', 'athemes-blocks' ) }
							defaultValue={ atts.alignment }
							options={[
								{ label: __( 'Left', 'athemes-blocks' ), value: 'left' },
								{ label: __( 'Center', 'athemes-blocks' ), value: 'center' },
								{ label: __( 'Right', 'athemes-blocks' ), value: 'right' },
							]}
							onChange={ ( value ) => setAttributes( { alignment: value } ) }
						/>

						<RadioButtons 
							label={ __( 'Alignment', 'athemes-blocks' ) }
							defaultValue={ atts.alignment }
							options={[
								{ label: __( 'Left', 'athemes-blocks' ), value: 'left' },
								{ label: __( 'Center', 'athemes-blocks' ), value: 'center' },
								{ label: __( 'Right', 'athemes-blocks' ), value: 'right' },
							]}
							responsive={ true }
							onChange={ ( value ) => setAttributes( { alignment: value } ) }
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