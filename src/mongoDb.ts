import {connect} from 'mongoose'
import {DB_NAME, MONGODB_URL} from '../configVariables'

export async function connectDb() {
    await connect(MONGODB_URL, {
        dbName: DB_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
}
