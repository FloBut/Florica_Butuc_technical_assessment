// submit.js

import { useStore } from './store';

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nodes,
          edges,
        }),
      });

      const result = await response.json();

      alert(
        `Nodes: ${result.num_nodes}\n` +
        `Edges: ${result.num_edges}\n` +
        `Is DAG: ${result.is_dag}`
      );
    } catch (error) {
      console.error(error);
      alert('Failed to connect to the backend.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '20px',
      }}
    >
      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};