# Architectural Decisions

## ADR-001

Decisión:
Usar monolito modular.

Razón:
El proyecto es pequeño y el objetivo es aprender.

Alternativas descartadas:
- Microservicios

---

## ADR-002

Decisión:
Usar PostgreSQL.

Razón:
El dominio es altamente relacional.

Alternativas descartadas:
- MongoDB
- Firebase

---

## ADR-003

Decisión:
Usar React + Vite.

Razón:
Menor complejidad inicial.

Alternativas descartadas:
- Next.js

---

## ADR-004

Decisión:
Usar Prisma.

Razón:
Excelente DX y fácil aprendizaje.

---

## ADR-005

Decisión:
Roles mediante tabla.

Razón:
Mayor flexibilidad futura.

Alternativa descartada:
- Enum de roles

---

## ADR-006

Decisión:
Guardar eventos de producción.

Razón:
Los acumulados pueden calcularse.

No guardar:
- Total producido acumulado

Guardar:
- Producción registrada
