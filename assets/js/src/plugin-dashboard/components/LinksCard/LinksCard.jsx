/** @jsx jsx */;
import { css, jsx, ThemeProvider, useTheme } from '@emotion/react';
import { ToggleControl } from '@wordpress/components';

const styles = (theme) => css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    padding: 20px;
    background-color: ${theme.colors.backgroundColorLight};
    border: 1px solid ${theme.colors.borderColorGray};
    border-radius: 10px;
    box-shadow: 2px 2px 4px 0px #00285005;

    &.atb-dashboard__links-card--active {
        border-color: ${theme.colors.primary};
    }
`;

const LinksCard = ( props ) => {
    const { title, linkUrl, linkLabel, isActive } = props;

    return (
        <div className={ `atb-dashboard__links-card ${ isActive ? 'atb-dashboard__links-card--active' : '' }` } css={ styles }>
            { title }
            <a href={ linkUrl } target="_blank">
                { linkLabel }
            </a>
        </div>
    );
}

export { LinksCard };