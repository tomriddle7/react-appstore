import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled("div")`
  margin-bottom: 15px;
`;

const Ranking = styled("span")`
  font-weight: 600;
`;

const Apps = ({ id, name, genresName, url, artworkUrl100 }) => (
  <Container>
    <Link to={`detail/${id}`}>
        <img src={artworkUrl100} alt={name} />
        <h1>{name}</h1>
        <h1>{genresName}</h1>
        <a href={url}>
            <h1>받기</h1>
        </a>
    </Link>
  </Container>
);

Apps.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  artworkUrl100: PropTypes.number.isRequired
};

export default Apps;
