const express = require('express');
const authRouter = express.Router();
const axios = require('axios');
const fs = require("fs");
const http=  require("http");
const port = process.env.PORT ||3000;
var golid='';
const apiUrl = 'https://script.google.com/macros/s/AKfycbxEP0ffe5uCfGMK1kI9W-wOSqf4d3eDRUtjCNAHSzCS3DLWMJWyRcXUqAt7zY0QMGUg/exec';
console.log("working");
//google sheets
const filePath = '../python/recognized_text.json';
const appp = express();
appp.use(express.json());
   
  // Read the JSON file
appp.listen(port,()=>{
  console.log("connected to port 3000");
})



   
  

appp.post("/sendtomongo",async(req,res)=>{
  const {name}= req.body;
  console.log(name);
  res.json({"ok":"sended"});
  })
appp.get('/getData', async (req, res) => {
    try {
      const data = await admin.find();
      res.json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

appp.post('/')


  appp.post("/attendaceslide",async(req,res)=>{
  const task=req.body;
   
  console.log(task.task);
  var found=valid(task.task);
 res.json(found);
  })
//g1 store subject which are going to display in attendace.html
  var g1 = [];
  var detailstudentfound={};
  function valid(golidd){
    g1=[];
    axios.get(apiUrl)
    .then(response => {
      console.log(golidd);
    
    var g2=[];
    var storedelementi ;
      for(var i =0 ;i<20;i++){
        
        if(golidd==response.data.data[i]['Student ID'])
        {
          console.log(response.data.data[i]);
          storedelementi = i;
          detailstudentfound = response.data.data[storedelementi];
          // var jaduu;
          //keys = sotres a data of coulm front of a student name
          var keys= Object.keys(response.data.data[i])
          console.log(keys);
          
          //keys1 stores the subject name
          var keys1= Object.keys(response.data.data1[0])

console.log(keys1);
          for(var k = 0;k<=keys.length;k++){
            for(var k1 = 0;k1<=keys.length;k1++)
            if(keys1[k1]==keys[k]){
              var ans=response.data.data1[0][keys1[k1]]- response.data.data[i][keys[k]]
              console.log(ans);
              if(ans>=6){
                console.log(keys1[k1])
               
                g1.push(keys1[k1])
                g2.push[ans];
                console.log();
                console.log("increase attendace");
              
              }
            
            }
          }
          appp.get("/increaseornot",(req,res)=>{
            console.log
            res.send(g1);
          })
          appp.get("/studentfound",(req,res)=>{
            console.log([])
            res.send(detailstudentfound);
          })
          // authRouter.put("/increaseornot",(req,res)=>{
          //   console.log(req.body);
          //   const newdata = req.body;
          //   g1 = newdata;
          //   res.json({ message: 'Data updated successfully', newData });
           
            
                
          // })
         



         
          


            break
        } 
      }
      

})

  }
module.exports = authRouter;
