# Stitch Manager

Sistema de gestión de producción para bordadora publicitaria.
Digitaliza el flujo operativo desde la recepción de órdenes hasta el registro de producción y administración.

## Stack

- **Runtime:** Node.js
- **Package manager:** pnpm
- **API:** json-server (API REST mock)
- **Base de datos:** json (mock) → PostgreSQL + Prisma (próximamente)

## Inicio rápido

```bash
pnpm install
pnpm setup
pnpm start
```

La API corre en `http://localhost:3000`.

## Estructura

```
├── app.js              # Entry point
├── scripts/            # Scripts de utilería
├── services/           # Lógica de negocio
├── config/             # Configuración
├── data/               # Datos y esquema
│   ├── db.json         # Base de datos (local, no se commitea)
│   ├── db.example.json # Template para generar db.json
│   └── db.dbml         # Modelo entidad-relación
└── utils/              # Utilidades compartidas
```

## API

Recursos expuestos:

| Recurso | Endpoint |
|---------|----------|
| Clientes | `/clients` |
| Logos | `/logos` |
| Órdenes | `/orders` |
| Partidas | `/line_items` |
| Producción | `/production_records` |
| Usuarios | `/users` |
| Máquinas | `/machines` |
| Roles | `/roles` |

### Estados de orden

| Estado | Descripción |
|--------|-------------|
| `creada` | Orden registrada |
| `en_produccion` | En proceso |
| `finalizada` | Completada |
| `cancelada` | Cancelada |

## Licencia

MIT
