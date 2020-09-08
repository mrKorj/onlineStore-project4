import {Router} from 'express'
import {Product} from "../collections/product";
import {User} from "../collections/user";


const router = Router()


// ----------add product to cart
router.post('/add', async (req, res) => {
    const {productId, count} = req.body
    const {email, role} = (req as any).user // from express-jwt middleware

    if (role === 'admin') {
        return res.status(403).send({message: 'user doesn\'t have permission'})
    }

    try {
        const alreadyInCart = await User.findOne({"cart._id": productId}, {cart: 1, _id: 0}).exec()

        if (alreadyInCart) {
            const updatedCart = await User.findOneAndUpdate({
                email,
                "cart._id": productId
            }, {$inc: {"cart.$.count": count}}, {
                useFindAndModify: false,
                new: true,
                projection: {'cart': 1, '_id': 0}
            }).exec()
            return res.send(updatedCart?.cart)
        }

        const product = await Product.findById(productId).exec()
        const cartProduct = {...product?.toObject(), count}

        // @ts-ignore
        const {cart} = await User.findOneAndUpdate({email}, {$push: {cart: cartProduct}}, {new: true}).exec()

        res.send(cart)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

// --------remove product from cart
router.post('/delete', async (req, res) => {
    const {productId} = req.body
    const {email, role} = (req as any).user // from express-jwt middleware

    if (role === 'admin') {
        return res.status(403).send({message: 'user doesn\'t have permission'})
    }

    try {
        // @ts-ignore
        const {cart} = await User.findOneAndUpdate({email}, {$pull: {cart: {_id: productId}}}, {new: true}).exec()
        res.send(cart)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

export {router as cartRouter}
