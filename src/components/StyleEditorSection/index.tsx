import dynamic from "next/dynamic";
import React from "react";
import { EditableBoard, StyleEditorBlock } from "react-web-editor";
import styled from "styled-components";

import { STYLE_EDITOR_BLOCK } from "../../constants/codeExample";
import EditorSectionPhrase from "../EditorSectionPhrase";

interface CircleProps {
  color: string
}

const CodeEditor = dynamic(
  () => import("../../components/CodeEditor"),
  { ssr: false }
);

const StyleEditorSection: React.FC = (): React.ReactElement => {
  return (
    <EditorSection>
      <EditorSectionPhrase />
      <Content>
        <EditorCardWrapper>
          <EditableBoard
            unit={"rem"}
            width={30}
            height={22}
            backgroundColor={"#f8f3ee"}
          >
            <StyleEditorBlock
              width={9}
              height={9}
              left={2}
              top={1}
              parentStyle={{ width: 30, height: 22 }}
              unit={"rem"}
              initialColor={"#00ff0000"}
            >
              <Circle color={"#F2BFB5"} />
            </StyleEditorBlock>
            <StyleEditorBlock
              width={7}
              height={7}
              left={8}
              top={2}
              parentStyle={{ width: 30, height: 22 }}
              unit={"rem"}
              initialColor={"#00ff0000"}
            >
              <Circle color={"#f0df93"} />
            </StyleEditorBlock>
            <StyleEditorBlock
              width={9}
              height={9}
              left={18}
              top={10}
              parentStyle={{ width: 30, height: 22 }}
              unit={"rem"}
              initialColor={"#00ff0000"}
            >
              <Circle color={"#7bc0d1"} />
            </StyleEditorBlock>
            <StyleEditorBlock
              width={5}
              height={5}
              left={15}
              top={16}
              parentStyle={{ width: 30, height: 22 }}
              unit={"rem"}
              initialColor={"#00ff0000"}
            >
              <Circle color={"#b488dd"} />
            </StyleEditorBlock>
          </EditableBoard>
        </EditorCardWrapper>
        <CodeEditorWrapper>
          <CodeEditor code={STYLE_EDITOR_BLOCK} />
        </CodeEditorWrapper>
      </Content>
    </EditorSection>
  );
};

const EditorSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60rem;
  height: 60rem;
  margin: 10rem 0 0 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  margin: 6rem 0 0 0;
`;

const EditorCardWrapper = styled.div`
  display: flex;
  width: 45%;
  margin: 0.4rem 0 0 -3rem;
  border-radius: 20px;
`;

const CodeEditorWrapper = styled.div`
  width: 55%;
  height: 20rem;
  margin: -2rem 0 0 2.4rem;
  z-index: -1;
`;

const Circle = styled.div<CircleProps>`
  width: 100%;
  height: 100%;
  border-radius: 70px;
  background-color: ${({ color }) => color};
  position: absolute;
`;

export default StyleEditorSection;
