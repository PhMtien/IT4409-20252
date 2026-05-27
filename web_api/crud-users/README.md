# Users CRUD (JSONPlaceholder)

Simple frontend CRUD app using Fetch + async/await to interact with https://jsonplaceholder.typicode.com/users

Files:
- index.html
- styles.css
- app.js

Run (recommended: serve over HTTP):

Python 3:
```bash
python -m http.server 8000
```

Then open http://localhost:8000/crud-users/

Notes:
- The JSONPlaceholder API doesn't persist changes; this app updates the UI locally after POST/PUT/DELETE based on the API responses.
- Uses async/await and handles errors with simple messages.
