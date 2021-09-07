import React from "react";
import styled from "@emotion/styled";
import { FiGithub, FiTwitter, FiCodepen } from "react-icons/fi";
import quotes from "../../static/quotes.png";
import { keyframes } from "@emotion/react";

const Container = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  background-repeat: no-repeat;
  padding: 20px;
`;

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

const slideRight = keyframes`
from {
  opacity: 0;
  transform: translateX(-30px);
}
to {
  opacity: 1;
  transform: translateX(0px);
}
`;

const HeaderContent = styled.div`
  font-size: 3rem;
  margin-top: 40px;
  margin-left: 20px;
  animation: ${slideUp} 1s cubic-bezier(0.61, 0.11, 0.27, 0.89);
`;
const HeadingWrap = styled.div`
  margin-top: 20px;
`;
const LineIconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  animation: ${slideRight} 1s cubic-bezier(0.61, 0.11, 0.27, 0.89);
`;

const Line = styled.div`
  height: 2px;
  width: 175px;
  background-color: gray;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: gray;
  margin-top: 0;
  width: 200px;
`;
const Heading = () => {
  return (
    <Container style={{ backgroundImage: `url(${quotes})` }}>
      <HeadingWrap>
        <LineIconWrapper>
          <Line />
          <Icons>
            <FiGithub style={{ margin: "0", height: "25px", width: "25px" }} />
            <FiCodepen style={{ margin: "0", height: "25px", width: "25px" }} />
            <FiTwitter style={{ margin: "0", height: "25px", width: "25px" }} />
          </Icons>
        </LineIconWrapper>
        <HeaderContent>
          <span>
            Hi there, I'm Chris.
            <br />
          </span>
          <span>
            Front End{" "}
            <span style={{ color: "rgb(180, 224, 232)" }}>Developer</span>,
            <br />
          </span>
          <span>student and experimenter.</span>
        </HeaderContent>
      </HeadingWrap>
    </Container>
  );
};

export default Heading;
