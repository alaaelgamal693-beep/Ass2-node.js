//POST

const http = require("node:http")
const fs = require("node:fs")

let server = http.createServer((req, res) => {
    const { url, method } = req

    res.setHeader("Content-Type", "application/json")

    if (url == "/user" && method == "POST") {
        res.end(JSON.stringify({
            users: [
                {
                    name: "User 1",
                    age: 27,
                    email: "user1@email.com"
                },
                {
                    name: "User 2",
                    age: 30,
                    email: "user2@email.com"
                }
            ]
        }))
    } 
    else {
        res.end(JSON.stringify([
            {
                message1: "User add successfully."
            },
            {
                message2: "Email already exists."
            }
        ]))
    }
})


server.listen(4000,()=>{
    console.log("server listen on port", 4000)
})



