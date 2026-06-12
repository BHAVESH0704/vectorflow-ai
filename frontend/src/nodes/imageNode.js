import { BaseNode } from './BaseNode';

export const ImageNode = ({ id }) => {
  return (
    <BaseNode
      title="Image"
      inputs={[
        { id: `${id}-image` },
      ]}
      outputs={[
        { id: `${id}-output` },
      ]}
    >
      <div>
        <span>Processes images</span>
      </div>
    </BaseNode>
  );
};