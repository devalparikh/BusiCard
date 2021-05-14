import React from "react";
import styled from "styled-components";
import Button, { iButton } from "./Button";

const StyledEditButton = styled(Button)`
  background: #ffffff;
  color: #343a40;
  border: none;
  width: 200px;
  height: 60px;
`;

function EditButton(props: iButton) {
  return <StyledEditButton {...props} />;
}

export default EditButton;
