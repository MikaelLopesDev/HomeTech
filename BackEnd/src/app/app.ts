import express from "express"
import morgan from 'morgan'
import router from "../routes/routes"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(router)
app.use(cors())


export default app