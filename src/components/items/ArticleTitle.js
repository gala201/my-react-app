function ArticleTitle(props) {
    return (
        <h2 className="movie-name">{props.movieName === undefined ? "Hangover" : props.movieName}</h2>
    )
}

export default ArticleTitle