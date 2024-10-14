import React from "react";

import glassbg from "../Images/glassbg.jpg";
import styled from "styled-components";
import DownToUp from "../Motion/DownToUp";
const OneStop = () => {
  return (
    <Container id="subscribe">
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
  @media screen and (max-width: 320px) {
    padding: 5rem 1rem 5rem 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 5rem 1.3rem 5rem 1.3rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 5rem 1.5rem 5rem 1.5rem;
  }
  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 1000px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;
const Content = styled.div`
  display: flex;
  text-align: center;
  padding: 20px 0;
  color: white;
  gap: 20px;
  border: 0.2px solid #bebebe;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 320px) {
    background-color: rgba(255, 255, 255, 0.9);
  }
  @media (min-width: 321px) and (max-width: 399px) {
    background-color: rgba(255, 255, 255, 0.1);
  }
  @media (min-width: 400px) and (max-width: 499px) {
    background-color: rgba(255, 255, 255, 0.1);
  }
  @media screen and (min-width: 800px) {
    max-width: 600px;
    padding: 2rem 3rem;
  }
  @media screen and (min-width: 1000px) {
    padding: 3rem 5rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 4rem 8rem;
  }
`;
const Subhead = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  margin: 0;
  line-height: 10px;
  @media screen and (min-width: 800px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;
const Heading = styled.h2`
  font-size: 30px;
  font-family: "Playfair Display", serif;
  margin: 0;
  line-height: 25px;
  font-weight: 400;
  @media screen and (max-width: 320px) {
    font-size: 27px;
    font-weight: 200;
    line-height: 40px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 33px;
    font-weight: 200;
    line-height: 40px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 33px;
    font-weight: 200;
    line-height: 40px;
  }
  @media screen and (min-width: 800px) {
    font-size: 38px;
    line-height: 40px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 45px;
    line-height: 60px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 48px;
    line-height: 70px;
  }
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
