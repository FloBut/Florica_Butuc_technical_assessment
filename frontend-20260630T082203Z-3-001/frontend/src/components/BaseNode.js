// Render the container
// Render the title
// Render the children
// Render input handles
// Render output handles
// Apply common styling

import { Handle, Position } from 'reactflow';

const BaseNode = ({
  title,
  children,
  inputs = [],
  outputs = [],
  width = 200,
  height = 80,
}) => {
  return (
    <div
      style={{
        width,
        minHeight: height,
        border: '1px solid black',
        borderRadius: 8,
        padding: 10,
        backgroundColor: 'white',
        position: 'relative',
      }}
    >
      {/* Input Handles */}
      {inputs.map((input) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{
            top: input.top,
          }}
        />
      ))}

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{
            top: output.top || '50%',
          }}
        />
      ))}

      <strong>{title}</strong>

      <div style={{ marginTop: 10 }}>
        {children}
      </div>
    </div>
  );
};

export default BaseNode;