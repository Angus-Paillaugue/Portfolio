---
name: Env Manager
date: 2025
description: Seamless environment variable management, anywhere
bgColor: bg-[#0a0a0a]
preview: https://blog.paillaugue.fr
github: https://github.com/Angus-Paillaugue/Env-manager
image: /projectsAssets/Env-manager/Logo.svg
fullImage: /projectsAssets/Env-manager/FullPage.png
tags:
  - SvelteKit
  - PostgreSQL
  - TailwindCSS
  - Markdown
---

# Environment Variable Manager: Secure & Streamlined Configuration for Teams

**Environment Variable Manager** is a full-stack platform designed to simplify and secure the process of managing environment variables across different projects and team members. The project provides an intuitive web interface and a powerful CLI that work together to help developers store, organize, and share sensitive configuration variables with ease.

Built with modern web technologies, it offers self-hosting capabilities, fine-grained access control, and real-time syncing between the UI and CLI, making it an ideal solution for teams handling multiple environments or microservices.


## Key Features

 - **Team Management**: Collaborate securely with teammates using role-based access control. Invite members, assign roles (Owner, Contributor, Guest), and restrict access per project or environment.

 - **CLI Integration**: The official `env-manager` CLI provides seamless push and pull operations. Developers can sync variables directly to their `.env` files in seconds, with built-in JWT authentication and TOTP 2FA support.

 - **Self-Hosting Ready**: Built with Docker in mind, the entire platform can be self-hosted on your own infrastructure, ensuring full control over your data and deployment environment.


## Technical Stack


### Front-End:

 - **SvelteKit**: The web dashboard is built with SvelteKit, offering blazing-fast interactivity and a smooth user experience. Svelte’s reactive design allows real-time updates and clean state handling across the app.

 - **TailwindCSS**: TailwindCSS powers the styling, enabling a minimal, modern, and responsive UI with utility-first classes. Components are styled to match a developer-centric aesthetic with terminal-like themes and animations.


### Back-End:

 - **SvelteKit API Routes**: Server-side routes handle project, variable, and user management logic, with strong typing and validation. The backend also serves real-time WebSocket connections to sync log messages and status updates.

 - **PostgreSQL**: All data — from project definitions and environment variables to audit logs — is stored securely in a PostgreSQL database. Sensitive values are encrypted before storage.

 - **JWT & TOTP Authentication**: The platform uses JSON Web Tokens (JWT) for secure sessions and supports Two-Factor Authentication (2FA) via TOTP (like Google Authenticator) to enhance security.


## CLI & Real-Time Logging

The CLI is written with **Bun**, allowing fast, native TypeScript execution. It interacts with the backend over secure HTTP and WebSocket connections to provide real-time feedback when variables are pushed or pulled.

A dedicated dashboard logs all CLI operations, showing variable syncs, timestamps, and actor metadata. This is especially useful for audits or debugging configuration issues across environments.


## Project Structure & Self-Hosting

The system is entirely containerized using Docker and easily deployable on any Linux server. With a single Docker Compose file, users can bring up the platform with all its dependencies. It also supports reverse proxy setups with Cloudflare Tunnel for secure public access.


## Conclusion

Environment Variable Manager solves a common pain point in modern development teams: securely managing and sharing sensitive configuration data. By combining a user-friendly interface with a powerful CLI, it bridges the gap between development workflows and infrastructure security. Whether you’re managing a small project or coordinating multiple environments in a large organization, this tool is designed to scale with you.
