import React from "react";

import img1 from "../Images/small.jpg";
import styled from "styled-components";
const ImageAlone = () => {
  return (
    <Container>
      <img src={img1} />
    </Container>
  );
};

export default ImageAlone;
const Container = styled.div`
  img {
    width: 100%;
    @media screen and (min-width: 800px) {
      display: none;
    }
  }
`;
