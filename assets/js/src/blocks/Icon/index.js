import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import metadata from './block.json';
import { Icon, starEmpty } from '@wordpress/icons';

import './style.scss';
import './editor.scss';

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
	attributes: IconBlockData.attributes,

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save: save,
} );
