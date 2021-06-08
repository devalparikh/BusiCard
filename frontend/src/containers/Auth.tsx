import React from "react";
import AuthCard from "../components/cards/AuthCard";
import styled from "styled-components";

export enum AuthTypes {
  Login,
  Signup,
}

export interface iAuth {
  type: AuthTypes;
}

const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4em 0 4em 0;
`;

const Auth = (props: iAuth) => {
  return (
    <AuthWrapper>
      <AuthCard {...props} />
    </AuthWrapper>
  );
};

export default Auth;
