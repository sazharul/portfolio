# Case Study: Real-time Event Platform

**Type:** Infrastructure / Real-time  
**Company:** Personal / Infrastructure Project  
**Role:** Software Developer  
**Status:** Open-source demo on [GitHub](https://github.com/sazharul/reverb-platform-demo)

---

## Overview

Self-hosted multi-tenant platform on Laravel Reverb — manage WebSocket apps, trigger signed server-side events, enforce channel permissions, and monitor delivery from a dashboard.

Rebranded as **PulseWire** in the open-source demo with `DEMO_MODE` payment bypass and Docker Compose setup.

---

## Highlights

- Database-driven multi-tenant `ApplicationProvider` for Reverb
- HMAC-signed `POST /api/v1/events` API
- Custom `EventDispatcher` with channel ACLs and event logging
- Subscription plans with connection and message limits
- Laravel Pulse monitoring integration
- Pest feature tests for event trigger validation

---

## Portfolio & legal notice

[PulseWire](https://github.com/sazharul/reverb-platform-demo) is an **original portfolio showcase** for hiring review — not production code from any client or employer. [Legal & demo notice](/legal).
