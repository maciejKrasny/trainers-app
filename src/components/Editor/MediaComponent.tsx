import { ContentBlock, EditorState } from "draft-js";
import * as React from "react";
//eslint-disable-next-line
export const renderBlock = (contentBlock: ContentBlock, editorState: EditorState) => {
  if (contentBlock.getType() === "atomic") {
    const entityKey = contentBlock.getEntityAt(0);
    const entityData = editorState
    .getCurrentContent()
    .getEntity(entityKey)
    .getData();

    return {
      component: MediaComponent,
      editable: false,
      props: {
        src: { file: entityData.src }
      }
    };
  }
};

export const MediaComponent = ({ blockProps }: any) => {
  const src = blockProps.src;
  if (src.file) {
    return (
      <img
        style={{
          maxWidth: '720px'
        }}
        src={src.file}
        alt="article"
      />
    );
  }
  return null;
};