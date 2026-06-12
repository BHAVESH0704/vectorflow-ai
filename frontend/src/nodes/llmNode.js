import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      title="LLM"
      inputs={[
        {
          id: `${id}-system`,
        },
        {
          id: `${id}-prompt`,
        },
      ]}
      outputs={[
        {
          id: `${id}-response`,
        },
      ]}
    >
      <div>
        <span>This is a LLM node.</span>
      </div>
    </BaseNode>
  );
};