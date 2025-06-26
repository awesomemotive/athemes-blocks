import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import metadata from './block.json';
import { Icon, heading } from '@wordpress/icons';

import './style.scss';
import './editor.scss';

registerBlockType( metadata.name, {
	icon: {
		src: (
			<Icon
				icon={ heading }
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
