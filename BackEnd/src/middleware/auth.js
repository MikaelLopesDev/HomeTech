
const  jwt = require('jsonwebtoken')


const secret = `${process.env.HASH}`

class Authorization {

    authenticate(req, res, next) {
        const token = req.headers['authorization']
       

        if (!token)
            return res.status(400).json({ auth: false, message: 'no token provide' });

        jwt.verify(token, secret, function (err, decode) {
            if(err) {
            //console.log(err);
            return res.status(400).json({ auth: false, message: 'failed to authenticate token' })
        }
        
        const  id  = decode.id

        req.user = id;
       
        next();
    })
}
}


module.exports = new Authorization()