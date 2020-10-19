import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser"
import connect from './connect'
import Prod from './models/product'
import productRoute from './routes/product'
const app: Application = express();


const port: number = 5000 || process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db: string = "mongodb://127.0.0.1/product"
connect(db);




app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send('hello world')
})

app.get('/test', (req, res) => res.send('products'))

// app.use(productRoute);


app.use('/product', productRoute);


app.listen(port, () => {
     console.log(`server running on port:${port}`)
})
