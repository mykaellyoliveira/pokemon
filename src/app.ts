import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'

class App{
    public express: express.Application
    constructor(){
        this.express = express()
        this.database()
        this.middlewares()
        this.routes()
    }
    private middlewares(): void {
        this.express.use(express.json())
    }
    private async database(){
        try{
            mongoose.set("strictQuery", true)
            await mongoose.connect('mongodb://0.0.0.0:27017/Product')
            console.log('Connect database sucess')
        }catch(err){
            console.error("Connect database error", err)
        }
    }

    private routes(): void{
        this.express.use(routes)
    }

}

export default new App().express