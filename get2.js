const http = require("node:http")
const fs = require("node:fs")

let server = http.createServer((req, res) => {
    const { url, method } = req

    res.setHeader("Content-Type", "application/json")

    if (url.match("/user/") && method == "GET") {

        let id = url.split("/").at(-1)

        let users = JSON.parse(
            fs.readFileSync("./get.json", "utf8")
        )

        let user = users.find((u) => {
            return u.id == id
        })

        if (user) {
            res.end(JSON.stringify(user))
        }
        else {
            res.writeHead(404)

            res.end(JSON.stringify({
                message: "User ID not found"
            }))
        }
    }
})

server.listen(8000, () => {
    console.log("server listen on port", 8000)
})