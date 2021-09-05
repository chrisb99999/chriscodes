import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

const Text = styled.p`
  margin: 0;
  color: #555;
  width: 40%;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

const TextBlock1 = () => {
  return (
    <Wrapper>
      <Text>
        Hey, it's Chris. I like coding and things. <br /> <br />
        And more things.
      </Text>
      <Text>Another para.</Text>
    </Wrapper>
  );
};

export default TextBlock1;
