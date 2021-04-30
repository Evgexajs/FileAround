const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const fileupload = require('express-fileupload')
const authRouter = require('./routes/auth.routes')
const fileRouter = require('./routes/file.routes')
const postRouter = require('./routes/post.routes')
const app = express();
const PORT = process.env.PORT || config.get('serverPort');
const corsMiddleware = require('./middleware/cors.middleware')


app.use(fileupload({}))
app.use(corsMiddleware)
app.use(express.json())
app.use(express.static('static'))
app.use('/api/auth', authRouter)
app.use('/api/files', fileRouter)
app.use('/api/posts', postRouter)
const start = async () => {
    try {
        await mongoose.connect(config.get('dbUrl'), { useNewUrlParser: true, useUnifiedTopology: true })
        app.listen(PORT, () => {
            console.log("Server start on port ", PORT)
        });
    } catch(e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
};

start();