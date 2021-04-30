import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import 'react-quill/dist/quill.bubble.css'
import styled from "styled-components";
import Parser from "html-react-parser";
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

const TextEdit = styled(ReactQuill)``;

const ViewBackCardData = styled.div`
  padding: 70px 20px 20px 20px;
  height: inherit;
  overflow-y: scroll;
`;

function BackCardContents({
  backCard,
  setBackCard,
  editMode,
}: iBackCardContents) {
  return (
    <BackCardWrapper>
      {editMode ? (
        <TextEdit
          theme="snow"
          value={backCard}
          onChange={setBackCard}
          modules={{
            magicUrl: true,
            toolbar: [
                ['bold', 'italic', 'underline', 'link'],
                // ['blockquote', 'code-block'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ color: [] }, { background: [] }],
                // ['clean'],
                [{ align: [] }]
              ]
          }}
        />
      ) : (
        // <ViewBackCardData>{Parser(backCard as string)}</ViewBackCardData>
        <TextEdit theme="bubble" value={backCard} readOnly />
      )}
    </BackCardWrapper>
  );
}

BackCardContents.defaultProps = {
  editMode: false,
};

export default BackCardContents;
