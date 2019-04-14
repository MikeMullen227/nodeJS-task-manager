//CRUD create read update delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error) {
        return console.log('unable to connect to database')
    }
    const db = client.db(databaseName)
    //insert one user
    // db.collection('users').insertOne({
    //     name: 'Andrew',
    //     age: 27
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops);
    // })
    
    //insert multiple users
    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents')
    //     }
        console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'dishes',
            completed: false
        },
        {
            description: 'sweep',
            completed: true
        },
        {
            description: 'walk dog',
            completed: true
        }
     
    ], (error, result) => {
        if(error) {
            return console.log('Unable to insert tasks.')
        }
        console.log(result.ops)
    })
})