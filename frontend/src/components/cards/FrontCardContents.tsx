import React, { useState } from "react";
import styled from "styled-components";
import BootstrapButton from "react-bootstrap/Button";
import PropTypes from "prop-types";
import ReactCardFlip from "react-card-flip";
import { iMainCard } from "./MainCard";
function FrontCardContents(props: iMainCard) {
  const ProfilePicture = styled.img`
    width: 120px;
    height: 120px;
    background: #ffffff;
    border-radius: 50%;
    margin: 20px;
  `;

  const NameText = styled.h1`
    font-weight: 700;
    font-size: 20px;
  `;

  const TitleText = styled.h1`
    font-weight: 400;
    font-size: 14px;
  `;

  const ContactInfoSection = styled.div`
    margin: 60px 0px 20px 0px;
  `;

  const ContactInfo = styled.p`
    color: dimgray;
  `;

  const AllContactInfo = props.contactInfo.map((contactInfo, index) => {
    return <ContactInfo key={index}>{contactInfo}</ContactInfo>;
  });

  return (
    <>
      <ProfilePicture src={props.imageURL} />
      <NameText>{props.name}</NameText>
      <TitleText>{props.title}</TitleText>
      <ContactInfoSection>{AllContactInfo}</ContactInfoSection>
    </>
  );
}

export default FrontCardContents;
