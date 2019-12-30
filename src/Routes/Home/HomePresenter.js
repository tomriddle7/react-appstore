import React from "react";
import Loader from "../../Components/Loader";
import PropTypes from "prop-types";
import Apps from "../../Components/Apps";

const HomePresenters = ({ loading, error, results }) => {
  return loading ? (
    <Loader />
  ) : (
    results.map(p => (
      <Apps key={parseInt(p.id)} id={p.id} name={p.name} genresName={p.genres[0].name} url={p.url} artworkUrl100={p.artworkUrl100} />
    ))
  );
};

HomePresenters.propTypes = {
    results: PropTypes.arrayOf(PropTypes.shape({
      artistId: PropTypes.string.isRequired,
      artistName: PropTypes.string.isRequired,
      artistUrl: PropTypes.string.isRequired,
      artworkUrl100: PropTypes.string.isRequired,
      copyright: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(PropTypes.shape({
        genreId: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      }).isRequired),
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired),
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
  };
  
  export default HomePresenters;