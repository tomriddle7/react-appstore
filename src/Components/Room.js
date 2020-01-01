import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled("div")`
  margin-bottom: 15px;
  display: block;
  margin:auto;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 180px;
  border-radius: 4px;
  background-position: left;
`;

const Room = ({ id, isGame, name, genresName, url, artworkUrl100 }) => (
  <Container>
    <Link to={isGame ? `/game/${id}` : `/application/${id}`}>
        <Image bgUrl={artworkUrl100} />
        <div>
          <h1>{name}</h1>
          <h1>{genresName}</h1>
        </div>
        
        <a href={url}>
            <h1>받기</h1>
        </a>
    </Link>
  </Container>
);

Room.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  artworkUrl100: PropTypes.number.isRequired
};

export default Room;
