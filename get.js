const http = require("node:http")
const fs = require("node:fs")

let server = http.createServer((req, res) => {
    const { url, method } = req

    res.setHeader("Content-Type", "application/json")

    if (url == "/___" && method == "GET") {

        let users = JSON.parse(
            fs.readFileSync("./get.json", "utf8")
        )

        res.end(JSON.stringify(users, null, 2))
    }
})

server.listen(7000, () => {
    console.log("server listen on port", 7000)
})