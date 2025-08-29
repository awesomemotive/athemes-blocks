import { useEffect } from '@wordpress/element';
import { getSettingValue, getInnerSettingValue } from '../../utils/settings';

/**
 * Higher Order Component that handles loading Google Fonts for a block.
 * 
 * @param {Function} WrappedComponent The component to wrap
 * @return {Function} Enhanced component
 */
export const withGoogleFonts = (WrappedComponent) => {
	return (props) => {
		const { attributes } = props;
		const atts = attributes;

		// Load the selected font and weight on mount
		useEffect(() => {
            const hasTypography = Object.keys(atts).some(key => key.indexOf('typography') !== -1 || key.indexOf('Typography') !== -1);
            if ( ! hasTypography ) {
				return;
			}

			const googleFontsData = window.athemesBlocksGoogleFonts;
			const fontFamily = getInnerSettingValue('typography', 'fontFamily', 'desktop', atts);
			const fontWeight = getInnerSettingValue('typography', 'fontWeight', 'desktop', atts);

			const familiesWithWeight = [];

			Object.keys(atts).forEach(key => {
				if (key.indexOf('typography') !== -1 || key.indexOf('Typography') !== -1) {
					const settingId = key;
					const fontFamily = getInnerSettingValue(settingId, 'fontFamily', 'desktop', atts);
					const fontWeight = getInnerSettingValue(settingId, 'fontWeight', 'desktop', atts);

					if ( fontFamily === 'default' ) {
						return;
					} 

					familiesWithWeight.push(`${encodeURIComponent(fontFamily)}:wght@${fontWeight}`);
				}
			});

			if ( familiesWithWeight.length > 0 ) {
				const fontUrl = `https://fonts.googleapis.com/css2?family=${familiesWithWeight.join('&family=')}&display=swap`;

				// Function to add link to a document
				const addLinkToDocument = (doc) => {
					const existingLink = Array.from(doc.getElementsByTagName('link')).find(
						link => link.href === fontUrl
					);

					if (!existingLink) {
						const link = doc.createElement('link');
						link.href = fontUrl;
						link.rel = 'stylesheet';
						doc.head.appendChild(link);
					}
				};

				// Add to main editor DOM
				addLinkToDocument(document);

				// Add to canvas iframe if it exists
				const editorCanvas = document.querySelector('.block-editor-iframe__container iframe');
				if (editorCanvas && editorCanvas.contentDocument) {
					addLinkToDocument(editorCanvas.contentDocument);
				}
			}
		}, []);

		return <WrappedComponent {...props} />;
	};
};