// Render the container
// Render the title
// Render the children
// Render input handles
// Render output handles

import { Background } from "reactflow"

// Apply common styling
export const BaseNode = ({
    title,
    children,
    width = 200,
    hight = 80,
}) => {
    return (
        <div
        style = {{
            width,
            minHeight:height,
            border: '1px solid black',
            padding: 10,
            borderRadius: 5,
            backgroundColor: 'white',
        }}
        >
        <div>
            <strong>{title}</strong>
        </div>

        <div>
            children
        </div>
        </div>
    );
};