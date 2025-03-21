/**
 * Apply the CSS to the block preview. 
 * This will append the CSS to the block editor iframe.
 * 
 * @param {string} css - The CSS to apply.
 * @param {string} clientId - The client ID of the block.
 * @param {string} settingId - The ID of the setting.
 * 
 * @returns {void}
 */
export function applyPreviewCSS(css, clientId, settingId, innerSettingId = null) {
    const blockIframe = document.querySelector(`iframe[name="editor-canvas"]`);
    const styleTagId = innerSettingId
        ? `athemes-blocks-editor-preview-css-${settingId}-${innerSettingId}-${clientId}`
        : `athemes-blocks-editor-preview-css-${settingId}-${clientId}`;
    
    const applyCss = (doc) => {
        if (!doc) return;
    
        let styleTag = doc.getElementById(styleTagId);
    
        if (!styleTag) {
            styleTag = doc.createElement('style');
            styleTag.id = styleTagId;
            doc.head.appendChild(styleTag);
        }
    
        styleTag.innerHTML = css;
    };
    
    if (blockIframe?.contentDocument) {
        applyCss(blockIframe.contentDocument);
    } else {
        applyCss(document);
    }
};

/**
 * Get the CSS for a control.
 * 
 * @param {Object} cssData - The CSS data.
 * @param {string} clientId - The client ID of the block.
 * @param {Object} attributes - The block attributes.
 * 
 * @returns {string} - The CSS for the control.
 */
export function getControlCSS( cssData, clientId, attributes ) {
    if ( ! cssData.css ) {
        return '';
    }

    const { selectors, property } = cssData.css;
    const settingId = cssData.settingId;
    const innerSettingId = cssData?.innerSettingId;

    // Ensure the keys are always in this order. It is crucial for the CSS to work correctly.
    const sortedKeys = ['desktop', 'tablet', 'mobile']; 
        
    const sortedAttributeValue = {}
    sortedKeys.forEach( key => {
        if ( innerSettingId ) {
            sortedAttributeValue[key] = attributes[settingId].innerSettings[innerSettingId].default[key];
        } else {
            sortedAttributeValue[key] = attributes[settingId][key];
        }
    });

    const isColorPicker = ['defaultState', 'hoverState'].some(prop =>
        Object.prototype.hasOwnProperty.call(sortedAttributeValue.desktop.value, prop)
    );

    const isDimensions = ['top', 'right', 'bottom', 'left'].some(prop => 
        Object.prototype.hasOwnProperty.call(sortedAttributeValue.desktop.value, prop)
    );

    // Generate the CSS for each device.
    let css = '';
    for ( const device in sortedAttributeValue ) {
        if ( sortedAttributeValue[device] ) {
            const valueIsObject = typeof sortedAttributeValue[device].value === 'object';
            const unit = sortedAttributeValue[device].unit ? sortedAttributeValue[device].unit : '';

            if ( sortedAttributeValue[device].value === '' ) {
                continue;
            }

            if ( isColorPicker && valueIsObject ) {
                if ( sortedAttributeValue[device].value.defaultState === '' && sortedAttributeValue[device].value.hoverState === '' ) {
                    continue;
                }
            }

            if ( isDimensions && valueIsObject ) {
                if ( sortedAttributeValue[device].value.top === '' && sortedAttributeValue[device].value.right === '' && sortedAttributeValue[device].value.bottom === '' && sortedAttributeValue[device].value.left === '' ) {
                    continue;
                }
            }

            const selectors_is_key_value_pair = selectors instanceof Object && selectors !== null && !Array.isArray(selectors);

            if ( selectors_is_key_value_pair ) {
                for (const [selector, selectorValue] of Object.entries(selectors)) {
                    const replacedSelector = selector.replace('{{WRAPPER}}', `.wp-block[data-block="${clientId}"]`);
                    let replacedSelectorValue = selectorValue.replace('{{VALUE}}', sortedAttributeValue[device].value).replace('{{UNIT}}', unit);

                    if (isColorPicker) {
                        replacedSelectorValue = selectorValue
                            .replace('{{VALUE}}', sortedAttributeValue[device].value.defaultState)
                            .replace('{{HOVER}}', sortedAttributeValue[device].value.hoverState);
                    }

                    if (device === 'desktop') {
                        if (valueIsObject) {
                            if (isColorPicker) {
                                css += `${replacedSelector} { ${property}: ${replacedSelectorValue}; }`;
                            }
                        } else {
                            css += `${replacedSelector} { ${property}: ${replacedSelectorValue}; }`;
                        }
                    } else if (device === 'tablet') {
                        if (valueIsObject) {
                            if (isColorPicker) {
                                css += `@media (max-width: 1024px) { ${replacedSelector} { ${property}: ${replacedSelectorValue}; } }`;
                            }
                        } else {
                            css += `@media (max-width: 1024px) { ${replacedSelector} { ${property}: ${replacedSelectorValue}; } }`;
                        }
                    } else if (device === 'mobile') {
                        if (valueIsObject) {
                            if (isColorPicker) {
                                css += `@media (max-width: 767px) { ${replacedSelector} { ${property}: ${replacedSelectorValue}; } }`;
                            }
                        } else {
                            css += `@media (max-width: 767px) { ${replacedSelector} { ${property}: ${replacedSelectorValue}; } }`;
                        }
                    }
                }
            } else {
                if ( device === 'desktop' ) {
                    selectors.forEach( selector => {
                        if ( isColorPicker ) {
                            css += `${selector} { ${property}: ${ sortedAttributeValue[device].value.defaultState }; }`;
                            css += `${selector}:hover { ${property}: ${ sortedAttributeValue[device].value.hoverState }; }`;
                        } else if ( isDimensions ) { 
                            Object.entries(sortedAttributeValue[device].value).forEach(([direction, directionValue]) => {
                                if (directionValue === '') {
                                    return;
                                }

                                css += `${selector} { ${property}-${direction}: ${directionValue}${unit}; }`;
                            });
                        } else {
                            css += `${selector} { ${property}: ${ sortedAttributeValue[device].value }${unit}; }`;
                        }
                    });
                }
    
                if ( device === 'tablet' ) {
                    selectors.forEach( selector => {
                        if ( isColorPicker ) {
                            css += `@media (max-width: 1024px) { ${selector} { ${property}: ${sortedAttributeValue[device].value.defaultState}; } }`;
                            css += `@media (max-width: 1024px) { ${selector}:hover { ${property}: ${sortedAttributeValue[device].value.hoverState}; } }`;
                        } else if ( isDimensions ) {
                            Object.entries(sortedAttributeValue[device].value).forEach(([direction, directionValue]) => {
                                if (directionValue === '') {
                                    return;
                                }

                                css += `@media (max-width: 1024px) { ${selector} { ${property}-${direction}: ${directionValue}${unit}; } }`;
                            });
                        } else {
                            css += `@media (max-width: 1024px) { ${selector} { ${property}: ${sortedAttributeValue[device].value}${unit}; } }`;
                        }
                    });
                }
    
                if ( device === 'mobile' ) {
                    selectors.forEach( selector => {
                        if ( isColorPicker ) {
                            css += `@media (max-width: 767px) { ${selector} { ${property}: ${sortedAttributeValue[device].value.defaultState}; } }`;
                            css += `@media (max-width: 767px) { ${selector}:hover { ${property}: ${sortedAttributeValue[device].value.hoverState}; } }`;
                        } else if ( isDimensions) {
                            Object.entries(sortedAttributeValue[device].value).forEach(([direction, directionValue]) => {
                                if (directionValue === '') {
                                    return;
                                }

                                css += `@media (max-width: 767px) { ${selector} { ${property}-${direction}: ${directionValue}${unit}; } }`;
                            });
                        } else {
                            css += `@media (max-width: 767px) { ${selector} { ${property}: ${sortedAttributeValue[device].value}${unit}; } }`;
                        }
                    });
                } 
            }
        }        
    }

    // Replace {{WRAPPER}} with the block's selector.
    css = css.replace(/{{WRAPPER}}/g, `.wp-block[data-block="${clientId}"]`);

    return css;
}