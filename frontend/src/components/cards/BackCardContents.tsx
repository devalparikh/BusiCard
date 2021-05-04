import React from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import styled from "styled-components";
// @ts-ignore
import MagicUrl from "quill-magic-url";
Quill.register("modules/magicUrl", MagicUrl, true);

interface iBackCardContents {
  backCard: any;
  setBackCard: (value: any) => void;
  editMode?: boolean;
}

const BackCardWrapper = styled.div`
  text-align: left;
  height: 100%;
  .ql-toolbar.ql-snow {
    border: none;
  }
  .ql-container.ql-snow {
    height: auto;
    border: none;
  }
  .ql-editor {
    height: 460px;
    overflow-y: scroll;
  }
`;

const TextEditor = ({ backCard, setBackCard }: iBackCardContents) => (
  <ReactQuill
    theme="snow"
    value={backCard}
    onChange={setBackCard}
    modules={{
      magicUrl: true,
      toolbar: [
        ["bold", "italic", "underline", "link"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
      ],
    }}
  />
);

function BackCardContents({
  backCard,
  setBackCard,
  editMode,
}: iBackCardContents) {
  return (
    <BackCardWrapper>
      {editMode ? (
        <TextEditor backCard={backCard} setBackCard={setBackCard} />
      ) : (
        <ReactQuill theme="bubble" value={backCard} readOnly />
      )}
    </BackCardWrapper>
  );
}

BackCardContents.defaultProps = {
  editMode: false,
};

export default BackCardContents;
