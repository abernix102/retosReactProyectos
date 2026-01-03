import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { Gif, mockGifs } from "./mock-data/gifs.,mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"


export const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [previousTerms, setPreviousTerms] = useState(["dragon ball z"])

  const handlerTermClicked = (term: string) => {
    console.log({term})
  }

  const handlerSearch = async  (query: string = '') => {
    if (previousTerms.includes(query)) return;
    setPreviousTerms([query, ...previousTerms].slice(0, 8))
     const gif = await getGifsByQuery(query);
     setGifs(gif)
  }
  return (
    <>
    <CustomHeader title="Buscador de gifs" description="Descubre y comparte el gif perfecto"/>
    <SearchBar onQuery={handlerSearch} placeholder="Buscador de gifs"/>
    <PreviousSearches searches={previousTerms} onLabelClicked={handlerTermClicked}/>
    <GifList gifs={gifs}/>
    </>
)
}
