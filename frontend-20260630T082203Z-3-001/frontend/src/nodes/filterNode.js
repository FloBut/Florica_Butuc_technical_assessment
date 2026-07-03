//filterNode.js
import BaseNode from '../components/BaseNode';

export const FilterNode = ({ id, data }) => {

  return (
    <BaseNode
      title="Filter"
      inputs={[
        { id: `${id}-input`, top: "50%" }
      ]}
      outputs={[
        { id: `${id}-filtered` }
      ]}
    >
      <div>Filters incoming data.</div>
    </BaseNode>
  );
}