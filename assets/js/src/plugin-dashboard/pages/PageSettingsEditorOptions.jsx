/** @jsx jsx */;
import { css, jsx, ThemeProvider, useTheme } from '@emotion/react';
import { __ } from '@wordpress/i18n';
import { __experimentalNumberControl as NumberControl, ToggleControl } from '@wordpress/components';

import { Navigation } from '../components/Navigation/Navigation.jsx';

import { GridList } from '../components/GridList/GridList.jsx';
import { BlocksCard } from '../components/BlocksCard/BlocksCard.jsx';
import { ProductsCard } from '../components/ProductsCard/ProductsCard.jsx';
import { LinksCard } from '../components/LinksCard/LinksCard.jsx';

const suggestedProducts = athemesBlocksSuggestedProducts || {};
const quickLinks = athemesBlocksQuickLinks || {};

const styles = (theme) => css`
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 16px;
    align-items: flex-start;
    max-width: ${theme.containerMaxWidth}px;
    margin: 0 auto;
`;

const PageSettingsEditorOptions = () => {
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
                                    <NumberControl
                                        __next40pxDefaultSize
                                        label="Value"
                                        onChange={() => {}}
                                        value="0"
                                    />
                                </div>
                            </div>
                            <div className="atb-dashboard__blocks-setting">
                                <div>
                                    <label>{ __( 'Container Padding', 'athemes-blocks' ) }</label>
                                    <p>{ __( 'Set the default container padding for the Container block.', 'athemes-blocks' ) }</p>
                                </div>
                                <div>
                                    <ToggleControl
                                        checked={ false }
                                        onChange={ () => {} }
                                    />
                                </div>
                            </div>
                            <div className="atb-dashboard__blocks-setting">
                                <div>
                                    <label>{ __( 'Container Items Gap', 'athemes-blocks' ) }</label>
                                    <p>{ __( 'Set the default container padding for the Container block.', 'athemes-blocks' ) }</p>
                                </div>
                                <div>
                                    <ToggleControl
                                        checked={ false }
                                        onChange={ () => {} }
                                    />
                                </div>
                            </div>
                        </BlocksCard>
                    </GridList>
                </BlocksCard>
            </GridList>

            <GridList columns={1} gap={16} >
                <BlocksCard title={ __( 'Suggested Products', 'athemes-blocks' ) }>
                    { Object.keys( suggestedProducts ).map( ( productId ) => (
                        <ProductsCard
                            key={ productId }
                            image={ suggestedProducts[ productId ].image }
                            title={ suggestedProducts[ productId ].title }
                            pluginSlug={ suggestedProducts[ productId ].plugin_slug }
                            pluginStatus={ suggestedProducts[ productId ].plugin_status }
                        />
                    ) ) }
                </BlocksCard>
                <BlocksCard title={ __( 'Quick Links', 'athemes-blocks' ) }>
                    { Object.keys( quickLinks ).map( ( linkId ) => (
                        <LinksCard
                            key={ linkId }
                            title={ quickLinks[ linkId ].title }
                            linkUrl={ quickLinks[ linkId ].link_url }
                            linkLabel={ quickLinks[ linkId ].link_label }
                            isActive={ quickLinks[ linkId ].is_active }
                        />
                    ) ) }
                </BlocksCard>
            </GridList>
        </div>
    );
}

export { PageSettingsEditorOptions };