import React, { useState } from "react";
import styled from "styled-components";
import { iMainCard } from "./MainCard";

const FrontCardWrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

function FrontCardContents(props: iMainCard) {
  const AllContactInfo = props.contactInfo.map((contactInfo, index) => {
    return <ContactInfo key={index}>{contactInfo}</ContactInfo>;
  });

  return (
    <FrontCardWrapper>
      <ProfilePicture src={props.imageURL} />
      <NameText>{props.name}</NameText>
      <TitleText>{props.title}</TitleText>
      <ContactInfoSection>{AllContactInfo}</ContactInfoSection>
    </FrontCardWrapper>
  );
}

export default FrontCardContents;
