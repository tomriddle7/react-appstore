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
  border-radius: 16px;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  background-color: #2a2a2d;
  padding: 10px;
`;

const SearchDiv = styled.div`
  width: 34px;
  display: flex;
  flex-direction: row;
`;

const SearchLens = styled.span`
  color: #808084;
  fill: currentColor;
  line-height: 24px;
  position: relative;
  height: 34px;
  width: 34px;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
  color: #808084;
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
      <title>Search | NomadStore</title>
    </Helmet>
    <Form onSubmit={handleSubmit} className="mobileShow">
      <SearchDiv>
        <SearchLens>
          <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
            </path>
          </svg>
        </SearchLens>
      </SearchDiv>
      <div>
        <Input
          placeholder="게임, 앱, 스토리 등"
        value={searchTerm}
          onChange={updateTerm}
        />
      </div>
    </Form>
    {loading ? (
      <Loader />
      ) : (
      <>
        {appResults && appResults.length > 0 && (
          <Section title={"검색결과"}>
            {appResults.map(p => (
              <Room key={parseInt(p.trackId)} id={p.trackId} isGame=  {p.primaryGenreName === "Games" ? true : false} name={p.trackName}   genresName={p.primaryGenreName} url={p.trackViewUrl} artworkUrl100= {p.artworkUrl100}/>
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