const express = require('express')
const app = express()
app.use(express.json())
const port = 3000


// const data = [
//     {
//         "name": "Bhushan s",
//         "age": 28,
//         "city": "Mumbai"
//       },
//       {
//         "name": "Ananya Gupta",
//         "age": 24,
//         "city": "Delhi"
//       },
//       {
//         "name": "Ishaan Patel",
//         "age": 30,
//         "city": "Ahmedabad"
//       },
//       {
//         "name": "Diya Mehta",
//         "age": 22,
//         "city": "Bangalore"
//       },
//       {
//         "name": "Rohan Verma",
//         "age": 35,
//         "city": "Chennai"
//         }    
// ]


app.get('/', (req, res) => {
    //   res.send('Hello World!')
    //   res.sendStatus(202);
    
})

app.post('/data', (req, res) => {
    const{age,name} = req.body;
    // console.log(name+age);
    res.send('data received\n'+name+age);

    // res.json(data);
    
})
app.get('/p1', (req, res) => {
    res.send('how are you ?')
  })
  app.get('/p2', (req, res) => {
    res.send('which college you are from ?')
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})