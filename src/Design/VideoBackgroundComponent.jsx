import React from "react";
import styled from "styled-components";
import vide from "../Images/vid.mp4";
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
          src={vide}
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
