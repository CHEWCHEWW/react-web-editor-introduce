import dynamic from "next/dynamic";
import React from "react";
import styled from "styled-components";

import { HOOK_USAGE_EXAMPLE } from "../../constants/codeExample";
import MainSentence from "../shared/MainSentence";
import SubSentence from "../shared/SubSentence";

const CodeEditor = dynamic(
  () => import("../../components/CodeEditor"),
  { ssr: false }
);

const HookSection: React.FC = (): React.ReactElement => {
  return (
    <Wrapper>
      <CodeSection>
        <MessageWrapper>
          <MainSentence>Customize your component using hook</MainSentence>
          <SubSentence>You can import single feature hook.</SubSentence>
          <SubSentence>It provides simple process to generate your own component.</SubSentence>
          <SubSentence>You can generate web builder application using these hooks</SubSentence>
        </MessageWrapper>
        <CodeEditorWrapper>
          <CodeEditor code={HOOK_USAGE_EXAMPLE} />
        </CodeEditorWrapper>
      </CodeSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 40rem;
  background-color: #f5f0ee;
  margin: 12rem 0 0 0;
`;

const CodeSection = styled.section`
  display: flex;
  width: 64rem;
  height: 33rem;
  margin: 3rem 0 0 0;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: -1rem 3rem 0 0;
`;

const CodeEditorWrapper = styled.div`
  width: 90%;
  margin: 0 0 0 2rem;
`;

export default HookSection;
