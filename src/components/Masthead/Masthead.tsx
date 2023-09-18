import React, { FC } from "react";
import styled from "styled-components";
import analytics from "../../analytics";

const MastheadStyles = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 16px;
  border-top-left-radius: 8px;
  background: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.2)
  );

  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  color: #fff;


  .link {
    text-decoration: none;
    font-weight: 700;
    color: #fff;
    opacity: 0.5;
    transition: opacity 120ms ease;
  }

  &:hover .link {
    opacity: 1;
  }
`;

const Masthead: FC = () => {
  return (
    <MastheadStyles>
      Made by Gaurav Khater
    </MastheadStyles>
  );
};

export default Masthead;
