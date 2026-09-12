// 1

function showpath() {
    console.log(__filename)
    console.log(__dirname)
}
showpath()


// 2

const path = require("path")
function filename(filepath){
    let file =path.resolve(filepath)
    console.log(path.basename(file))
}
filename("/user/files/report.pdf")


// 3

function createpath(){
    let obj = { dir:"/folder", name:"app", ext:".js"}
    console.log(path.format(obj))
}
createpath()

// 4

function pathex(){
    let f=path.resolve("/docs/readme.md")
    console.log(path.extname(f))
}
pathex()


// 5

function re(){
    let file1=path.parse("/home/app/main.js")
    console.log({ext:file1.ext,name:file1.name})
}
re()


// 6
function check(){
    let file2=path.resolve("/home/user/file.txt")
    console.log(path.isAbsolute(file2))
}
check()


// 7


function joinn(){
    let file3=path.join("src","components", "App.js")
    console.log(file3)
}
joinn()


// 8 

function resolvepath(){
    file4=path.resolve("./index.js")
    console.log(file4)
}
resolvepath()

// 9

function joinn1(){
    let file5=path.join("/folder1", "folder2/file.txt")
    console.log(file5)
}
joinn1()

// 10

// .......................................................................
const fs = require("fs")
function delete1(){
    fs.unlink("main.js",(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("The main.js is deleted.")
        }
    })
}
delete1()

// ......................................................................
// 11
function creatpath(){
    fs.mkdir("newfolder.js",(err)=>{
        if (err) {
            console.log(err)
        }else{
            console.log("success")
        }
    })
}
creatpath()

// 12

const { EventEmitter } = require("node:events")
const { Utf8Stream } = require("node:fs")
const { ifError } = require("node:assert/strict")
let eventhandler = new EventEmitter()
eventhandler.on("start", (welcome) => {
    console.log(welcome)
});
eventhandler.emit("start", "Welcome event triggered !")


// 13

let eventhandlerr = new EventEmitter()
eventhandlerr.on("login", (username) => {
    console.log("User logged in : " , username)
});
eventhandlerr.emit("login", "Ahmed")


// 14

fs.readFile(path.resolve("./text.txt"), {encoding :"utf-8"}, (err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log("the file content =>",data)
    }
})


// 15

fs.writeFile("./async.txt","Async save" ,(err)=>{
    if(err){
        console.log(err)
    }
})


// 16

console.log(fs.existsSync("./notes.txt"))

// 17  


const os = require("node:os");

function Info() {
    return {
        Platform: os.platform(),
        Arch: os.arch()
    }
}
console.log(Info())


// 18


let reading = fs.createReadStream("./big.txt")
reading.on("data",(chunk)=>{
    console.log(chunk.toString())
})


// 19


let reading1 = fs.createReadStream("./source.txt")
let write = fs.createWriteStream("./dest.txt")
reading1.on("data",(chunk)=>{
    write.write(chunk)
})
reading1.on("end",()=>{
    console.log("File copied using streams")
})

// 20

const zlib = require("node:zlib")
let reading2 = fs.createReadStream("./data.txt")
let write1 = fs.createWriteStream("./data.txt.gz")
reading2.pipe(zlib.createGzip()).pipe(write1)

// -------------------------------------------------------------------------

