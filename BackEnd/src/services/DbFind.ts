import UserModel from "../models/UserModel"
import UserLogin from "../models/UserLogin"
import { IUser, IUserLogin, IUserFind } from "../Interfaces/InterfaceUser"
import bcrypt from 'bcrypt'

class DbFind {

    async find(data: IUserFind): Promise<any> {

        return await UserModel.findOne({ login: data._id }).select('-login')

    }
}

export default new DbFind()