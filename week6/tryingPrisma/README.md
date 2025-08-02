# Prisma + PostgreSQL (Neon DB) Setup Guide

This guide walks you through setting up Prisma with PostgreSQL (Neon or local), writing your first model, and using it with Express.

---

## 📦 1. Initialize Your Project

```
npm init -y
```
Install necessary dependencies:
```
npm install express @prisma/client dotenv
npm install -D prisma nodemon
```
@prisma/client – Prisma's database query client
prisma – Dev tool for schema, migrations, and client generation

---

## 🧬 2. Initialize Prisma
```
npx prisma init --datasource-provider postgresql
```
This creates:
```
📁 prisma/
  └── schema.prisma    ← Where your models live
.env                   ← Put DB connection string here
```
---

## 🔑 3. Configure .env
Paste your Neon/PostgreSQL URL into .env:
```
DATABASE_URL="postgresql://username:password@host:port/dbname?sslmode=require"
```
---

## 🧱 4. Define Your First Model
Edit prisma/schema.prisma:
```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  phone     String?  // Optional field
  createdAt DateTime @default(now())
}
```
---


## 🧰 5. Migrate and Generate
✅ Create tables and generate client
```
npx prisma migrate dev --name init
```
> Creates DB tables and generates Prisma Client based on schema.

🔁 Re-run this after any schema change:
```
npx prisma migrate dev --name <change-name>
```
> Ex: ```npx prisma migrate dev --name add-phone-field```

---

## ⚙️ 6. Generate Prisma Client Manually (Optional)
```
npx prisma generate
```
Re-generates Prisma Client. Do this if you didn’t migrate but changed the model (like generate-only mode).

---

## 🔍 7. Open Prisma Studio (Visual DB Editor)
```
npx prisma studio
```
> Browse and edit your DB in a browser UI (localhost:5555)

---

## 🧪 8. Using Prisma in Your App (ESM Style)
```
// If using `"type": "module"` in package.json
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();
```
Create a user:
```
await prisma.user.create({
  data: {
    name: "Mayur",
    email: "mayur@gmail.com",
    phone: "9999999999"
  }
});
```
Find users:
```
const users = await prisma.user.findMany();
```
---
## 🛠️ 9. Helpful Scripts
Add to your package.json:
```
"scripts": {
  "dev": "nodemon index.js",
  "generate": "prisma generate",
  "migrate": "prisma migrate dev",
  "studio": "prisma studio"
}
```