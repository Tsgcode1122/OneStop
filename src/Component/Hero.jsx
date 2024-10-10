import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Img1 from "../Images/2.jpg";
import Img2 from "../Images/1.jpg";
import Img3 from "../Images/3.jpg";
import Img4 from "../Images/4.jpg";
import { Colors } from "../Colors/ColorComponent";

const images = [Img1, Img2, Img3, Img4];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000); // 5 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <Container id="home">
      <AnimatePresence>
        <Background
          key={currentImage}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        />
      </AnimatePresence>

      {/* Add text and button on top of the background */}
      <Content>
        <h1>You’re One Step to a Flawless Beauty.</h1>
        <p>
          Discover your beauty with all our collections of face and body
          essentials.
        </p>
        <Newsplit>
          <Button>SHOP NOW</Button>
          <Button1
            initial={{
              backgroundPositionX: "-200%", // Start outside the button
            }}
            whileHover={{
              backgroundPositionX: "0%", // Animate to the full color fill
            }}
            transition={{
              duration: 0.8, // Control the speed of the fill
              ease: "easeInOut", // Smooth transition
            }}
          >
            CATEGORIES
          </Button1>
        </Newsplit>
      </Content>
    </Container>
  );
};

export default Hero;

const Newsplit = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 800px) {
    display: flex;
    gap: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 87vh;
  overflow: hidden;
  @media screen and (min-width: 1000px) {
    height: 90vh;
  }
  @media screen and (min-width: 1200px) {
    height: 95vh;
  }
  @media screen and (max-width: 320px) {
    height: 100vh;
  }
`;

const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  will-change: transform, opacity;
  z-index: 1;
`;

const Content = styled.div`
  position: absolute;
  z-index: 2;
  height: 87vh;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.3);

  text-align: center;
  color: #ffffff;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1000px) {
    height: 90vh;
  }
  @media screen and (min-width: 1200px) {
    height: 95vh;
  }

  @media screen and (max-width: 320px) {
    height: 100vh;
    gap: 1px;
    padding: 2rem 0;
  }
  h1 {
    padding: 0 2rem;
    font-family: "Playfair Display", serif;
    font-size: 47px;
    line-height: 47px;
    font-weight: 500;
    margin: 0;
    @media screen and (max-width: 320px) {
      padding: 1rem;
      font-size: 32px;
      line-height: 36px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      font-size: 40px;
      padding: 0 1rem;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      font-size: 40px;
      padding: 0 1rem;
    }
    @media screen and (min-width: 600px) {
      max-width: 600px;
      line-height: 57px;
      font-size: 50px;
    }
    @media screen and (min-width: 800px) {
      font-size: 60px;
      max-width: 700px;
      line-height: 57px;
    }
    @media screen and (min-width: 1000px) {
      font-size: 77px;
      line-height: 77px;
    }
    @media screen and (min-width: 1200px) {
      font-size: 80px;
      max-width: 900px;
      line-height: 77px;
    }
  }

  p {
    font-size: 17px;
    padding: 0 4rem;
    font-family: "Poppins", sans-serif;
    line-height: 28px;
    font-weight: 300;
    margin-bottom: 30px;
    @media screen and (max-width: 320px) {
      padding: 0 2rem;
      font-size: 15px;
      line-height: 18px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      font-size: 15px;
      padding: 0 2rem;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      font-size: 15px;
      padding: 0 2rem;
    }
    @media screen and (min-width: 600px) {
      max-width: 400px;
      line-height: 17px;
      font-size: 18px;
    }
    @media screen and (min-width: 800px) {
      font-size: 19px;
      max-width: 600px;
      line-height: 19px;
    }
    @media screen and (min-width: 1000px) {
      font-size: 20px;
      line-height: 18px;
    }
    @media screen and (min-width: 1200px) {
      font-size: 21px;
      max-width: 600px;
      line-height: 21px;
    }
  }
`;

const Button = styled.button`
  padding: 1.2rem 6rem;

  font-size: 1rem;
  background: ${Colors.green};
  border: 1px solid white;
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  margin-bottom: 10px;
  &:hover {
    background-color: #e5efdc;
    border: 1px solid #349c40;
  }
`;
const Button1 = styled(motion.button)`
  padding: 1.2rem 5.5rem;
  font-size: 1rem;

  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid white;
  border-radius: 30px;
  color: white;
  background: linear-gradient(90deg, transparent 0%, #e5efdc 100%);
  background-size: 200% 100%;
  cursor: pointer;
  &:hover {
    color: black;
  }
  &:active,
  &:focus {
    background-position-x: 0%; /* Mimic hover on mobile */
    color: black;

    outline: none; /* Prevent outline on focus */
  }
`;
