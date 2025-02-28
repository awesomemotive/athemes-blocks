import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import metadata from './block.json';
import atts from './attributes';
import { Icon, settings } from '@wordpress/icons';
import './style.scss';
registerBlockType( metadata.name, {
	icon: {
		src: (
			<Icon
				icon={ settings }
				className="icon"
			/>
		),
	},

	/**
	 * @see ./attributes.js
	 */
	attributes: atts,

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save: save,
} );
