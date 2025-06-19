/** @jsx jsx */;
import { css, jsx, ThemeProvider, useTheme } from '@emotion/react';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { PagesRouter } from './router/PagesRouter.jsx';

import theme from './theme/default.js';

import { __ } from '@wordpress/i18n';

import { styles } from './app-styles.jsx';

import { SettingsSavedMessages } from './components/SettingsSavedMessages/SettingsSavedMessages.jsx';
import { TopBar } from './components/TopBar/TopBar.jsx';
import { MainNavigation } from './components/Navigation/MainNavigation.jsx';

const useQuery = () => {
	const { search } = useLocation();

	return useMemo(() => new URLSearchParams(search), [search]);
}

export function App() {
	const query = useQuery();

	return (
		<ThemeProvider theme={ theme }>
			<div className="atb-dashboard" css={ styles }>
				<TopBar /> 
				
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