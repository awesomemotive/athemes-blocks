/** @jsx jsx */;
import { jsx } from '@emotion/react';
import { useContext } from 'react';

import { __ } from '@wordpress/i18n';

import { saveSettingValueDebounced } from '../utils/settings.jsx';

import { Setting } from '../components/Setting/Setting.jsx';
import { SettingFieldToggle } from '../components/SettingFieldToggle/SettingFieldToggle.jsx';

import { SnackBarContext, SettingsContext } from '../contexts/GlobalContext.jsx';

const PageSettingsPerformance = () => {
    const [ displaySnackBar, setDisplaySnackBar ] = useContext( SnackBarContext );
    const [ settings, setSettings ] = useContext( SettingsContext );

    return (
        <Setting
            label={ __( 'Load Google Fonts Locally', 'athemes-blocks' ) }
            description={ __( 'Load Google Fonts Locally', 'athemes-blocks' ) }
        >
            <SettingFieldToggle
                value={ settings.performance.load_google_fonts_locally }
                onChange={(value) => {
                    saveSettingValueDebounced( 
                        'performance', 
                        'load_google_fonts_locally', 
                        value,
                        setDisplaySnackBar,
                        setSettings
                    );
                }}
            />
        </Setting>
    );
}

export { PageSettingsPerformance };