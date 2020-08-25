import {Router} from "express"
import {User} from "../collections/user";

const router = Router()

router.get('/', async (req, res) => {
    const {email} = (req as any).user // from express-jwt middleware
    const user = await User.findOne({email}).exec()

    if (!user) {
        return res.status(401).end()
    }

    const responseUser = {name: user.name, lastName: user.lastName, role: user.role, cart: user.cart}
    res.send(responseUser)
})

export {router as authenticationRouter}
