// apiNode.js
import BaseNode from '../components/BaseNode';

export const APINode = ({ id, data }) => {

  return (
    <BaseNode
      title="API"
      inputs={[
        { id: `${id}-request`, top: "50%" }
      ]}
      outputs={[
        { id: `${id}-response` }
      ]}
    >
      <div>Calls an external API.</div>
    </BaseNode>
  );
}