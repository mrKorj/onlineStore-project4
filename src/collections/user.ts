import {Document, Schema, model} from 'mongoose'
import {IProduct, ProductSchema} from "./product";

interface IUser extends Document {
    name: string
    lastName: string
    email: string
    password: string
    idNumber: string
    role: string
    city: string
    street: string
    cart: IProduct[]
}

const UserSchema = new Schema<IUser>({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    idNumber: { type: String, required: true, minlength: [9, 'id numbers must be 9 digits'] },
    city: { type: String, required: true },
    street: { type: String, required: true },
    role: {type: String, default: 'user'},
    cart: {type: [ProductSchema], default: []}
})

UserSchema.path('idNumber').validate(async (idNumber: string) => {
    const user = await User.findOne({ idNumber }).exec()
    return !user
}, 'User already exists')

UserSchema.path('email').validate(async (email: string) => {
    const user = await User.findOne({ email }).exec()
    return !user
}, 'User already exists')

UserSchema.path('email').validate((email: string) => {
    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    return emailRegex.test(email)
}, 'The e-mail field incorrect.')

export const User = model<IUser>('User', UserSchema)
