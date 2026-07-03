//mathNode.js
import BaseNode from '../components/BaseNode';

export const MathNode = ({ id, data }) => {

  return (
    <BaseNode
      title="Math"
      inputs={[
        { id: `${id}-a`, top: "35%" },
        { id: `${id}-b`, top: "65%" }
      ]}
      outputs={[
        { id: `${id}-result` }
      ]}
    >
      <div>Performs calculations.</div>
    </BaseNode>
  );
}