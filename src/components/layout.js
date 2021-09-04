import React from "react";
import { Global, css } from "@emotion/react";
import Credit from "../components/credit";

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: black;
            font-family: "Helvetica", sans-serif;
            font-size: 18px;
            line-height: 1.4;
          }
          > div {
            margin-top: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }

          li {
            margin-top: 0.25rem;
          }
        `}
      />
      <Credit />
      <main
        css={css`
          margin: 2rem auto 4rem;
          max-width: 90vw;
          width: 950px;
          display: block;
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
