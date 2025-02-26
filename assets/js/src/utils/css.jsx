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
export function applyPreviewCSS(css, clientId, settingId) {
    const blockIframe = document.querySelector(`iframe[name="editor-canvas"]`);
    
    if (blockIframe?.contentDocument) {
        let styleTag = blockIframe.contentDocument.getElementById(`athemes-blocks-editor-preview-css-${settingId}-${clientId}`);
        
        if (!styleTag) {
            styleTag = blockIframe.contentDocument.createElement('style');
            styleTag.id = `athemes-blocks-editor-preview-css-${settingId}-${clientId}`;
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
    const attributeName = cssData.attibuteName;

    // Ensure the keys are always in this order. It is crucial for the CSS to work correctly.
    const sortedKeys = ['mobile', 'tablet', 'desktop']; 
        
    const sortedAttributeValue = {}
    sortedKeys.forEach( key => {
        sortedAttributeValue[key] = attributes[attributeName][key];
    });

    // Check if the attribute value data is a color picker object.
    let isColorPicker = false;
    if ( sortedAttributeValue.desktop.value.defaultState || sortedAttributeValue.desktop.value.hoverState ) {
        isColorPicker = true;
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