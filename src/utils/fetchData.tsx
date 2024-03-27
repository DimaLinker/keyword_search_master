import { ApiData } from '../types/ApiData';

export const fetchData = async (query: string): Promise<ApiData[]> => {
    const url = `https://seo-keyword-research-tool.p.rapidapi.com/${query}?country=de`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ea85231b23mshe4ed67bd5c8719ap11539ejsn4b316aba3b5a',
            'X-RapidAPI-Host': 'seo-keyword-research-tool.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data: ApiData[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};