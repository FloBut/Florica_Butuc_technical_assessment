//databaseNode.js
import BaseNode from '../components/BaseNode';

export const DatabaseNode = ({ id, data }) => {

  return (
    <BaseNode
      title="Database"
      inputs={[
        { id: `${id}-query`, top: "50%" }
      ]}
      outputs={[
        { id: `${id}-result` }
      ]}
    >
      <div>Database query.</div>
    </BaseNode>
  );
}