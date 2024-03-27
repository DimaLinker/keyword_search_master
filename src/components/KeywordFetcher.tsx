import React, { useState } from 'react';
import { ApiData } from '../types/ApiData';
import { fetchData } from '../utils/fetchData';
import LoadingSpinner from './LoadingSpinner';
import SearchForm from './SearchForm';

const KeywordFetcher: React.FC = () => {
    const [data, setData] = useState<ApiData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSearch = async (query: string) => {
        setIsLoading(true);
        const data = await fetchData(query);
        setData(data);
        setIsLoading(false);
    };

    return (
        <div>
            <SearchForm onSubmit={handleSearch} />
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <table>
                    <thead>
                    <tr>
                        <th>Keyword</th>
                        <th>Volume</th>
                        <th>Avg. CPC</th>
                        <th>Competition</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.keyword}</td>
                            <td>{item.volume}</td>
                            <td>{item.avgCPC}</td>
                            <td>{item.competition}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default KeywordFetcher;