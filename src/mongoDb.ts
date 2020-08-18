import {connect} from 'mongoose'

const MONGODB_URL = 'mongodb://localhost:27017'
const DB_NAME = 'onlineStore'

export async function connectDb() {
    await connect(MONGODB_URL, {
        dbName: DB_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
}
