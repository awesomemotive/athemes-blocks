/** @jsx jsx */;
import { css, jsx, ThemeProvider, useTheme } from '@emotion/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PageContext } from '../../contexts/GlobalContext.jsx';
import { __ } from '@wordpress/i18n';

const styles = (theme) => css`
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

    &.atb-dashboard__navigation--style-2 {
        ul {
            flex-direction: column;

            li {
                a {
                    border-bottom: none;
                    padding: 0px 17px;
                    color: ${theme.colors.textColorDark};
                }

                &.active {
                    a {
                        position: relative;

                        &:after {
                            content: '';
                            display: block;
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 4px;
                            height: 100%;
                            background-color: ${theme.colors.primary};
                            border-radius: 0 8px 8px 0;
                        }
                    }
                }

                & + li {
                    margin-top: 10px;
                }
            }
        }
    }
`;

const Navigation = ( props ) => {
    const { links } = props;
    const theme = useTheme();
    const [ activePage, setActivePage, activeSection, setActiveSection ] = useContext( PageContext );
    
    return (
        <nav className={ `atb-dashboard__navigation atb-dashboard__navigation--style-2` } css={ styles(theme) }>
            <ul>
                { links.map( ( link ) => (
                    <li key={ `${link.path}-${link.title}` } className={ activeSection === link.section ? 'active' : '' }>
                        <Link 
                            to={ `?page=at-blocks&path=${ link.path }${ link.section ? `&section=${ link.section }` : '' }` }
                            onClick={ () => { 
                                setActiveSection( link.section );
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
    );
}

export { Navigation };