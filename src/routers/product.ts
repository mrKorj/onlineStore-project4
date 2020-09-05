import {Router} from 'express'
import {Product} from '../collections/product'

const router = Router()

// ----- get number of all products-----
router.get('/total', async (req, res) => {
    try {
        const products = await Product.find({}).exec()
        res.send({total: products.length})
    } catch (e) {
        res.status(500).send(e.message)
    }

})

// ------ get product by category
router.get('/:category', async (req, res) => {
    const {category} = req.params

    const products = await Product.find({category: { "$regex" : category , "$options" : "i"}}).exec()

    res.send(products)
})

// -------- search product
router.get('/search/:product', async (req, res) => {
    const {product} = req.params
    const products = await Product.find({$text: {$search: "^" + product}}).exec()

    res.send(products)
})

// --------- add new product
router.post('/add', async (req, res) => {
    const {name, category, price, picUrl} = req.body
    const {role} = (req as any).user // from express-jwt middleware

    if (role !== 'admin') {
        return res.status(403).send({message: 'user doesn\'t have permission'})
    }

    try {
        const product = new Product({name, category, price, picUrl})
        await product.save()

        res.send(product)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

// --------delete product
router.post('/delete', async (req, res) => {
    const {productId} = req.body
    const {role} = (req as any).user // from express-jwt middleware

    if (role !== 'admin') {
        return res.status(403).send({message: 'user doesn\'t have permission'})
    }

    try {
        const {deletedCount} = await Product.deleteOne({_id: productId}).exec()

        if (deletedCount) {
            return res.send({message: 'Product deleted successfully'})
        }
        res.send({message: 'Product not find'})
    } catch (e) {
        res.status(500).send(e.message)
    }
})

//----- update product
router.post('/edit', async (req, res) => {
    const {name, category, price, picUrl, productId} = req.body
    const {role} = (req as any).user // from express-jwt middleware

    if (role !== 'admin') {
        return res.status(403).send({message: 'user doesn\'t have permission'})
    }

    try {
        const product = await Product.findOneAndUpdate({_id: productId}, {name, category, price, picUrl}, {new: true}).exec()
        res.send(product)
    } catch (e) {
        res.status(500).send(e.message)
    }
})


export {router as productRouter}
