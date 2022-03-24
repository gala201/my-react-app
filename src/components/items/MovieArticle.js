import ArticleImage from "./ArticleImage";
import ArticleTitle from "./ArticleTitle";
import Heart from "./HeartRed"
import { ThemeContext } from "../../App";
import { useContext } from "react";
import { Avatar, Card, CardHeader } from "@mui/material";
import { styled } from '@mui/material/styles';


import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { MoviesContext } from "../../App";



export default function MovieArticle({ isWatched, id, movieName, year, poster }) {


    const { myMovies, setMyMovies } = useContext(MoviesContext)
    const handleDelete = (id) => {
        setMyMovies(myMovies.filter(v => v.id !== id))
    }

    /*     const handleWatched = (id) => {
    
            const helperArray = [...myMovies]
            const referentObject = helperArray.find(v => v.id === id)
    
            referentObject.isWatched = !referentObject.isWatched
    
            setMyMovies(helperArray)
        } */

    return (
        /*         <div className="movie-article" style={theme ? darkStyle : {}}>
                    <ArticleImage />
                    <Heart />
                    <ArticleTitle id={id} movieName={movieName} />
                    <div>{year}</div>
                    {
                        isWatched !== undefined &&
                            isWatched ?
                            <span>Je pogledao</span>
                            :
                            <span>Nije pogledao</span>
                    }
        
                </div> */

        <Card sx={{ maxWidth: 345 }} sx={{ maxHeight: 500 }} style={{ height: "100%" }}>
            <button onClick={() => handleDelete(id)}>X</button>
            {
                !isWatched && <button>Oznaci kao pogledano</button>
            }

            <CardHeader
                avatar={

                    <Heart />

                }

                title={<ArticleTitle id={id} movieName={movieName} />} />
            <CardMedia
                component="img"
                width="100%"
                src="../../assets/movieIcon.svg"
                alt=""

            />
            <ArticleImage poster={poster} />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <div>{year}</div>
                    {
                        isWatched !== undefined &&
                            isWatched ?
                            <span>Je pogledao</span>
                            :
                            <span>Nije pogledao</span>
                    }
                </Typography>
            </CardContent>


        </Card >
    )
}