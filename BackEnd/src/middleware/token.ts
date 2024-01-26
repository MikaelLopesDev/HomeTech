import jsonwebtoken from 'jsonwebtoken'

const secret = `${process.env.HASH}`
export const jwt = (id: String) => {
    const token = jsonwebtoken.sign({ id }, secret, {
        expiresIn: 800
    })

    return token
}
