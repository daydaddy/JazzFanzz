require('dotenv').config()
const {MongoClient} = require('mongodb')
const ObjectID = require('mongodb').ObjectID

let client 

function connect(locals) { 
    
    const uri = `mongodb+srv://Daydaddy:${process.env.DB_PASSWORD}@cluster0.bozpe.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`
    
    client = new MongoClient(uri,{useUnifiedTopology: true})

    return client.connect()
    .then((connection) => {
        locals.collectionUsers = connection.db(`${process.env.DB_PASSWORD}`).collection('users')

    })
    .catch(err => {
        console.log(err)
        process.exit()
    }) 

} 

function close() { 
    client.close() 
} 

module.exports.connect = connect
module.exports.close = close