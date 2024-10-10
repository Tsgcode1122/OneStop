import React from "react";
import styled from "styled-components";

// Wrapper for the whole section
const VideoBackgroundWrapper = styled.div`
  position: relative;
  height: 40vh;

  /* overflow-y: scroll; */
  scrollbar-width: none; /* Firefox: Hide scrollbar */
  -ms-overflow-style: none; /* IE and Edge: Hide scrollbar */
  /* For WebKit-based browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    display: none; /* Hides scrollbar */
  }
`;

// Video element styles
const VideoBackground = styled.video`
  position: absolute;

  width: 100vw;
  height: auto;
  object-fit: cover;
  z-index: -1;
  pointer-events: none;
`;

// Content that will scroll over the video
const Content = styled.div`
  padding: 50px;

  color: white;
`;

const VideoBackgroundComponent = () => {
  return (
    <>
      <VideoBackgroundWrapper>
        <VideoBackground
          src="https://res.cloudinary.com/dhl0zyg5k/video/upload/v1724037926/RPReplay_Final1723980500_2_a0pd3z.mov"
          muted
          autoPlay
          loop
          playsInline
        ></VideoBackground>
        <Content></Content>
      </VideoBackgroundWrapper>
    </>
  );
};

export default VideoBackgroundComponent;
