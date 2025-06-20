/** @jsx jsx */;
import { css, jsx, ThemeProvider, useTheme } from '@emotion/react';
import { useState, useEffect } from 'react';

import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { ToggleControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

import { fetchData } from '../../utils/fetch.jsx';
import { CustomIcon } from '../../icons/icons.jsx';

const styles = (theme) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    width: 100%;
    padding: 16px;
    background-color: ${theme.colors.backgroundColorLight};
    border: 1px solid ${theme.colors.borderColorLightGray};
    border-radius: 10px;
    box-shadow: 2px 2px 4px 0px #00285005;

    .atb-dashboard__products-card-title {
        font-size: ${theme.fontSize.cardTitle};
        line-height: ${theme.lineHeight.cardTitle};
        font-weight: 600;
        color: ${theme.colors.textColorDark};
        margin: 0;
    }

    .atb-dashboard__products-card-action {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: ${theme.fontSize.cardAction};
        line-height: ${theme.lineHeight.cardAction};
        font-weight: 600;
        color: ${theme.colors.textColorDark};
        margin: 0 0 0 auto;

        &--active {
            color: ${theme.colors.success};
        }

        &--install,
        &--inactive {
            color: ${theme.colors.primary};
        }
    }
`;

const ProductsCard = ( props ) => {
    const { image, title, pluginSlug, pluginStatus } = props;
    const [ isActive, setIsActive ] = useState( pluginStatus === 'active' );
    const [ isInactive, setIsInactive ] = useState( pluginStatus === 'inactive' );
    const [ isInstalling, setIsInstalling ] = useState( false );
    const [ isActivating, setIsActivating ] = useState( false );
    const [ hasError, setHasError ] = useState( false );
    const [ errorMessage, setErrorMessage ] = useState( '' );

    const installPluginHandler = async ( e ) => {
        e.preventDefault();

        setIsInstalling( true );
        setHasError( false );
        setErrorMessage( '' );

        try {
            const data = await apiFetch( {
                path: '/wp-json/athemes-blocks/v1/plugin-installer',
                method: 'POST',
                data: {
                    plugin: pluginSlug,
                    action: 'install'
                },
                headers: {
                    'X-WP-Nonce': wpApiSettings ? wpApiSettings.nonce : ''
                }
            } );

            if ( data.status === 'success' ) {
                setIsInstalling( false );
                setIsActive( true );
            } else {
                throw new Error( data.message || __( 'Failed to install plugin.', 'athemes-blocks' ) );
            }
        } catch ( error ) {
            setHasError( true );
            setErrorMessage( error.message || __( 'An error occurred while installing the plugin.', 'athemes-blocks' ) );
            setIsInstalling( false );
            setIsActive( false );
            setIsInactive( false );
        }
    };

    const activatePluginHandler = async ( e ) => {
        e.preventDefault();

        setIsActivating( true );
        setHasError( false );
        setErrorMessage( '' );

        try {
            const data = await apiFetch( {
                path: '/wp-json/athemes-blocks/v1/plugin-installer',
                method: 'POST',
                data: {
                    plugin: pluginSlug,
                    action: 'activate'
                },
                headers: {
                    'X-WP-Nonce': wpApiSettings ? wpApiSettings.nonce : ''
                }
            } );

            if ( data.status === 'success' ) {
                setIsActivating( false );
                setIsActive( true );
                setIsInactive( false );
            } else {
                throw new Error( data.message || __( 'Failed to activate plugin.', 'athemes-blocks' ) );
            }
        } catch ( error ) {
            setHasError( true );
            setErrorMessage( error.message || __( 'An error occurred while activating the plugin.', 'athemes-blocks' ) );
            setIsActivating( false );
            setIsInstalling( false );
            setIsActive( false );
            setIsInactive( true );
        }
    };

    // Hide error message after 3 seconds.
    useEffect(() => {
        let timeoutId;
        if (hasError) {
            timeoutId = setTimeout(() => {
                setHasError(false);
                setErrorMessage('');
            }, 3000);
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [hasError]);

    return (
        <div className="atb-dashboard__products-card" css={ styles }>
            <img src={ image } width={40} height={40} alt={ title } />
            <p className="atb-dashboard__products-card-title">{ title }</p>
            {
                isInstalling && (
                    <p className="atb-dashboard__products-card-action atb-dashboard__products-card-action--installing">{ __( 'Installing...', 'athemes-blocks' ) }</p>
                )
            }
            {
                isActivating && (
                    <p className="atb-dashboard__products-card-action atb-dashboard__products-card-action--activating">{ __( 'Activating...', 'athemes-blocks' ) }</p>
                )
            }
            {
                isActive && (
                    <p className="atb-dashboard__products-card-action atb-dashboard__products-card-action--active">
                        { __( 'Activated', 'athemes-blocks' ) }
                        <CustomIcon icon="check" />
                    </p>
                )
            }
            {
                isInactive && !isActivating && (
                    <a className="atb-dashboard__products-card-action atb-dashboard__products-card-action--inactive" href="#" onClick={ activatePluginHandler }>{ __( 'Activate', 'athemes-blocks' ) }</a>
                )
            }
            {
                !isActive && !isInactive && !isInstalling && !isActivating && !hasError && (
                    <a className="atb-dashboard__products-card-action atb-dashboard__products-card-action--install" href="#" onClick={ installPluginHandler }>{ __( 'Install', 'athemes-blocks' ) }</a>
                )
            }
            {
                hasError && (
                    <p className="atb-dashboard__products-card-action atb-dashboard__products-card-action--error">{ errorMessage }</p>
                )
            }
        </div>
    );
}

export { ProductsCard };