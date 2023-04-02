import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { BASE_URL } from 'utils/urls';
import { Oval } from 'react-loader-spinner';
// import { API_KEY } from 'utils/urls';

const TrendingList = () => {
  const [movieList, setMovieList] = useState([])
  const [loading, setLoading] = useState(false)
  const [listChoice, setListChoice] = useState('trending/movie/day')

  const handleListSelection = (event) => {
    setListChoice(event.target.value)
  }

  useEffect(() => {
    setLoading(true);

    fetch(`https://api.themoviedb.org/3/${listChoice}?api_key=${process.env.REACT_APP_KEY}`)
      .then((response) => response.json())
      .then((data) => setMovieList(data.results))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, [listChoice])
  return (
    <>
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
      <div className="list-selector">
        <h1>The Movie Page</h1>
        <p className="header-emojis">&#127903;&#65039;&#127871;&#127871;&#127903;&#65039;</p>
        <p className="select-label">See movies that are: </p>
        <select value={listChoice} onChange={handleListSelection}>
          <option value disabled>Please select one:</option>
          <option value="trending/movie/day">Trending</option>
          <option value="movie/top_rated">Top Rated</option>
          <option value="movie/upcoming">Upcoming</option>
          <option value="movie/now_playing">Now Playing</option>
        </select>
      </div>
      <section className="front-page">
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
    </>
  )
}

export default TrendingList;