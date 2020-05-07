import Rating from "./Rating";

const MovieCard = (props) => {
    const {name, description, cover, rating} = props.movie;

    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <a href="#"><img className="card-img-top" src={cover} alt={name}/></a>
                <div className="card-body">
                    <h4 className="card-title">
                        <a href="#">{name}</a>
                    </h4>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted"><Rating raiting={Math.floor(rating)}/></small>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;