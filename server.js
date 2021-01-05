const express = require('express');

const {db} = require('./src/db/models');

const app = express();

app.listen(8383,() => {
    console.log('server started on http://localhost:8383');
})
// force: true create new table after deleting existing one
db.sync({force:true}).then(() => {
    app.listen(1234,() => {
        console.log('server started on http://localhost:1234');
    })
    
}).catch((err) => {
    console.error(new Error('Could not start database'));
    console.error(err);
})