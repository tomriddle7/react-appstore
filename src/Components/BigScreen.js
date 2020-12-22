import React from "react";
import styled from "styled-components";

const BigScreen = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 28px;
`;

export default () => (
  <BigScreen className="desktopShow">
    <span>
      Please make your screen small! {`\u{1f631}`}
    </span>
  </BigScreen>
);