# VectorShift Technical Assessment

## Overview

This project is my solution for the VectorShift Frontend/Backend Technical Assessment.

The application allows users to build a pipeline by dragging and connecting nodes in a visual editor. 
The frontend is built with React and React Flow, while the backend is implemented with FastAPI.

---

## Features

### Part 1 – Node Abstraction

Implemented a reusable `BaseNode` component to eliminate duplicated code between node types.

Refactored the existing nodes:

- Input Node
- Output Node
- LLM Node
- Text Node

Added five additional custom nodes to demonstrate the flexibility of the abstraction:

- API Node
- Database Node
- Email Node
- Filter Node
- Math Node

---

### Part 2 – Styling

Implemented a unified design across all nodes using the shared `BaseNode` component.

Features include:

- Consistent layout
- Shared styling
- Reusable handles
- Uniform spacing
- Rounded borders

---

### Part 3 – Text Node Logic

Enhanced the Text node with additional functionality:

- Dynamic node width based on text length
- Detection of variables written as:

```text
{{variable}}
```

- Automatic creation of input handles for each detected variable

Example:

```text
Translate {{language}}

Output: {{result}}
```

creates two input handles:

- language
- result

---

### Part 4 – Backend

Implemented a FastAPI endpoint that receives the pipeline and returns:

- Number of nodes
- Number of edges
- Whether the pipeline is a Directed Acyclic Graph (DAG)

Graph validation is performed using the **NetworkX** library.

Example response:

```json
{
  "num_nodes": 8,
  "num_edges": 5,
  "is_dag": true
}
```

---

## Technologies

### Frontend

- React
- React Flow
- Zustand

### Backend

- FastAPI
- NetworkX
- Uvicorn

---

## Running the Project

### Backend

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

pip install fastapi uvicorn networkx

uvicorn main:app --reload
```

Backend runs on:

```
http://127.0.0.1:8000
```

---

### Frontend

```bash
cd frontend

npm install

npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## Usage

1. Start both the frontend and backend.
2. Drag nodes from the toolbar onto the canvas.
3. Connect nodes together.
4. Click **Submit**.
5. The backend returns:
   - Number of nodes
   - Number of edges
   - DAG validation result.

---

## Project Structure

```text
frontend/
├── src/
│   ├── components/
│   │   └── BaseNode.js
│   ├── nodes/
│   ├── store.js
│   ├── submit.js
│   └── ui.js

backend/
└── main.py
```

---

## Future Improvements

- Save and load pipelines.
- Add undo and redo functionality.
- Improve automatic Text node resizing.
- Validate node connections before submission.
- Support automatic graph layout for large pipelines.
- Add unit and integration tests.

---