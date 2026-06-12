import { useState, useMemo } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(
    data?.text || '{{input}}'
  );

  // Extract variables like {{name}}
  const variables = useMemo(() => {
    const matches =
      currText.match(/{{(.*?)}}/g) || [];

    return matches.map((match) =>
      match.replace('{{', '').replace('}}', '')
    );
  }, [currText]);

  // Create dynamic handles
  const inputHandles = variables.map(
    (variable) => ({
      id: `${id}-${variable}`,
    })
  );

  return (
    <BaseNode
      title="Text"
      inputs={inputHandles}
      outputs={[
        {
          id: `${id}-output`,
        },
      ]}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <label>
          Text:
        </label>

        <textarea
          value={currText}
          onChange={(e) =>
            setCurrText(e.target.value)
          }
          rows={Math.max(
            3,
            currText.split('\n').length
          )}
          style={{
            width: '100%',
            resize: 'none',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #475569',
            background: '#0f172a',
            color: 'white',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />

        <div
          style={{
            fontSize: '12px',
            color: '#94a3b8',
          }}
        >
          Variables:
          {' '}
          {variables.join(', ') || 'None'}
        </div>
      </div>
    </BaseNode>
  );
};