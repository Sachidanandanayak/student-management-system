# Student Employee Management System

## Local development

1. Create and activate a virtualenv.
2. Install backend dependencies:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```
3. Create a local MySQL database and run `backend/schema.sql`.
4. Start the backend:
   ```bash
   python app.py
   ```
5. Open the HTML files in `ui/` in a browser.

## Deploying to Render (backend)

1. Push this project to a Git repository (e.g. GitHub).
2. In Render, create a **Web Service**:
   - Root directory: `backend`
   - Build command: `pip install -r requirements.txt`
   - Start command: `gunicorn app:app`
3. Configure environment variables from your cloud MySQL:
   - `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`.
4. Deploy and note the service URL, e.g. `https://your-service.onrender.com`.
5. Update `ui/script.js` to set `API_BASE` to this URL for non-local use.

## Deploying the UI (optional)

You can host the static `ui/` folder as a Render **Static Site** or any static host and it will talk to the backend using the configured API base URL.
