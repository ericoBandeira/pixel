// import { MongoClient, Db } from 'mongodb'

// let uri = process.env.MONGODB_URI
// let dbName = process.env.MONGODB_DB

// let cachedDb = null
// let cachedClient = null;

// if (!uri){
//     throw new Error(
//         'Plese define the MONGO_DB environment variable inside .env.local'
//     )
// }

// if (!dbName) {
//     throw new Error(
//         'Plese define the MONGO_DB environment variable inside .env.local'
//     )
// }

// export async function connectToDatabase() {
//     if (cachedClient && cachedDb) {
//         return {
//             client: cachedClient,
//             db: cachedDb
//         }
//     }
//     const client = await MongoClient.connect(uri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })

//     const db = await client.db(dbName)

//     cachedClient = client
//     cachedDb = db

//     return { client, db }
// }