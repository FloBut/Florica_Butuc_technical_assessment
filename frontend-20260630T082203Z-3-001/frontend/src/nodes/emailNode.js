//emailNode.js
import BaseNode from '../components/BaseNode';

export const EmailNode = ({ id, data }) => {

  return (
    <BaseNode
      title="Email"
      inputs={[
        { id: `${id}-content`, top: "50%" }
      ]}
      outputs={[
        { id: `${id}-sent` }
      ]}
    >
      <div>Sends an email.</div>
    </BaseNode>
  );
}