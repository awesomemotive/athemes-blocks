/** @jsx jsx */;
import { css, jsx, ThemeProvider, useTheme } from '@emotion/react';

const styles = ( columns, gap ) => css`
    display: grid;
    grid-template-columns: repeat( ${columns}, 1fr );
    gap: ${gap}px;
`;

const GridList = ( props ) => {
    const { children, columns = 3, gap = 24 } = props;

    return (
        <div className="atb-dashboard__grid-list" css={ styles( columns, gap ) }>
            { children }
        </div>
    );
}

export { GridList };