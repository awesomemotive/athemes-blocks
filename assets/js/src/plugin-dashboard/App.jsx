/** @jsx jsx */;
import { css, jsx, ThemeProvider, useTheme } from '@emotion/react';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { PagesRouter } from './router/PagesRouter.jsx';

import theme from './theme/default.js';

import { __ } from '@wordpress/i18n';

import { SettingsSavedMessages } from './components/SettingsSavedMessages/SettingsSavedMessages.jsx';
import { TopBar } from './components/TopBar/TopBar.jsx';
import { MainNavigation } from './components/Navigation/MainNavigation.jsx';
import { Hero } from './components/Hero/Hero.jsx';

const dashboardGeneralData = athemesBlocksGeneralData || {};

const styles = (theme) => css`
    position: relative;
    width: 100%;

    * {
        box-sizing: border-box;
    }

    a {
        &:focus {
            outline: none;
            box-shadow: none;
        }
    }

    .atb-dashboard__card {
        background-color: ${theme.colors.backgroundColorLight};
        border-radius: 10px;
        padding: 16px;
    }

    .atb-dashboard__pages-wrapper {
		position: relative;
        max-width: ${theme.containerMaxWidth}px;
        margin: 0 auto;
		z-index: 1;
    }
`;

const useQuery = () => {
	const { search } = useLocation();

	return useMemo(() => new URLSearchParams(search), [search]);
}

export function App() {
	const query = useQuery();

	return (
		<ThemeProvider theme={ theme }>
			<div className="atb-dashboard" css={ styles(theme) }>
				<TopBar 
					logo={ dashboardGeneralData.topbar.logo }
					version={ dashboardGeneralData.topbar.version }
					websiteUrl={ dashboardGeneralData.topbar.website_url }
				/> 
				<Hero 
					title={ dashboardGeneralData.hero.title }
					description={ dashboardGeneralData.hero.description }
					buttonLabel={ dashboardGeneralData.hero.button_label }
					buttonUrl={ dashboardGeneralData.hero.button_url }
					image={ dashboardGeneralData.hero.image }
				/>
				<div className="atb-dashboard__pages-wrapper atb-dashboard__card">
					<MainNavigation 
						links={ [
							{ title: __( 'Blocks' ), id: 'blocks', path: 'blocks' },
							{ title: __( 'Settings' ), id: 'settings', path: 'settings', section: 'editor-options' },
						] }
					/>
					<PagesRouter page={query.get('path')} />
				</div>
				
				<SettingsSavedMessages />
			</div>
		</ThemeProvider>
	);
};