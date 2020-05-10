import {useRouter} from "next/router";

import {getMovieById, deleteMovie} from "../../actions";

const Movie = (props) => {
    const router = useRouter();
    const {id} = router.query;

    const {movie} = props;

    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">{movie.name}</h1>
                <p className="lead">{movie.description}</p>
                <hr className="my-4"/>
                <p>{movie.genre}</p>
                <button className="btn btn-danger btn-lg" role="button" onClick={deleteMovie(id)}>DELETE</button>
            </div>
            <p className="desc-text">{movie.longDesc}</p>
            <style jsx>{`
                .desc-text {
                    font-size: 16px;
                }
            `}
            </style>
        </div>
    );
};

Movie.getInitialProps = async (context) => {
    const movie = await getMovieById(context.query.id);
    return {
        movie
    };
};

export default Movie;