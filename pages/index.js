import {useState, useEffect} from 'react';

import Sidebar from "../components/Sidebar";
import Carousel from "../components/Carousel";
import MovieList from "../components/MovieList";
import {getMovies} from "../actions";

const Home = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar appName="Movie DB"/>
                    </div>
                    <div className="col-lg-9">
                        <Carousel/>
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
    return {
        movies: getMovies()
    };
};

export default Home;