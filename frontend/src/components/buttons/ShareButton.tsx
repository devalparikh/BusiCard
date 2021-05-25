import React from "react";
import styled from "styled-components";
import Button, { iButton } from "./Button";

const StyledEditButton = styled(Button)`
  background: #343a40;
  color: #ffffff;
  border: none;
  width: 200px;
  height: 60px;
`;

function ShareButton(props: iButton) {
  return <StyledEditButton {...props} />;
}

export default ShareButton;
