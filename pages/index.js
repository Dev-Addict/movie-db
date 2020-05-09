import {useState, useEffect} from 'react';

import Sidebar from "../components/Sidebar";
import Carousel from "../components/Carousel";
import MovieList from "../components/MovieList";
import {getMovies} from "../actions";

const Home = (props) => {
    const {images} = props;

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar appName="Movie DB"/>
                    </div>
                    <div className="col-lg-9">
                        <Carousel images={images}/>
                        <div className="row">
                            <MovieList movies={props.movies}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Home.getInitialProps = () => {
    const movies = getMovies();
    const images = movies.map(({id, cover, name}) => ({
        id: `image-${id}`,
        image: cover,
        name
    }));
    return {
        movies,
        images
    };
};

export default Home;