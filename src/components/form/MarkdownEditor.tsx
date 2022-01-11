import React, { TextareaHTMLAttributes, useEffect, useState } from 'react';

import ReactMarkdown from 'react-markdown';
import styled, { CSSProp } from 'styled-components';

import { Textarea } from './Textarea';
import { BREAKPOINTS } from 'constants/css-variables';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  customCSS?: CSSProp;
}

export const MarkdownEditor: React.FC<Props> = ({ value, label, customCSS, ...textareaProps }) => {
  const [preview, setPreview] = useState<string>('');

  useEffect(() => {
    if (value) {
      setPreview(`${value}`);
    }
  }, [value, setPreview]);

  return (
    <>
      {label}
      <MarkdownEditorContainer customCSS={customCSS}>
        <Column>
          <span>Edit</span>
          <StyledTextarea value={value} {...textareaProps} />
        </Column>
        <Column>
          <span>Preview</span>
          <Preview>{preview}</Preview>
        </Column>
      </MarkdownEditorContainer>
    </>
  );
};

const MarkdownEditorContainer = styled.div<{ customCSS?: CSSProp }>`
  ${(props) => props.customCSS}

  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: ${BREAKPOINTS.medium}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 10rem;
`;

const Preview = styled(ReactMarkdown)`
  word-break: break-all;
  background-color: var(--color-muted);
  padding: 0.5rem;
  flex: 1;
`;

const StyledTextarea = styled(Textarea)`
  flex: 1;
`;
