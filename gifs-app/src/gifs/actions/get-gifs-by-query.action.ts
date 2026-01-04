import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../../mock-data/gifs.,mock";
import { giphyApi } from "../api/giphy.api";


export const getGifsByQuery = async (query: string)  : Promise <Gif[]>=> {
    const response = await giphyApi<GiphyResponse>("/search",{ 
        params : {
            q:query,
            limit:15,
        }
    })
    return response.data.data.map((gif) => (
        {
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url,
            width: Number(gif.images.original.width),
            height: Number(gif.images.original.height)
        }
    ))
}