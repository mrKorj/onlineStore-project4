import {Router} from 'express'
import {Order} from '../collections/order'
import {User} from "../collections/user";

const router = Router()

let invoiceNumber = 1000
let invoice = ''

// -------- add order
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

        const newOrder = new Order({userId: email, city, street, shippingDate, creditCard, totalPrice, items: userCart?.cart})
        await newOrder.save()
        const order = {...newOrder.toObject(), creditCard: null}
        res.send({order})
    } catch (e) {
        res.status(500).send(e.message)
    }
})

//----check shipping date status
router.post('/shipping', async (req, res) => {
    const {shippingDate} = req.body
    const orders = await Order.find({shippingDate}).exec()

    if (orders.length >= 3) {
       return res.send({status: false})
    }
    res.send({status: true})
})

// ----- get invoice
router.get('/invoice', (req, res) => {
    res.attachment(`invoice${invoiceNumber}.txt`)
    res.type('txt')
    res.send(invoice)
})


// ----- get num of all orders
router.get('/total_orders', async (req, res) => {
    const orders = await Order.find({}).exec()
    res.send({total: orders.length})
})

// ---- get order by user id
router.get('/user_orders', async (req, res) => {
    const {email} = (req as any).user
    const userOrders = await Order.find({userId: email}).exec()
    const orders = userOrders.map(order => {
        return {...order.toObject(), creditCard: null}
    })
    res.send(orders)
})

export {router as orderRouter}
