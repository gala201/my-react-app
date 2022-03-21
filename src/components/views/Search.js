import { useEffect, useState } from "react";
import spinner from "../../assets/spinner.svg"
import MovieArticle from "../items/MovieArticle";

function Search() {



    const [showSpinner, setShowSpinner] = useState(true)
    const [results, setResults] = useState([])

    // input za kljucnu rijec za pretragu, pored napraviti button na koji saljemo request sa kljucnom rijeci

    const [searchInput, setSearchInput] = useState("")


    useEffect(() => {



        fetch(`http://www.omdbapi.com/?apikey=6fe1e02&s=${searchInput}`, {
            method: 'GET'
        })


            .then(result => result.json())

            .then(parsedResult => {



                setTimeout(() => {


                    setShowSpinner(false)

                    setResults(parsedResult.Search)


                }, 2000)


            })

    }, [])


    const handleSearch = () => {

    }




    useEffect(() => {
        console.log("mijenjam rezultate");
        console.log(results);


    }, [results])


    return (
        <>
            <h1>Pretraži</h1>
            <div>
                <input type="search" name="Search" id="Search" placeholder="batman" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
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