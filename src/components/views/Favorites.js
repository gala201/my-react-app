import MovieArticle from "../items/MovieArticle"

function Favorites() {

    const moviesArray = [
        {
            name: "LOTR",
            year: 2000,
            isWatched: true
        },
        {
            name: "Snatch",
            year: 1997,
            isWatched: false
        },
        {
            name: "Lock, Stock",
            year: 1991,
            isWatched: true
        },
        {
            name: "Django",
            year: 2005,
            isWatched: false
        }
    ]

    return (
        <div className="movies">


            <MovieArticle movieName={moviesArray[0].name} year={moviesArray[0].year} isWatched={moviesArray[0].isWatched} />
            <MovieArticle movieName={moviesArray[1].name} year={moviesArray[1].year} isWatched={moviesArray[1].isWatched} />
            <MovieArticle movieName={moviesArray[2].name} year={moviesArray[2].year} isWatched={moviesArray[2].isWatched} />
            <MovieArticle movieName={moviesArray[3].name} year={moviesArray[3].year} isWatched={moviesArray[3].isWatched} />


        </div>
    )

}

export default Favorites