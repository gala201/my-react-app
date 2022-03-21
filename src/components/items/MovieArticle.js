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



export default function MovieArticle({ isWatched, id, movieName, year, poster }) {



    const theme = useContext(ThemeContext)
    console.log(theme);

    const darkStyle = {
        backgroundColor: "black",
        color: "white"
    }

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

        <Card sx={{ maxWidth: 345 }} sx={{ maxHeight: 500 }}>
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





        </Card>
    )
}