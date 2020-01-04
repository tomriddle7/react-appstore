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

const ApplicationPresenter = ({ topFreeApps, topPaidApps, error, loading }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
          <title>Apps | NomadStore</title>
      </Helmet>
      <Section title={"인기 무료 앱"}>
        {topFreeApps.results.map(p => (
          <Room key={parseInt(p.id)} id={p.id} isGame={false} name={p.name} genresName={p.genres[0].name} url={p.url} artworkUrl100={p.artworkUrl100}/>
        ))}
      </Section>
      <Section title={"인기 유료 앱"}>
        {topPaidApps.results.map(p => (
          <Room key={parseInt(p.id)} id={p.id} isGame={false} name={p.name} genresName={p.genres[0].name} url={p.url} artworkUrl100={p.artworkUrl100}/>
        ))}
      </Section>
    </Container>
  );
};

ApplicationPresenter.propTypes = {
    topFreeApps: PropTypes.arrayOf(PropTypes.shape({
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
    topPaidApps: PropTypes.arrayOf(PropTypes.shape({
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
  
  export default ApplicationPresenter;