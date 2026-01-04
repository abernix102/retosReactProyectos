import { useRef, useState } from 'react'
import type { Gif } from '../../mock-data/gifs.,mock'
import { getGifsByQuery } from '../actions/get-gifs-by-query.action'

// const gifsCache: Record<string, Gif[]> = {};


export const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([])
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handlerTermClicked = async (term: string) => {
        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }

        const newGifs = await getGifsByQuery(term);
        setGifs(newGifs);
    }

    const handlerSearch = async (query: string = '') => {
        query = query.trim().toLowerCase();
        if (query.length === 0) return;
        if (previousTerms.includes(query)) return;
        setPreviousTerms([query, ...previousTerms].slice(0, 8))

        const gifs = await getGifsByQuery(query);
        setGifs(gifs);
        gifsCache.current[query] = gifs;



    }


    return {
        //props
        gifs,

        //methods
        handlerSearch,
        handlerTermClicked,
        previousTerms,
    }
}
