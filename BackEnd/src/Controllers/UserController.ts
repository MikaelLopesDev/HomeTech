import { Request, Response } from "express"
import mongoose from "mongoose"
import { UserMethod } from "../class/UserRegister"
import { IUser, IUserFind, IUserLogin } from "../Interfaces/InterfaceUser"
import { jwt } from '../middleware/token'
import bcrypt from 'bcrypt'

class RegisterConcrect extends UserMethod {

}
const concrect = new RegisterConcrect()

class UserController {


    async createLoginAndPassword(req: Request, res: Response): Promise<Response> {

        try {

            const user: IUserLogin = req.body

            user.password = bcrypt.hashSync(req.body.password, 10)

            const data = await concrect.createLogin(user)
            const id = data._id
            const token = jwt(`${id}`)
            return res.status(201).json({ message: 'created login and password', token: token })
        } catch (error: any) {
            // console.log(error.message)
            return res.status(400).json({ message: error.message })
        }

    }
    async Register(req: any, res: Response): Promise<Response> {

        try {
            const user: IUser = req.body
            user.login = new mongoose.Types.ObjectId(req.user)

            const data = await concrect.create(user)
            const id = data._id
            const token = jwt(`${id}`)
            return res.status(201).json({ message: 'user created', token: token })
        } catch (error: any) {
            //console.log(error.message)
            return res.status(400).json({ message: error.message })
        }

    }
    async login(req: Request, res: Response): Promise<Response> {
        try {
            const userLogin: IUserLogin = req.body

            const user: any = await concrect.login(userLogin)

            if (user === null) {
                return res.status(404).json({ message: 'incorrect email or password' })
            }
            const id = user._id
            const token = jwt(`${id}`)
            return res.status(200).json({ token: token })
        } catch (error: any) {
            //console.log(error)
            return res.status(400).json({ message: error })
        }

    }

    async findUser(req: any, res: Response): Promise<Response> {

        const user: IUserFind = {
            _id: req.user,
            email: req.query
        }

        const data: any = await concrect.findOne(user)
        console.log(data)

        return res.status(200).json(data)
    }
}
export default new UserController()