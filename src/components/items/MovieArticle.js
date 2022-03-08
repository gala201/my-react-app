import ArticleImage from "./ArticleImage";
import ArticleTitle from "./ArticleTitle";


export default function MovieArticle(props) {

    console.log(props.movieName);

    return (
        <div className="movie-article">
            <ArticleImage />
            <ArticleTitle movieName={props.movieName} />
            <div>{props.year}</div>
            {props.isWatched !== undefined &&
                props.isWatched ?
                <span>Je pogledao</span>
                :
                <span>Nije pogledao</span>
            }
        </div>
    )
}