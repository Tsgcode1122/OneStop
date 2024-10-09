import React from "react";
import styled from "styled-components";
import deb from "../Images/deb.png";
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <Container>
      <Content>
        <Name>OneStopBody</Name>
        <Intro>
          For inquiries about your OneStopBody account, payments, and orders,
          please send your requests to info@OneStopBody.ng
        </Intro>
        <More>
          <Cont>
            <Head>PAGES</Head>
            <p>Home Page</p>
            <p>Shop Page</p>
            <p>Categories</p>
            <p>Shop Body</p>
          </Cont>
          <Cont>
            <Head>COMPANY</Head>
            <p>Contact Us</p>
            <p>Blog Page</p>
            <p>Reviews</p>
            <p>Policy</p>
          </Cont>

          <Cont>
            <Head>OUR SOCIALS</Head>
            <Social>
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaEnvelope />
              </span>
            </Social>
          </Cont>
        </More>
        <Reserve>All Right reserve 2024 OneStopBody</Reserve>
      </Content>
      <Last>
        <p>YOUR SECURE PAYMENT CHANNELS</p>
        <img src={deb} />
      </Last>
    </Container>
  );
};

export default Footer;
const Container = styled.div`
  font-family: "Poppins", sans-serif;
  background: #010700;
  padding: 3rem 2rem 2rem 2rem;
`;
const Content = styled.div`
  background-color: #fbf7f2;
  border-radius: 30px;
  padding: 35px 30px 20px 30px;
`;
const Reserve = styled.p`
  background-color: #d7d7d7;
  padding: 10px;
  border-radius: 10px;
  color: gray;
  text-align: center;
`;
const Head = styled.h4``;
const Social = styled.div`
  display: flex;
  gap: 15px;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #093401;
    padding: 10px;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    svg {
      color: white;
    }
  }
`;
const Cont = styled.div``;
const Intro = styled.p``;
const Name = styled.h2``;
const Last = styled.div`
  p {
    font-size: 13px;
    font-weight: 600;
  }

  text-align: center;
  padding: 1rem 3rem;
  color: white;
  img {
    max-width: 100%;
  }
`;
const More = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;
