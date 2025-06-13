/** @jsx jsx */;
import { css, jsx, ThemeProvider, useTheme } from '@emotion/react';
import {  } from '@emotion/react';
import theme from './theme/default.js';

import { __ } from '@wordpress/i18n';
import { PageBlocks } from './pages/PageBlocks.jsx';

import { styles } from './app-styles.jsx';

// Components.
import { TopBar } from './components/TopBar/TopBar.jsx';

export function App() {
	return (
		<ThemeProvider theme={ theme }>
			<div className="atb-dashboard" css={ styles }>
				<TopBar />
				<PageBlocks />
			</div>
		</ThemeProvider>
	);
};