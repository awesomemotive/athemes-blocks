import { useState, createContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const PageContext = createContext();
export const SnackBarContext = createContext();
export const EnabledBlocksContext = createContext();
export const SettingsContext = createContext();

// A custom hook that builds on useLocation to parse
// the query string for you.
const useQuery = () => {
	const { search } = useLocation();

	return useMemo(() => new URLSearchParams(search), [search]);
}

export const GlobalContextProvider = ({ children }) => {
	const query = useQuery();
	const [activePage, setActivePage] = useState(query.get('path'));
	
	// Set default activeSection to 'editor-options' when on settings page with no section specified.
	const getDefaultActiveSection = () => {
		const section = query.get('section');
		const path = query.get('path');
		
		// If we're on the settings page and no section is specified, default to 'editor-options'.
		if (path === 'settings' && !section) {
			return 'editor-options';
		}
		
		return section;
	};
	
	const [activeSection, setActiveSection] = useState(getDefaultActiveSection());
	const [displaySnackBar, setDisplaySnackBar] = useState(false);
	const [enabledBlocks, setEnabledBlocks] = useState( athemesBlocksEnabledBlocks || [] );
	const [settings, setSettings] = useState( athemesBlocksDashboardSettings || {} );
	
	return (
		<PageContext.Provider value={[activePage, setActivePage, activeSection, setActiveSection]}>
			<SnackBarContext.Provider value={[displaySnackBar, setDisplaySnackBar]}>
				<EnabledBlocksContext.Provider value={[enabledBlocks, setEnabledBlocks]}>
					<SettingsContext.Provider value={[settings, setSettings]}>
						{children}
					</SettingsContext.Provider>
				</EnabledBlocksContext.Provider>
			</SnackBarContext.Provider>
		</PageContext.Provider>
	);
}