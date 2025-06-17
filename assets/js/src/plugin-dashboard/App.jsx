/** @jsx jsx */;
import { css, jsx, ThemeProvider, useTheme } from '@emotion/react';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { PagesRouter } from './router/PagesRouter.jsx';

import theme from './theme/default.js';

import { __ } from '@wordpress/i18n';

import { styles } from './app-styles.jsx';

import { TopBar } from './components/TopBar/TopBar.jsx';

const useQuery = () => {
	const { search } = useLocation();

	return useMemo(() => new URLSearchParams(search), [search]);
}

export function App() {
	const query = useQuery();
	console.log(123123, query.get('path'));
	return (
		<ThemeProvider theme={ theme }>
			<div className="atb-dashboard" css={ styles }>
				<TopBar 
					navigationLinks={ [
						{ title: __( 'Blocks' ), id: 'blocks', path: 'blocks' },
						{ title: __( 'Settings' ), id: 'settings', path: 'settings-editor-options' },
					] }	
				/>
				<PagesRouter page={query.get('path')} />
			</div>
		</ThemeProvider>
	);
};