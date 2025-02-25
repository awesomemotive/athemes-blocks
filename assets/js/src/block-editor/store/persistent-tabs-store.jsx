import { createReduxStore, register } from '@wordpress/data';

// Defaults.
const DEFAULT_STATE = 'general';

// Actions.
const actions = {
    switchTabTo( device ) {
        return {
            type: 'SWITCH_TAB',
            device
        };
    }
};

// Reducer.
const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'SWITCH_TAB':
            return action.device;

        default:
            return state;
    }
};

// Selectors.
const selectors = {
    getCurrentTab(state) {
        return state;
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
    window.__PERSISTENT_TABS_DEVICE_SWITCHER_STORE__ = store;
} else {
    store = window.__PERSISTENT_TABS_DEVICE_SWITCHER_STORE__;
}

export { store };