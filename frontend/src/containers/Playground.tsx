import React from 'react';
import styled from "styled-components";

interface iPlayground {
    test: false;
}

function Playground(props: iPlayground) {
    // Create a Title component that'll render an <h1> tag with some styles
    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    `;

    // Create a Wrapper component that'll render a <section> tag with some styles
    const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
    `;

    const Button = styled.button<any>`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    &:hover {
        background: black;
    }
    `;

    const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: palevioletred;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    `;

    const Wrapper2 = styled.section`
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
        content: '◀';
        margin: 0 10px;
    }
    `;

    return (
        <div className="App">
            <Wrapper>
                <Title> Hello World! </Title>
            </Wrapper>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
            <Wrapper2>
                <Input placeholder="type something" />
            </Wrapper2>
            <Link href="#">
                <Icon viewBox="0 0 20 20">
                    <path d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z" />
                </Icon>
                <Label>Hovering my parent changes my style!</Label>
            </Link>
        </div>
    );
}

export default Playground;