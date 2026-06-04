---
description: Cierra sesión de trabajo — deduce aprendizajes, decisiones y siguiente paso de la conversación actual
agent: gentle-orchestrator
subtask: true
---

Ejecuta el protocolo de cierre de sesión del proyecto:

1. **Analiza la conversación de esta sesión** y deduce automáticamente:
   - Aprendizajes nuevos o conceptos tocados → guárdalos en Engram (`topic_key: learning/log`).
   - Decisiones tomadas → guárdalas en Engram (`topic_key: decisions/registro`).
   - Trabajo completado.
   - Siguiente paso recomendado para la próxima sesión.

2. Guarda el resumen de sesión en Engram vía `mem_session_summary`.

3. **Presenta el resumen al desarrollador para confirmación** antes de finalizar.

No preguntes "¿qué aprendiste?" ni "¿qué decidimos?". Dedúcelo de las interacciones del chat.
