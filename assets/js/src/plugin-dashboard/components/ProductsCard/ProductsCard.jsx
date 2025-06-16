/** @jsx jsx */;
import { css, jsx, ThemeProvider, useTheme } from '@emotion/react';
import { useState, useEffect } from 'react';

import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { ToggleControl } from '@wordpress/components';

import { fetchData } from '../../utils/fetch.jsx';

const styles = (theme) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    width: 100%;
    padding: 16px;
    background-color: ${theme.colors.backgroundColorLight};
    border: 1px solid ${theme.colors.borderColorGray};
    border-radius: 10px;
    box-shadow: 2px 2px 4px 0px #00285005;

    .atb-dashboard__products-card-action {
        font-size: 12px;
        font-weight: 600;
        color: ${theme.colors.textColorDark};
        margin: 0;

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

    const getPluginStatus = async () => {
        const data = await fetchData( 'plugin-installer/plugin-status', { plugin: pluginSlug }, 'GET' );

        setIsActive( data.status === 'active' );
        return data.status;
    };
    
    useEffect( () => {
        // getPluginStatus().then( ( status ) => {
        //     console.log(status);
        //     setIsActive( status === 'active' );
        // } );
        console.log(isActive);
    }, [] );

    console.log(isActive);

    return (
        <div className="atb-dashboard__products-card" css={ styles }>
            <img src={ image } width={40} height={40} alt={ title } />
            { title }
            {
                isActive && (
                    <p className="atb-dashboard__products-card-action atb-dashboard__products-card-action--active">{ __( 'Active', 'athemes-blocks' ) }</p>
                )
            }
            {
                isInactive && (
                    <p className="atb-dashboard__products-card-action atb-dashboard__products-card-action--inactive">{ __( 'Activate', 'athemes-blocks' ) }</p>
                )
            }
            {
                !isActive && !isInactive && (
                    <p className="atb-dashboard__products-card-action atb-dashboard__products-card-action--install">{ __( 'Install', 'athemes-blocks' ) }</p>
                )
            }
        </div>
    );
}

export { ProductsCard };