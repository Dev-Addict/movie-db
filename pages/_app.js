import App from 'next/app';

import HeadWrapper from "../components/HeadWrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class MovieApp extends App {
    render() {
        const {Component} = this.props;

        return (
            <div>
                <HeadWrapper/>
                <Navbar/>
                <div className="base-page">
                    <Component/>
                </div>
                <Footer/>
                <style jsx>{`
                    .base-page {
                        padding: 80px;
                    }
                `}
                </style>
            </div>
        );
    }
}

export default MovieApp;