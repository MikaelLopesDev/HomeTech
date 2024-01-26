import UserModel from "../models/UserModel"
import UserLogin from "../models/UserLogin"
import { IUser, IUserLogin } from "../Interfaces/InterfaceUser"
import bcrypt from 'bcrypt'

class DbRegister {

    async create(data: IUser): Promise<IUser> {
        return await UserModel.create(data)
    }
    async createLogin(data: IUserLogin): Promise<IUser> {
        return await UserLogin.create(data)
    }
    async login(data: IUserLogin): Promise<any> {

        const findEmail = await UserLogin.findOne({
            email: data.email
        })
        if (!findEmail) {
            return null
        }
        const compare = await bcrypt.compare(data.password, findEmail.password)

        if (compare) {
            return findEmail
        }

        return null

    }
}

export default new DbRegister()