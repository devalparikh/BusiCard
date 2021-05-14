import React, { useState } from "react";
import styled from "styled-components";
import EditButton from "../components/buttons/EditButton";
import ShareButton from "../components/buttons/ShareButton";
import MainCard from "../components/cards/MainCard";

interface iPlayground {
  test: false;
}

const Wrapper = styled.section`
  padding: 4em 0 4em 0;
`;

const CenterWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonGroupWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
`;

function Playground(props: iPlayground) {
  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };
  return (
    <div className="App">
      <Wrapper>
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
            editMode={editMode}
          />
        </CenterWrapper>
        <ButtonGroupWrapper>
          <EditButton onClick={toggleEditMode}>
            {editMode ? "Save" : "Edit"}
          </EditButton>
          <ShareButton>Share</ShareButton>
        </ButtonGroupWrapper>
      </Wrapper>
    </div>
  );
}

export default Playground;
