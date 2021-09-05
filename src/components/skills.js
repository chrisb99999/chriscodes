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

const Skills = () => {
  return (
    <Wrapper>
      <h1>Skills</h1>
      <LogoContainer>
        <SiJavascript style={{ height: "40px", width: "40px" }} />
        <IoLogoNodejs style={{ height: "40px", width: "40px", margin: 0 }} />
        <IoLogoCss3 style={{ height: "40px", width: "40px", margin: 0 }} />
        <IoLogoHtml5 style={{ height: "40px", width: "40px", margin: 0 }} />
      </LogoContainer>
      <LogoContainer>
        <IoLogoReact style={{ height: "40px", width: "40px", margin: 0 }} />
        <SiStyledComponents
          style={{ height: "40px", width: "40px", margin: 0 }}
        />
        <SiMongodb style={{ height: "40px", width: "40px", margin: 0 }} />
        <SiGithub style={{ height: "40px", width: "40px", margin: 0 }} />
      </LogoContainer>
    </Wrapper>
  );
};

export default Skills;
