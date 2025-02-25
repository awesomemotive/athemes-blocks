export function applyPreviewCSS(css, clientId) {
    setTimeout(() => {
        const blockIframe = document.querySelector(`iframe[name="editor-canvas"]`);
        
        if (blockIframe?.contentDocument) {
            let styleTag = blockIframe.contentDocument.getElementById(`athemes-blocks-editor-preview-css-${clientId}`);
            
            if (!styleTag) {
                styleTag = blockIframe.contentDocument.createElement('style');
                styleTag.id = `athemes-blocks-editor-preview-css-${clientId}`;
                blockIframe.contentDocument.head.appendChild(styleTag);
            }
            
            styleTag.innerHTML = css;
        }
    }, 100);
};

export function getControlCSS( { selector, property, attributeValues } ) {
    let css = '';

    if ( attributeValues ) {
        if ( attributeValues.mobile ) {
            css += `${selector} { ${property}: ${attributeValues.mobile} };`;
        }
        
        if ( attributeValues.tablet ) {
            css += `@media (min-width: 758px) and (max-width: 1024px) { ${selector} { ${property}: ${attributeValues.tablet}; } }`;
        }
        
        if ( attributeValues.desktop ) {
            css += `@media (min-width: 1025px) { ${selector} { ${property}: ${attributeValues.desktop}; } }`;
        }
    }

    return css;
}