import { BaseNode } from './BaseNode';

export const APINode = ({ id }) => {
  return (
    <BaseNode
      title="API"
      inputs={[
        { id: `${id}-input` },
      ]}
      outputs={[
        { id: `${id}-response` },
      ]}
    >
      <div>
        <span>Fetch API data</span>
      </div>
    </BaseNode>
  );
};