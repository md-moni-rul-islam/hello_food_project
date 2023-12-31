import React from "react";
import styled from "styled-components";

const Spinner = () => {
  return (
    <Container>
      <div id="cover-spin"></div>
    </Container>
  );
};

const Container = styled.div`
  #cover-spin {
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(12, 12, 12, 0.281);
    z-index: 9999;
    display: block;
  }

  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  #cover-spin::after {
    content: "";
    display: block;
    position: absolute;
    left: 48%;
    top: 45%;
    width: 30px;
    height: 30px;
    border-style: solid;
    border-color: #10918a;
    border-top-color: transparent;
    border-width: 4px;
    border-radius: 50%;
    -webkit-animation: spin 0.8s linear infinite;
    animation: spin 0.8s linear infinite;
  }
`;

export default Spinner;
