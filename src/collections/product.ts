import {model, Schema, Document} from 'mongoose'

export interface IProduct extends Document {
    name: string
    price: number
    category: string
    picUrl: string
    count: number
}

export const ProductSchema = new Schema<IProduct>({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    picUrl: {type: String, required: true},
    count: {type: Number}
})

export const Product = model<IProduct>('Product', ProductSchema)
