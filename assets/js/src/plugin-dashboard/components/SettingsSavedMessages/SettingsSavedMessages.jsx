/** @jsx jsx */;
import { css, jsx } from '@emotion/react';
import { useContext } from 'react';

import { __ } from '@wordpress/i18n';

import { SnackBarContext } from '../../contexts/GlobalContext.jsx';

import { Snackbar } from '@wordpress/components';

const styles = () => css`
    position: fixed;
    bottom: 20px;
    left: calc( 160px + 20px );
    z-index: 1000;
`;

const SettingsSavedMessages = () => {
    const [displaySnackBar, setDisplaySnackBar] = useContext(SnackBarContext);

    return (
        displaySnackBar ? (
            <Snackbar
                css={ styles }
                className="atb-dashboard__snackbar-list"
                onRemove={() => {
                    setDisplaySnackBar( false );
                }} 
            >
                { __( 'Settings Saved.', 'athemes-blocks' ) }
            </Snackbar>
        ) : null
    );
}

export { SettingsSavedMessages };