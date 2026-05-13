![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)  ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)  ![ChromaDB](https://img.shields.io/badge/ChromaDB-5A67D8?style=for-the-badge)  ![Ollama](https://img.shields.io/badge/Ollama-000000?style=for-the-badge)

# DocQuery — AI-Powered Semantic Document Retrieval System

DocQuery is a fully local Retrieval-Augmented Generation (RAG) system that allows users to upload PDF documents and query them using semantic search and local LLM inference.

The system uses vector embeddings, metadata-aware retrieval, persistent vector storage, and local language models to provide context-grounded answers from uploaded documents.

### PS RUNS OFFLINE

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
# Why This Project?

Most document chat systems rely on cloud APIs and external inference providers.

DocQuery was designed as a fully local and offline-capable Retrieval-Augmented Generation (RAG) system using local embeddings, local LLM inference, and persistent vector storage.

The project focuses on semantic retrieval infrastructure, metadata-aware querying, and containerized AI backend architecture.



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


## Core Concepts & Algorithms

- Cosine similarity-based semantic retrieval
- Vector embedding search
- Retrieval-Augmented Generation (RAG)
- Sliding-window chunking with overlap
- Metadata-aware filtered retrieval
- Persistent vector indexing using ChromaDB
- Local LLM inference pipeline

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
```text
DOCQUERY/
│
├── Backend/
│   │
│   ├── src/
│   │   │
│   │   ├── controllers/
│   │   │   ├── uploadController.js
│   │   │   └── askController.js
│   │   │
│   │   ├── routes/
│   │   │   ├── uploadRoutes.js
│   │   │   └── askRoutes.js
│   │   │
│   │   ├── services/
│   │   │   ├── pdfService.js
│   │   │   ├── chunkService.js
│   │   │   ├── embeddingService.js
│   │   │   ├── chromaService.js
│   │   │   ├── retrievalService.js
│   │   │   ├── similarityService.js
│   │   │   └── llmService.js
│   │   │
│   │   ├── store/
│   │   │   └── chunkStore.js
│   │   │
│   │   └── uploads/
│   │
│   ├── Dockerfile
│   ├── compose.yaml
│   ├── package.json
│   ├── .dockerignore
│   ├── .gitignore
│   └── server.js
│
├── Frontend/
│   │
│   └── docuquery-frontend/
│       │
│       ├── src/
│       │   ├── components/
│       │   ├── pages/
│       │   ├── services/
│       │   └── App.jsx
│       │
│       ├── public/
│       ├── Dockerfile
│       ├── package.json
│       ├── vite.config.js
│       └── .dockerignore
│
└── README.md
```
