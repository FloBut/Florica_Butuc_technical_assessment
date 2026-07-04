//textNode.js

import { useState, useRef, useEffect } from 'react';
import BaseNode from '../components/BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [textAreaHeight, setTextAreaHeight] = useState(96);
  const textareaRef = useRef(null);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };
  useEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = 'auto';

    const newHeight = textarea.scrollHeight;

    setTextAreaHeight(newHeight);
  }, [currText]);

  // Determine the longest line for dynamic width
  const longestLine = Math.max(
    ...currText.split('\n').map((line) => line.length)
  );

  // Dynamic node width (with a maximum)
  const width = Math.min(
    500,
    Math.max(250, longestLine * 8)
  );

  // Dynamic node height
  const height = Math.max(
    120,
    textAreaHeight + 60
  );
  console.log("textAreaHeight:", textAreaHeight);
  console.log("nodeHeight:", height);

  // Find all variables in {{variable}} format
  const variables = [
    ...new Set(
      [...currText.matchAll(/{{\s*([a-zA-Z_$][\w$]*)\s*}}/g)].map(
        (match) => match[1]
      )
    ),
  ];

  // Create an input handle for each variable
  const inputHandles = variables.map((variable, index) => ({
    id: variable,
    top: `${25 + index * 20}%`,
  }));

  return (
    <BaseNode
      title="Text"
      width={width}
      height={height}
      inputs={inputHandles}
      outputs={[
        {
          id: `${id}-output`,
        },
      ]}
    >
      <label>
        Text:
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          rows={1}
          style={{
            width: '100%',
            resize: 'none',
            overflow: 'hidden',
            boxSizing: 'border-box',

            lineHeight: '24px',
            fontSize: '16px',
            padding: '8px',

            height: `${textAreaHeight}px`,
          }}
        />
      </label>
    </BaseNode>
  );
};