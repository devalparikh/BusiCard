import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";
import FrontCardContents from "./FrontCardContents";
import BackCardContents from "./BackCardContents";

export interface iMainCard {
  imageURL: string;
  name: string;
  title: string;
  contactInfo: Array<string>;
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  width: 350px;
  height: 550px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 30px;
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

const TempEditButton = styled.button`
  margin: 60px;
`;

function MainCard(props: iMainCard) {
  useEffect(() => {
    setBackCard(localStorage.getItem("backCardBusiCard") || "");
  }, []);

  const [isFlipped, setIsFlipped] = useState(false);
  const flipCard = () => {
    !editMode && setIsFlipped(!isFlipped);
  };

  const [backCard, setBackCard] = useState("");
  const saveBackCardData = () => {
    localStorage.setItem("backCardBusiCard", backCard);
  };

  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => {
    editMode && saveBackCardData();
    setEditMode(!editMode);
  };

  return (
    <CardWrapper>

      <ReactCardFlip isFlipped={isFlipped}>
        <Card onClick={flipCard}>
          <FrontCardContents {...props} />
          {!editMode && <FlipText>click to flip!</FlipText>}
        </Card>
        <Card onClick={flipCard}>
          <BackCardContents
            backCard={backCard}
            setBackCard={setBackCard}
            editMode={editMode}
          />
        </Card>
      </ReactCardFlip>

      <TempEditButton onClick={toggleEditMode}>
        {editMode ? "save" : "edit"}
      </TempEditButton>
      
    </CardWrapper>
  );
}

export default MainCard;
