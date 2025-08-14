import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import metadata from './block.json';
import { icons } from '../../utils/icons';

import './style.scss';
import './editor.scss';

registerBlockType( metadata.name, {
	icon: icons.teamMemberBlock,

	/**
	 * @see ./attributes.js
	 */
	attributes: TeamBlockData.attributes,

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save: save,
} );
