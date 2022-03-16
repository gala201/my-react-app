import ArticleImage from "./ArticleImage";
import ArticleTitle from "./ArticleTitle";
import Heart from "./HeartRed"
import { ThemeContext } from "../../App";
import { useContext } from "react";


export default function MovieArticle(props) {



    const theme = useContext(ThemeContext)
    console.log(theme);

    const darkStyle = {
        backgroundColor: "black",
        color: "white"
    }

    return (
        <div className="movie-article" style={theme ? darkStyle : {}}>
            <ArticleImage />
            <Heart />
            <ArticleTitle movieName={props.movieName} />
            <div>{props.year}</div>
            {
                props.isWatched !== undefined &&
                    props.isWatched ?
                    <span>Je pogledao</span>
                    :
                    <span>Nije pogledao</span>
            }

        </div>
    )
}