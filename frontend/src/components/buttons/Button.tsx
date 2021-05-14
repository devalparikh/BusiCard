import React from "react";
import styled from "styled-components";
import BootstrapButton, { ButtonProps } from "react-bootstrap/Button";

export interface iButton extends ButtonProps {
  onClick?(): any;
  children?: string;
}

const BasicButton = styled(BootstrapButton)<iButton>`
  text-align: center;
  transition: all 0.2s;
  padding: 10px 20px;
  margin: 20px;
  margin: ${(props) => props.margin};
`;

function Button(props: iButton) {
  return (
    <BasicButton {...props} onClick={props.onClick}>
      {props.children}
    </BasicButton>
  );
}

Button.defaultProps = {
  variant: "dark",
};

export default Button;
