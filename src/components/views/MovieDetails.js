import { useParams } from "react-router-dom";

const MovieDetails = () => {

    const params = useParams()
    const id = params.id

    console.log(params);


    return (
        <>
            <h1>Detalji filma</h1>
            <h2>ID filma je: {id}</h2>

        </>
    )
}

export default MovieDetails