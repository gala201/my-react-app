import { Button, FormControlLabel, FormGroup, Switch, TextField } from "@mui/material"
import { width } from "@mui/system"
import { useContext, useEffect } from "react"
import { useState } from "react"
import MovieArticle from "../items/MovieArticle"
import { v4 as uuidv4 } from 'uuid';
import { MoviesContext } from "../../App"



function Add() {


    const [movie, setMovie] = useState({
        name: "",
        year: "",
        details: "",
        favorite: false,
        id: uuidv4(),
        isWatched: false,
        rating: null
    })

    const { myMovies, setMyMovies } = useContext(MoviesContext)

    const updateMovie = (e) => {
        const value = e.target.value
        const name = e.target.name

        setMovie(previous => ({
            ...previous, [name]: value
        }))


    }

    const handleCheckbox = () => {


        setMovie(previous => ({
            ...previous, favorite: !previous.favorite
        }))


    }




    const handleAdd = () => {

        setMovie(previous => ({
            ...previous, id: uuidv4()
        }))

        setMyMovies(previous => [
            ...previous, movie
        ])


    }

    useEffect(() => {
        console.log(myMovies);
    }, [myMovies])





    return (
        <>
            <h1>Add movie</h1>

            <TextField id="name" label="Movie Name" variant="standard" value={movie.name} name="name" onChange={(e) => updateMovie(e)} />
            <br />
            <TextField id="standard-basic" label="Year" variant="standard" onChange={(e) => updateMovie(e)} value={movie.year} name="year" />
            <br /> <br />

            <label >Description:</label> <br />
            <textarea id="details" cols="30" rows="10" value={movie.details} name="details" onChange={(e) => updateMovie(e)}></textarea><br />

            <label htmlFor="">Is Favorite
                <input type="checkbox"
                    onChange={handleCheckbox}
                    checked={movie.favorite} />
            </label>
            <br />
            <Button variant="contained"
                onClick={handleAdd}>Add Movie</Button>

            <hr />
            {
                myMovies?.map((v, i) => {
                    return (
                        <>
                            <MovieArticle id={v.id} movieName={v.name} year={v.year} isWatched={v.isWatched} isFavorite={v.isFavorite} />


                        </>

                    )
                })
            }



        </>
    )
}

export default Add