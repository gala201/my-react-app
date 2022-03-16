import MovieArticle from "../items/MovieArticle"

function Favorites() {

    const moviesArray = [
        {
            name: "LOTR",
            year: 2000,
            isWatched: true,
            key: 21
        },
        {
            name: "Snatch",
            year: 1997,
            isWatched: false,
            key: 24
        },
        {
            name: "Lock, Stock",
            year: 1991,
            isWatched: true,
            key: 52
        },
        {
            name: "Django",
            year: 2005,
            isWatched: false,
            key: 98
        }
    ]

    return (
        <div className="movies">


            <MovieArticle movieName={moviesArray[0].name} year={moviesArray[0].year} isWatched={moviesArray[0].isWatched} />

            {
                moviesArray.map((v, i) =>
                    <MovieArticle
                        movieName={v.name}
                        year={v.year}
                        isWatched={v.isWatched}
                        key={i} />)
            }

        </div>
    )

}

export default Favorites