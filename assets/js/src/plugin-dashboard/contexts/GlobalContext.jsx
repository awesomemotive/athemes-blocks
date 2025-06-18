import { useState, createContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const PageContext = createContext();
export const SnackBarContext = createContext();

// A custom hook that builds on useLocation to parse
// the query string for you.
const useQuery = () => {
	const { search } = useLocation();

	return useMemo(() => new URLSearchParams(search), [search]);
}

export const GlobalContextProvider = ({ children }) => {
	const query = useQuery();
	const [activePage, setActivePage] = useState(query.get('path'));
	const [displaySnackBar, setDisplaySnackBar] = useState(false);

	return (
		<PageContext.Provider value={[activePage, setActivePage]}>
			<SnackBarContext.Provider value={[displaySnackBar, setDisplaySnackBar]}>
				{children}
			</SnackBarContext.Provider>
		</PageContext.Provider>
	);
}