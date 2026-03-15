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

1. Start PostgreSQL and ensure the database in `.env` exists.
2. In one terminal, run the backend from `be/`:

   ```bash
   npm run start:dev
   ```

3. In another terminal, run the frontend from `fe/`:

   ```bash
   npm run dev
   ```

4. Visit `http://localhost:3000`, then:
   - Add tasks using the input and **Add** button.
   - Edit tasks by double-clicking the title.
   - Toggle completion with the checkbox.
   - Delete tasks with the **Delete** button.

All communication between frontend and backend is done via URLs configured in environment variables, satisfying the requirement to use `.env` for environment-specific settings.