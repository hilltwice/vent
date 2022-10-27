import {createServer} from "node:http"

createServer((request, response) => {
  response.statusCode = 200
  response.setHeader("Content-Type", "text/plain")
  response.end(`your request is: ${request.url}`)
  console.log(`A user is visiting ${request.url}`)
}).listen(8000, () => {
  console.log("server is working...")
})
