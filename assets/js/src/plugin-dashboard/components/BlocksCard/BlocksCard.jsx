/** @jsx jsx */;
import { css, jsx, ThemeProvider, useTheme } from '@emotion/react';
import { useState } from 'react';
import { useContext } from 'react';
import { EnabledBlocksContext } from '../../contexts/GlobalContext.jsx';

import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { ToggleControl, Tooltip } from '@wordpress/components';

import { CustomIcon } from '../../icons/icons.jsx';

const styles = (theme) => css`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    background-color: ${theme.colors.backgroundColorLight};
    border: 1px solid ${theme.colors.borderColorGray};
    border-radius: 10px;
    box-shadow: 2px 2px 4px 0px #00285005;

    .atb-dashboard__blocks-card-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        font-size: ${theme.fontSize.cardTitle};
        line-height: ${theme.lineHeight.cardTitle};
        font-weight: 600;
        color: ${theme.colors.textColorDark};
        margin: 0;

        .components-base-control {
            margin: 0;
        }
    }

    .atb-dashboard__blocks-card-description {
        font-size: ${theme.fontSize.cardDescription};
        line-height: ${theme.lineHeight.cardDescription};
        color: ${theme.colors.textColorGray};
        margin: 0;
    }

    .atb-dashboard__blocks-card-icon {
        display: inline-flex;
        padding: 4px 0;
    }

    // Suggested Products.
    &.atb-dashboard__blocks-card--suggested-products {
        gap: 16px;

        .atb-dashboard__blocks-card-title {
            font-size: ${theme.fontSize.cardHeading};
            line-height: ${theme.lineHeight.cardHeading};
        }
    }

    // Quick Links.
    &.atb-dashboard__blocks-card--quick-links {
        gap: 16px;
        
        .atb-dashboard__blocks-card-title {
            font-size: ${theme.fontSize.cardHeading};
            line-height: ${theme.lineHeight.cardHeading};
        }
    }

    // Settings.
    &.atb-dashboard__blocks-card--settings {
        gap: 41px;
    }
`;

const BlocksCard = ( props ) => {
    const { title, className, description, documentation, children, hasSwitchToggle = false, switchToggleChecked = false, blockSlug } = props;
    const [ isSwitchToggleChecked, setIsSwitchToggleChecked ] = useState( switchToggleChecked );
    const [ enabledBlocks, setEnabledBlocks ] = useContext( EnabledBlocksContext );

    const swithToggleOnChangeHandler = () => {

        // Get current enabled blocks
        apiFetch( { 
            path: '/wp-json/wp/v2/settings',
            method: 'GET',
            headers: {
                'X-WP-Nonce': wpApiSettings ? wpApiSettings.nonce : ''
            }
        } ).then( ( response ) => {

            // Parse the string into an array if it's a string.
            const currentEnabledBlocks = typeof response.athemes_blocks_enabled_blocks === 'string' 
                ? JSON.parse(response.athemes_blocks_enabled_blocks)
                : (response.athemes_blocks_enabled_blocks || []);
            
            let updatedEnabledBlocks;
            if ( isSwitchToggleChecked ) {
                // Remove the block from enabled list.
                updatedEnabledBlocks = currentEnabledBlocks.filter( slug => slug !== blockSlug );
            } else {
                // Add the block to enabled list.
                updatedEnabledBlocks = [ ...currentEnabledBlocks, blockSlug ];
            }

            // Update the state.
            setIsSwitchToggleChecked( !isSwitchToggleChecked );

            // Save to database.
            apiFetch( {
                path: '/wp-json/wp/v2/settings',
                method: 'POST',
                headers: {
                    'X-WP-Nonce': wpApiSettings ? wpApiSettings.nonce : ''
                },
                data: {
                    'athemes_blocks_enabled_blocks': JSON.stringify(updatedEnabledBlocks)
                }
            } ).then( ( response ) => {
                setEnabledBlocks( updatedEnabledBlocks );
            } );
        } );
    }

    return (
        <div className={ `atb-dashboard__blocks-card ${className}` } css={ styles }>
            {
                title && (
                    <h3 className="atb-dashboard__blocks-card-title">
                        { title }
                        {
                            hasSwitchToggle && (
                                <ToggleControl
                                    checked={ isSwitchToggleChecked }
                                    onChange={ swithToggleOnChangeHandler }
                                />
                            )
                        }
                    </h3>       
                )
            }
            {
                description && (
                    <p className="atb-dashboard__blocks-card-description">
                        { description }
                    </p>
                )
            }
            {
                documentation && (
                    <Tooltip text={ __( 'View Documentation', 'athemes-blocks' ) }>
                        <a href={ documentation } className="atb-dashboard__blocks-card-icon" target="_blank">
                            <CustomIcon icon="docs" />
                        </a>
                    </Tooltip>
                )
            }
            { children }
        </div>
    );
}

export { BlocksCard };