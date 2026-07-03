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
                padding: 10,
                borderRadius: 5,
                backgroundColor: 'white',
            }}
        >
            <div>
                {
                    inputs.map((input) => (
                        <Handle
                            type="target"
                            position={Position.Left}
                            key={input.id}
                            id={input.id}
                            style={{top: input.top}}




                        />
                    ))
                }
                {
                    outputs.map((output) => (
                        <Handle
                            type="source"
                            position={Position.Right}
                            key={output.id}
                            id={output.id}

                        />
                    ))
                }

                <strong>{title}</strong>
            </div>

            <div>
                {children}
            </div>
        </div>
    );
};
export default BaseNode;