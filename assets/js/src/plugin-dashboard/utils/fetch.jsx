const fetchData = async (endpoint, params = {}, method = 'GET') => {
    const url = `${ wpApiSettings.root }athemes-blocks/v1/${ endpoint }`;
    const paramsString = new URLSearchParams( params ).toString();
    const separator = url.includes('?') ? '&' : '?';

    try {
        const response = await fetch( `${url}${separator}${paramsString}`, { 
            method,
            credentials: 'same-origin',
            headers: {
                'X-WP-Nonce': wpApiSettings.nonce
            }
        } );
        const result = await response.json();

        return result;
    } catch (error) {
        console.error( "Error fetching data:", error );
    }
}

export {
    fetchData,
}