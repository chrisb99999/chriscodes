import React from "react";
import styled from "@emotion/styled";
import office from "../../static/office.jpeg";
import { keyframes } from "@emotion/react";

const slideUp = keyframes`
from {
  opacity: 0;
  transform: translateY(30px);
}
to {
  opacity: 1;
  transform: translateY(0px);
}
`;

const LandingImage = styled.div`
  height: 400px;
  width: 900px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  animation: ${slideUp} 1s cubic-bezier(0.61, 0.11, 0.27, 0.89);
  opacity: 1;
  transition: 0.5s ease-in-out;

  &:hover {
    opacity: 0.2;
  }
`;

const Overlay = styled.div`
  opacity: 0;
  position: absolute;
  /* background: #d3d3d3; */
  transition: 0.5s ease-in-out;
  padding: 20px;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  &:hover ${Overlay} {
    opacity: 1;
  }
  &:hover ${LandingImage} {
    opacity: 0.2;
  }
`;

const Image = () => {
  return (
    <Container>
      <LandingImage style={{ backgroundImage: `url(${office})` }} />
      <Overlay>
        {" "}
        <a
          style={{ textDecoration: "none", color: "black" }}
          href="https://unsplash.com/@getrodeo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Photo Credit
        </a>{" "}
      </Overlay>
    </Container>
  );
};

export default Image;
