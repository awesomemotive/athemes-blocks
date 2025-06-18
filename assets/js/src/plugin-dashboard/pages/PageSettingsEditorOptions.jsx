/** @jsx jsx */;
import { css, jsx, ThemeProvider, useTheme } from '@emotion/react';
import { __ } from '@wordpress/i18n';
import { __experimentalNumberControl as NumberControl, ToggleControl } from '@wordpress/components';
import { useContext } from 'react';

import { SnackBarContext } from '../contexts/GlobalContext.jsx';

import { Navigation } from '../components/Navigation/Navigation.jsx';

import { GridList } from '../components/GridList/GridList.jsx';
import { BlocksCard } from '../components/BlocksCard/BlocksCard.jsx';
import { ProductsCard } from '../components/ProductsCard/ProductsCard.jsx';
import { LinksCard } from '../components/LinksCard/LinksCard.jsx';

import { SettingFieldNumber } from '../components/SettingFieldNumber/SettingFieldNumber.jsx';
import { saveSettingValueDebounced, getSettingValueFromDatabase } from '../utils/settings.jsx';

const suggestedProducts = athemesBlocksSuggestedProducts || {};
const quickLinks = athemesBlocksQuickLinks || {};

const styles = (theme) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    align-items: flex-start;
    max-width: ${theme.containerMaxWidth}px;
    margin: 0 auto;
`;

const PageSettingsEditorOptions = () => {
    const [ displaySnackBar, setDisplaySnackBar ] = useContext( SnackBarContext );

    return (
        <div className="atb-dashboard__page atb-dashboard__page--settings" css={ styles }>
            <GridList columns={1} gap={0}>
                <BlocksCard>
                    <GridList columns={2} gap={16}>
                        <Navigation
                            links={ [
                                { title: __( 'Editor Options', 'athemes-blocks' ), path: 'settings-editor-options' },
                                { title: __( 'Performance', 'athemes-blocks' ), path: 'settings-performance' },
                            ] }
                        />

                        <BlocksCard>
                            <div className="atb-dashboard__blocks-setting">
                                <div>
                                    <label>{ __( 'Default Content Width', 'athemes-blocks' ) }</label>
                                    <p>{ __( 'Set the default content width for the editor.', 'athemes-blocks' ) }</p>
                                </div>
                                <div>
                                    <SettingFieldNumber 
                                        value={parseInt( getSettingValueFromDatabase( 'editor_options', 'content_width' ) )}
                                        onChange={(value) => {
                                            saveSettingValueDebounced( 
                                                'editor_options', 
                                                'content_width', 
                                                value,
                                                setDisplaySnackBar
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="atb-dashboard__blocks-setting">
                                <div>
                                    <label>{ __( 'Container Padding', 'athemes-blocks' ) }</label>
                                    <p>{ __( 'Set the default container padding for the Container block.', 'athemes-blocks' ) }</p>
                                </div>
                                <div>
                                    <NumberControl
                                        __next40pxDefaultSize
                                        label="Value"
                                        value={parseInt( getSettingValueFromDatabase( 'editor_options', 'container_padding' ) )}
                                        onChange={(value) => {
                                            saveSettingValueDebounced( 
                                                'editor_options', 
                                                'container_padding', 
                                                value,
                                                setDisplaySnackBar
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="atb-dashboard__blocks-setting">
                                <div>
                                    <label>{ __( 'Container Items Gap', 'athemes-blocks' ) }</label>
                                    <p>{ __( 'Set the default container padding for the Container block.', 'athemes-blocks' ) }</p>
                                </div>
                                <div>
                                    <NumberControl
                                        __next40pxDefaultSize
                                        label="Value"
                                        value={parseInt( getSettingValueFromDatabase( 'editor_options', 'container_items_gap' ) )}
                                        onChange={(value) => {
                                            saveSettingValueDebounced( 
                                                'editor_options', 
                                                'container_items_gap', 
                                                value,
                                                setDisplaySnackBar
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                        </BlocksCard>
                    </GridList>
                </BlocksCard>
            </GridList>
        </div>
    );
}

export { PageSettingsEditorOptions };