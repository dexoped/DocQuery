# DocQuery — AI-Powered Semantic Document Retrieval System

DocQuery is a fully local Retrieval-Augmented Generation (RAG) system that allows users to upload PDF documents and query them using semantic search and local LLM inference.

The system uses vector embeddings, metadata-aware retrieval, persistent vector storage, and local language models to provide context-grounded answers from uploaded documents.

---

# Features

- PDF document upload and processing
- Text chunking pipeline
- Semantic embeddings using Ollama
- Persistent vector storage using ChromaDB
- Metadata-aware retrieval
- Source-grounded answer generation
- Fully local AI inference
- Offline-capable architecture
- Dockerized backend infrastructure
- Full-stack container orchestration using Docker Compose

---

# Tech Stack

## Frontend
- React
- Vite

## Backend
- Node.js
- Express.js

## AI / Retrieval
- Ollama
- Phi-3 Mini
- nomic-embed-text
- ChromaDB

## Infrastructure
- Docker
- Docker Compose

---

# System Architecture

```mermaid
graph TD

A[React Frontend] --> B[Express Backend]

B --> C[PDF Processing]
B --> D[ChromaDB]
B --> E[Ollama]

C --> F[Chunking + Metadata]

F --> D

D --> G[Semantic Retrieval]

G --> E

E --> H[Grounded Response]
```

# Project Structure
DOCQUERY/
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── store/
│   │   └── utils/
│   │
│   ├── Dockerfile
│   ├── compose.yaml
│   └── server.js
│
└── Frontend/
    └── docuquery-frontend/
