const http = require(`http`);
const fs = require(`fs`)
const server = http.createServer((req, res) => {
    let filePath = "";
    switch (req.url) {
        case "/":
            filePath = "./index.html"
            break;
        case "/about":
            filePath = "./about.html"
            break;
        case "/contact":
            filePath = "./contact.html"
            break;
        case "/projects":
            filePath = "./projects.html"
            break;
        case "/service":
            filePath = "./service.html"
            break;
        default:
            filePath = "./notfound.html"
            break;
    }
    let data = fs.readFileSync(filePath, 'utf-8');
    res.end(data);
});
const port = 8011;

server.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});