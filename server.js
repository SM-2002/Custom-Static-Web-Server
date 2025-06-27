// Import required core Node.js modules
const http = require("http");           // Enables creating an HTTP server
const fs = require("fs");               // Enables reading files from the file system
const path = require("path");           // Enables working with file and directory paths

// Define the port on which the server will listen
const port = 3000;

const server = http.createServer((req, res) => {
    // Route example: Custom /hello route
    if (req.url === '/hello') {
        res.writeHead(200, { "Content-Type" : "text/html" });
        res.end("<h1>Hii....its a custom route btw</h1>");
        return; // IMPORTANT: Stop here so the rest of the code doesn’t run
    }

    // Build the actual file path:
    // If the request is for the root ('/'), use 'index.html',
    // otherwise use the request URL as the filename
    const filePath = path.join(__dirname, req.url === '/' ? "index.html" : req.url);
    console.log("Requested path:", filePath);

    // Get the extension of the requested file (.html, .css, .js, etc.)
    const extname = String(path.extname(filePath)).toLowerCase();

    // Supported MIME types for static files
    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'image/png',
    };
    // Set the content type, or use 'application/octet-stream' as the fallback
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Read the requested file from the filesystem
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // If error occurs
            if (err.code === "ENOENT") {
                // File NOT found
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("404: Oops...File Not Found!!!");
            } else {
                // Other error
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end("500: Internal Server Error");
            }
        } else {
            // If the file is found, send it back
            res.writeHead(200, { "Content-Type": contentType }); // Set the correct content type
            res.end(content, 'utf-8');                           // Send the content
        }
    });
});

// Start the server
server.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
