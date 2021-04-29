import React, { useState } from 'react';
import styled from "styled-components";
import BootstrapButton from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';
import FrontCardContents from './FrontCardContents';

interface iMainCard {
    imageURL: string;
    name: string;
    title: string;
    contactInfo: Array<string>;
}

function MainCard(props: iMainCard) {

    const Card = styled.div`
        width: 350px;
        height: 550px;
        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 30px;
        padding: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.2);

        &:hover {
            transition: 0.5s ease;
            box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.4);
        }
    `;

    const FlipText = styled.p`
        color: dimgray;
        bottom: -10%;
        position: absolute;
        visibility: hidden;
        opacity: 0;

        ${Card}:hover & {
            visibility: visible;
            opacity: 1;
            transition: visibility 0s, opacity 4s ease;

        }
    `;

    const ContactInfoSection = styled.div`
        margin: 60px 0px 20px 0px;
    `;

    const ContactInfo = styled.p`
        color: dimgray
    `;

    const AllContactInfo = props.contactInfo.map((contactInfo, index) => {
        return (<ContactInfo key={index}>{contactInfo}</ContactInfo>);
    });

    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <Card onClick={handleClick}>
                    <FrontCardContents {...props} />
                    <FlipText>click to flip!</FlipText>
                </Card>
                <Card onClick={handleClick}>
                    <ContactInfoSection>{AllContactInfo}</ContactInfoSection>
                </Card>
            </ReactCardFlip>
        </>
    );
}
MainCard.defaultProps = {
};

MainCard.propTypes = {
};

export default MainCard;