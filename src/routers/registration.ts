import {Router} from "express"
import {User} from "../collections/user"
import jwt from 'jsonwebtoken'
import {SECRET} from '../server'
import {hash} from 'bcrypt'

const router = Router()

router.post('/ping', async (req, res) => {
    const {email} = req.body
    const user = await User.findOne( {email}).exec()

    if (user) {
        return res.send({message: 'user already exists', status: false})
    }

    res.send({status: true})
})

router.post('/', async (req, res) => {
    const {name, lastName, idNumber, email, password, city, street} = req.body
    const hashedPassword = await hash(password, 10)

    try {
        const user = new User({name, lastName, idNumber, email, password: hashedPassword, city, street})
        await user.save()
        const token = jwt.sign({email, role: user.role}, SECRET)

        res.cookie('token', token, {
            maxAge: 86400000,
            httpOnly: true,
            // secure: true
        })

        const responseUser = {name: user.name, lastName: user.lastName, role: user.role, cart: user.cart}
        res.send(responseUser)
    } catch (e) {
        res.status(403).send(e.message)
    }
})

export {router as registrationRouter}
