import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import metadata from './block.json';
import { Icon, arrowRight } from '@wordpress/icons';

registerBlockType( metadata.name, {
	icon: {
		src: (
			<Icon
				icon={ arrowRight }
				className="icon"
			/>
		),
	},

	/**
	 * @see ./attributes.js
	 */
	attributes: TeamMemberBlockData.attributes,

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save: save,
} );
