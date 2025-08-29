/** @jsx jsx */;
import { css, jsx, ThemeProvider, useTheme } from '@emotion/react';
import { __ } from '@wordpress/i18n';

const styles = (theme) => css`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 9fr 1fr;
    align-items: center;
    gap: 24px;
    
    .atb-dashboard__setting-label {
        font-size: ${theme.fontSize.settingLabel};
        line-height: ${theme.lineHeight.settingLabel};
        font-weight: 500;
        color: ${theme.colors.textColorDark};
        margin: 0;
    }

    .atb-dashboard__setting-description {
        font-size: ${theme.fontSize.settingDescription};
        line-height: ${theme.lineHeight.settingDescription};
        color: ${theme.colors.textColorGray};
        margin: 0;
    }

    &:after {
        content: '';
        display: block;
        position: absolute;
        top: calc( 100% + 20px );
        width: 100%;
        border-bottom: 1px solid ${theme.colors.borderColorGray};
    }

    &:last-child {
        &:after {
            content: none;
        }
    }
        
    .components-input-control {
        min-width: 85px;
    }

    .components-base-control {
        margin: 0;

        .components-input-control__backdrop {
            border-color: ${theme.colors.borderColorGray} !important;
        }
    }
`;

const Setting = ( props ) => {
    const { label, description, children } = props;
    const theme = useTheme();

    return (
        <div className="atb-dashboard__setting" css={ styles(theme) }>
            <div>
                <label className="atb-dashboard__setting-label">{ label }</label>
                <p className="atb-dashboard__setting-description">{ description }</p>
            </div>
            <div>
                { children }
            </div>
        </div>    
    )
}

export { Setting };