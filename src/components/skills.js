import React from "react";
import styled from "@emotion/styled";
import { IoLogoNodejs, IoLogoCss3, IoLogoHtml5 } from "react-icons/io";

import { IoLogoReact } from "react-icons/io5";

import {
  SiStyledComponents,
  SiGithub,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";

const Wrapper = styled.div`
  padding: 20px;
  margin-top: 100px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding: 20px;
`;

const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;

  width: 150px;
`;

const LogoText = styled.p`
  font-size: 0.75rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

const Skills = () => {
  return (
    <Wrapper>
      <h1>Skills</h1>
      <LogoContainer>
        <LogoWrap>
          <SiJavascript style={{ height: "40px", width: "40px" }} />
          <LogoText>Javascript</LogoText>
        </LogoWrap>

        <LogoWrap>
          <IoLogoNodejs style={{ height: "40px", width: "40px", margin: 0 }} />
          <LogoText>Node.js</LogoText>
        </LogoWrap>

        <LogoWrap>
          <IoLogoCss3 style={{ height: "40px", width: "40px", margin: 0 }} />
          <LogoText>CSS3</LogoText>
        </LogoWrap>

        <LogoWrap>
          <IoLogoHtml5 style={{ height: "40px", width: "40px", margin: 0 }} />
          <LogoText>HTML5</LogoText>
        </LogoWrap>
      </LogoContainer>

      <LogoContainer>
        <LogoWrap>
          <IoLogoReact style={{ height: "40px", width: "40px", margin: 0 }} />
          <LogoText>React.js</LogoText>
        </LogoWrap>

        <LogoWrap>
          <SiStyledComponents
            style={{ height: "40px", width: "40px", margin: 0 }}
          />
          <LogoText>Styled Components</LogoText>
        </LogoWrap>

        <LogoWrap>
          <SiMongodb style={{ height: "40px", width: "40px", margin: 0 }} />
          <LogoText>MongoDB</LogoText>
        </LogoWrap>

        <LogoWrap>
          <SiGithub style={{ height: "40px", width: "40px", margin: 0 }} />
          <LogoText>Github</LogoText>
        </LogoWrap>
      </LogoContainer>
    </Wrapper>
  );
};

export default Skills;
