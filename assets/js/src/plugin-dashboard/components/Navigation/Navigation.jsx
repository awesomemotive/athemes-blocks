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
            }

            &.active {
                a {
                    border-bottom-color: ${theme.colors.primary};
                }
            }
        }
    }


    `;

const Navigation = ( props ) => {
    const { links } = props;
    const theme = useTheme();
    const [ activePage, setActivePage ] = useContext( PageContext );
    
    return (
        <nav className="atb-dashboard__navigation atb-dashboard__navigation--style-1" css={ styles(theme) }>
            <ul>
                { links.map( ( link ) => (
                    <li key={ `${link.path}-${link.title}` } className={ activePage === link.path ? 'active' : '' }>
                        <Link 
                            to={ `?page=at-blocks&path=${ link.path }` }
                            onClick={ () => { 
                                setActivePage( link.path ); 
                            } }
                        >
                            { link.title }
                        </Link>
                    </li>
                ) ) }
            </ul>
        </nav>
    );
}

export { Navigation };