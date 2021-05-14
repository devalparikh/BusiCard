import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";
import FrontCardContents from "./FrontCardContents";
import BackCardContents from "./BackCardContents";
import EditButton from "../buttons/EditButton";

export interface iMainCard {
  imageURL: string;
  name: string;
  title: string;
  contactInfo: Array<string>;
  editMode?: boolean;
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

function MainCard({editMode, ...props}: iMainCard) {
  useEffect(() => {
    setBackCard(localStorage.getItem("backCardBusiCard") || "");
  }, []);

  useEffect(() => {
    editMode && saveBackCardData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editMode]);

  const [isFlipped, setIsFlipped] = useState(false);
  const flipCard = () => {
    !editMode && setIsFlipped(!isFlipped);
  };

  const [backCard, setBackCard] = useState("");
  const saveBackCardData = () => {
    localStorage.setItem("backCardBusiCard", backCard);
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
      
    </CardWrapper>
  );
}

MainCard.defaultProps = {
  editMode: false,
};

export default MainCard;
