import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import metadata from './block.json';
import { Icon, starEmpty } from '@wordpress/icons';

registerBlockType( metadata.name, {
	icon: {
		src: (
			<Icon
				icon={ starEmpty }
				className="icon"
			/>
		),
	},

	/**
	 * @see ./attributes.js
	 */
	attributes: GoogleMapsBlockData.attributes,

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save: save,
} );
