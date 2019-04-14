// //CRUD create read update delete

// // const mongodb = require('mongodb');
// // const MongoClient = mongodb.MongoClient;
// // const ObjectID = mongodb.ObjectID;

// // destructured version of above 
// const {
//     MongoClient,
//     ObjectID
// } = require('mongodb');

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager';

// // const id = new ObjectID()
// // console.log(id)
// // console.log(id.getTimestamp())
// // console.log(id.id.length)
// // console.log(id.toHexString().length)

// MongoClient.connect(connectionURL, {
//     useNewUrlParser: true
// }, (error, client) => {
//     if (error) {
//         return console.log('unable to connect to database')
//     }
//     const db = client.db(databaseName)

//     // CREATE

//     // insert one user
//     // db.collection('users').insertOne({
//     //     id: id,
//     //     name: 'Fred',
//     //     age: 33
//     // }, (error, result) => {
//     //     if(error) {
//     //         return console.log('Unable to insert user')
//     //     }
//     //     console.log(result.ops);
//     // })

//     //insert multiple users
//     // db.collection('users').insertMany([
//     //     {
//     //         name: 'Jen',
//     //         age: 28
//     //     },
//     //     {
//     //         name: 'Gunther',
//     //         age: 27
//     //     }
//     // ], (error, result) => {
//     //     if(error) {
//     //         return console.log('Unable to insert documents')
//     //     }
//     // console.log(result.ops)
//     // })

//     // db.collection('tasks').insertMany([
//     //     {
//     //         description: 'dishes',
//     //         completed: false
//     //     },
//     //     {
//     //         description: 'sweep',
//     //         completed: true
//     //     },
//     //     {
//     //         description: 'walk dog',
//     //         completed: true
//     //     }

//     // ], (error, result) => {
//     //     if(error) {
//     //         return console.log('Unable to insert tasks.')
//     //     }
//     //     console.log(result.ops)
//     // })



//     // READ
//     // db.collection('users').findOne({_id: new ObjectID("5cb2838ccb78e2fe730da930")}, (error, user) => {
//     //     if(error) {
//     //         return console.log('Unable to fetch')
//     //     }
//     //     console.log(user)
//     // })

//     // db.collection('users').find({age: 27}).toArray((error, users) => {
//     //     console.log(users)
//     // })

//     // db.collection('tasks').findOne({_id: new ObjectID("5cb27d486ff026fc3edc543a")}, (error, task) => {
//     //     console.log(task)
//     // })

//     // db.collection('tasks').find({completed: false}).toArray((error, task) => {
//     //     console.log(task)
//     // })


//     // UPDATE
//     // db.collection('users').updateOne({
//     //     _id: new ObjectID("5cb0f9e56b54fa6351c494a9")
//     // }, {
//     //     // $set: {
//     //     //     name: 'Mike'
//     //     // }
//     //     $inc: {
//     //         age: 1
//     //     }
//     // }).then((result) => {
//     //     console.log(result)
//     // }).catch((error) => {
//     //     console.log(error)
//     // })


//     // db.collection('tasks').updateMany({
//     //     completed: false
//     // }, {
//     //     $set: {
//     //         completed: true
//     //     }
//     // }).then((result) => {
//     //     console.log(result)
//     // }).catch((error) => {
//     //     console.log(error)
//     // })

//     // DELETE
//     db.collection('users').deleteMany({
//         age: 28
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })


//     db.collection('tasks').deleteOne({
//         description: "dishes"
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })

// })