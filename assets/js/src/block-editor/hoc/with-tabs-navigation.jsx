import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

import { TabsNavigation } from '../controls/tabs/tabs-navigation';

export const withTabsNavigation = (WrappedComponent, tabs = ['general', 'style', 'advanced']) => {
    const tabsLabels = {
        general: __( 'General', 'botiga-pro' ),
        style: __( 'Style', 'botiga-pro' ),
        advanced: __( 'Advanced', 'botiga-pro' ),
    }
    
    return (props) => {
        const currentTab = useSelect((select) => select('persistent-tabs-store').getCurrentTab());

        return (
            <>
                <InspectorControls>
                    <TabsNavigation
                        options={tabs.map((tab) => ({
                            label: tabsLabels[tab],
                            value: tab,
                        }))}
                    />
                </InspectorControls>

                <WrappedComponent {...props} />
            </>
        );
    };
}; 