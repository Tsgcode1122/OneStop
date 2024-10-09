import React from "react";
import styled from "styled-components";
import store from "../Images/store1.jpg";
import store2 from "../Images/store2.jpg";
import { motion } from "framer-motion";
import SwipeComponent from "../Motion/SwipeComponent";

const VisitStore = () => {
  return (
    <Container>
      <ImageContainer>
        <SwipeComponent direction="left-to-right">
          <img src={store} />
        </SwipeComponent>
        <SwipeComponent direction="right-to-left">
          <img src={store2} />
        </SwipeComponent>
      </ImageContainer>

      <Descriptions>
        “The health and texture of your skin is dependent on your type of
        skincare routine. Plan your skincare routine today with our collection
        of award winning skincare products.”
      </Descriptions>
      <Button
        initial={{
          backgroundPositionX: "0%",
        }}
        whileHover={{
          backgroundPositionX: "-100%",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        VISIT OUR STORE
      </Button>
    </Container>
  );
};

export default VisitStore;
const Container = styled.div`
  background: #021400;
  padding: 6rem 2rem 4rem 2rem;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 320px) {
    padding: 5rem 1rem 4rem 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 6rem 1.3rem 4rem 1.3rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 6rem 1.5rem 4rem 1.5rem;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  overflow: hidden;
  gap: 10px;
  img {
    max-width: 100%;
    border-radius: 10px;
    height: 320px;
    @media screen and (max-width: 320px) {
      height: 250px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      height: 250px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      height: 250px;
    }
  }
`;
const Content = styled.div``;
const Descriptions = styled.div`
  font-size: 18px;
  font-weight: 200;
  text-align: center;

  color: #edecec;
  line-height: 27px;
  font-family: "Poppins", sans-serif;
`;
const Button = styled(motion.button)`
  padding: 1rem 2.6rem;
  font-size: 1rem;
  display: inline-block;
  border: 2px solid #349c40;
  border-radius: 40px;
  color: #349c40;
  font-family: "Poppins", sans-serif;
  background-color: transparent;
  background-size: 200% 100%;
  background-image: linear-gradient(
    to right,
    transparent 50%,
    /* Green when hovered */ #349c40 50%
  );
  background-position-x: 0%;
  cursor: pointer;
  transition: background-position 0.1s ease-in-out;

  &:hover {
    color: black;
    border: 2px solid #5fac68;
  }

  /* For mobile devices, mimic hover with active and focus states */
  &:active,
  &:focus {
    background-position-x: -100%; /* Mimic hover on mobile */
    color: black;
    border: 2px solid #5fac68;
    outline: none; /* Prevent outline on focus */
  }
`;
