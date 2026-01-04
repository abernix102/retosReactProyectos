import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { useGifs } from "./gifs/hooks/useGifs"


export const GifsApp = () => {
 const   {handlerSearch,handlerTermClicked,gifs, previousTerms} = useGifs();
  return (
    <>
    <CustomHeader title="Buscador de gifs" description="Descubre y comparte el gif perfecto"/>
    <SearchBar onQuery={handlerSearch} placeholder="Buscador de gifs"/>
    <PreviousSearches searches={previousTerms} onLabelClicked={handlerTermClicked}/>
    <GifList gifs={gifs}/>
    </>
)
}
 