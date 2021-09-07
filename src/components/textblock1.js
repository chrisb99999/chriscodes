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
        Jackdaws love my big sphinx of quartz. Jackdaws love my big sphinx of
        quartz. Jackdaws love my big sphinx of quartz.
        <br /> <br />
        Jackdaws love my big sphinx of quartz. Jackdaws love my big sphinx of
        quartz.
      </Text>
      <Text>
        Jackdaws love my big sphinx of quartz. Jackdaws love my big sphinx of
        quartz. Jackdaws love my big sphinx of quartz.
      </Text>
    </Wrapper>
  );
};

export default TextBlock1;
