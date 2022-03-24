import MovieArticle from "../items/MovieArticle"

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { MoviesContext } from "../../App"
import { useContext, useEffect } from "react"

function Index() {

    const { myMovies, setMyMovies } = useContext(MoviesContext)

    return (
        <Grid

            container
            width={768}
            spacing={2}
            display="flex"
            margin="auto"
        >


            {
                myMovies?.map(v => {
                    return (
                        <Grid item xs>
                            <MovieArticle id={v.id} movieName={v.name} year={v.year} isWatched={v.isWatched} isFavorite={v.isFavorite} />
                        </Grid>
                    )
                })
            }



        </Grid>
    )
}

export default Index