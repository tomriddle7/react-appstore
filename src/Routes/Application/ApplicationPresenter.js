import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import ToggleSwitch from "../../Components/ToggleSwitch";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Room from "../../Components/Room";

const Container = styled.div`
  padding: 20px;
`;

const text = ["Free", "Paid"];
const chkID = "checkboxID";

const ApplicationPresenter = ({ topFreeApps, topPaidApps, isToggle, error, loading, toggleState }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
          <title>Apps | NomadStore</title>
      </Helmet>
      <ToggleSwitch id={chkID} Text={text} disabled={false} onChange={toggleState} />
      {topFreeApps && topFreeApps.results && topFreeApps.results.length > 0 && isToggle && (
        <Section title={topFreeApps.title}>
          {topFreeApps.results.map(p => (
            <Room key={parseInt(p.id)} id={p.id} isGame={false} name={p.name}   genresName={p.genres[0].name} url={p.url} artworkUrl100=  {p.artworkUrl100}/>
          ))}
        </Section>
      )}
      {topPaidApps && topPaidApps.results && topPaidApps.results.length > 0 && !isToggle && (
        <Section title={topPaidApps.title}>
          {topPaidApps.results.map(p => (
            <Room key={parseInt(p.id)} id={p.id} isGame={false} name={p.name}   genresName={p.genres[0].name} url={p.url} artworkUrl100=  {p.artworkUrl100}/>
          ))}
        </Section>
      )}
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
    isToggle:PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
  };
  
  export default ApplicationPresenter;