import React, { useEffect, useState } from "react";

import styled from "styled-components";
import icon1 from "../Images/icon1.png";
import icon2 from "../Images/icon2.png";
import icon3 from "../Images/icon3.png";
import icon4 from "../Images/icon4.png";
import Img1 from "../Images/111.jpg";
import Img2 from "../Images/1111.jpg";
// import Img3 from "../Images/icon4.png";
// import Img4 from "../Images/icon4.png";
import { motion, AnimatePresence } from "framer-motion";
const images = [Img1, Img2];
const Different = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Intro>WHAT MAKE US DIFFERENT</Intro>
      <Heading>The values we live by</Heading>
      <Content>
        <Cont>
          <img src={icon1} />
          <Head>Product Updates</Head>
          <Writeup>
            We update our product stock regularly so as to make sure you don’t
            run out of the skincare products that makes up your skincare
            routine.
          </Writeup>
          <Underline />
        </Cont>
        <Cont>
          <img src={icon2} />
          <Head>Quick Delivery</Head>
          <Writeup>
            Your order will get delivered to you in a matter of days and if
            there will be a reason for a delay, we will update you with the new
            delivery timeline.
          </Writeup>
        </Cont>
        <ImageContainer>
          <AnimatePresence>
            <img
              key={currentImage}
              src={images[currentImage]}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              style={{
                width: "100%",
                height: "100%",

                borderRadius: "20px",
              }}
            />
          </AnimatePresence>
        </ImageContainer>
        <Cont>
          <img src={icon3} />
          <Head>Company Standards</Head>
          <Writeup>
            The Brands that we stock are carefully checked by Quality Control
            team so as to make sure you have a premium experience when
            interacting with these products brands.
          </Writeup>
          <Underline />
        </Cont>
        <Cont>
          <img src={icon3} />
          <Head>Usage Guide</Head>
          <Writeup>
            All our products comes with a “directions or how to use” section so
            as to make the usage of the products even easier for you.
          </Writeup>
        </Cont>
      </Content>
    </Container>
  );
};

export default Different;
const ImageContainer = styled.div`
  display: flex;
  padding: 40px 20px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Container = styled.div`
  padding: 80px 2rem;
  position: relative;
  background-color: #f2ebe2;
`;
const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  img {
    max-width: 100%;
    height: 50px;
  }
`;
const Writeup = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin: 0;
  line-height: 21px;
  font-family: "Poppins", sans-serif;
`;
const Content = styled.p`
  text-align: center;
`;
const Head = styled.h4`
  margin: 0;
  font-size: 22px;
  font-weight: 600 !important;
  font-family: "Playfair Display", serif;
  line-height: 24px;
`;
const Heading = styled.h2`
  margin: 0;
  font-size: 38px;
  font-weight: 200 !important;
  font-family: "Playfair Display", serif;
  line-height: 42px;
  text-align: center;
`;
const Intro = styled.p`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 17px;
  font-weight: 300;
  padding-bottom: 5px;
  line-height: 14px;
  margin: 0;
`;
const Underline = styled.div`
  content: "";
  height: 1px;
  margin: 20px 0 30px 0;
  background-color: black;
  width: 200px;
`;
