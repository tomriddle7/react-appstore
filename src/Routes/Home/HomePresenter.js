import React from "react";
import Loader from "../../Components/Loader";
import PropTypes from "prop-types";

const Home = ({ name, artistName, artworkUrl100 }) => {
  const text = `${name} / ${artistName}`;
  return (
    <div>
      <img src={artworkUrl100} alt={name} />
      <h3>{text}</h3>
    </div>);
};

const HomePresenters = ({ loading, error, results }) => {
  return loading ? (
    <Loader />
  ) : (
    results.map(p => (
      <Home key={p.id} name={p.name} artistName={p.artistName} artworkUrl100={p.artworkUrl100} />
    ))
  );
};

HomePresenters.propTypes = {
    results: PropTypes.arrayOf(PropTypes.shape({
      artistId: PropTypes.number.isRequired,
      artistName: PropTypes.string.isRequired,
      artistUrl: PropTypes.string.isRequired,
      artworkUrl100: PropTypes.string.isRequired,
      copyright: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(PropTypes.shape({
        genreId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      }).isRequired),
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired),
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
  };
  
  export default HomePresenters;