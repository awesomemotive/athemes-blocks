/** @jsx jsx */;
import { css, jsx, ThemeProvider, useTheme } from '@emotion/react';
import { ToggleControl } from '@wordpress/components';

const styles = (theme) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    padding: 16px;
    background-color: ${theme.colors.backgroundColorLight};
    border: 1px solid ${theme.colors.borderColorGray};
    border-radius: 10px;
    box-shadow: 2px 2px 4px 0px #00285005;
`;

const ProductsCard = ( props ) => {
    const { children } = props;

    return (
        <div className="atb-dashboard__products-card" css={ styles }>
            { children }
        </div>
    );
}

export { ProductsCard };