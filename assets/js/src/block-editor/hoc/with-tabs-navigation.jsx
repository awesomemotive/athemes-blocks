import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

import { TabsNavigation } from '../controls/tabs/tabs-navigation';

export const withTabsNavigation = (WrappedComponent) => {
    return (props) => {
        const currentTab = useSelect((select) => select('persistent-tabs-store').getCurrentTab());

        return (
            <>
                <InspectorControls>
                    <TabsNavigation
                        options={[
                            { label: __( 'General', 'botiga-pro' ), value: 'general' },
                            { label: __( 'Style', 'botiga-pro' ), value: 'style' },
                            { label: __( 'Advanced', 'botiga-pro' ), value: 'advanced' },
                        ]}
                    />
                </InspectorControls>

                <WrappedComponent {...props} />
            </>
        );
    };
}; 