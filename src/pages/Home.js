import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import TinderCard from "react-tinder-card";
import MovieCard from "../components/MovieCard";

const Home = () => {
    const [movies, setMovies] = useState([])

    const fetchMovies = async () => {
        const {data} = await axios.get("https://api.themoviedb.org/3/discover/movie", {
            params: {
                page: Math.random() * 501,
                api_key: "356fa614caff30a00301706a234ca902"
            }
        })
        // console.log(data);
        setMovies(data.results)
    }


    useEffect(() => {
        fetchMovies()
    }, [])
    
    const renderMovies = () => {
        return movies.map(movie => (
            <TinderCard key={movie.id}>
                <MovieCard movie={movie} />
            </TinderCard>
        ))
    }

    return (
        <Layout>
            <h1>Welcome!</h1>
            <div className="movie-wrapper">
                {renderMovies()}
            </div>
                


        </Layout>
    );
};

export default Home;