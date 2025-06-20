/** @jsx jsx */;
import { css, jsx, useTheme } from '@emotion/react';

import { __ } from '@wordpress/i18n';

import { CustomIcon } from '../../icons/icons.jsx';

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

        &-notification {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            border: 1px solid ${theme.colors.borderColorGray};
            border-radius: 50%;
            cursor: pointer;
            margin-left: 21px;

            &-count {
                position: absolute;
                top: -3px;
                right: -3px;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: ${theme.colors.danger};
                font-size: 6px;
                line-height: 1.8;
                font-weight: 500;
                color: ${theme.colors.textColorLight};
                text-align: center;
            }

            svg {
                width: 13px;
                height: 11px;
            }

            &:before,
            &:after {
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                height: calc( 100% - 10px );
                border-left: 1px solid ${theme.colors.borderColorGray};
                transform: translate3d(0, -50%, 0);
            }

            &:before {
                right: calc( 100% + 10px );
            }

            &:after {
                left: calc( 100% + 10px );
            }
        }

        &--website {
            margin-left: 21px;

            a {
                display: flex;
                align-items: center;
                gap: 7px;
                color: ${theme.colors.primary};
                font-weight: 500;
            }
        }
    }
`;

const TopBar = ( props ) => {
    const { logo, version, websiteUrl } = props;
    const theme = useTheme();

    return (
        <div className="atb-dashboard__top-bar" css={ styles(theme) }>
            <div className="atb-dashboard__top-bar-item atb-dashboard__top-bar-item--logo">
                <a href={ websiteUrl } target="_blank">
                    <img src={ logo } width={95} height="auto" alt="aThemes" />
                </a>
            </div>
            <div className="atb-dashboard__top-bar-item atb-dashboard__top-bar-item--version">
                <span>{ version }</span>
            </div>
            <div className="atb-dashboard__top-bar-item">
                <div className="atb-dashboard__top-bar-item-notification">
                    <span className="atb-dashboard__top-bar-item-notification-count">1</span>
                    <CustomIcon icon="loudspeaker" />
                </div>
            </div>
            <div className="atb-dashboard__top-bar-item atb-dashboard__top-bar-item--website">
                <a href={ websiteUrl } target="_blank">
                    { __( 'Website', 'a-themes-blocks' ) }
                    <CustomIcon icon="external-link" />
                </a>
            </div>
        </div>
    );
}

export { TopBar };