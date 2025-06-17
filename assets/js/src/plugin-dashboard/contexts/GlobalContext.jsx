import { useState, createContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const GlobalContext = createContext();

// A custom hook that builds on useLocation to parse
// the query string for you.
const useQuery = () => {
	const { search } = useLocation();

	return useMemo(() => new URLSearchParams(search), [search]);
}

export const GlobalContextProvider = ({ children }) => {
    const query = useQuery();

    const [ activePage, setActivePage ] = useState( query.get('path') );

    return (
        <GlobalContext.Provider value={ [ activePage, setActivePage ] }> 
            { children }
        </GlobalContext.Provider>
    );
}

export default GlobalContext;