---
description: Inicia sesión de trabajo — propone objetivo basado en memoria de sesiones anteriores
agent: gentle-orchestrator
subtask: true
---

Ejecuta el protocolo de inicio de sesión del proyecto:

1. Lee AGENT.md (metodología de trabajo vigente).
2. Consulta Engram: `mem_context(project: "{project}")` para contexto de sesiones anteriores.
3. Si existe un `Next Steps` en la sesión previa, úsalo para **proponer** el objetivo de esta sesión.
4. Si no hay sesiones previas, verifica el estado del proyecto (archivos, cambios pendientes) y propone el siguiente paso lógico.
5. Preséntalo al desarrollador como propuesta: "Basado en la sesión anterior, el siguiente paso es **[X]**. ¿Arrancamos?".

No preguntes "¿qué vamos a hacer hoy?". Siempre propón.
