import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName ||
      id.replace('customOutput-', 'output_')
  );

  const [outputType, setOutputType] = useState(
    data?.outputType || 'Text'
  );

  return (
    <BaseNode
      title="Output"
      inputs={[
        {
          id: `${id}-value`,
        },
      ]}
      outputs={[]}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <label>
          Name:
        </label>

        <input
          type="text"
          value={currName}
          onChange={(e) =>
            setCurrName(e.target.value)
          }
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

        <label>
          Type:
        </label>

        <select
          value={outputType}
          onChange={(e) =>
            setOutputType(e.target.value)
          }
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
          <option value="Text">
            Text
          </option>

          <option value="Image">
            Image
          </option>
        </select>
      </div>
    </BaseNode>
  );
};