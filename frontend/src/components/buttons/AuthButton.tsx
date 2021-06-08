import React from "react";
import styled from "styled-components";
import Button, { iButton } from "./Button";

const StyledAuthButton = styled(Button)`
  background: #343a40;
  color: #ffffff;
  border: none;
  width: 200px;
  height: 60px;
  margin: 20px 0px 2px 0px;
  &:hover {
    width: 220px;
  }
`;

function AuthButton(props: iButton) {
  return <StyledAuthButton {...props} />;
}

export default AuthButton;
