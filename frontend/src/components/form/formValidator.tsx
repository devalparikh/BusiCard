import styled from "styled-components";

const ErrorText = styled.div`
  text-align: left;
  color: #f55858;
  /* font-weight: 300; */
  font-size: 15px;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 5px;
`;

export const handleFormValidation = (
  input_name: string,
  error_type: string
) => {
  switch (error_type) {
    case "maxLength":
      return <ErrorText>{input_name} character length exceeded</ErrorText>;
    case "required":
      return <ErrorText>{input_name} is required</ErrorText>;
    case "pattern":
      return (
        <ErrorText>{input_name} needs to be a valid email address</ErrorText>
      );
    case "minLength":
      return (
        <ErrorText>
          {input_name} needs to be greater than 3 characters and less than 20
          characters.
        </ErrorText>
      );
    case "validate":
      return <ErrorText> {input_name} needs to match</ErrorText>;
    case "backend":
      return <ErrorText> {input_name} </ErrorText>;

    // Extensions go here

    default:
      break;
  }
};
