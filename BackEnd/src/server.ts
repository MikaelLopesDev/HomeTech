import app from "./app/app";
import mongoose from './database/database'

app.listen(process.env.PORT, () => {

    console.log(`Server running in Port: ${process.env.PORT}`)
})