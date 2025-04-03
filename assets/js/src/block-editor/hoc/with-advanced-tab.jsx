import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

import AdvancedPanel from '../controls/advanced-panel/advanced-panel';
import { createAttributeUpdater } from '../../utils/block-attributes';

export const withAdvancedTab = (WrappedComponent, attributesDefaults) => {
    return (props) => {
        const { attributes, setAttributes, setUpdateCss } = props;
        const updateAttribute = createAttributeUpdater(attributes, setAttributes);
        const currentTab = useSelect((select) => select('persistent-tabs-store').getCurrentTab());

        return (
            <>
                <InspectorControls>
                    {currentTab === 'advanced' && (
                        <AdvancedPanel 
                            attributes={attributes}
                            setAttributes={setAttributes}
                            attributesDefaults={attributesDefaults}
                            updateAttribute={updateAttribute}
                            setUpdateCss={setUpdateCss}
                        />
                    )}
                </InspectorControls>

                <WrappedComponent {...props} />
            </>
        );
    };
}; 