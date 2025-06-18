/** @jsx jsx */;
import { css, jsx, ThemeProvider, useTheme } from '@emotion/react';
import { useContext } from 'react';

import { __ } from '@wordpress/i18n';

import { getSettingValueFromDatabase, saveSettingValueDebounced } from '../utils/settings.jsx';

import { Navigation } from '../components/Navigation/Navigation.jsx';

import { GridList } from '../components/GridList/GridList.jsx';
import { BlocksCard } from '../components/BlocksCard/BlocksCard.jsx';
import { ProductsCard } from '../components/ProductsCard/ProductsCard.jsx';
import { LinksCard } from '../components/LinksCard/LinksCard.jsx';

import { SettingFieldToggle } from '../components/SettingFieldToggle/SettingFieldToggle.jsx';

import { SnackBarContext } from '../contexts/GlobalContext.jsx';

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

const PageSettingsPerformance = () => {
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
                                    <label>{ __( 'Load Google Fonts Locally', 'athemes-blocks' ) }</label>
                                    <p>{ __( 'Load Google Fonts Locally to improve page load time.', 'athemes-blocks' ) }</p>
                                </div>
                                <div>
                                    <SettingFieldToggle
                                        value={ getSettingValueFromDatabase( 'performance', 'load_google_fonts_locally' ) }
                                        onChange={(value) => {
                                            saveSettingValueDebounced( 
                                                'performance', 
                                                'load_google_fonts_locally', 
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

export { PageSettingsPerformance };