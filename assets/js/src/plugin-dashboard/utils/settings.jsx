import { debounce } from 'lodash';

import apiFetch from '@wordpress/api-fetch';

/**
 * Keep track of the latest value being saved for each field.
 * 
 * @type {Map<string, Promise>}
 */
const currentSavePromises = new Map();

/**
 * Keep track of the last saved value for each field.
 * 
 * @type {Map<string, any>}
 */
const lastSavedValues = new Map();

/**
 * Save the setting value to the database.
 * 
 * @param {string} settingGroup - The setting group.
 * @param {string} settingId - The setting ID.
 * @param {any} value - The value to save.
 * @param {Function} setDisplaySnackBar - The function to set the display snackbar.
 * @returns {Promise<void>}
 */
const saveSettingValue = (settingGroup, settingId, value, setDisplaySnackBar, setSettings) => {
    const fieldKey = `${settingGroup}-${settingId}`;
    
    // If there's already a save in progress for this field, wait for it to complete
    if (currentSavePromises.has(fieldKey)) {
        return currentSavePromises.get(fieldKey);
    }

    // If the value hasn't changed since last save, skip
    if (value === lastSavedValues.get(fieldKey)) {
        return Promise.resolve();
    }

    // Create a new save promise
    const savePromise = apiFetch({
        path: '/wp-json/athemes-blocks/v1/settings/save',
        method: 'POST',
        headers: {
            'X-WP-Nonce': wpApiSettings ? wpApiSettings.nonce : ''
        },
        data : {
            setting_group: settingGroup,
            setting_id: settingId,
            value: value
        }
    })
    .then(response => {
        lastSavedValues.set(fieldKey, value);

        setDisplaySnackBar( true );

        setSettings( (prevSettings) => ({
            ...prevSettings,
            [settingGroup]: {
                ...prevSettings[settingGroup],
                [settingId]: value
            }
        }));

        return response;
    })
    .catch(error => {
        console.error('Error saving setting:', error);
        throw error;
    })
    .finally(() => {
        currentSavePromises.delete(fieldKey);
    });

    currentSavePromises.set(fieldKey, savePromise);
    return savePromise;
};

/**
 * Create a debounced version of saveSettingValue for each field.
 * 
 * @param {string} settingGroup - The setting group.
 * @param {string} settingId - The setting ID.
 * @returns {Function} The debounced save function.
 */
const createDebouncedSave = (settingGroup, settingId) => {
    const fieldKey = `${settingGroup}-${settingId}`;
    return debounce((value, setDisplaySnackBar, setSettings) => {
        return saveSettingValue(settingGroup, settingId, value, setDisplaySnackBar, setSettings);
    }, 400);
};

/**
 * Store debounced functions for each field.
 * 
 * @type {Map<string, Function>}
 */
const debouncedSaves = new Map();

/**
 * Save the setting value to the database with debouncing.
 * 
 * @param {string} settingGroup - The setting group.
 * @param {string} settingId - The setting ID.
 * @param {any} value - The value to save.
 * @param {Function} setDisplaySnackBar - The function to set the display snackbar.
 * @returns {Promise<void>} The result of the save operation.
 */
const saveSettingValueDebounced = (settingGroup, settingId, value, setDisplaySnackBar, setSettings) => {
    const fieldKey = `${settingGroup}-${settingId}`;
    if (!debouncedSaves.has(fieldKey)) {
        debouncedSaves.set(fieldKey, createDebouncedSave(settingGroup, settingId));
    }
    
    return debouncedSaves.get(fieldKey)(value, setDisplaySnackBar, setSettings);
};

export {
    saveSettingValue,
    saveSettingValueDebounced, 
};