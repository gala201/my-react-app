import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const MovieDetails = () => {

    const params = useParams()
    const id = params.id

    console.log(params);

    const [result, setResult] = useState({})

    useEffect(() => {



        fetch(`http://www.omdbapi.com/?apikey=6fe1e02&i=${id}`, {
            method: 'GET'
        })


            .then(result => result.json())

            .then(parsedResult => {

                setResult(parsedResult)


            })

    }, [])

    useEffect(() => {
        console.log("mijenjam rezultate");
        console.log(result);


    }, [result])




    return (
        <>
            <h1>Detalji filma</h1>
            <h2>ID filma je: {id}</h2>
            {
                <table>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>{result.Title}</td>
                        </tr>
                        <tr>
                            <td>Year</td>
                            <td>{result.Year}</td>
                        </tr>
                        <tr>
                            <td>Genre</td>
                            <td>{result.Genre}</td>
                        </tr>
                        <tr>
                            <td>Runtime</td>
                            <td>{result.Runtime}</td>
                        </tr>
                        <tr>
                            <td>Rating</td>
                            <td>{result.imdbRating}</td>
                        </tr>
                    </tbody>
                </table>
            }


        </>
    )
}

export default MovieDetails