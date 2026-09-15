# Case Study: AI Shopping Assistant

**Type:** AI / E-commerce  
**Company:** Enorsia (Pakiza Group)  
**Role:** Software Developer  
**Status:** Production ([enorsia.com](https://enorsia.com/)) + [GitHub demo](https://github.com/sazharul/ai-shopping-assistant-demo)

---

## Overview

Production AI shopping assistant for a UK fashion e-commerce platform. Customers use an embeddable chat widget for conversational product discovery, FAQ answers, order lookups, returns, and optional visual image search.

Built with **FastAPI**, **LangGraph**, **OpenAI GPT-4o**, hybrid **FAISS + BM25 RAG**, and a **React** streaming widget.

---

## Highlights

- LangGraph ReAct agent with 13+ commerce tools (orders, returns, shipping, discounts)
- Hybrid FAISS + BM25 retrieval for product catalog and FAQ knowledge base
- Server-Sent Events (SSE) streaming with inline product cards
- Optional CLIP image search for visual product discovery
- Laravel commerce API integration in production; `DEMO_MODE` stubs in open-source demo
- Embeddable React chat widget on the live storefront

---

## Open-source demo

A sanitized portfolio recreation is available on GitHub as **ai-shopping-assistant-demo**:

- Rebranded as **StyleHub** with 18 synthetic products and 15 generic FAQs
- `DEMO_MODE=true` — no live API calls to production backends
- Docker Compose setup: `docker compose up --build`
- Requires `OPENAI_API_KEY` for FAISS index build and chat

**Clone:** https://github.com/sazharul/ai-shopping-assistant-demo
