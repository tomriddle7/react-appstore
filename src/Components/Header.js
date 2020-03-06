import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { faClipboard, faRocket, faLayerGroup, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = styled.footer`
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 25vw;
  height: 50px;
  text-align: center;
  color: 
    ${props => (props.current ? "#0b84fe" : "ffffff")};
  transition: color 0.2s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Footer className="mobileShow">
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/"><FontAwesomeIcon icon={faClipboard} />Home</SLink>
      </Item>
      <Item current={pathname === "/application"}>
        <SLink to="/application"><FontAwesomeIcon icon={faRocket} />App</SLink>
      </Item>
      <Item current={pathname === "/game"}>
        <SLink to="/game"><FontAwesomeIcon icon={faLayerGroup} />Game</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search"><FontAwesomeIcon icon={faSearch} />Search</SLink>
      </Item>
    </List>
  </Footer>
));