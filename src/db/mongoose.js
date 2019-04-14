const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            // if(value.length <= 6) {
            //     throw new Error('Password too short. Must be greater than 6 characters.')
            // }
            if(value.toLowerCase.includes('password')) {
                throw new Error('"password" is not valid. Try again.')
            }
        }
    }
})

// const me = new User({
//     name: '    Mike    ',
//     email: 'MYEMAIL@gmAIL.COM',
//     password: 'mongoose'
// })

// me.save().then(() => {
//     console.log(me)
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

const task = new Task({
     description: '   Eat lunch',
    // completed: false
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log('Error!', error)
})