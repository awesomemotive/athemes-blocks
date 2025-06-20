/** @jsx jsx */;
import { css, jsx, ThemeProvider, useTheme } from '@emotion/react';
import { ToggleControl } from '@wordpress/components';
import { CustomIcon } from '../../icons/icons.jsx';

const styles = (theme) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    padding: 20px;
    background-color: ${theme.colors.backgroundColorLight};
    border: 1px solid ${theme.colors.borderColorLightGray};
    border-radius: 10px;
    box-shadow: 2px 2px 4px 0px #00285005;

    .atb-dashboard__links-card-title {
        font-size: ${theme.fontSize.cardTitle};
        line-height: ${theme.lineHeight.cardTitle};
        font-weight: 600;
        color: ${theme.colors.textColorDark};
        margin: 0;
    }

    .atb-dashboard__links-card-description {
        font-size: ${theme.fontSize.cardDescription};
        line-height: ${theme.lineHeight.cardDescription};
        color: ${theme.colors.textColorGray};
        margin: 0 0 5px 0;
    }

    &.atb-dashboard__links-card--active {
        border-color: ${theme.colors.primary};
    }

    .atb-dashboard__links-card-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: ${theme.fontSize.cardAction};
        line-height: ${theme.lineHeight.cardAction};
        font-weight: 600;

        &--underline {
            text-decoration: underline;
            color: ${theme.colors.primary};
            transition: ease opacity 250ms;

            &:hover {
                opacity: 0.8;
            }
        }

        &--button {
            background-color: transparent;;
            color: ${theme.colors.primary};
            border: 1px solid ${theme.colors.primary};
            padding: 8px 16px;
            border-radius: 4px;
            text-decoration: none;
            transition: ease color 250ms, ease background-color 250ms;

            &:hover {
                background-color: ${theme.colors.primary};
                color: ${theme.colors.backgroundColorLight};
            }
        }
    }
`;

const LinksCard = ( props ) => {
    const { title, description,linkUrl, linkLabel, linkStyle, isActive } = props;

    return (
        <div className={ `atb-dashboard__links-card ${ isActive ? 'atb-dashboard__links-card--active' : '' }` } css={ styles }>
            <p className="atb-dashboard__links-card-title">{ title }</p>
            <p className="atb-dashboard__links-card-description">{ description }</p>
            <a href={ linkUrl } target="_blank" className={ `atb-dashboard__links-card-link atb-dashboard__links-card-link--${linkStyle}` }>
                { linkLabel }
                {
                    linkStyle === 'underline' && (
                        <CustomIcon icon="external-link" className="atb-dashboard__links-card-link-icon" />
                    )
                }
            </a>
        </div>
    );
}

export { LinksCard };