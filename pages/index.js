import Head from 'next/head';

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Carousel from "../components/Carousel";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

const movieData = [
    {
        "id": "1",
        "name": "The Shawshank Redemption",
        "releaseYear": 1994,
        "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "longDesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque non nobis, impedit veritatis quia, consectetur velit ea error ducimus totam ipsam, nisi dolorem voluptatum ut perspiciatis ex quidem nesciunt assumenda.",
        "rating": 4.8,
        "genre": "drama",
        "cover": "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        "image": "https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg"
    },
    {
        "id": "2",
        "name": "The Dark Knight",
        "releaseYear": 2008,
        "description": "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "longDesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad itaque excepturi dignissimos laudantium obcaecati quam blanditiis earum veniam, dicta, velit, quo tenetur dolore ducimus repellat neque, architecto magni in cum.",
        "rating": 4.7,
        "genre": "action, crime, drama",
        "cover": "https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        "image": "https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600"
    },
    {
        "id": "3",
        "name": "Lord of the Rings",
        "releaseYear": 2004,
        "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        "longDesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, beatae aliquid excepturi! Distinctio temporibus modi eos in facere eum, eligendi incidunt? Eligendi, ea, explicabo. Repellat laboriosam suscipit natus totam dolores?",
        "rating": 4.9,
        "genre": "adventure, drama, fantasy",
        "cover": "https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80",
        "image": "https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600"
    }
];

const Home = () => {
    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                      crossOrigin="anonymous"/>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                        crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                        crossOrigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                        crossOrigin="anonymous"></script>
            </Head>
            <Navbar/>
            <div className="container" style={{marginTop: 80}}>
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar appName="Movie DB"/>
                    </div>
                    <div className="col-lg-9">
                        <Carousel/>
                        <div className="row">
                            <MovieList movies={movieData}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;