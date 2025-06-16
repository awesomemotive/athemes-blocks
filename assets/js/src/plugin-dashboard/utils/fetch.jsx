const fetchData = async (endpoint, params = {}, method = 'GET') => {
    const url = `${ wpApiSettings.root }athemes-blocks/v1/${ endpoint }`;
    const paramsString = new URLSearchParams( params ).toString();

    try {
        const reponse = await fetch( `${url}&${paramsString}`, { method } );
        const result = await reponse.json();

        return result;
    } catch (error) {
        console.error( "Error fetching data:", error );
    }
}

export {
    fetchData,
}