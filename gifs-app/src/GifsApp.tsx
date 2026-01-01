import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.,mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {
  return (
    <>
    <CustomHeader title="Buscador de gifs" description="Descubre y comparte el gif perfecto"/>
    <SearchBar placeholder="Buscador de gifs"/>
    <PreviousSearches />
    <GifList gifs={mockGifs}/>
    </>
)
}
