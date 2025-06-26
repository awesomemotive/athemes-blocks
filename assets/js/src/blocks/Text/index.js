import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import metadata from './block.json';
import { Icon, alignJustify } from '@wordpress/icons';

import './style.scss';

registerBlockType( metadata.name, {
	icon: {
		src: (
			<Icon
				icon={ alignJustify }
				className="icon"
			/>
		),
	},

	/**
	 * @see ./attributes.js
	 */
	attributes: TextBlockData.attributes,

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save: save,
} );
