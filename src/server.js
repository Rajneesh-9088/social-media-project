const express = require('express');
// const app  = express()

const {db} = require('./db/models');

const {usersRoute} = require('./routes/users')
const {postsRoute} = require('./routes/posts');


// app.use(express.json(par))
// app.use(express.urlencoded({extended: true}))

const app = express();
app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)
app.use('/', express.static(__dirname + '/public'))

// force: true create new table after deleting existing one
db.sync().then(() => {
    app.listen(3333,() => {
        console.log('server started on http://localhost:3333');
    })
    
}).catch((err) => {
    console.error(new Error('Could not start database'));
    console.error(err);
})