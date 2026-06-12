import { BaseNode } from './BaseNode';

export const FilterNode = ({ id }) => {
  return (
    <BaseNode
      title="Filter"
      inputs={[
        { id: `${id}-input` },
      ]}
      outputs={[
        { id: `${id}-filtered` },
      ]}
    >
      <div>
        <span>Filters data</span>
      </div>
    </BaseNode>
  );
};