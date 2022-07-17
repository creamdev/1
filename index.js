const express = require('express');
const UTCRoutes = require('./controller/UTCRoutes');
const app = express();
const cors = require('cors');

app.use(cors());
app.use('/',UTCRoutes);


app.listen(3000 ,()=>{
    console.log('server is running on port 3000')
})