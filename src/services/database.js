const mongoose = require('mongoose')
const URL = 'mongodb+srv://pedrofabiano421:vvZcoyEwTu4Z8MZ7@users.pumsml1.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URL, {}).then(() => {
    console.log('DB is up!')
}).catch((err) => {
    console.log('DB connection error:', err)
})