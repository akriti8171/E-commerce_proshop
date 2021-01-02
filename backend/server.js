import express from "express"
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from "./routes/productRoutes.js"
import userRoute from "./routes/userRoute.js"
import orderRoutes from "./routes/orderRoutes.js"
import {notFound,errorHandler} from "./middleware/errorMiddleware.js"
import uploadRoutes from './routes/uploadRoutes.js'
import path from "path"
import morgan from "morgan"
const app = express()

if(process.env.NODE_ENV=="development"){
    app.use(morgan("dev"))
}
app.use(express.json())
dotenv.config()

connectDB()

app.use("/api/products",productRoutes)

app.use("/api/users",userRoute)

app.use("/api/orders",orderRoutes)

app.use('/api/upload', uploadRoutes)

const _dirname= path.resolve()
app.use("/uploads",express.static(path.join(_dirname,'/uploads')))

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(_dirname,"/frontend/build")))

    app.get("*",(req,res)=>
        res.sendFile(path.resolve(_dirname,"frontend","build","index.html")))
}else{
    app.get("/",(req,res)=>{
        res.send("Api is running")
    })
}


app.get("/api/config/paypal",(req,res)=>
    res.send(process.env.PAYPAL_CLIENT_ID)
 )

app.use(notFound)
app.use(errorHandler)

const PORT=process.env.PORT || 5000
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))