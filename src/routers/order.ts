import {Router} from 'express'
import {Order} from '../collections/order'
import {User} from "../collections/user";

const router = Router()

let invoiceNumber = 1000
let invoice = ''

router.post('/', async (req, res) => {
    const {city, street, shippingDate, creditCard} = req.body
    const {email, role} = (req as any).user // from express-jwt middleware

    if (role === 'admin') {
        return res.status(403).send({message: 'user doesn\'t have permission'})
    }

    try {
        const userCart = await User.findOne({email}, {cart: 1}).exec()

        invoiceNumber++
        invoice = `Invoice # ${invoiceNumber}\n`
        let totalPrice = 0

        userCart?.cart.forEach((product, index) => {
            totalPrice += product.price * product.count
            invoice += `\n${index + 1} ${product.name} - price: ${product.price} - count: ${product.count}`
        })

        invoice += `\n\n Total price: ${totalPrice} $. \n Order date: ${new Date()}.`

        const order = new Order({userId: email, city, street, shippingDate, creditCard, totalPrice, items: userCart?.cart})
        await order.save()
        // @ts-ignore
        const {cart} = await User.findOneAndUpdate({email}, {cart: []}, {new: true}).exec()

        res.send({order, cart})
    } catch (e) {
        res.status(500).send(e.message)
    }
})

//----check shipping date status
router.get('/shipping', async (req, res) => {
    const {shippingDate} = req.body
    const orders = await Order.find({shippingDate}).exec()

    if (orders.length >= 3) {
       return res.send({message: 'We are very busy on this date, please choose another day.', status: false})
    }
    res.send({status: true})
})

// ----- get invoice
router.get('/invoice', (req, res) => {
    res.attachment(`invoice${invoiceNumber}.txt`)
    res.type('txt')
    res.send(invoice)
})

export {router as orderRouter}
