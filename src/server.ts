import express from 'express'



const app = express();


const PORT:number = 5000;


app.get('/', (req, res) => {
    res.send('hello world')
})
// const Hel: string = 'hello world';


app.listen(PORT, () => {
     console.log(`server running on port:${PORT}`)
})
