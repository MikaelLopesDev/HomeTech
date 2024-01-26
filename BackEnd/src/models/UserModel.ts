import mongoose from "../database/database"

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,

    },
    lastname: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    codepostal: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    complemento: {
        type: String
    },
    estados: {
        type: String,
        required: true
    },
    typePeople: {
        type: String,
        required: true,
        default: 'pessoa física'
    },
    login: {
        type: mongoose.Types.ObjectId,
        ref: 'UserLogin',
        required: true,
    }
})

const UserModel = mongoose.model('User', UserSchema)

export default UserModel