import MovieArticle from "../items/MovieArticle"

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function Index() {

    const moviesArray = [
        {
            name: "LOTR",
            year: 2000,
            id: 98
        },
        {
            name: "Snatch",
            year: 1997,
            id: 45
        },
        {
            name: "Lock, Stock",
            year: 1991,
            id: 22
        },
        {
            name: "Django",
            year: 2005,
            id: 10
        }
    ]

    return (
        <Grid

            container
            width={768}
            spacing={2}
            display="flex"
            margin="auto"
        >





            {
                moviesArray.map(v => {
                    return (
                        <Grid item xs>
                            <MovieArticle key={v.id} id={v.id} movieName={v.name} year={v.year} />
                        </Grid>
                    )
                })
            }




        </Grid>
    )
}

export default Index