/** @jsx jsx */;
import { css, jsx, ThemeProvider, useTheme } from '@emotion/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../contexts/GlobalContext.jsx';
import { __ } from '@wordpress/i18n';

const styles = () => css`

`;

const Navigation = ( props ) => {
    const { links } = props;
    const [ activePage, setActivePage ] = useContext( GlobalContext );
    
    return (
        <nav className="atb-dashboard__navigation" css={ styles }>
            <ul>
                { links.map( ( link ) => (
                    <li key={ `${link.path}-${link.title}` }>
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