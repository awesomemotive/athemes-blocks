/**
 * A curried function to update attributes.
 *
 * @param {Object} attributes - The current attributes object.
 * @param {Function} setAttributes - The setAttributes function from the block editor.
 * 
 * @returns {Function} - A function that updates a specific attribute.
 */
export const createAttributeUpdater = (attributes, setAttributes) => {
    return (settingId, value, device = null) => {
        const valueIsObject = typeof value === 'object';

        // Update the attribute for the current device
        if (device) {

            setAttributes({
                [settingId]: {
                    ...attributes[settingId],
                    [device]: valueIsObject ? { 
                        ...attributes[settingId][device].value, 
                        ...value 
                    } : value
                }
            });

            return;
        } 

        // Update the attribute for all devices
        if (valueIsObject) {
            setAttributes({
                [settingId]: {
                    ...attributes[settingId].value,
                    ...value
                }
            });
            
            return;
        }

        setAttributes({
            [settingId]: value
        });
    };
};

/**
 * A curried function to update inner control attributes.
 * 
 * @param {string} settingId - The ID of the inner control attribute.
 * @param {Object} attributes - The current attributes object.
 * @param {Function} setAttributes - The setAttributes function from the block editor.
 * 
 * @returns {Function} - A function that updates a specific inner control attribute.
 */
export const createInnerControlAttributeUpdater = (settingId, attributes, setAttributes) => {
    return (innerSettingId, value, device = null) => {
        const valueIsObject = typeof value === 'object';

        // Update the attribute for the current device
        if (device) {
            setAttributes({
                [settingId]: {
                    innerSettings: {
                        ...attributes[settingId]?.innerSettings,
                        [innerSettingId]: {
                            ...attributes[settingId]?.innerSettings[innerSettingId],
                            ...{ default: {
                                ...attributes[settingId]?.innerSettings[innerSettingId]?.default,
                                [device]: valueIsObject && value?.value ? {
                                    ...attributes[settingId]?.innerSettings[innerSettingId]?.default[device], 
                                    ...value
                                } : valueIsObject && !value?.value ? {
                                    ...attributes[settingId]?.innerSettings[innerSettingId]?.default[device],
                                    value: {
                                        ...attributes[settingId]?.innerSettings[innerSettingId]?.default[device].value,
                                        ...value
                                    }
                                } : {
                                    ...attributes[settingId]?.innerSettings[innerSettingId]?.default[device],
                                    value
                                }
                            } }
                        }
                    }
                }
            });

            return;
        } 

        // Update the attribute for all devices
        if (valueIsObject) {
            // setAttributes({
            //     [settingId]: {
            //         ...attributes[settingId].innerSettings,
            //         [innerSettingId]: {
            //             ...attributes[settingId].innerSettings[innerSettingId].default[device].value,
            //             ...value
            //         }
            //     }
            // });

            setAttributes({
                [settingId]: {
                    ...attributes[settingId],
                    innerSettings: {
                        ...attributes[settingId].innerSettings,
                        [innerSettingId]: {
                            ...attributes[settingId].innerSettings[innerSettingId],
                            default: value
                        }
                    }
                }
            });
            
            return;
        }

        setAttributes({
            [settingId]: {
                ...attributes[settingId],
                innerSettings: {
                    ...attributes[settingId].innerSettings,
                    [innerSettingId]: {
                        ...attributes[settingId].innerSettings[innerSettingId],
                        default: value
                    }
                }
            }
        });
    };    
}