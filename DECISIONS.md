# DECISIONS

## DEC-001

Fecha: 2026-05-30

Estado: Activa

Decisión:
La memoria del proyecto será persistente y estará basada en documentación.

Motivo:
Evitar depender del contexto temporal de conversaciones o herramientas específicas.

---

## DEC-002

Fecha: 2026-05-30

Estado: Activa

Decisión:
Toda sesión de trabajo debe tener un proceso formal de cierre.

Motivo:
Garantizar continuidad entre sesiones y preservar conocimiento relevante.

---

## DEC-003

Fecha: 2026-05-30

Estado: Activa

Decisión:
El flujo oficial de trabajo será:

Aprender
→ Entender
→ Documentar
→ Diseñar
→ Construir
→ Refactorizar

Motivo:
Priorizar comprensión y aprendizaje antes de la implementación.

---

## DEC-004

Fecha: 2026-05-30

Estado: Activa

Decisión:
La gestión de tareas se realizará fuera de la documentación del proyecto.

Motivo:
Mantener una única fuente de verdad para el seguimiento del trabajo.

---

## DEC-005

Fecha: 2026-06-06

Estado: Activa

Decisión:
Reemplazar el sistema de memoria automática (Engram) por el sistema original de archivos planos: MEMORY.md, DECISIONS.md, LEARNING.md.

Motivo:
- El sistema automático guardaba información no relevante (chistes, conversación casual, preferencias inferidas).
- El desarrollador pierde control sobre qué se persiste.
- Los archivos planos son versionados, grep-ables y transparentes.
- No hay dependencia de herramientas externas.

Ref: MEMORY 2026-06-06
