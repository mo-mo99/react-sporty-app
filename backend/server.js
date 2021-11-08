import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';

const app = express();
mongoose.connect('mongodb://localhost/sporty', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

app.get('/api/exercises', (req, res)=>{
    res.send(data.exercises)
});
app.use('/api/users', userRouter);

app.get('/', (req, res)=>{
    res.send('Server is ready');
});

app.use((err, req, res, next)=>{
    res.status(500).send({message: err.message});
});

const port = process.env.PORT || 5005 ;

app.listen(port, ()=>{
    console.log(`serve at http://localhost:${port}`);
});