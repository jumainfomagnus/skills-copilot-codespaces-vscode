//Create a webserver that can accept a POST request to /comments and save the comment to a file. The comment should be saved to a file called comments.txt. Also, the server should return a 201 status code if the comment was saved successfully.
const http = require('http'); const fs = require('fs');

const server = http.createServer((req, res) => { if (req.method === 'POST' && req.url === '/comments') { let body = ''; req.on('data', (chunk) => { body += chunk; }); req.on('end', () => { fs.appendFile('/workspaces/skills-copilot-codespaces-vscode/comments.txt', body, (err) => { if (err) { res.statusCode = 500; res.end('Error saving comment'); } else { res.statusCode = 201; res.end('Comment saved successfully'); } }); }); } else { res.statusCode = 404; res.end('Not found'); } });

server.listen(3000, () => { console.log('Server is running on port 3000'); });



