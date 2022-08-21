const express = require('express');
const bodyParser = require('body-parser')
const userContr=require('./user/user.controller');
const app = express();
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.text())

const mongoose = require('mongoose');
async function main() {
  await mongoose.connect('mongodb+srv://user:9hHCQkjHKrbiaNxX@cluster0.o1klx.mongodb.net/sample_restaurants?retryWrites=true&w=majority');
}

main().catch(err => console.log(err));





// app.get('/',(req, res)=>{
//   res.sendFile('/Users/santanu.sahu/Documents/pri_git/exp-test/public/index.html')
// })

// app.get('/:file',(req, res)=>{
//   res.sendFile('/Users/santanu.sahu/Documents/pri_git/exp-test/public/'+req.params.file)
// })


app.use('/user',userContr);


app.listen(3030);