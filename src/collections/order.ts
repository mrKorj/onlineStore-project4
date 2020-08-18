import {model, Schema, Document} from 'mongoose'
import {IProduct, ProductSchema} from "./product";

const regxCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/

interface IOrder extends Document {
    userId: string
    totalPrice: number
    orderDate: Date
    city: string
    street: string
    shippingDate: Date
    creditCard: number
    items: IProduct[]
}

const OrderSchema = new Schema({
    userId: {type: String, required: true},
    totalPrice: {type: Number, required: true},
    orderDate: {type: Date, required: true, default: Date.now},
    city: {type: String, required: true},
    street: {type: String, required: true},
    shippingDate: {type: Date, required: true, default: Date.now},
    creditCard: {
        type: Number, required: true, validate: {
            validator: function (v: any) {
                return regxCard.test(v);
            },
            message: props => `${props.value} is not a valid credit card number!`
        }
    },
    items: {type: [ProductSchema], required: true}
})

export const Order = model<IOrder>('Order', OrderSchema)
