import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled("div")`
  width:100%;
  display: flex;
  flex-direction: row;
  background-color: #000000;
`;

const Scope60 = styled("div")`
  width:60vw;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

const Scope20 = styled("div")`
  width:20vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

const Image = styled("div")`
  background-image: url(${props => props.bgUrl});
  background-position: center;
  background-size: cover;
  width: 20vw;
  height: 20vw;
  border-radius: 22.37%;
`;

const PsudoButton = styled("p")`
  border-radius: 25px;
  background: #1c1c1e;
  padding: 10px;
  font-size:12pt;
  color: #0b84fe;
`;

const Name = styled("span")`
  font-size:14pt;
  color: #ffffff;
`;

const Genre = styled("span")`
  font-size:12pt;
  color: #808084;
`;

const Room = ({ id, isGame, name, genresName, url, artworkUrl100 }) => (
  <Link to={isGame ? `/game/${id}` : `/application/${id}`}>
    <Container>
    <Scope20>
      <Image bgUrl={artworkUrl100}></Image>
    </Scope20>
    <Scope60>
      <Name>{name}</Name>
      <Genre>{genresName}</Genre>
    </Scope60>
    <Scope20>
      <PsudoButton>받기</PsudoButton>
    </Scope20>
    </Container>
  </Link>
  
);

Room.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  artworkUrl100: PropTypes.number.isRequired
};

export default Room;
