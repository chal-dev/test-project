import express from 'express';

const app = express();

app.post('/',(req,res)=>{
    console.log('/api/');
    res.send('API test');
})

const users = [
    {id : 1, name : 'mjjeong'},
    {id : 2, name : 'lemongrab'},
    {id : 3, name : 'iphone'}
  ];
  
app.get('/users',(req,res) => {
res.json({code :200, users: users})
});
  

module.exports={
    path: '/api',
    handler: app
}