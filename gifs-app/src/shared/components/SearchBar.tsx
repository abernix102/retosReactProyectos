import { useEffect, useState } from "react";

interface Props {
    placeholder?: string;
    onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = "buscar", onQuery }: Props) => {
    const [query, setQuery] = useState("");

    useEffect(() => {
        const cleanQuery = query.trim();
        if (cleanQuery.length === 0) return;
        const timeOutId = setTimeout(() => {
           onQuery(cleanQuery.toLowerCase());
        }, 700);

        return () => {
            clearTimeout(timeOutId);
        };
    }, [query, onQuery]);


    const handlerSearch = () => {
       const cleanQuery = query.trim().toLowerCase();      
        if (cleanQuery.length > 0) {
            onQuery(cleanQuery); 
            setQuery(''); 
           }
    };

    const handlerKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handlerSearch();
        }
    };

    return (
        <div className="search-container">
            <input
                onKeyDown={handlerKeyDown}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                placeholder={placeholder}
            />
            <button onClick={handlerSearch}>Buscar</button>
        </div>
    );
};