# Stitch Manager

> An order management system for a real embroidery business, 
> built to replace a paper-based workflow with a role-aware web application.

## The Problem

The embroidery shop currently runs on printed forms, handwritten production logs,
and a spreadsheet the secretary fills out every morning consolidating
the previous day's output. Data is fragmented, hard to query,
and creates an operational bottleneck as the business grows.

## What It Does

Stitch Manager digitizes the entire workflow into a single web application
with role-based access for four types of users: the receptionist registers
clients and orders, the designer confirms stitch counts once the artwork
is ready, the embroiderer logs daily production per order,
and the administrator has full visibility with reporting access.

## Tech Stack

| Layer    | Technology          | Why                                                   |
|----------|---------------------|-------------------------------------------------------|
| Frontend | React 18 + Vite     | Component model fits role-based UI well               |
| Backend  | Node.js + Express   | Single language across the full stack                 |
| Database | PostgreSQL 15       | Relational data with predictable access patterns      |
| ORM      | Prisma              | Type-safe queries and automatic migration management  |
| Auth     | JWT + bcrypt        | Stateless auth suitable for a multi-role system       |

## Status

This project is currently under active development following a 20-week
structured learning plan. The API and frontend are not yet available.
