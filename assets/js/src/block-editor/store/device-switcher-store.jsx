import { createReduxStore, register } from '@wordpress/data';

// Defaults.
const DEFAULT_STATE = 'desktop';

// Actions.
const actions = {
    switchDeviceTo( device ) {
        return {
            type: 'SWITCH_DEVICE',
            device
        };
    }
};

// Reducer.
const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'SWITCH_DEVICE':
            return action.device;

        default:
            return state;
    }
};

// Selectors.
const selectors = {
    getCurrentDevice(state) {
        return state;
    }
};

let store = {};

if ( ! window.__DEVICE_SWITCHER_STORE_IS_REGISTERED__ ) {
    store = createReduxStore('device-switcher-store', {
        reducer,
        actions,
        selectors,
    });
    
    register(store);

    window.__DEVICE_SWITCHER_STORE_IS_REGISTERED__ = true;
    window.__DEVICE_SWITCHER_STORE__ = store;
} else {
    store = window.__DEVICE_SWITCHER_STORE__;
}

export { store };