# SwiftTix — React (Stage 2)

SwiftTix is a responsive ticket management web application built as part of the **Stage 2 Frontend Task**. It includes a landing page, authentication, dashboard stats, and full ticket CRUD management — all implemented with **React, React Router, and localStorage** (no backend required).

---

## 🚀 Features

| Feature | Status |
|---------|---------|
| Landing page with SVG hero + decorative circles | ✅ |
| Signup & Login (with validation, localStorage session) | ✅ |
| Protected routes using `ticketapp_session` | ✅ |
| Dashboard with ticket stats | ✅ |
| Ticket CRUD (Create, Read, Update, Delete) | ✅ |
| Toast + inline validation feedback | ✅ |
| Responsive Navigation (desktop + mobile hamburger) | ✅ |
| Accessible semantic HTML | ✅ |

---

## 🧰 Tech Stack
- **React**
- **React Router v6**
- **LocalStorage for auth + persistence**
- **Plain CSS** (no CSS frameworks)
- **Vite / CRA compatible**

---

## 📌 Routes

| Route | Description |
|---------|------------|
| `/` | Landing page |
| `/auth/login` | Login |
| `/auth/signup` | Signup |
| `/dashboard` | Dashboard (protected) |
| `/tickets` | Ticket Management (protected) |

> Users without a session are redirected to `/auth/login`.

---

## 🔐 Authentication

- Session is stored in **localStorage**
- **Required key (as per task)**: `ticketapp_session`
- Users are stored in: `ticketapp_users`
- Tickets are stored in: `ticketapp_tickets`

### Test Login

Email: admin@local.com

Password: password123
