const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})


// const me = new User({
//     name: '    Mike    ',
//     email: 'MYEMAIL@gmAIL.COM',
//     password: 'mongoose'
// })

// me.save().then(() => {
//     console.log(me)s
// }).catch((error) => {
//     console.log('Error!', error)
// })


const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

// const task = new Task({
//      description: '   Eat lunch',
//     // completed: false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error!', error)
// })