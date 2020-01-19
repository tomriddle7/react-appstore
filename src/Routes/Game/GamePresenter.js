import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Room from "../../Components/Room";

const Container = styled.div`
  padding: 20px;
`;

const ToggleButton = styled.button`
  border: 0px;
  border-radius: 10px;
  background: #1c1c1e;
  padding: 5px;
  width: 100%;
  font-size:14pt;
  color: #0b84fe;
  text-align: center;
`;

const GamePresenter = ({ topFreeGames, topPaidGames, isToggle, error, loading, toggleState }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
          <title>Games | NomadStore</title>
      </Helmet>
      <ToggleButton onClick={toggleState}>{isToggle ? "Paid" : "Free"}</ToggleButton>
      {topFreeGames && topFreeGames.results && topFreeGames.results.length > 0 && !isToggle && (
        <Section title={topFreeGames.title}>
          {topFreeGames.results.map(p => (
            <Room key={parseInt(p.id)} id={p.id} isGame={true} name={p.name}   genresName={p.genres[0].name} url={p.url} artworkUrl100=  {p.artworkUrl100}/>
          ))}
        </Section>
      )}
      {topPaidGames && topPaidGames.results && topPaidGames.results.length > 0 && isToggle && (
        <Section title={topPaidGames.title}>
          {topPaidGames.results.map(p => (
            <Room key={parseInt(p.id)} id={p.id} isGame={false} name={p.name}   genresName={p.genres[0].name} url={p.url} artworkUrl100=  {p.artworkUrl100}/>
          ))}
        </Section>
      )}
    </Container>
  );
};

GamePresenter.propTypes = {
    topFreeGames: PropTypes.arrayOf(PropTypes.shape({
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
    topPaidGames: PropTypes.arrayOf(PropTypes.shape({
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
    isToggle:PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
  };
  
  export default GamePresenter;