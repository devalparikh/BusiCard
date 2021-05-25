import React from "react";
import styled from "styled-components";
import Button, { iButton } from "../Button";

const StyledEditButton = styled(Button)`
  margin: 0px;
`;

function AuthButton(props: iButton) {
  return <StyledEditButton variant="outline-dark" {...props} />;
}

export default AuthButton;
