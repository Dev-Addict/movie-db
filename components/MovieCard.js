import Link from 'next/link';

import Rating from "./Rating";

const MovieCard = (props) => {
    const {name, description, cover, rating, id} = props.movie;

    return (
        <Link href={`/movies/${id}`}>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a><img className="card-img-top" src={cover} alt={name}/></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a>{name}</a>
                        </h4>
                        <p className="card-text">{`${description.substr(0, 100)}...`}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"><Rating raiting={Math.floor(rating)}/></small>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;