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

    const { selectors, property, important = false } = cssData.css;
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

    const isBorderRadius = property.indexOf('-radius') !== -1;

    const isBackgroundImage = property === 'background-image';

    const isFocalPoint = property === 'background-position';

    const isTypography = property === 'font-family';

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

            if ( isBackgroundImage ) {
                if ( sortedAttributeValue[device].value === '' ) {
                    continue;
                }
            }

            if ( isFocalPoint ) {
                if ( sortedAttributeValue[device].value === '' ) {
                    continue;
                }
            }

            if ( isTypography && valueIsObject ) {
                continue;
            }

            const focalPointValueX = ( sortedAttributeValue[device].value.x * 100 ) + '%';
            const focalPointValueY = ( sortedAttributeValue[device].value.y * 100 ) + '%';

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
                                css += `${replacedSelector} { ${property}: ${replacedSelectorValue}${important ? '!important' : ''}; }`;
                            }
                        } else {
                            css += `${replacedSelector} { ${property}: ${replacedSelectorValue}${important ? '!important' : ''}; }`;
                        }
                    } else if (device === 'tablet') {
                        if (valueIsObject) {
                            if (isColorPicker) {
                                css += `@media (max-width: 1024px) { ${replacedSelector} { ${property}: ${replacedSelectorValue}${important ? '!important' : ''}; } }`;
                            }
                        } else {
                            css += `@media (max-width: 1024px) { ${replacedSelector} { ${property}: ${replacedSelectorValue}${important ? '!important' : ''}; } }`;
                        }
                    } else if (device === 'mobile') {
                        if (valueIsObject) {
                            if (isColorPicker) {
                                css += `@media (max-width: 767px) { ${replacedSelector} { ${property}: ${replacedSelectorValue}${important ? '!important' : ''}; } }`;
                            }
                        } else {
                            css += `@media (max-width: 767px) { ${replacedSelector} { ${property}: ${replacedSelectorValue}${important ? '!important' : ''}; } }`;
                        }
                    }
                }
            } else {
                if ( device === 'desktop' ) {
                    selectors.forEach( selector => {
                        if ( isColorPicker ) {
                            if ( sortedAttributeValue[device].value.defaultState !== '' ) {
                                css += `${selector} { ${property}: ${ sortedAttributeValue[device].value.defaultState }${important ? '!important' : ''}; }`;
                            }

                            if ( sortedAttributeValue[device].value.hoverState !== '' ) {
                                css += `${selector}:hover { ${property}: ${ sortedAttributeValue[device].value.hoverState }${important ? '!important' : ''}; }`;
                            }
                        } else if ( isDimensions ) {

                            let replacedProperty = '';
                            Object.entries(sortedAttributeValue[device].value).forEach(([direction, directionValue]) => {
                                if (directionValue === '') {
                                    return;
                                }

                                replacedProperty = property.replace('{{DIRECTION}}', direction);

                                if ( isBorderRadius ) {
                                    if ( direction === 'top' ) {
                                        replacedProperty = replacedProperty.replace('top', 'top-left');
                                    } else if ( direction === 'right' ) {
                                        replacedProperty = replacedProperty.replace('right', 'top-right');
                                    } else if ( direction === 'bottom' ) {
                                        replacedProperty = replacedProperty.replace('bottom', 'bottom-right');
                                    } else if ( direction === 'left' ) {
                                        replacedProperty = replacedProperty.replace('left', 'bottom-left');
                                    }
                                }

                                css += `${selector} { ${replacedProperty}: ${directionValue}${unit}${important ? '!important' : ''}; }`;
                            });
                        } else if ( isBackgroundImage ) {
                            const image = sortedAttributeValue[device].value;
                            const imageUrl = image && image.url ? image.url : '';

                            css += `${selector} { ${property}: url(${imageUrl})${important ? '!important' : ''}; }`;
                        } else if ( isFocalPoint ) {
                            css += `${selector} { ${property}: ${ focalPointValueX } ${ focalPointValueY }${important ? '!important' : ''}; }`;
                        } else {
                            css += `${selector} { ${property}: ${ sortedAttributeValue[device].value }${unit}${important ? '!important' : ''}; }`;
                        }
                    });
                }
    
                if ( device === 'tablet' ) {
                    selectors.forEach( selector => {
                        if ( isColorPicker ) {
                            if ( sortedAttributeValue[device].value.defaultState !== '' ) {
                                css += `@media (max-width: 1024px) { ${selector} { ${property}: ${sortedAttributeValue[device].value.defaultState}${important ? '!important' : ''}; } }`;
                            }

                            if ( sortedAttributeValue[device].value.hoverState !== '' ) {
                                css += `@media (max-width: 1024px) { ${selector}:hover { ${property}: ${sortedAttributeValue[device].value.hoverState}${important ? '!important' : ''}; } }`;
                            }
                        } else if ( isDimensions ) {

                            let replacedProperty = '';
                            Object.entries(sortedAttributeValue[device].value).forEach(([direction, directionValue]) => {
                                if (directionValue === '') {
                                    return;
                                }

                                replacedProperty = property.replace('{{DIRECTION}}', direction);

                                if ( isBorderRadius ) {
                                    if ( direction === 'top' ) {
                                        replacedProperty = replacedProperty.replace('top', 'top-left');
                                    } else if ( direction === 'right' ) {
                                        replacedProperty = replacedProperty.replace('right', 'top-right');
                                    } else if ( direction === 'bottom' ) {
                                        replacedProperty = replacedProperty.replace('bottom', 'bottom-right');
                                    } else if ( direction === 'left' ) {
                                        replacedProperty = replacedProperty.replace('left', 'bottom-left');
                                    }
                                }

                                css += `@media (max-width: 1024px) { ${selector} { ${replacedProperty}: ${directionValue}${unit}${important ? '!important' : ''}; } }`;
                            });
                        } else if ( isBackgroundImage ) {
                            const image = sortedAttributeValue[device].value;
                            const imageUrl = image && image.url ? image.url : '';

                            css += `@media (max-width: 1024px) { ${selector} { ${property}: url(${imageUrl})${important ? '!important' : ''}; } }`;
                        } else if ( isFocalPoint ) {
                            css += `@media (max-width: 1024px) { ${selector} { ${property}: ${ focalPointValueX } ${ focalPointValueY }${important ? '!important' : ''}; } }`;
                        } else {
                            css += `@media (max-width: 1024px) { ${selector} { ${property}: ${sortedAttributeValue[device].value}${unit}${important ? '!important' : ''}; } }`;
                        }
                    });
                }
    
                if ( device === 'mobile' ) {
                    selectors.forEach( selector => {
                        if ( isColorPicker ) {
                            if ( sortedAttributeValue[device].value.defaultState !== '' ) {
                                css += `@media (max-width: 767px) { ${selector} { ${property}: ${sortedAttributeValue[device].value.defaultState}${important ? '!important' : ''}; } }`;
                            }

                            if ( sortedAttributeValue[device].value.hoverState !== '' ) {
                                css += `@media (max-width: 767px) { ${selector}:hover { ${property}: ${sortedAttributeValue[device].value.hoverState}${important ? '!important' : ''}; } }`;
                            }
                        } else if ( isDimensions) {

                            let replacedProperty = '';
                            Object.entries(sortedAttributeValue[device].value).forEach(([direction, directionValue]) => {
                                if (directionValue === '') {
                                    return;
                                }

                                replacedProperty = property.replace('{{DIRECTION}}', direction);
                                
                                if ( isBorderRadius ) {
                                    if ( direction === 'top' ) {
                                        replacedProperty = replacedProperty.replace('top', 'top-left');
                                    } else if ( direction === 'right' ) {
                                        replacedProperty = replacedProperty.replace('right', 'top-right');
                                    } else if ( direction === 'bottom' ) {
                                        replacedProperty = replacedProperty.replace('bottom', 'bottom-right');
                                    } else if ( direction === 'left' ) {
                                        replacedProperty = replacedProperty.replace('left', 'bottom-left');
                                    }
                                }

                                css += `@media (max-width: 767px) { ${selector} { ${replacedProperty}: ${directionValue}${unit}${important ? '!important' : ''}; } }`;
                            });
                        } else if ( isBackgroundImage ) {
                            const image = sortedAttributeValue[device].value;
                            const imageUrl = image && image.url ? image.url : '';

                            css += `@media (max-width: 767px) { ${selector} { ${property}: url(${imageUrl})${important ? '!important' : ''}; } }`;
                        } else if ( isFocalPoint ) {
                            css += `@media (max-width: 767px) { ${selector} { ${property}: ${ focalPointValueX } ${ focalPointValueY }${important ? '!important' : ''}; } }`;
                        } else {
                            css += `@media (max-width: 767px) { ${selector} { ${property}: ${sortedAttributeValue[device].value}${unit}${important ? '!important' : ''}; } }`;
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