import React from "react";
import styled from "styled-components";
import Button, { iButton } from "./Button";

const StyledShareButton = styled(Button)`
  background: #343a40;
  color: #ffffff;
  border: none;
  width: 200px;
  height: 60px;
`;

function ShareButton(props: iButton) {
  return <StyledShareButton {...props} />;
}

export default ShareButton;
