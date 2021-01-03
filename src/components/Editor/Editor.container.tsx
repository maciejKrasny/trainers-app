import { Card } from '@material-ui/core';
import { ContentBlock, ContentState, convertFromHTML, convertToRaw, Editor as DraftEditor, Editor as EditorRef, EditorState, RawDraftContentState } from 'draft-js';
import React, { useState } from 'react';
import {} from 'draft-js-plugins-utils';
import { useDispatch } from 'react-redux';
import * as postThunks from '../../redux/modules/Posts/thunks';
import Editor from './Editor';
import { renderBlock } from './MediaComponent';
import { uuid } from 'uuidv4';
import { stateToHTML } from 'draft-js-export-html';

interface EditorProps {
  content?: string;
  creator?: number;
}

const EditorContainer: React.FC<EditorProps> = ({ content, creator }) => {
  const dispatch = useDispatch();

  const handleOnSubmitContent = (data: EditorState) => {
    dispatch(postThunks.addPost({
      id: uuid(),
      creator: creator || -1,
      content: stateToHTML(data.getCurrentContent()),
      type: 'POST',
      title: 'title'
    }));
  }
  if (!content) {
    return (
      <Editor onClickSubmit={handleOnSubmitContent} />
    );
  }
  
  const blocksFromHTML = convertFromHTML(content);
  const state = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap,
  );

const contentWithProto = EditorState.createWithContent(state);
  const customRenderBlock = (contentBlock: ContentBlock) => {
    return renderBlock(contentBlock, contentWithProto);
  }

  return (
    <Card style={{ padding: '2rem', marginTop: '2rem' }}>
      <DraftEditor editorState={contentWithProto} blockRendererFn={customRenderBlock} onChange={() => { }} readOnly />
    </Card>
  );
};

export default EditorContainer;
