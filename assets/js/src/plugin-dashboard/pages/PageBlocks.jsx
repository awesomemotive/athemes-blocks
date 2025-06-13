/** @jsx jsx */;
import { css, jsx, ThemeProvider, useTheme } from '@emotion/react';
import { __ } from '@wordpress/i18n';

import { BlocksCard } from '../components/BlocksCard/BlocksCard.jsx';
import { ProductsCard } from '../components/ProductsCard/ProductsCard.jsx';
import { LinksCard } from '../components/LinksCard/LinksCard.jsx';
import { GridList } from '../components/GridList/GridList.jsx';
import { CustomIcon } from '../icons/icons.jsx';

const enabledBlocks = athemesBlocksEnabledBlocks || {};
const blocksData = athemesBlocksBlocksData || {};
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

const PageBlocks = () => {
    return (
        <div className="atb-dashboard__page atb-dashboard__page--blocks" css={ styles }>
            <GridList
                columns={2}
                gap={16}
            >
                { Object.entries( blocksData ).map( ( [ blockId, blockData ] ) => (
                    <BlocksCard 
                        key={ blockId }
                        title={ blockData.title }
                        hasSwitchToggle={true}
                        switchToggleChecked={enabledBlocks.includes( blockId )}
                    >
                        { blockData.description }
                        <a href={ blockData.documentation } target="_blank">
                            <CustomIcon icon="docs" />
                        </a>
                    </BlocksCard>
                ) ) }
            </GridList>

            <GridList
                columns={1}
                gap={16}
            >
                <BlocksCard
                    title={ __( 'Suggested Products', 'athemes-blocks' ) }
                >
                    { Object.keys( suggestedProducts ).map( ( productId ) => (
                        <ProductsCard
                            key={ productId }
                        >
                            <img src={ suggestedProducts[ productId ].image } width={40} height={40} alt={ suggestedProducts[ productId ].title } />
                            { suggestedProducts[ productId ].title }
                        </ProductsCard>
                    ) ) }
                </BlocksCard>
                <BlocksCard
                    title={ __( 'Quick Links', 'athemes-blocks' ) }
                >
                    { Object.keys( quickLinks ).map( ( linkId ) => (
                        <LinksCard
                            key={ linkId }
                            title={ quickLinks[ linkId ].title }
                            isActive={ quickLinks[ linkId ].is_active }
                        >
                            { quickLinks[ linkId ].description }
                            <a href={ quickLinks[ linkId ].link_url } target="_blank">
                                { quickLinks[ linkId ].link_label }
                            </a>
                        </LinksCard>
                    ) ) }
                </BlocksCard>
            </GridList>
        </div>
    );
}

export { PageBlocks };