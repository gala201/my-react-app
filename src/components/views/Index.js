import MovieArticle from "../items/MovieArticle"

function Index() {

    const moviesArray = [
        {
            name: "LOTR",
            year: 2000
        },
        {
            name: "Snatch",
            year: 1997
        },
        {
            name: "Lock, Stock",
            year: 1991
        },
        {
            name: "Django",
            year: 2005
        }
    ]

    return (
        <div className="movies">
            <MovieArticle movieName="Batman" year="2020" />
            <MovieArticle movieName="Superman" year="2010" />
            <MovieArticle movieName="Snatch" year="2000" />

            <MovieArticle movieName={moviesArray[0].name} year={moviesArray[0].year} />
            <MovieArticle movieName={moviesArray[1].name} year={moviesArray[1].year} />
            <MovieArticle movieName={moviesArray[2].name} year={moviesArray[2].year} />
            <MovieArticle movieName={moviesArray[3].name} year={moviesArray[3].year} />


        </div>
    )
}

export default Index