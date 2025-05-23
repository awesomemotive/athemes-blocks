import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

export const withQueryPostTypesData = (WrappedComponent) => {
    return compose(
        withSelect((select) => {
            const { getPostTypes } = select('core');
            const postTypes = getPostTypes({ per_page: -1 }) || [];

            if ( postTypes === null ) {
                return {
                    postTypes: []
                };
            }

            const filteredPostTypes = postTypes.filter(postType => postType.slug !== 'wp_font_face' && postType.slug !== 'attachment' && postType.slug !== 'wp_font_family' && postType.slug !== 'nav_menu_item' && postType.slug !== 'wp_block' && postType.slug !== 'wp_template' && postType.slug !== 'wp_template_part' && postType.slug !== 'wp_global_styles' && postType.slug !== 'wp_navigation' );
            
            return {
                postTypes: filteredPostTypes.map(postType => ({
                    value: postType.slug,
                    label: postType.name,
                })),
            };
        })
    )(WrappedComponent);
};
