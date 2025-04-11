import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import metadata from './block.json';
import { Icon, button } from '@wordpress/icons';

registerBlockType( metadata.name, {
	icon: {
		src: (
			<Icon
				icon={ button }
				className="icon"
			/>
		),
	},

	/**
	 * @see ./attributes.js
	 */
	attributes: ButtonBlockData.attributes,

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save: save,
} );
