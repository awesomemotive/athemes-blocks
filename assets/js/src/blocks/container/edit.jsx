import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from "@wordpress/data";
import { Panel, PanelBody, BaseControl, SelectControl } from '@wordpress/components';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { RadioButtons } from '../../block-editor/controls/radio-buttons/radio-buttons';

export default function Edit( props ) {
	const currentDevice = useSelect((select) => select('device-switcher-store').getCurrentDevice());

	return (
		<div>
		
			<InspectorControls>
				<Panel>
					<PanelBody title={ __( 'General', 'botiga-pro' ) }>
						<RadioButtons 
							label={ __( 'Alignment', 'athemes-blocks' ) }
							defaultValue={ 'left' }
							options={[
								{ label: __( 'Left', 'athemes-blocks' ), value: 'left' },
								{ label: __( 'Center', 'athemes-blocks' ), value: 'center' },
								{ label: __( 'Right', 'athemes-blocks' ), value: 'right' },
							]}
							responsive={ true }
							onChange={ ( value ) => setAttributes( { alignment: value } ) }
						/>
						<BaseControl>
							xxx
						</BaseControl>
					</PanelBody>
				</Panel>
			</InspectorControls>

			<div { ...useBlockProps() }>
				{ __( 'Container Block', 'botiga-pro' ) }
			</div>			

		</div>
	);
}