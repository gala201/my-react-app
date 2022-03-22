import { useEffect, useState } from "react";
import spinner from "../../assets/spinner.svg"
import MovieArticle from "../items/MovieArticle";

function Search() {



    const [showSpinner, setShowSpinner] = useState(false)
    const [results, setResults] = useState([])

    // input za kljucnu rijec za pretragu, pored napraviti button na koji saljemo request sa kljucnom rijeci

    const [searchInput, setSearchInput] = useState("")




    const handleSearch = () => {
        fetch(`http://www.omdbapi.com/?apikey=6fe1e02&s=${searchInput}`, {
            method: 'GET'
        })


            .then(result => result.json())

            .then(parsedResult => {

                setShowSpinner(true)

                setTimeout(() => {


                    setShowSpinner(false)

                    setResults(parsedResult.Search)


                }, 2000)


            })
    }







    return (
        <>
            <h1>Pretraži</h1>
            <div>
                <input type="search" name="Search" id="Search" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <h1>Rezultati</h1>



            {

                results?.map(v => {
                    return (
                        <MovieArticle poster={v.Poster} id={v.imdbID} movieName={v.Title} year={v.Year} />
                    )
                })
            }


            {
                showSpinner && <img src={spinner} width={120} alt="" />
            }



        </>
    )
}

export default Search