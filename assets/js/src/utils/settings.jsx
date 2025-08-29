/**
 * Get the value of a setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} device - The device type.
 * @param {Object} attributes - The attributes object.
 * 
 * @returns {string} - The value of the setting.
 */
export function getSettingValue( settingId, device, attributes ) {
    if ( ! device ) {
        return attributes[settingId]?.value;
    }

    return attributes[settingId]?.[device]?.value;
}

/**
 * Get the unit value of a setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} device - The device type.
 * @param {Object} attributes - The attributes object.
 * 
 * @returns {string} - The unit of the setting.
 */
export function getSettingUnit( settingId, device, attributes ) {
    return attributes[settingId]?.[device]?.unit;
}

/**
 * Get the default value of a setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} device - The device type.
 * @param {Object} attributesDefaults - The default attributes object.
 * 
 * @returns {string} - The default value of the setting.
 */
export function getSettingDefaultValue( settingId, device, attributesDefaults ) {
    if ( ! device ) {
        return attributesDefaults[settingId]?.default;
    }

    return attributesDefaults[settingId]?.default?.[device]?.value;
}

/**
 * Get the default unit value of a setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} device - The device type.
 * @param {Object} attributesDefaults - The default attributes object.
 * 
 * @returns {string} - The default unit of the setting.
 */
export function getSettingDefaultUnit( settingId, device, attributesDefaults ) {
    return attributesDefaults[settingId]?.default?.[device]?.unit;
}

/**
 * Get the value of a color picker setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} device - The device type.
 * @param {string} state - The state of the setting.
 * @param {Object} attributes - The attributes object.
 * 
 * @returns {string} - The value of the setting.
 */
export function getColorPickerSettingValue( settingId, device, state, attributes ) {
    return attributes[settingId]?.[device]?.value?.[state];
}

/**
 * Get the default value of a color picker setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} device - The device type.
 * @param {string} state - The state of the setting.
 * @param {Object} attributesDefaults - The default attributes object.
 * 
 * @returns {string} - The default value of the setting.
 */
export function getColorPickerSettingDefaultValue( settingId, device, state, attributesDefaults ) {
    return attributesDefaults[settingId]?.default?.[device]?.value?.[state];
}

/**
 * Get the value of a dimensions setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} device - The device type.
 * @param {Object} attributes - The attributes object.
 * 
 * @returns {string} - The value of the setting.
 */
export function getDimensionsSettingValue( settingId, device, attributes ) {
    return attributes[settingId]?.[device];
}

/**
 * Get the default value of a dimensions setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} device - The device type.
 * @param {Object} attributesDefaults - The default attributes object.
 * 
 * @returns {string} - The default value of the setting.
 */
export function getDimensionsSettingDirectionsValue( settingId, device, attributes ) {
    return attributes[settingId]?.[device]?.value;
}

/**
 * Get the default value of a dimensions setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} device - The device type.
 * @param {Object} attributesDefaults - The default attributes object.
 * 
 * @returns {string} - The default value of the setting.
 */
export function getDimensionsSettingConnectValue( settingId, device, attributes ) {
    return attributes[settingId]?.[device]?.connect;
}

/**
 * Get the default value of a dimensions setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} device - The device type.
 * @param {Object} attributesDefaults - The default attributes object.
 * 
 * @returns {string} - The default value of the setting.
 */
export function getDimensionsSettingDefaultValue( settingId, device, attributesDefaults ) {
    return attributesDefaults[settingId]?.default?.[device];
}

/**
 * Get the value of a inner setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} innerSettingId - The ID of the inner setting.
 * @param {string} device - The device type.
 * @param {Object} attributes - The attributes object.
 * 
 * @returns {string} - The value of the setting.
 */
export function getInnerSettingValue( settingId, innerSettingId, device, attributes ) {
    if ( ! device ) {
        return attributes[settingId]?.innerSettings?.[innerSettingId]?.default;
    }

    return attributes[settingId]?.innerSettings?.[innerSettingId]?.default?.[device]?.value;
}

/**
 * Get the default value of a inner setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} innerSettingId - The ID of the inner setting.
 * @param {string} device - The device type.
 * @param {Object} attributesDefaults - The default attributes object.
 * 
 * @returns {string} - The default value of the setting.
 */
export function getInnerSettingDefaultValue( settingId, innerSettingId, device, attributesDefaults ) {
    if ( ! device ) {
        return attributesDefaults[settingId]?.default.innerSettings?.[innerSettingId]?.default;
    }

    return attributesDefaults[settingId]?.default.innerSettings?.[innerSettingId]?.default?.[device]?.value;
}

/**
 * Get the default unit value of a inner setting.
 * 
 * @param {string} settingId - The ID of the setting.
 * @param {string} innerSettingId - The ID of the inner setting.
 * @param {string} device - The device type.
 * @param {Object} attributesDefaults - The default attributes object.
 * 
 * @returns {string} - The default value of the setting.
 */
export function getInnerSettingDefaultUnit( settingId, innerSettingId, device, attributesDefaults ) {
    return attributesDefaults[settingId]?.default.innerSettings?.[innerSettingId]?.default?.[device]?.unit;
}

export function getPresetResponsiveAttributeValueObject( value ) {
    return {
        desktop: value,
        tablet: value,
        mobile: value,
    };
}