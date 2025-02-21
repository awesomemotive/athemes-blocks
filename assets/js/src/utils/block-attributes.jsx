/**
 * A curried function to update attributes.
 *
 * @param {Object} attributes - The current attributes object.
 * @param {Function} setAttributes - The setAttributes function from the block editor.
 * 
 * @returns {Function} - A function that updates a specific attribute.
 */
export const createAttributeUpdater = (attributes, setAttributes) => {
    return (attributeName, value, device = null) => {
        const valueIsObject = typeof value === 'object';

        // Update the attribute for the current device
        if (device) {
            setAttributes({
                [attributeName]: {
                    ...attributes[attributeName],
                    [device]: valueIsObject ? { 
                        ...attributes[attributeName][device].value, 
                        ...value 
                    } : value
                }
            });

            return;
        } 

        // Update the attribute for all devices
        if (valueIsObject) {
            setAttributes({
                [attributeName]: {
                    ...attributes[attributeName].value,
                    ...value
                }
            });
            
            return;
        }

        setAttributes({
            [attributeName]: value
        });
    };
};

/**
 * A curried function to update inner control attributes.
 * 
 * @param {string} attributeId - The ID of the inner control attribute.
 * @param {Object} attributes - The current attributes object.
 * @param {Function} setAttributes - The setAttributes function from the block editor.
 * 
 * @returns {Function} - A function that updates a specific inner control attribute.
 */
export const createInnerControlAttributeUpdater = (attributeId, attributes, setAttributes) => {
    return (attributeName, value, device = null) => {
        const valueIsObject = typeof value === 'object';

        // Update the attribute for the current device
        if (device) {
            setAttributes({
                [attributeId]: {
                    typographySettings: {
                        ...attributes[attributeId]?.typographySettings,
                        [attributeName]: valueIsObject
                            ? {
                                ...attributes[attributeId]?.typographySettings[attributeName],
                                [device]: {
                                    ...attributes[attributeId]?.typographySettings[attributeName]?.[device],
                                    ...value
                                }
                            } 
                            : value
                    }
                }
            });

            return;
        } 

        // Update the attribute for all devices
        if (valueIsObject) {
            setAttributes({
                [attributeId]: {
                    ...attributes[attributeId].typographySettings,
                    [attributeName]: {
                        ...attributes[attributeId].typographySettings[attributeName].value,
                        ...value
                    }
                }
            });
            
            return;
        }

        setAttributes({
            [attributeId]: {
                ...attributes[attributeId].typographySettings,
                [attributeName]: value
            }
        });
    };    
}