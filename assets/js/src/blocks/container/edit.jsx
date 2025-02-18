import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { Panel, PanelBody, BaseControl, SelectControl } from '@wordpress/components';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

export default function Edit( props ) {
	return (
		<div>
		
			<InspectorControls>
				<Panel>
					<PanelBody title={ __( 'General', 'botiga-pro' ) }>
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