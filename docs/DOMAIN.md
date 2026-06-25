# DOMAIN.md

## Business

Commercial embroidery production management.

The system replaces manual workflows currently managed with paper forms and spreadsheets.

---

## Main Workflow

Reception
→ Create Order

Production
→ Register Production

Administration
→ Generate Reports

---

## Core Entities

### Client

Business customer requesting embroidery work.

---

### Order

Production request created for a client.

An order may contain multiple order items.

Statuses:

* PENDING
* IN_PROGRESS
* COMPLETED
* CANCELLED

---

### Order Item

Specific production requirement inside an order.

Examples:

* 50 Caps
* 100 Polo Shirts

Each item may contain one or more embroidery designs.

---

### Production Record

Production event registered by an operator.

Stores:

* Date
* Machine
* Operator
* Quantity Produced
* Waste
* Notes

---

### Machine

Embroidery machine used during production.

Current business operates 4 machines.

---

### User

System user.

Examples:

* Reception
* Operator
* Administrator

---

### Role

Defines permissions within the application.