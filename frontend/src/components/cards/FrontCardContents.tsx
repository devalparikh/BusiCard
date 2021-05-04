import React from "react";
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

function FrontCardContents({ contactInfo, imageURL, name, title }: iMainCard) {
  const AllContactInfo = contactInfo.map((contactInfo, index) => {
    return <ContactInfo key={index}>{contactInfo}</ContactInfo>;
  });

  return (
    <FrontCardWrapper>
      <ProfilePicture src={imageURL} />
      <NameText>{name}</NameText>
      <TitleText>{title}</TitleText>
      <ContactInfoSection>{AllContactInfo}</ContactInfoSection>
    </FrontCardWrapper>
  );
}

export default FrontCardContents;
