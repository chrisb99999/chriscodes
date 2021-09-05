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
  width: 1200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  animation: ${slideUp} 1s 0.3s ease forwards;
  opacity: 0;
  transition: 0.5s ease-in-out;
`;

const Overlay = styled.div`
  opacity: 0;
  position: absolute;
  transition: 0.5s ease-in-out;
  background: #d1d1d1;
  padding: 10px;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 20px;
  transition: 0.5s ease-in-out;

  &:hover ${Overlay} {
    opacity: 0.7;
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
