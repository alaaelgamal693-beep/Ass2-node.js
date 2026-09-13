const http = require("node:http")
const fs = require("node:fs")

let users = JSON.parse(fs.readFileSync("./patch.json", "utf8"))
let server = http.createServer((req, res) => {
    const { url, method } = req

    res.setHeader("Content-Type", "application/json")

    if (url == "/user/" && method == "PATCH") {
        res.end(JSON.stringify({
                age: 30
        }))
    } 
    else {
        res.end(JSON.stringify([
            {
                message: "User age updated successfully."
            },
            {
                message: "User ID not found"
            }
        ]))
    }
})


server.listen(5000,()=>{
    console.log("server listen on port", 5000)
})