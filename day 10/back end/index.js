
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())
const port = 3000
 app.use(express.json())
const movies = require('./model/movies')
app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect('mongodb+srv://prem_rajpure:WzKEM89t9woI75d0@cluster1.6qodj.mongodb.net/').then(()=>
    console.log("Connected to database"));



app.post('/addmoviedata', async(req,res)=> {
    try{
        const movie = new movies(req.body);
        await movie.save();
        res.send("data saved successfully")
    }
    catch(err){
        console.log(err);
    }
}   )
 app.get('/getmoviedata', async(req,res)=> {
  try{
    const movie = await movies.find({});
    res.json(movie);
    console.log(movie);
  }
  catch(err){
    console.log(err);
  }
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// mongodb+srv://prem_rajpure:p6N6EYZPwcP7VZ3C@cluster1.6qodj.mongodb.net/