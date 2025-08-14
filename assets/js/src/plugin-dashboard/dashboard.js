import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from './contexts/GlobalContext.jsx';
import { App } from './App.jsx';

const rootElement = document.getElementById( 'at-blocks-root' );
const basename = window.location.pathname;
if ( rootElement ) {
	createRoot( rootElement ).render( 
		<BrowserRouter basename={ basename }>
			<GlobalContextProvider>
				<App />
			</GlobalContextProvider>
		</BrowserRouter>
	);
}