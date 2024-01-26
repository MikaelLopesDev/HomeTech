import supertest from 'supertest'
import app from '../../src/app/app'
import UserModel from '../../src/models/UserModel'
import UserLogin from '../../src/models/UserLogin'
describe('step create user', () => {

    afterAll(async () => {
        await UserModel.deleteMany()
        await UserLogin.deleteMany()
    })
    it('create user login', async () => {


        const response = await supertest(app).post('/api/create/loginandsenha').send({
            email: "json@gmail.com",
            password: "123456"
        })


        expect(201).toBe(response.status)
        expect(response.body).not.toBe(null)
    })


    it('create user', async () => {

        const login = await supertest(app).post('/api/login').send({
            email: "json@gmail.com",
            password: "123456"
        })

        const response = await supertest(app).post('/api/create/user').send({
            lastname: "fulano",
            firstname: "sousa",
            codepostal: "00000-00",
            endereco: "street 98",
            city: "Teresina",
            estados: "Piauí",
            typePeople: "pj",
        }).set('authorization', login.body.token)


        expect(201).toBe(response.status)
        expect(response.body).not.toBe(null)
    })

    it('login user', async () => {


        const response = await supertest(app).post('/api/login').send({
            email: 'json@gmail.com',
            password: '123456'
        })


        expect(200).toBe(response.status)
        expect(response.body).not.toBe(null)
    })

    it('login user with wong credentials', async () => {


        const response = await supertest(app).post('/api/login').send({
            email: 'json12@gmail.com',
            password: '123456'
        })


        expect(404).toBe(response.status)
        expect(response.body.message).toBe('incorrect email or password')

    })

})