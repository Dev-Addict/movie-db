import Sidebar from "../components/Sidebar";
import Carousel from "../components/Carousel";
import MovieList from "../components/MovieList";
import {getMovies, getCategories} from "../actions";

const Home = (props) => {
    const {images, movies, categories} = props;

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar
                            appName="Movie DB"
                            categories={categories}/>
                    </div>
                    <div className="col-lg-9">
                        <Carousel images={images}/>
                        <div className="row">
                            <MovieList movies={movies}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Home.getInitialProps = async () => {
    const movies = await getMovies();
    const images = await movies.map(({id, cover, name}) => ({
        id: `image-${id}`,
        image: cover,
        name
    }));
    const categories = getCategories();
    return {
        movies,
        images,
        categories
    };
};

export default Home;