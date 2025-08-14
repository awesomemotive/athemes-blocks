import { useEffect, useState } from 'react';
import { useSelect, useDispatch } from '@wordpress/data';
import { store as persistentTabsStore } from '../store/persistent-tabs-store';

export const withPersistentPanelToggle = (WrappedComponent) => {
    return (props) => {
        const currentTab = useSelect((select) => select('persistent-tabs-store')?.getCurrentTab() || 'general');
        const lastPanelOpened = useSelect((select) => select('persistent-tabs-store')?.getLastPanelOpened() || null);
        const { setLastPanelOpened } = useDispatch(persistentTabsStore);

        const isAnyPanelOpened = lastPanelOpened?.startsWith(currentTab + '-') || false;

        const onTogglePanelBodyHandler = (panelId) => {
            if (lastPanelOpened === `${currentTab}-${panelId}`) {
                setLastPanelOpened(null);
            } else {
                setLastPanelOpened(`${currentTab}-${panelId}`);
            }
        };

        const isPanelOpened = (panelId, openFirstPanel = false) => {
            if (openFirstPanel && ! isAnyPanelOpened) {
                return true;
            }
            
            return lastPanelOpened === `${currentTab}-${panelId}`;
        };

        return (
            <WrappedComponent 
                {...props} 
                isPanelOpened={isPanelOpened}
                onTogglePanelBodyHandler={onTogglePanelBodyHandler}
                isAnyPanelOpened={isAnyPanelOpened}
            />
        );
    };
}; 