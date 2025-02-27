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
    
    if (blockIframe?.contentDocument) {
        let styleTagId = `athemes-blocks-editor-preview-css-${settingId}-${clientId}`;
        if ( innerSettingId ) {
            styleTagId = `athemes-blocks-editor-preview-css-${settingId}-${innerSettingId}-${clientId}`;
        }

        let styleTag = blockIframe.contentDocument.getElementById(styleTagId);
        
        if (!styleTag) {
            styleTag = blockIframe.contentDocument.createElement('style');
            styleTag.id = styleTagId;
            blockIframe.contentDocument.head.appendChild(styleTag);
        }
        
        styleTag.innerHTML = css;
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
    const sortedKeys = ['mobile', 'tablet', 'desktop']; 
        
    const sortedAttributeValue = {}
    sortedKeys.forEach( key => {
        if ( innerSettingId ) {
            sortedAttributeValue[key] = attributes[settingId].innerSettings[innerSettingId].default[key];
        } else {
            sortedAttributeValue[key] = attributes[settingId][key];
        }
    });

    // Check if the attribute value data is a color picker object.
    let isColorPicker = false;
    if ( sortedAttributeValue.desktop.value.defaultState || sortedAttributeValue.desktop.value.hoverState ) {
        isColorPicker = true;
    }

    let isDimensions = false;
    if ( sortedAttributeValue.desktop.value.top || sortedAttributeValue.desktop.value.right || sortedAttributeValue.desktop.value.bottom || sortedAttributeValue.desktop.value.left ) {
        isDimensions = true;
    }

    // Generate the CSS for each device.
    let css = '';
    for ( const device in sortedAttributeValue ) {
        if ( sortedAttributeValue[device] ) {
            const unit = sortedAttributeValue[device].unit ? sortedAttributeValue[device].unit : '';

            if ( device === 'desktop' ) {
                selectors.forEach( selector => {
                    if ( isColorPicker ) {
                        css += `@media (min-width: 1025px) { ${selector} { ${property}: ${ sortedAttributeValue[device].value.defaultState }; } }`;
                        css += `@media (min-width: 1025px) { ${selector}:hover { ${property}: ${ sortedAttributeValue[device].value.hoverState }; } }`;
                    } else if ( isDimensions ) { 
                        css += `@media (min-width: 1025px) { ${selector} { ${property}: ${ sortedAttributeValue[device].value.top }${unit} ${ sortedAttributeValue[device].value.right }${unit} ${ sortedAttributeValue[device].value.bottom }${unit} ${ sortedAttributeValue[device].value.left }${unit}; } }`;
                    } else {
                        css += `@media (min-width: 1025px) { ${selector} { ${property}: ${ sortedAttributeValue[device].value }${unit}; } }`;
                    }
                });
            }

            if ( device === 'tablet' ) {
                selectors.forEach( selector => {
                    if ( isColorPicker ) {
                        css += `@media (min-width: 768px) and (max-width: 1024px) { ${selector} { ${property}: ${sortedAttributeValue[device].value.defaultState}; } }`;
                        css += `@media (min-width: 768px) and (max-width: 1024px) { ${selector}:hover { ${property}: ${sortedAttributeValue[device].value.hoverState}; } }`;
                    } else if ( isDimensions ) {
                        css += `@media (min-width: 768px) and (max-width: 1024px) { ${selector} { ${property}: ${sortedAttributeValue[device].value.top}${unit} ${sortedAttributeValue[device].value.right}${unit} ${sortedAttributeValue[device].value.bottom}${unit} ${sortedAttributeValue[device].value.left}${unit}; } }`;
                    } else {
                        css += `@media (min-width: 768px) and (max-width: 1024px) { ${selector} { ${property}: ${sortedAttributeValue[device].value}${unit}; } }`;
                    }
                });
            }

            if ( device === 'mobile' ) {
                selectors.forEach( selector => {
                    if ( isColorPicker ) {
                        css += `@media (max-width: 767px) { ${selector} { ${property}: ${sortedAttributeValue[device].value.defaultState}; } }`;
                        css += `@media (max-width: 767px) { ${selector}:hover { ${property}: ${sortedAttributeValue[device].value.hoverState}; } }`;
                    } else if ( isDimensions) {
                        css += `@media (max-width: 767px) { ${selector} { ${property}: ${sortedAttributeValue[device].value.top}${unit} ${sortedAttributeValue[device].value.right}${unit} ${sortedAttributeValue[device].value.bottom}${unit} ${sortedAttributeValue[device].value.left}${unit}; } }`;
                    } else {
                        css += `${selector} { ${property}: ${sortedAttributeValue[device].value}${unit}; }`;
                    }
                });
            } 
        }        
    }

    // Replace {{WRAPPER}} with the block's selector.
    css = css.replace(/{{WRAPPER}}/g, `.wp-block[data-block="${clientId}"]`);

    return css;
}