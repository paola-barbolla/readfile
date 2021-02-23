const fs = require("fs")
const util = require("util")

//lettura asincrona
fs.readFile("prova.txt", "utf-8", (err, data) => {
    if (err){
        console.log(errore)
    } else {
        console.log(data)
    }
})

//lettura sincrona
console.log(fs.readFileSync("prova1.txt", "utf-8"))

//lettura asincrona con promisify
const readFile = util.promisify(fs.readFile)
function lettura() {
    return readFile("prova2.txt", "utf-8")
}
lettura().then(data => {
    console.log(data)
})

console.log("ciao")
