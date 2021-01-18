const express = require('express');
const app  = express()
const PORT = process.env.PORT || 3333

const {db} = require('./db/models');

const {usersRoute} = require('./routes/users')
const {postsRoute} = require('./routes/posts');
// const { urlencoded } = require('express');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)
app.use('/', express.static(__dirname + '/public'))

// force: true create new table after deleting existing one
db.sync().then(() => {
    app.listen(PORT,() => {
        console.log(`server started on http://localhost:${PORT}`);
    })
    
}).catch((err) => {
    console.error(new Error('Could not start database'));
    console.error(err);
})