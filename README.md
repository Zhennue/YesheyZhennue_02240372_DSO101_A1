# To-Do List Web Application

This project is a simple full-stack to-do list application with:

- **Frontend (FE)**: Next.js (TypeScript, App Router) UI for adding, editing, completing, and deleting tasks.
- **Backend (BE)**: NestJS REST API providing CRUD operations for tasks.
- **Database (DB)**: PostgreSQL for persistent storage.

Environment variables are used for all environment-specific configuration.

---

## Project Structure

- `be/` – NestJS backend (CRUD API, DB connection)
- `fe/` – Next.js frontend (todo UI)
- `db/` – SQL schema sample for the tasks table

---

## How To Run

### Requirements

- Docker Desktop if you want to run the app with containers
- Node.js 20+ and npm if you want to run FE/BE locally
- PostgreSQL only if you are not using the Docker database
- Free ports: `3000` for the frontend, `5000` for the backend, `5432` for PostgreSQL

### Environment Files

- [be/.env](be/.env) is used when running the backend locally
- [fe/.env.local](fe/.env.local) is used when running the frontend locally
- When using Docker Compose, the compose file provides the backend and database variables automatically

### Run Options

1. **Run FE + BE + DB together from the repo root**

   Use this if you want the whole app in one command:

   ```bash
   docker compose up --build
   ```

   This root compose file starts all three services: database, backend, and frontend.

2. **Run only BE + DB together from the backend folder**

   Use this if you want the backend and database only:

   ```bash
   cd be
   docker compose up --build
   ```

   This uses [be/docker-compose.yml](be/docker-compose.yml) and does not start the frontend.

3. **Run everything locally without Docker Compose**

   Use this if you want to start each part manually:

   ```bash
   cd be
   npm run start:dev
   ```

   In another terminal:

   ```bash
   cd fe
   npm run dev
   ```

   For this option, make sure PostgreSQL is running locally and [be/.env](be/.env) points to it. Keep [fe/.env.local](fe/.env.local) set to `http://localhost:5000`.

---

## Backend Setup (NestJS)

1. **Install dependencies** (if not already installed):

   ```bash
   cd be
   npm install
   ```

2. **Create environment file**:

   Copy `.env.example` to `.env` and fill in real values:

   ```env
   PORT=5000
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name
   ```

   `.env` is **ignored by Git** via `.gitignore`.

3. **Prepare the database**:
   - Start PostgreSQL.
   - Create a database named `DB_NAME` from your `.env`.
   - Optionally apply the sample schema:

     ```bash
     psql -h DB_HOST -U DB_USER -d DB_NAME -f ../db/schema.sql
     ```

   The backend also uses TypeORM with `synchronize: true`, so the `tasks` table will be created automatically if it does not exist.

4. **Run the backend**:

   ```bash
   cd be
   npm run build
   npm run start
   ```

   Or for development with auto-reload:

   ```bash
   npm run start:dev
   ```

   The API will listen on `http://localhost:5000` (or the `PORT` from `.env`).

5. **Main endpoints** (from the `Tasks` module):
   - `GET /tasks` – list all tasks
   - `POST /tasks` – create a task `{ title: string }`
   - `PATCH /tasks/:id` – update a task `{ title?: string; completed?: boolean }`
   - `DELETE /tasks/:id` – delete a task

---

## Frontend Setup (Next.js + TypeScript)

1. **Install dependencies** (if not already installed):

   ```bash
   cd fe
   npm install
   ```

2. **Create environment file**:

   Copy `.env.local.example` to `.env.local` and set the backend API URL:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

   - Next.js `.gitignore` already ignores `.env*`, so `.env.local` will **not** be committed.

3. **Run the frontend**:

   ```bash
   cd fe
   npm run dev
   ```

   Open `http://localhost:3000` in your browser.

4. **Frontend behavior**:
   - Reads `NEXT_PUBLIC_API_URL` at build/runtime.
   - Calls the backend endpoints:
     - `GET ${NEXT_PUBLIC_API_URL}/tasks` to load tasks.
     - `POST ${NEXT_PUBLIC_API_URL}/tasks` to add a task.
     - `PATCH ${NEXT_PUBLIC_API_URL}/tasks/:id` to edit title or toggle completion.
     - `DELETE ${NEXT_PUBLIC_API_URL}/tasks/:id` to remove a task.
   - UI supports:
     - Adding new tasks.
     - Double-click to edit a task title.
     - Checkbox to mark tasks as completed.
     - Delete button to remove tasks.

---

## Testing the Full App Locally

1. Start the app using one of the options above.
2. Visit `http://localhost:3000`, then:
   - Add tasks using the input and **Add** button.
   - Edit tasks by double-clicking the title.
   - Toggle completion with the checkbox.
   - Delete tasks with the **Delete** button.

All communication between frontend and backend is done via URLs configured in environment variables, satisfying the requirement to use `.env` for environment-specific settings.

---

## Part A: Docker Hub Build + Render Deploy (Manual)

Use your **student ID** as the Docker image tag and your **Docker Hub username** in the image name.

### 1) Build and push images

**Backend**

```bash
cd be
docker build -t <dockerhub-username>/be-todo:<student-id> .
docker push <dockerhub-username>/be-todo:<student-id>
```

**Frontend**

```bash
cd fe
docker build -t <dockerhub-username>/fe-todo:<student-id> .
docker push <dockerhub-username>/fe-todo:<student-id>
```

### 2) Deploy on Render (Existing Docker image)

**Backend Service**

- Create a **Web Service** → **Existing image from Docker Hub**.
- Image: `<dockerhub-username>/be-todo:<student-id>`
- Environment variables:
  - `PORT=5000`
  - `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` (use Render PostgreSQL values)

**Frontend Service**

- Create a **Web Service** → **Existing image from Docker Hub**.
- Image: `<dockerhub-username>/fe-todo:<student-id>`
- Environment variables:
  - `NEXT_PUBLIC_API_URL=https://<your-backend-service>.onrender.com`

---

## Part B: Automated Build with Render Blueprint

This repo includes a Render blueprint file at [render.yaml](render.yaml) to build and deploy
both services automatically on each Git push.

### 1) Prepare production env files (local only)

- Backend: copy [be/.env.production.example](be/.env.production.example) to `be/.env.production`
- Frontend: copy [fe/.env.production.example](fe/.env.production.example) to `fe/.env.production`

Do **not** commit `*.env.production` files (they are ignored by `.gitignore`).

### 2) Deploy via Render Blueprint

- In Render, select **New** → **Blueprint** and connect your GitHub repo.
- Render will read [render.yaml](render.yaml), create the backend, frontend, and database.
- Update `NEXT_PUBLIC_API_URL` in the frontend service if the backend service URL changes.

---

## Screenshots Checklist (add to this README)

Add screenshots showing each step required by the assignment:

- Docker Hub repository with pushed backend and frontend images (tags visible).
- Render dashboard showing the backend service running.
- Render dashboard showing the frontend service running.
- Render database configuration (or connection info).
- Render Blueprint deployment (successful build logs).
