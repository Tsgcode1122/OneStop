import React from "react";
import styled from "styled-components";
import Img4 from "../Images/4.jpg";
// Container for the second page content
const FixedBackgroundWrapper = styled.div`
  position: relative;
  /* height: 100vh; */
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox: Hide scrollbar */
  -ms-overflow-style: none; /* IE and Edge: Hide scrollbar */
  /* For WebKit-based browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    display: none; /* Hides scrollbar */
  }
  background: url(${Img4}) no-repeat center center;
  background-size: cover;

  background-attachment: fixed;
`;

const Content = styled.div`
  padding: 50px;
  height: 50vh;
  color: white; /* Style your text accordingly */
`;

const FixedBackground = () => {
  return (
    <FixedBackgroundWrapper>
      <Content>
        <h1>Second Page</h1>
        <p>
          This is the second page content. The background will remain fixed
          while the content scrolls.
        </p>
        <p>
          This is the second page content. The background will remain fixed
          while the content scrolls.
        </p>
        <p>
          This is the second page content. The background will remain fixed
          while the content scrolls.
        </p>
        <p>
          This is the second page content. The background will remain fixed
          while the content scrolls.
        </p>
        <p>
          This is the second page content. The background will remain fixed
          while the content scrolls.
        </p>
        <p>
          This is the second page content. The background will remain fixed
          while the content scrolls.
        </p>
        <p>
          This is the second page content. The background will remain fixed
          while the content scrolls.
        </p>
        <p>
          This is the second page content. The background will remain fixed
          while the content scrolls.
        </p>
        <p>
          This is the second page content. The background will remain fixed
          while the content scrolls.
        </p>
        <p>
          This is the second page content. The background will remain fixed
          while the content scrolls.
        </p>
        <p>
          This is the second page content. The background will remain fixed
          while the content scrolls.
        </p>
        <p>
          This is the second page content. The background will remain fixed
          while the content scrolls.
        </p>
        <p>
          This is the second page content. The background will remain fixed
          while the content scrolls.
        </p>
        <p>
          This is the second page content. The background will remain fixed
          while the content scrolls.
        </p>
        <p>
          This is the second page content. The background will remain fixed
          while the content scrolls.
        </p>
        <p>
          This is the second page content. The background will remain fixed
          while the content scrolls.
        </p>
        <p>
          This is the second page content. The background will remain fixed
          while the content scrolls.
        </p>
        <p>
          This is the second page content. The background will remain fixed
          while the content scrolls.
        </p>
        <p>
          This is the second page content. The background will remain fixed
          while the content scrolls.
        </p>
        <p>
          This is the second page content. The background will remain fixed
          while the content scrolls.
        </p>
        <p>
          This is the second page content. The background will remain fixed
          while the content scrolls.
        </p>
        <p>
          This is the second page content. The background will remain fixed
          while the content scrolls.
        </p>
        {/* Add more content to enable scrolling */}
      </Content>
    </FixedBackgroundWrapper>
  );
};

export default FixedBackground;
