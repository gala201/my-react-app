import { Link } from "react-router-dom"

function ArticleTitle(props) {
    return (
        <Link to={`/detalji/${props.id}`}>
            <h2 className="movie-name">{props.movieName === undefined ? "Hangover" : props.movieName}</h2>
        </Link>
    )
}

export default ArticleTitle