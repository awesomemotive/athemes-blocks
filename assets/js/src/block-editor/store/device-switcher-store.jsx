import { createReduxStore, register } from '@wordpress/data';

// Define the default state
const DEFAULT_STATE = {
    device: 'desktop', // Default device
};

// Create the store
const store = createReduxStore('athemes-blocks/device-switcher', {
    reducer(state = DEFAULT_STATE, action) {
        switch (action.type) {
            case 'SET_DEVICE':
                return { ...state, device: action.device };
            default:
                return state;
        }
    },
    actions: {
        setDevice: (device) => ({ type: 'SET_DEVICE', device }),
    },
    selectors: {
        getDevice: (state) => state.device,
    },
});

// Register the store globally
register(store);

export default store;