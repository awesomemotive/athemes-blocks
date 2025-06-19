/** @jsx jsx */;
import { css, jsx, ThemeProvider, useTheme } from '@emotion/react';
import { __ } from '@wordpress/i18n';
import { __experimentalNumberControl as NumberControl, ToggleControl } from '@wordpress/components';
import { useContext } from 'react';

import { SnackBarContext } from '../contexts/GlobalContext.jsx';

import { Setting } from '../components/Setting/Setting.jsx';

import { SettingFieldNumber } from '../components/SettingFieldNumber/SettingFieldNumber.jsx';
import { saveSettingValueDebounced, getSettingValueFromDatabase } from '../utils/settings.jsx';

const PageSettingsEditorOptions = () => {
    const [ displaySnackBar, setDisplaySnackBar ] = useContext( SnackBarContext );

    return (
        <>
            <Setting
                label={ __( 'Default Content Width', 'athemes-blocks' ) }
                description={ __( 'Set the default content width for the editor.', 'athemes-blocks' ) }
            >
                <SettingFieldNumber 
                    value={parseInt( getSettingValueFromDatabase( 'editor_options', 'container_content_width' ) )}
                    min={0}
                    max={2000}
                    onChange={(value) => {
                        saveSettingValueDebounced( 
                            'editor_options', 
                            'container_content_width', 
                            value,
                            setDisplaySnackBar
                        );
                    }}
                />
            </Setting>
            <Setting
                label={ __( 'Container Columns Gap', 'athemes-blocks' ) }
                description={ __( 'Set the default container columns gap for the Container block.', 'athemes-blocks' ) }
            >
                <NumberControl
                    __next40pxDefaultSize
                    min={0}
                    max={200}
                    value={parseInt( getSettingValueFromDatabase( 'editor_options', 'container_columns_gap' ) )}
                    onChange={(value) => {
                        saveSettingValueDebounced( 
                            'editor_options', 
                            'container_columns_gap', 
                            value,
                            setDisplaySnackBar
                        );
                    }}
                />
            </Setting>
            <Setting
                label={ __( 'Container Rows Gap', 'athemes-blocks' ) }
                description={ __( 'Set the default container rows gap for the Container block.', 'athemes-blocks' ) }
            >
                <NumberControl
                    __next40pxDefaultSize
                    min={0}
                    max={200}
                    value={parseInt( getSettingValueFromDatabase( 'editor_options', 'container_rows_gap' ) )}
                    onChange={(value) => {
                        saveSettingValueDebounced( 
                            'editor_options', 
                            'container_rows_gap', 
                            value,
                            setDisplaySnackBar
                        );
                    }}
                />
            </Setting>
        </>
    );
}

export { PageSettingsEditorOptions };