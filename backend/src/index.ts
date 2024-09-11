import express, { Express, Request, Response } from 'express'
import bodyParser from 'body-parser'

// Let TypeScript know there is possibly an authrite prop on incoming requests
declare module 'express-serve-static-core' {
  interface Request {
    authrite?: {
      identityKey: string
    }
    certificates?: any
  }
}

const app: Express = express()
const port = 3000

// TODO: Define the server private key and base URL

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// CORS Headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Expose-Headers', '*')
  res.header('Access-Control-Allow-Private-Network', 'true')
  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
})

// TODO (Optionally): Configure non-protected routes

// TODO: Configure the express server to use the authrite middleware

// TODO: Configure protected route

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
