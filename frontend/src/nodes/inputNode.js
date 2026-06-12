import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace('customInput-', 'input_')
  );

  const [inputType, setInputType] = useState(
    data?.inputType || 'Text'
  );

  return (
    <BaseNode
      title="Input"
      inputs={[]}
      outputs={[
        {
          id: `${id}-value`,
        },
      ]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>
          Name:
          <input
  type="text"
  value={currName}
  onChange={(e) => setCurrName(e.target.value)}
  style={{
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid #475569',
    background: '#0f172a',
    color: 'white',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
  }}
/>
        </label>

        <label>
          Type:
         <select
  value={inputType}
  onChange={(e) => setInputType(e.target.value)}
  style={{
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid #475569',
    background: '#0f172a',
    color: 'white',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
  }}
>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};