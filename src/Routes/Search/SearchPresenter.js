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

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenters = ({
  appResults,
  loading,
  searchTerm,
  handleSubmit,
  error,
  updateTerm
}) => (
  <Container>
    <Helmet>
      <title>Search | Nomflix</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV Shows..."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {appResults && appResults.length > 0 && (
          <Section title={appResults.title}>
            {appResults.results.map(p => (
            <Room key={parseInt(p.id)} id={p.id} isGame={false} name={p.name} genresName={p.genres[0].name} url={p.url} artworkUrl100={p.artworkUrl100}/>
          ))}
          </Section>
        )}
      </>
    )}
  </Container>
);

SearchPresenters.propTypes = {
  appResults: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenters;