import App from 'next/app';

import HeadWrapper from "../components/HeadWrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class MovieApp extends App {
    static async getInitialProps(appContext) {
        const appProps =  await App.getInitialProps(appContext);
        return {...appProps};
    }

    render() {
        const {Component, pageProps} = this.props;

        return (
            <div>
                <HeadWrapper/>
                <Navbar/>
                <div className="base-page">
                    <Component {...pageProps}/>
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