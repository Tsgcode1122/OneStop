import React from "react";

import glassbg from "../Images/glassbg.jpg";
import styled from "styled-components";
import DownToUp from "../Motion/DownToUp";
const OneStop = () => {
  return (
    <Container>
      <Content>
        <Subhead>OneStopBody.com</Subhead>
        <Heading>Get Updates on Discounts</Heading>
        <Button>Join Our News Letters</Button>
      </Content>
    </Container>
  );
};

export default OneStop;
const Container = styled.div`
  padding: 5rem 2rem 5rem 2rem;
  background-image: url(${glassbg});
  background-size: cover;
  background-position: center;
`;
const Content = styled.div`
  display: flex;
  padding: 20px 0;
  color: white;
  gap: 20px;
  border: 0.2px solid #bebebe;
  border-radius: 20px;
  /* background-color: rgba(255, 255, 255, 0.1); */
  backdrop-filter: blur(14px);
  flex-direction: column;
  align-items: center;
`;
const Subhead = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  margin: 0;
  line-height: 10px;
`;
const Heading = styled.h2`
  font-size: 30px;
  font-family: "Playfair Display", serif;
  margin: 0;
  line-height: 25px;
  font-weight: 400;
`;
const Button = styled.button`
  padding: 15px 30px;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  border-radius: 30px;
  background: transparent;
  border: 1px solid white;
`;
