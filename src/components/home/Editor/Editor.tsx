import * as React from "react";
import { EditorContext } from "./EditorContext";
import {
  Box,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  Button
} from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import { Title, AddAPhoto, Link, Check } from "@material-ui/icons";
import {
  Editor,
  EditorState,
  getVisibleSelectionRect,
  CompositeDecorator,
  AtomicBlockUtils,
  ContentBlock,
  RichUtils,
} from "draft-js";
import draftUtils from "draft-js-plugins-utils";
import { linkStrategy } from "./linkStrategy";
import { DecoratedLink } from "./DecoratedLink";
import { renderBlock } from "./MediaComponent";
import { HeaderContainer } from "./Editor.styled";

interface EditorComponentProps {
  readOnly?: boolean;
  onClickSubmit: (value: EditorState) => void;
}

const EditorComponent: React.FC<EditorComponentProps> = ({ onClickSubmit, readOnly }) => {
  const editor = React.useRef<Editor>(null);
  const [anchorElUrl, setAnchorElUrl] = React.useState<string>("");
  const [toggleButtonGroupValue, setToggleButtonGroupValue] = React.useState<
    string | null
  >(null);

  const [editorState, setEditorState] = React.useState<EditorState>(
    EditorState.createEmpty(
      new CompositeDecorator([
        {
          strategy: linkStrategy,
          component: DecoratedLink
        }
      ])
    )
  );

  const [selectionRect, setSelectionRect] = React.useState<{
    left: number;
    width: number;
    right: number;
    top: number;
    bottom: number;
    height: number;
  }>({ left: 0, width: 0, right: 0, top: 0, bottom: 0, height: 0 });

  const focusEditor = React.useCallback(() => {
    if (editor.current) {
      editor.current.focus();
    }
  }, [editor]);

  const handleToggleButtonGroup = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    value: string
  ) => {
    event.stopPropagation();
    event.preventDefault();
    setToggleButtonGroupValue(value);

    if (!value) {
      setToggleButtonGroupValue(null);
    }

    switch (value || toggleButtonGroupValue) {
      case "header-one":
        setEditorState(
          RichUtils.toggleBlockType(editorState, "header-one")
        );
        break;
      case "insert-image":
        //@ts-ignore
        document.getElementById("fileInput").click();
        setToggleButtonGroupValue("null");
        break;
      case "insert-link":
        break;
      default:
        setToggleButtonGroupValue(null);
        break;
    }
  };

  const customRenderBlock = (contentBlock: ContentBlock) => {
    return renderBlock(contentBlock, editorState);
  }

  React.useEffect(() => {
    if (getVisibleSelectionRect(window) !== null) {
      setSelectionRect(getVisibleSelectionRect(window));
    }
  }, [editorState, setSelectionRect]);

  return (
    <Box pt={2}>
      <Box >
        <HeaderContainer mb={2}>
          <ToggleButtonGroup
            exclusive
            onChange={handleToggleButtonGroup}
            value={toggleButtonGroupValue}
          >
            <ToggleButton value="header-one">
              <Title />
            </ToggleButton>
            <ToggleButton value="insert-image">
              <AddAPhoto />
            </ToggleButton>
            <ToggleButton
              value="insert-link"
              disabled={editorState.getSelection().isCollapsed()}
            >
              <Link />
            </ToggleButton>
          </ToggleButtonGroup>
          <Button variant="contained" color="primary" onClick={() => {
            onClickSubmit(editorState);
            setEditorState(EditorState.createEmpty());
          }
          }>Zatwierdź</Button>
        </HeaderContainer>
        <Box>
          <Paper style={{ minHeight: "144px" }}>
            <Box onClick={focusEditor} p={4}>
              <EditorContext.Provider value={editorState}>
                <Editor
                  editorState={editorState}
                  onChange={setEditorState}
                  placeholder="Kliknij tutaj i zacznij pisać nowy post..."
                  blockRendererFn={customRenderBlock}
                  ref={editor}
                />
              </EditorContext.Provider>
            </Box>
          </Paper>
        </Box>
      </Box>
      <Box
        style={{
          position: "absolute",
          top: selectionRect.top,
          left: selectionRect.right + 12,
          background: "#FFF",
          display: toggleButtonGroupValue === "insert-link" ? "block" : "none"
        }}
      >
        <TextField
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton
                  onClick={() => {
                    setEditorState(
                      draftUtils.createLinkAtSelection(editorState, anchorElUrl)
                    );
                    setToggleButtonGroupValue(null);
                  }}
                >
                  <Check />
                </IconButton>
              </InputAdornment>
            )
          }}
          placeholder="https://"
          value={anchorElUrl}
          onChange={e => setAnchorElUrl(e.target.value)}
        />
      </Box>
      <input
        id="fileInput"
        style={{ display: "none" }}
        type="file"
        accept="image/png,image/jpeg,image/jpg,image/gif"
        onChange={event => {
          const reader = new FileReader();
          reader.addEventListener(
            "load",
            function () {
              const contentStateWithEntity = editorState
                .getCurrentContent()
                .createEntity("IMAGE", "IMMUTABLE", { src: reader.result });
              setEditorState(
                AtomicBlockUtils.insertAtomicBlock(
                  EditorState.set(editorState, {
                    currentContent: contentStateWithEntity
                  }),
                  contentStateWithEntity.getLastCreatedEntityKey(),
                  " "
                )
              );
            },
            false
          );
          if (event.target.files) {
            reader.readAsDataURL(
              Array.prototype.slice.call(event.target.files)[0]
            );
          }
        }}
      />
    </Box>
  );
}


export default EditorComponent;