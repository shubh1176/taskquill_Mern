import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'

dotenv.config();

mongoose.connect(process.env.Mongo).then(
    () => { console.log("Database is connected")}
)

const app = express();

app.use(express.json());

app.listen(3000, ()=> {
    console.log('server is running on 3000!');
});

app.use('/api/user', userRoute);

app.use('/api/auth', authRoute);


app.use((err,req,res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})
