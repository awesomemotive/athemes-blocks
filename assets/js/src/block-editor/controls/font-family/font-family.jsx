/** @jsx jsx */;
import { css, jsx } from '@emotion/react';
import { __ } from '@wordpress/i18n';
import { useState, useEffect, useRef } from '@wordpress/element';
import { BaseControl, ComboboxControl } from '@wordpress/components';

import { DeviceSwitcher } from '../../controls-auxiliary/device-switcher/device-switcher-control';
import { ResetValues } from '../../controls-auxiliary/reset-values/reset-values-control';

import { styles } from './styles';

export function FontFamilySelect( props ) {
    const { label, defaultValue, options, responsive, reset, hidden, googleFontsData, onChange, onFilterValueChange, onClickReset } = props;
    const [ value, setValue ] = useState( defaultValue );
    const [ fontFamily, setFontFamily ] = useState( '' );
    const comboboxRef = useRef(null);
    const lastLoggedItems = useRef(new Set());
    const loadedFonts = useRef(new Set());

    const loadGoogleFont = (fontFamily) => {
        if (loadedFonts.current.has(fontFamily)) return;

        const font = googleFontsData.items.find(f => f.family === fontFamily);
        if (!font) return;

        const fontUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontFamily)}:wght@${font.variants.join(';')}&display=swap`;

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

        loadedFonts.current.add(fontFamily);
    };

    const applyFontStyles = (dropdown) => {
        if (!dropdown) return;

        Array.from(dropdown.children).forEach(option => {
            const fontFamilyValue = option.textContent.trim();
            option.style.fontFamily = fontFamilyValue;
        });
    };

    useEffect(() => {
        setValue( defaultValue );
    }, [ defaultValue ]);

    // Load the selected font on mount
    useEffect(() => {
        if (defaultValue) {
            loadGoogleFont(defaultValue);
        }
    }, []);

    useEffect(() => {
        if (!comboboxRef.current) return;

        const handleScroll = () => {
            const dropdown = document.querySelector('.components-form-token-field__suggestions-list');
            if (!dropdown) return;

            const visibleOptions = Array.from(dropdown.children).filter(option => {
                const rect = option.getBoundingClientRect();
                return rect.top >= 0 && rect.bottom <= window.innerHeight;
            });

            visibleOptions.forEach(option => {
                const fontFamilyValue = option.textContent.trim();
                if (!lastLoggedItems.current.has(fontFamilyValue)) {
                    lastLoggedItems.current.add(fontFamilyValue);
                    loadGoogleFont(fontFamilyValue);
                }
            });

            applyFontStyles(dropdown);
        };

        const observer = new MutationObserver((mutations) => {
            const dropdown = document.querySelector('.components-form-token-field__suggestions-list');
            if (!dropdown) return;

            // Reset the logged items when dropdown is opened
            lastLoggedItems.current.clear();
            
            // Add scroll listener
            dropdown.addEventListener('scroll', handleScroll);
            
            // Initial check for visible items
            handleScroll();
        });

        observer.observe(comboboxRef.current, {
            childList: true,
            subtree: true,
            attributes: true
        });

        return () => {
            observer.disconnect();
            const dropdown = document.querySelector('.components-form-token-field__suggestions-list');
            if (dropdown) {
                dropdown.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    if ( hidden ) {
        return null;
    }

    return(
        <BaseControl css={styles.wrapper} className="atblocks-component-radio-buttons">
            <div className="atblocks-component-header">
                <span className="atblocks-component-header__title">{ label }</span>
                {
                    responsive && (
                        <DeviceSwitcher />
                    )
                }
                {
                    reset && (
                        <ResetValues 
                            onClick={ onClickReset }
                        />
                    )
                }
            </div>
            <div ref={comboboxRef}>
                <ComboboxControl
                    __next40pxDefaultSize
                    __nextHasNoMarginBottom
                    label=""
                    options={options}
                    value={value}
                    onChange={onChange}
                    onFilterValueChange={onFilterValueChange}
                />
            </div>
        </BaseControl>
    );
}