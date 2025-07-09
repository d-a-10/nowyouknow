import { useEffect, useState } from "react"
import MovieApi from "../../lib/api/movie"
import { MovieResponseType } from "../../lib/utils/movie-type"
import { Spinner } from "../common/loading-spinner";



interface SearchBarProps {
  setMovieResponse: React.Dispatch<React.SetStateAction<MovieResponseType | undefined>>;
}


export default function SearchBar({ setMovieResponse }: SearchBarProps) {
  const [searching, setSearching] = useState(false)

  const handleChange = (e: any) => {
    setSearching(true)

    MovieApi.search(e.target.value).then((response) => {
      console.log(response)
      setMovieResponse(response);
      setSearching(false);
    }).catch((error) => {
      console.error(error);
      setSearching(false);
    });
  }

  return (
    <form className="flex items-center">
      <label htmlFor="simple-search" className="sr-only">Search</label>
      <div className="relative w-full">

        {searching ? (
          <div className=" absolute inset-y-0 left-0 mt-2.5 ml-3">
            <Spinner />
          </div>
        ) : (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
          </div>
        )}

        <input onChange={handleChange} type="text" id="simple-search" className="rounded-lg block w-full pl-10 px-2.5 py-2 text-sm bg-slate-700 placeholder-slate-400 text-white focus:ring-teal-500 focus:border-teal-500" placeholder="Search" required />
      </div>

    </form>
  )
}