import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { BASE_URL } from 'utils/urls';
import { Oval } from 'react-loader-spinner';
// import { API_KEY } from 'utils/urls';

const TrendingList = () => {
  const [movieList, setMovieList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);

    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_KEY}`)
      .then((response) => response.json())
      .then((data) => setMovieList(data.results))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, [])
  return (
    <section className="front-page">
      {loading && (
        <Oval
          ariaLabel="loading-indicator"
          height={100}
          width={100}
          strokeWidth={2}
          strokeWidthSecondary={3}
          color="black"
          secondaryColor="white" />
      )}
      {movieList.map((movie) => {
        return (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <img src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="poster" />
            <div className="poster-hover-details">
              <h1>{movie.title}</h1>
              <p>Released {movie.release_date}</p>
            </div>
          </Link>
        )
      })}
    </section>
  )
}

export default TrendingList;