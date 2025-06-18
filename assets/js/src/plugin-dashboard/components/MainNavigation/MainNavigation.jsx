/** @jsx jsx */;
import { css, jsx, useTheme } from '@emotion/react';

import { Navigation } from '../Navigation/Navigation.jsx';

const styles = (theme) => css`
    position: relative;
    max-width: ${theme.containerMaxWidth}px;
    margin: 0 auto 24px;

    &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        width: calc(100% + 32px);
        border-bottom: 2px solid ${theme.colors.borderColorGray};
        transform: translate3d(-50%, 0, 0);
        z-index: 0;
    }
`;

const MainNavigation = ( props ) => {
    const { links } = props;
    const theme = useTheme();
    
    return (
        <div className="atb-dashboard__main-navigation" css={ styles(theme) }>
            <Navigation links={ links } />
        </div>
    );
}

export { MainNavigation };