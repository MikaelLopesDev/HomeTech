import mongoose from "../database/database"


const UserLoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

const UserLoginModel = mongoose.model('UserLogin', UserLoginSchema)

export default UserLoginModel