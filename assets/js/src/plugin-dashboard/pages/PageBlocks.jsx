/** @jsx jsx */;
import { css, jsx, ThemeProvider, useTheme } from '@emotion/react';
import { useContext } from 'react';
import { EnabledBlocksContext } from '../contexts/GlobalContext.jsx';

import { __ } from '@wordpress/i18n';

import { BlocksCard } from '../components/BlocksCard/BlocksCard.jsx';
import { ProductsCard } from '../components/ProductsCard/ProductsCard.jsx';
import { LinksCard } from '../components/LinksCard/LinksCard.jsx';
import { GridList } from '../components/GridList/GridList.jsx';

const blocksData = athemesBlocksBlocksData || {};
const suggestedProducts = athemesBlocksSuggestedProducts || {};
const quickLinks = athemesBlocksQuickLinks || {};

const styles = (theme) => css`
    display: grid;
    grid-template-columns: minmax(200px, 3fr) minmax(363px, 1fr);
    gap: 24px;
    align-items: flex-start;
    max-width: ${theme.containerMaxWidth}px;
    margin: 0 auto;
`;

const PageBlocks = () => {
    const [enabledBlocks, setEnabledBlocks] = useContext( EnabledBlocksContext );

    return (
        <div className="atb-dashboard__page atb-dashboard__page--blocks" css={ styles }>
            <GridList columns={2} gap={16}>
                { Object.entries( blocksData ).map( ( [ blockId, blockData ] ) => (
                    <BlocksCard 
                        key={ blockId }
                        blockSlug={ blockId }
                        title={ blockData.title }
                        description={ blockData.description }
                        documentation={ blockData.documentation }
                        hasSwitchToggle={true}
                        switchToggleChecked={enabledBlocks.includes( blockId )}
                    />
                ) ) }
            </GridList>

            <GridList columns={1} gap={16} >
                <BlocksCard title={ __( 'Suggested Products', 'athemes-blocks' ) } className="atb-dashboard__blocks-card--suggested-products">
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
                <BlocksCard title={ __( 'Quick Links', 'athemes-blocks' ) } className="atb-dashboard__blocks-card--quick-links">
                    { Object.keys( quickLinks ).map( ( linkId ) => (
                        <LinksCard
                            key={ linkId }
                            title={ quickLinks[ linkId ].title }
                            description={ quickLinks[ linkId ].description }
                            linkUrl={ quickLinks[ linkId ].link_url }
                            linkLabel={ quickLinks[ linkId ].link_label }
                            linkStyle={ quickLinks[ linkId ].link_style }
                            isActive={ quickLinks[ linkId ].is_active }
                        />
                    ) ) }
                </BlocksCard>
            </GridList>
        </div>
    );
}

export { PageBlocks };