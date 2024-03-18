
const express=require('express');
const bodyParser= require('body-parser');

const app=express();
app.use(bodyParser.json())

app.post('/bfhl',(req,res)=>{
  const data=req.body.data;
  // const userId=data.userId;
  // const email=data.email;
  // const rno=data.rno;
  // const num=data.num;
  let evenarr=[];
  let oddarr=[];
  for(let num of data.num){
  if(num%2===0){
    evenarr.push(num);
  }
  else{
    oddarr.push(num);
  }
  }
  const upperCaseLetters=[];
  for(let char of data.alphabets)  
  upperCaseLetters.push(char.toUpperCase());

  res.json({
    "is_success": true,
    "user_id":"abc_def_10012003",
    "email":"abcdef@gmail.com",
    "roll_number":"ABCD123",
    "odd_numbers":oddarr,
    "even_numbers":evenarr,
    "alphabets":upperCaseLetters

  });
  
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
