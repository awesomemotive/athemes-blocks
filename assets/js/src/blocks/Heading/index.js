import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import metadata from './block.json';
import { Icon, settings } from '@wordpress/icons';

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
	attributes: HeadingBlockData.attributes,

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save: save,
} );
