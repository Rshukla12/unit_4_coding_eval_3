export const saveData = ( key, data )  => {
    try {
        data = JSON.stringify( data );
        localStorage.setItem( key, data );
    } catch {
        return -1;
    }
};

export const loadData = ( key )  => {
    try {
        const data = localStorage.getItem(key);
        return JSON.parse( data );
    } catch {
        return null;
    }
};