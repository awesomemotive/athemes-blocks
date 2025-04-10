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
            const hasTypography = atts.typography;
            if (!hasTypography) {
				return;
			}

			const googleFontsData = window.athemesBlocksGoogleFonts;
			const fontFamily = getInnerSettingValue('typography', 'fontFamily', 'desktop', atts);
			const fontWeight = getInnerSettingValue('typography', 'fontWeight', 'desktop', atts);

			if (fontFamily && fontWeight) {
				const font = googleFontsData.items.find(f => f.family === fontFamily);

				if (font) {
					const fontUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontFamily)}:wght@${fontWeight}&display=swap`;

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
			}
		}, []);

		return <WrappedComponent {...props} />;
	};
};