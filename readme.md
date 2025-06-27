
# Custom Static Web Server (Node.js + HTML/CSS)

A lightweight custom static web server built using Node.js core modules (no frameworks), designed to serve static HTML/CSS/JS files and emulate basic behavior of production-grade servers like **NGINX** or **Apache**.


## Features

-  Serves static files: HTML, CSS, JS, PNG
-  Handles routing to different pages like `/`, `/about.html`, `/contact.html`
-  Includes a custom route `/hello` handled programmatically (no file required)
-  Sets correct MIME types based on file extension
-  Custom 404 and 500 error handling for better UX
-  Minimal, fast, and framework-free (pure Node.js)


## File Structure

├─ server.js # Main Node.js server file

├─ index.html # Home page

├─ about.html # About page

├─ contact.html # Contact page
## Tech Stack

- Node.js (HTTP, FS, Path modules)
- HTML5
- CSS

## How To Run

1. Clone this repository  
   ```bash
   git clone https://github.com/your-username/custom-static-server.git
   cd custom-static-server

2. Run the server
    ```bash
    node server.js

3. Open in your browser
   ```browser
   http://localhost:3000


## 🌐Available Routes


| Route           | Description                     |
| --------------- | ------------------------------- |
| `/`             | Serves `index.html` (Home page) |
| `/about.html`   | Serves `about.html`             |
| `/contact.html` | Serves `contact.html`           |
| `/hello`        | Sends a hardcoded HTML response |
| Unknown routes  | Respond with custom 404 message |
