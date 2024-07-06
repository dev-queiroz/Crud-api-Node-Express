import express from 'express'
import routes from './routes.js'

const app = express()

app.use(express.json())

// usar router
app.use(routes)

export default app
