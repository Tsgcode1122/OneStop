import React from "react";
import styled from "styled-components";
import Img1 from "../Images/new1.jpg";
import Img2 from "../Images/new2.jpg";
import Img3 from "../Images/new3.jpg";
import Img4 from "../Images/new4.jpg";
import { Colors } from "../Colors/ColorComponent";

const Details = [
  {
    Img: Img1,
    Subhead: "Belif Super Knights Bright Toning",
    price: "$30",
    ButtonContent: "Sold out",
  },
  {
    Img: Img2,
    Subhead: "Belif Super Knights Pore Firming",
    price: "$28",
    ButtonContent: "Sold out",
  },
  {
    Img: Img3,
    Subhead: " Glutathiosome Dark Spot Serum",
    price: "$24",
    ButtonContent: "Sold out",
  },
  {
    Img: Img4,
    Subhead: "Purito Seoul Wonder Releaf",
    price: "$30",
    ButtonContent: "Sold out",
  },
];

const NewArrivals = () => {
  return (
    <Container id="store">
      <Heading>NEW ARRIVALS</Heading>
      <Intro>
        Here is where we showcase our restocked and newly stocked products.
      </Intro>
      <Content>
        {Details.map((item, index) => (
          <Cont key={index}>
            <span>
              <ProductImage src={item.Img} alt={item.Subhead} />
            </span>
            <Subhead>{item.Subhead}</Subhead>
            <Price>{item.price}</Price>
            <Button disabled>{item.ButtonContent}</Button>
          </Cont>
        ))}
      </Content>
    </Container>
  );
};

export default NewArrivals;

const Container = styled.div`
  background: ${Colors.light};
  padding: 6rem 2rem 4rem 2rem;
  @media screen and (max-width: 320px) {
    padding: 5rem 1rem 4rem 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 6rem 1.3rem 4rem 1.3rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 6rem 1.5rem 4rem 1.5rem;
  }
  @media screen and (min-width: 800px) {
    padding: 6rem 4rem 4rem 4rem;
  }
  @media screen and (min-width: 1000px) {
    padding: 6rem 6rem 4rem 6rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 6rem 10rem 4rem 10rem;
  }
`;

const Heading = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 29px;
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding-bottom: 10px;
  @media screen and (min-width: 800px) {
    text-align: center;
    font-size: 36px;
    font-weight: 600;
  }
`;

const Intro = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin: 0;
  padding-bottom: 20px;
  font-family: "Poppins", sans-serif;
  @media screen and (min-width: 800px) {
    text-align: center;
    font-size: 18px;
  }
`;

const Content = styled.div`
  background: ${Colors.white};
  display: flex;
  border: 2.9px solid #eceaea;
  flex-wrap: wrap;
  padding: 1.5rem;
  margin: 0;
  justify-content: center;
  gap: 2rem;
  border-radius: 20px;
  @media screen and (max-width: 320px) {
    padding: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 1rem;
  }
`;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(50% - 1rem);

  text-align: center;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: calc(25% - 2rem);
  }
  span {
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Subhead = styled.p`
  font-size: 15px;
  font-weight: 400;
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
`;

const Price = styled.p`
  font-size: 18px;
  color: #000000;
  font-weight: 500;
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  background-color: #000000;
  border: none;
  border-radius: 30px;
  color: white;
  cursor: not-allowed;
  margin-top: 0.5rem;
`;
