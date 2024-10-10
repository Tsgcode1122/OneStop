import React from "react";
import styled from "styled-components";
import SingleImg from "../Images/singleImage.jpg";
import { Colors } from "../Colors/ColorComponent";
import { motion } from "framer-motion";
import DownToUp from "../Motion/DownToUp";

const SingleImage = () => {
  return (
    <Container>
      <DownToUp>
        <img src={SingleImg} />
      </DownToUp>
      <Content>
        <Subhead>Skin1008</Subhead>
        <Description>
          Daily soothing sunscreen, Dewy Finish with no Whitecast, Natural
          Tone-Up, SweatProof Matte-Finish Etc.
        </Description>

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
          Buy Skin100 Products
        </Button>
      </Content>
    </Container>
  );
};

export default SingleImage;
const Container = styled.div`
  background: ${Colors.white};
  padding: 5rem 2rem 7rem 2rem;
  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    overflow: hidden;
  }
  @media screen and (max-width: 320px) {
    padding: 5rem 1rem 6rem 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 6rem 1.3rem 6rem 1.3rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 6rem 1.5rem 6rem 1.5rem;
  }
`;
const Content = styled.div`
  padding-top: 30px;

  text-align: center;
`;
const Subhead = styled.h3`
  font-weight: 600;
  margin: 0;
  padding: 0;
  font-size: 48px;
  padding-bottom: 10px;
  color: black;
`;
const Description = styled.article`
  font-size: 18px;
  font-weight: 300;
  padding-bottom: 20px;

  margin: 0;
  line-height: 27px;
  font-family: "Poppins", sans-serif;
`;
const Button = styled(motion.button)`
  padding: 1.3rem 2.6rem;
  font-size: 1rem;
  display: inline-block;
  border: 1px solid white;
  border-radius: 20px;
  color: black;
  font-family: "Poppins", sans-serif;
  background-color: #d4b396;
  background-size: 200% 100%;
  background-image: linear-gradient(
    to right,
    #d4b396 50%,
    /* Green when hovered */ #032000 50%
  );
  background-position-x: 0%;
  cursor: pointer;
  transition: background-position 0.1s ease-in-out;

  &:hover {
    color: #d4b396;
  }
  &:active,
  &:focus {
    background-position-x: -100%; /* Mimic hover on mobile */
    color: #d4b396;
    outline: none; /* Prevent outline on focus */
  }
`;
