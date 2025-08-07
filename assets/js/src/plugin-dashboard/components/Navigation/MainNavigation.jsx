/** @jsx jsx */;
import { css, jsx, useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { PageContext } from '../../contexts/GlobalContext.jsx';

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

    .atb-dashboard__navigation {
        position: relative;
        z-index: 1;

        ul {
            display: flex;
            padding: 0;
            margin: 0;

            li {
                list-style: none;
                margin: 0;

                a {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: ${theme.fontSize.menuItem};
                    line-height: ${theme.lineHeight.menuItem};
                    padding: 19px 21px;
                    color: ${theme.colors.textColorDefault};
                    background-color: none;
                    border-bottom-width: 2px;
                    border-bottom-style: solid;
                    border-bottom-color: transparent;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    font-weight: 500;
                }

                &.active,
                &:hover,
                &:focus,
                &:active {
                    a {
                        color: ${theme.colors.textColorDark};
                    }

                    .atb-dashboard__navigation-icon {
                        svg {
                            path {
                                fill: ${theme.colors.primary};
                            }
                        }
                    }
                }

                &.active {
                    a {
                        border-bottom-color: ${theme.colors.primary};
                    }
                }
            }
        }

        .atb-dashboard__navigation-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
        }
    }
`;

const MainNavigation = ( props ) => {
    const { links } = props;
    const theme = useTheme();
    const [ activePage, setActivePage, activeSection, setActiveSection ] = useContext( PageContext );
    
    return (
        <div className="atb-dashboard__main-navigation" css={ styles(theme) }>
            <nav className={ `atb-dashboard__navigation` }>
                <ul>
                    { links.map( ( link ) => (
                        <li key={ `${link.path}-${link.title}` } className={ activePage === link.path ? 'active' : '' }>
                            <Link 
                                to={ `?page=at-blocks&path=${ link.path }${ link.section ? `&section=${ link.section }` : '' }` }
                                onClick={ () => { 
                                    setActivePage( link.path );
                                    if ( link.section ) {
                                        setActiveSection( link.section );
                                    }
                                } }
                            >
                                {
                                    link.icon && (
                                        <span className="atb-dashboard__navigation-icon">
                                            { link.icon }
                                        </span>
                                    )
                                }
                                { link.title }
                            </Link>
                        </li>
                    ) ) }
                </ul>
            </nav>
        </div>
    );
}

export { MainNavigation };