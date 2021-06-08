import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import lockIcon from "../../images/padlock.svg";
import confirmLockIcon from "../../images/confirmLock.svg";
import userIcon from "../../images/user.svg";
import emailIcon from "../../images/mail.svg";
import { useFetch } from "../../services/useFetch";
import { Spinner } from "react-bootstrap";
import { handleFormValidation } from "../form/formValidator";
import { useHistory } from "react-router";
import { AuthTypes, iAuth } from "../../containers/Auth";
import styled from "styled-components";
import { Card } from "../cards/MainCard";
import AuthButton from "../buttons/AuthButton";

interface Inputs {
  username: string;
  password: string;
  email?: string;
}

interface errObj {
  field: string;
  message: string;
}

const StyledAuthCard = styled(Card)`
  padding: 30px;
`;

const AuthCardTitle = styled.h1`
  font-weight: 200;
  margin: 30px;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const IconAndInput = styled.div`
  position: relative;
  height: 45px;
  & > input {
    padding-left: 38px;
  }
  & > img {
    position: absolute;
    left: 10px;
    width: 20px;
    z-index: 10;
    height: inherit;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  min-height: 45px;
  font-weight: 300;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid transparent;
  background-color: #e5e5e5;
  transition: all 0.2s;
  &:focus {
    outline: 0;
    border: 1px solid grey;
    background-color: white;
  }
`;

const SpinnerWrapper = styled.div`
  text-align: center;
`;

export default function AuthCard(props: iAuth) {
  const [formFieldErrors, setFormFieldErrors] = useState({
    password: "",
    username: "",
    email: "",
  });

  const [isLoading, APIresult, APIerror, fetchAPI, APIStatusCode] = useFetch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  useEffect(() => {
    // Update form errors
    if (!APIresult && APIerror && APIerror.data.errors) {
      APIerror.data.errors.map((errObj: errObj) => {
        return setFormFieldErrors((prevState) => ({
          ...prevState,
          [errObj.field]: errObj.message,
        }));
      });
    }

    if (APIStatusCode === 200) {
      // history.push(`/home`); // Does not refresh
      localStorage.setItem("loggedIn", "true");
      window.location.href = "/profile";
    } else {
      localStorage.removeItem("loggedIn");
    }
  }, [APIresult, APIerror, APIStatusCode]);

  const loginAPICall: SubmitHandler<Inputs> = async (form_data) => {
    setFormFieldErrors({ password: "", username: "", email: "" });

    await fetchAPI({
      method: "post",
      url: "api/users/signin",
      data: form_data,
      withCredentials: true,
    });
  };

  const signupAPICall: SubmitHandler<Inputs> = async (form_data) => {
    setFormFieldErrors({ password: "", username: "", email: "" });

    await fetchAPI({
      method: "post",
      url: "api/users/signup",
      data: form_data,
      withCredentials: true,
    });
  };

  function renderSignUp() {
    return (
      <StyledAuthCard style={{ height: "auto", width: "350px" }}>
        <AuthCardTitle>Sign Up</AuthCardTitle>
        <form onSubmit={handleSubmit(signupAPICall)}>
          <InputContainer>
            <IconAndInput>
              <img src={emailIcon} alt="emailIcon" />
              <StyledInput
                placeholder="Email"
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+\.\S+$/,
                })}
              />
            </IconAndInput>
            {errors.email && handleFormValidation("Email", errors.email.type)}
            {formFieldErrors.email &&
              handleFormValidation(formFieldErrors.email, "backend")}
          </InputContainer>

          <InputContainer>
            <IconAndInput>
              <img src={userIcon} alt="userIcon" />
              <StyledInput
                type="username"
                placeholder="Username"
                {...register("username", { required: true })}
              />
            </IconAndInput>
            {errors.username &&
              handleFormValidation("Username", errors.username.type)}
            {formFieldErrors.username &&
              handleFormValidation(formFieldErrors.username, "backend")}
          </InputContainer>

          <InputContainer>
            <IconAndInput>
              <img src={lockIcon} style={{ width: "16px" }} alt="lockIcon" />
              <StyledInput
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength: 4,
                  maxLength: 20,
                })}
              />
            </IconAndInput>
            {errors.password &&
              handleFormValidation("Password", errors.password.type)}
            {formFieldErrors.password &&
              handleFormValidation(formFieldErrors.password, "backend")}
          </InputContainer>

          <InputContainer>
            <IconAndInput>
              <img
                src={confirmLockIcon}
                style={{ width: "16px" }}
                alt="confirmLockIcon"
              />
              <StyledInput
                type="password"
                placeholder="Confirm Password"
                // @ts-ignore
                {...register("confirmPassword", {
                  required: true,
                  minLength: 4,
                  maxLength: 20,
                  validate: (value) => {
                    return value === watch("password");
                  },
                })}
              />
            </IconAndInput>
            {errors.confirmPassword &&
              handleFormValidation("Passwords", errors.confirmPassword.type)}
            {formFieldErrors.password &&
              handleFormValidation(formFieldErrors.password, "backend")}
          </InputContainer>

          {isLoading ? (
            <SpinnerWrapper className="disabled-submit-button">
              <Spinner size="sm" animation="border" color="#f8f4e3" />
            </SpinnerWrapper>
          ) : (
            <AuthButton type="submit">Sign Up</AuthButton>
          )}
        </form>
        <div
          style={{ textAlign: "center", color: "dimgray", fontSize: "12px" }}
        >
          <span>
            {" "}
            or{" "}
            <a href="login" style={{ color: "dimgray" }}>
              {" "}
              Sign In{" "}
            </a>{" "}
          </span>
        </div>
      </StyledAuthCard>
    );
  }

  function renderLogin() {
    return (
      <StyledAuthCard style={{ height: "auto", width: "350px" }}>
        <AuthCardTitle> Sign In</AuthCardTitle>
        <form onSubmit={handleSubmit(loginAPICall)}>
          <InputContainer>
            <IconAndInput>
              <img src={userIcon} alt="userIcon" />
              <StyledInput
                placeholder="Username"
                {...register("username", { required: true })}
              />
            </IconAndInput>
            {errors.username &&
              handleFormValidation("Username", errors.username.type)}
            {formFieldErrors.username &&
              handleFormValidation(formFieldErrors.username, "backend")}
          </InputContainer>
          <InputContainer>
            <IconAndInput>
              <img src={lockIcon} style={{ width: "16px" }} alt="lockIcon" />
              <StyledInput
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </IconAndInput>
            <div
              style={{
                height: "25px",
                display: "flex",
                position: "relative",
                alignItems: "center",
              }}
            >
              {errors.password &&
                handleFormValidation("Password", errors.password.type)}
              {formFieldErrors.password &&
                handleFormValidation(formFieldErrors.password, "backend")}

              {
                <a
                  style={{
                    position: "absolute",
                    right: "0",
                    color: "dimgray",
                    fontSize: "12px",
                  }}
                  href="forgot-password"
                >
                  {" "}
                  forgot password?{" "}
                </a>
              }
            </div>
          </InputContainer>

          {isLoading ? (
            <SpinnerWrapper>
              <Spinner size="sm" animation="border" color="#f8f4e3" />
            </SpinnerWrapper>
          ) : (
            <AuthButton type="submit">Sign in</AuthButton>
          )}
        </form>
        <div
          style={{ textAlign: "center", color: "dimgray", fontSize: "12px" }}
        >
          <span>
            {" "}
            or{" "}
            <a href="signup" style={{ color: "dimgray" }}>
              {" "}
              create an account{" "}
            </a>{" "}
          </span>
        </div>
      </StyledAuthCard>
    );
  }

  function renderLoading() {
    return (
      <StyledAuthCard
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <SpinnerWrapper>
          <Spinner animation="border" color="#f8f4e3" />
        </SpinnerWrapper>
      </StyledAuthCard>
    );
  }

  return APIStatusCode !== 200 ? (
    props.type === AuthTypes.Login ? (
      renderLogin()
    ) : props.type === AuthTypes.Signup ? (
      renderSignUp()
    ) : (
      <div> Insert correct prop type</div>
    )
  ) : (
    renderLoading()
  );
}
