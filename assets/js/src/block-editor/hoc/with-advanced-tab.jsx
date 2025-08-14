import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { TextControl } from '@wordpress/components';

import AdvancedPanel from '../controls/advanced-panel/advanced-panel';
import { createAttributeUpdater } from '../../utils/block-attributes';

export const withAdvancedTab = (WrappedComponent, attributesDefaults) => {
    return (props) => {
        const { attributes, setAttributes, setUpdateCss, onTogglePanelBodyHandler, isPanelOpened } = props;
        const updateAttribute = createAttributeUpdater(attributes, setAttributes);
        const currentTab = useSelect((select) => select('persistent-tabs-store').getCurrentTab());
        const blockName = props.name;

        return (
            <>
                <InspectorControls>
                    {currentTab === 'advanced' && (
                        <>
                            <AdvancedPanel 
                                blockName={blockName}
                                attributes={attributes}
                                setAttributes={setAttributes}
                                attributesDefaults={attributesDefaults}
                                updateAttribute={updateAttribute}
                                setUpdateCss={setUpdateCss}    
                                onTogglePanelBodyHandler={onTogglePanelBodyHandler}
                                isPanelOpened={isPanelOpened}
                            />
                            <InspectorControls group="advanced">
                                <TextControl
                                    label={__('CSS ID', 'athemes-blocks')}
                                    value={attributes.cssID || ''}
                                    onChange={(value) => {
                                        setAttributes({ cssID: value });
                                    }}
                                    help={__('Add a unique ID to this block. This can be used for anchor links or custom CSS targeting.', 'athemes-blocks')}
                                />
                            </InspectorControls>
                        </>
                    )}
                </InspectorControls>

                <WrappedComponent {...props} />
            </>
        );
    };
}; 