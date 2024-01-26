import { Router } from "express"
import UserController from '../Controllers/UserController'
import Authorization from '../middleware/auth'
const router = Router()


router.post('/api/create/loginandsenha', UserController.createLoginAndPassword)
router.post('/api/create/user', Authorization.authenticate, UserController.Register)
router.post('/api/login', UserController.login)
router.get('/api/userdata', Authorization.authenticate, UserController.findUser)

export default router