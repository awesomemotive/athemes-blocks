/** @jsx jsx */;
import { css, jsx, useTheme } from '@emotion/react';

import { Icon } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

const topBarData = athemesBlocksTopBarData || {};

const styles = (theme) => css`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    background-color: ${theme.colors.backgroundColorLight};
    color: ${theme.colors.textColorDefault};
    margin-bottom: 36px;
    
    .atb-dashboard__top-bar-item {
        &--version {
            margin-left: auto;
        }
    }
`;

const TopBar = () => {
    const theme = useTheme();

    return (
        <div className="atb-dashboard__top-bar" css={ styles }>
            <div className="atb-dashboard__top-bar-item atb-dashboard__top-bar-item--logo">
                <a href="https://athemes.com" target="_blank">
                    <img src={ topBarData.logo } width={95} height="auto" alt="aThemes" />
                </a>
            </div>
            <div className="atb-dashboard__top-bar-item atb-dashboard__top-bar-item--version">
                <span>{ topBarData.version }</span>
            </div>
            <div className="atb-dashboard__top-bar-item">
                {/* <Icon /> */}
            </div>
            <div className="atb-dashboard__top-bar-item">
                <a href={ topBarData.website_url } target="_blank">
                    { __( 'Website', 'a-themes-blocks' ) }
                </a>
            </div>
        </div>
    );
}

export { TopBar };