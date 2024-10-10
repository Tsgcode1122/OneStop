import React, { useState } from "react";
import styled from "styled-components";
import { color, motion } from "framer-motion";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Colors } from "../Colors/ColorComponent";

const Faqs = () => {
  const [selectedFaq, setSelectedFaq] = useState(null);

  const toggleFaq = (index) => {
    if (selectedFaq === index) {
      setSelectedFaq(null);
    } else {
      setSelectedFaq(index);
    }
  };

  const faqs = [
    {
      question: "How authentic are your products?",
      answer:
        "They are authentic as they are sourced from the manufacturers of these items.",
    },
    {
      question: "Do you recommend products?",
      answer: "No, we do not offer recommendations at the moment",
    },
    {
      question: "how long does it take to deliver?",
      answer:
        "Our carpet cleaning service uses advanced techniques and equipment to remove stains, dirt, and allergens from your carpets. We offer both deep cleaning and maintenance options to keep your carpets looking fresh.",
    },
    {
      question: "how much does delivery cost?",
      answer:
        "It depends on delivery location and delivery method and the weight of the order.",
    },
    {
      question: "can I get discount if I bulk purchase?",
      answer:
        "We do not offer discounts at the moment. Subscribe to our Newsletters so you can be the first to know when we start sending discount offers.",
    },
    {
      question:
        "am travelling. can you deliver my order at a specific day and time?",
      answer:
        "Due to unpredictable logistics challenges, we are unable to provide or guarantee an exact delivery day or time.",
    },
  ];

  return (
    <>
      <FaqsContainer id="faqs">
        <Content>
          <Heading>Faqs</Heading>
          <SubHead>
            Here are a few more Questions you may have in mind. We have provided
            answers to every question in this section.
          </SubHead>

          <Split>
            {faqs.map((faq, index) => (
              <FaqItem key={index}>
                <Question onClick={() => toggleFaq(index)}>
                  {faq.question}
                  <IconWrapper>
                    {selectedFaq === index ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </IconWrapper>
                </Question>
                <Answer
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: selectedFaq === index ? "auto" : 0,
                    opacity: selectedFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </Answer>
              </FaqItem>
            ))}
          </Split>
        </Content>
      </FaqsContainer>
    </>
  );
  xw;
};

export default Faqs;

const FaqsContainer = styled.div`
  position: relative;
  background: #f2ebe2;

  background-position: 10% top;
  background-size: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 320px) {
  }
  @media (min-width: 321px) and (max-width: 399px) {
  }
  @media (min-width: 400px) and (max-width: 499px) {
  }
  @media screen and (min-width: 800px) {
    padding: 0 1.5rem;
  }
  @media screen and (min-width: 1000px) {
    padding: 0 3rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 0 8rem;
  }
`;

const Content = styled.div`
  padding: 2rem;

  @media screen and (max-width: 320px) {
    border-radius: 30px;
    padding: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 1.3rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 1.5rem;
  }
  @media screen and (min-width: 800px) {
    text-align: center;
  }
`;

const Heading = styled.h2`
  font-size: 51px;

  font-weight: 600;
  font-family: "Playfair Display", serif;

  margin: 0px;
  @media screen and (max-width: 320px) {
    font-size: 41px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 41px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 41px;
  }
`;
const SubHead = styled.h5`
  margin-top: 1rem;
  font-size: 16px;
  color: #6e6e6e;
  font-weight: 400;

  font-family: "Poppins", sans-serif;
  margin: 0px;
  @media screen and (min-width: 800px) {
    font-size: 17px;
    display: inline-flex;
    max-width: 400px;
    padding-bottom: 1rem;
  }
`;

const Split = styled.div`
  @media screen and (min-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
`;

const FaqItem = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px solid #bbbaba;
  @media screen and (min-width: 800px) {
    width: calc(50% - 1rem);
  }
`;

const Question = styled.div`
  color: black;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 320px) {
    font-size: 0.9rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 1rem;
    font-size: 1rem;
  }
`;

const Answer = styled(motion.div)`
  overflow: hidden;
  padding: 0 0rem;

  border-radius: 4px;
  color: #6e6e6e;
  p {
    margin: 0;
    padding: 1rem 0;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
`;
