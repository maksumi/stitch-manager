---
description: Propone y ejecuta un commit con mensaje conventional commit basado en el diff actual
---

Cuando el desarrollador quiera commitear o cuando detectes cambios significativos:

1. **Lee el skill** `.opencode/skills/git-commit/SKILL.md` para conocer el formato y workflow.

2. **Analiza el estado**:
   - `git status --porcelain`
   - `git diff --stat`
   - `git diff` o `git diff --staged`

3. **Presenta propuesta al desarrollador**:
   - Archivos que cambiarían
   - Tipo de commit sugerido con su gitmoji (✨ feat, 🐛 fix, ♻️ refactor, 📝 docs, 🔧 chore, etc.)
   - Mensaje sugerido

4. **Pregunta** (por separado, un paso a la vez):
   - "¿Agregamos/quítamos archivos?"
   - "¿El mensaje está bien o lo ajustamos?"
   - "¿Ejecuto el commit?"

5. **Solo ejecuta el commit** después de confirmación explícita. No continúes sin su respuesta.

6. **Después del commit, pregunta antes de pushear**:
   - "Commit hecho. ¿Lo pusheo a GitHub?"
   - **Nunca pushees sin aprobación explícita.**

7. **Solo pushea** si el desarrollador confirma.

No hagas commits sin aprobación. No pushees sin aprobación. No uses `--no-verify` ni `--force` a menos que el desarrollador lo pida explícitamente.
