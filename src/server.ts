import express, {NextFunction, Request, Response} from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import expressJwt from 'express-jwt'

import {registrationRouter} from "./routers/registration"
import {loginRouter} from "./routers/login"
import {connectDb} from "./mongoDb"
import {productRouter} from "./routers/product";
import {cartRouter} from "./routers/cart";
import {orderRouter} from "./routers/order";
import {authenticationRouter} from "./routers/authentication";

const {PORT = 4000} = process.env
export const {SECRET = 'secret'} = process.env
const app = express()

const cookieToAuthorization = (req: Request, res: Response, next: NextFunction) => {
    if (req.cookies.token) {
        req.headers.Authorization = `Bearer ${req.cookies.token}`;
    }
    next()
}

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(cookieToAuthorization)
app.use(expressJwt({
    secret: SECRET,
    algorithms: ['HS256']
}).unless({path: ['/api/register', '/api/register/ping', '/api/login']}))


app.use('/api/register', registrationRouter)
app.use('/api/authentication', authenticationRouter)
app.use('/api/login', loginRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

startServer()

async function startServer() {
    await connectDb()
    app.listen(PORT, () => console.log(`Server is up at ${PORT}`));
}


