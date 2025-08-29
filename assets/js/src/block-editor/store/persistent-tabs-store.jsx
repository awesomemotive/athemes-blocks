import { createReduxStore, register } from '@wordpress/data';

// Defaults.
const DEFAULT_STATE = {
    currentTab: 'general',
    lastPanelOpened: null
};

// Actions.
const actions = {
    switchTabTo( tabId ) {
        return {
            type: 'SWITCH_TAB',
            tabId
        };
    },
    setLastPanelOpened( lastPanelOpened ) {
        return {
            type: 'SET_LAST_PANEL_OPENED',
            lastPanelOpened
        };
    }
};

// Reducer.
const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'SWITCH_TAB':
            return {
                ...state,
                currentTab: action.tabId
            };

        case 'SET_LAST_PANEL_OPENED':
            return {
                ...state,
                lastPanelOpened: action.lastPanelOpened
            };

        default:
            return state;
    }
};

// Selectors.
const selectors = {
    getCurrentTab(state) {
        return state.currentTab;
    },
    getLastPanelOpened(state) {
        return state.lastPanelOpened;
    }
};

let store = {};

if ( ! window.__PERSISTENT_TABS_STORE_IS_REGISTERED__ ) {
    store = createReduxStore('persistent-tabs-store', {
        reducer,
        actions,
        selectors,
    });
    
    register(store);

    window.__PERSISTENT_TABS_STORE_IS_REGISTERED__ = true;
    window.__PERSISTENT_TABS_STORE__ = store;
} else {
    store = window.__PERSISTENT_TABS_STORE__;
}

export { store };