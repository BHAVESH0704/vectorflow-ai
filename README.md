# Vectorshift
VectorFlow AI
VectorFlow AI is a modern drag-and-drop AI workflow builder built using React Flow and FastAPI.

Users can visually create AI pipelines by connecting modular nodes such as Inputs, LLMs, APIs, Text processors, Filters, Math operations, Delays, and Outputs.

Features
Modern startup-style UI
Drag and drop workflow builder
Dynamic text variables using {{variable}}
Smooth animated node connections
Minimap and controls
Undo support using Ctrl + Z
Backend pipeline parsing API
DAG (Directed Acyclic Graph) validation
Responsive dark theme design
Tech Stack
Frontend
React.js
React Flow
Zustand
React Icons
Backend
FastAPI
NetworkX
Uvicorn
Project Structure
Vectorshift/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── main.py
│   └── requirements.txt
│
├── screenshots/
│
└── README.md
Installation
Frontend
cd frontend
npm install
npm start
Frontend runs on:

http://localhost:3000
Backend
cd backend
pip install fastapi uvicorn networkx
uvicorn main:app --reload
Backend runs on:

http://127.0.0.1:8000
Pipeline Analysis
The backend analyzes submitted pipelines and returns:

Total Nodes
Total Edges
DAG Validation
Example response:

{
  "nodes": 5,
  "edges": 4,
  "is_dag": true
}
Screenshots
Main Workflow UI
Main UI

Dynamic Variable Parsing
Pipeline

Backend DAG Validation
Analysis

Implemented Nodes
Input Node
Output Node
Text Node
LLM Node
API Node
Math Node
Filter Node
Delay Node
Image Node
Future Improvements
Redo functionality
AI model execution
Workflow export/import
Authentication
Cloud deployment
Real-time collaboration
Custom node marketplace
Author
Built by Bhavesh Pund
