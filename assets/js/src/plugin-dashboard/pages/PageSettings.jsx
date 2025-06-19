/** @jsx jsx */;
import { css, jsx } from '@emotion/react';
import { __ } from '@wordpress/i18n';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { CustomIcon } from '../icons/icons.jsx';

import { Navigation } from '../components/Navigation/Navigation.jsx';
import { BlocksCard } from '../components/BlocksCard/BlocksCard.jsx';

import { PageSettingsEditorOptions } from './PageSettingsEditorOptions.jsx';
import { PageSettingsPerformance } from './PageSettingsPerformance.jsx';

const useQuery = () => {
	const { search } = useLocation();

	return useMemo(() => new URLSearchParams(search), [search]);
}

const styles = (theme) => css`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    gap: 20px;
    align-items: flex-start;
    max-width: ${theme.containerMaxWidth}px;
    margin: 0 auto;
`;

const PageSettings = () => {
    const query = useQuery();
    const page = query.get('section');

    return (
        <div className="atb-dashboard__page atb-dashboard__page--settings" css={ styles }>
            <Navigation
                links={ [
                    { title: __( 'Editor Options', 'athemes-blocks' ), path: 'settings', section: 'editor-options', icon: <CustomIcon icon="cog" /> },
                    { title: __( 'Performance', 'athemes-blocks' ), path: 'settings', section: 'performance', icon: <CustomIcon icon="performance" /> },
                ] }
            />
            <BlocksCard className="atb-dashboard__blocks-card--settings">
                { page === 'editor-options' && <PageSettingsEditorOptions /> }
                { page === 'performance' && <PageSettingsPerformance /> }
            </BlocksCard>
        </div>
    );
}

export { PageSettings };