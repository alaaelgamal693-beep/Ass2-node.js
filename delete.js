
const http = require("node:http")
const fs = require("node:fs")

let users = JSON.parse(fs.readFileSync("./delete.json", "utf8"))

let server = http.createServer((req, res) => {
    const { url, method } = req

    res.setHeader("Content-Type", "application/json")

    if (url.match("/user/") && method == "DELETE") {

        let id = url.split("/").at(-1)

        let oldLength = users.length

        users = users.filter((u) => {
            return u.id != id
        })

        if (users.length < oldLength) {

            fs.writeFileSync(
                "./users.json",
                JSON.stringify(users, null, 2)
            )

            res.writeHead(200)

            res.end(JSON.stringify({
                message: "User deleted successfully."
            }))

        } else {

            res.writeHead(404)

            res.end(JSON.stringify({
                message: "User ID not found"
            }))
        }
    }
})

server.listen(6000, () => {
    console.log("server listen on port", 6000)
})