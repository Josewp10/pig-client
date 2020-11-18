import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <center>
      <h1>
        Gestiona y mejora los procesos<br />
        ganaderos en tu finca
      </h1>
      </center>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 60px;
    font-weight: 900;
    color: #008f39;

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export default Main;
