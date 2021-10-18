import { useEffect, useState } from 'react';

export function UseFetchBooksData(url) {

    async function fetchBooksData() {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    const [request, setRequest] = useState({
        loading: false,
        data: null,      
    });

    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
        });
        fetchBooksData().then((response) => {
            setRequest({
                loading: false,
                data: response,                
            });
        })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,                   
                });
            });
    }, [url]);
   
    return request;
}