import express, { json } from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user-routes';
import blogRouter from './routes/blog-routes';
import { password } from './CONSTANTS';

const app = express()
app.use(express.json())

app.use("/api/user",userRouter)
app.use("/api/blog",blogRouter)

mongoose.connect(
    `mongodb://kiabderrezague:${password}@ac-icvxwnq-shard-00-00.o5lshy7.mongodb.net:27017,ac-icvxwnq-shard-00-01.o5lshy7.mongodb.net:27017,ac-icvxwnq-shard-00-02.o5lshy7.mongodb.net:27017/?ssl=true&replicaSet=atlas-iir3qt-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`
)
.then(()=> app.listen(5000))
.then(()=> console.log("Connected to Mongo DB"))
.catch((err)=> console.log(err))



