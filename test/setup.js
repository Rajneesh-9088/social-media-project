process.env.NODE_ENV = 'testing'

const {db} = require('../src/db/models')



before( async()=>{
    console.log('running before all test')
   await db.sync()
})