import React from "react";
import styled from "styled-components";
import BootstrapButton from "react-bootstrap/Button";
import Button from '../components/buttons/Button';
import MainCard from "../components/cards/MainCard";

interface iPlayground {
  test: false;
}

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em 0 4em 0;
  background: #e5e5e5;
`;

// const Button = styled(BootstrapButton)<any>`
//   /* Adapt the colors based on primary prop */
//   background: ${(props) => (props.primary ? "palevioletred" : "white")};
//   color: ${(props) => (props.primary ? "white" : "palevioletred")};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
//   &:hover {
//     background: black;
//   }
// `;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const CenterWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: papayawhip;
  color: palevioletred;
`;

const Icon = styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 48px;
  height: 48px;

  ${Link}:hover & {
    fill: rebeccapurple;
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  line-height: 1.2;

  &::before {
    content: "◀";
    margin: 0 10px;
  }
`;

function Playground(props: iPlayground) {
  return (
    <div className="App">
      {/* Example Components */}
      {/* Components we built so far */}
      <Wrapper>
        {/* put navbar here */}
      </Wrapper>
      <Wrapper>
        <Title> Card </Title>
        {/* put card here */}
        <CenterWrapper>
          <MainCard
            imageURL="https://avatars.githubusercontent.com/u/13604973?v=4"
            name="Deval Parikh"
            title="Software Engineer @ BusiCard"
            contactInfo={[
              "123-456-7899",
              "dp@busicard.com",
              "12345 N Tantau Ave, Cupertino, CA 95014",
            ]}
          />
        </CenterWrapper>
      </Wrapper>
      <Wrapper>
        <Title> Buttons </Title>
        {/* put buttons here */}
        <Button> test </Button>
      </Wrapper>
    </div>
  );
}

export default Playground;
