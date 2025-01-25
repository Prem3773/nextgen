
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000
 app.use(express.json())
const mobile = require('./mobile/mobiles')


mongoose.connect('mongodb+srv://prem_rajpure:WzKEM89t9woI75d0@cluster1.6qodj.mongodb.net/').then(()=>
    console.log("Connected to database"));



app.post('/addmobiledata', async(req,res)=> {
    try{
        const mobile = new mobile(req.body);
        await mobile.save();
        res.send("data saved successfully")
    }
    catch(err){
        console.log(err);
    }
}   )
 app.get('/getmobiledata', async(req,res)=> {
  try{
    const mobile = await mobiles.find({});
    res.json(mobile);
    console.log(mobile);
  }
  catch(err){
    console.log(err);
  }
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// mongodb+srv://prem_rajpure:p6N6EYZPwcP7VZ3C@cluster1.6qodj.mongodb.net/