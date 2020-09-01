import {Router} from "express"
import {compare} from "bcrypt";
import {User} from "../collections/user"
import jwt from 'jsonwebtoken'
import {SECRET} from '../server'


const router = Router()

router.post('/', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email}).exec()

    if (!user) {
        return res.status(401).send("email or password don't match")
    }

    const isPasswordCorrect = await compare(password, user.password)

    if (!isPasswordCorrect) {
        return res.status(401).send("email or password don't match")
    }

    const token = jwt.sign({email, role: user.role}, SECRET)

    res.cookie('token', token, {
        maxAge: 86400000,
        path: '/',
        httpOnly: true,
        // secure: true
    })

    const responseUser = {name: user.name, lastName: user.lastName, role: user.role, cart: user.cart}
    res.send(responseUser)
})

// ---------- logout
router.get('/', (req, res) => {
    res.cookie('token', '', {
        path: '/',
        httpOnly: true,
        // secure: true
    })
    res.send({message: 'logout'})
})

export {router as loginRouter}
