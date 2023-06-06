const express = require('express');
const cors = require('cors');
const app = express();
require('./src/db/conn');
const {register,Vcatagory,vendor} = require('./src/models/register');
const port = 5000;
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("hello from backend...");
})

app.get("/getdata", (req, res) => {
    res.json(
        {
            name: 'John Doe',
            password: 'kashyap'
        }
    );
})
app.post("/postdata", async (req, res) => {
    const { username, password } = req.body;
    const user = await register.findOne({username:username});
    const u_pass = await register.findOne({password:password});
    
    if(user && u_pass){
        res.send('true');
    }
    else{
        res.send('false');
    }
})
app.post("/addcatagory", async (req, res) => {
    const { catagory} = req.body;
    const data =new Vcatagory({
                catagory: catagory
            });
            const user = await Vcatagory.findOne({catagory:catagory});
            // const d = await Vcatagory.find();

            if(user){
                res.send('true');
            }
            else{
                await data.save();
                res.send('false');
            }
})
app.get("/addcatagory", async (req, res) => {
            const d = await Vcatagory.find();
            console.log(d)
            res.json(d);            
})


app.post("/addproduct", async (req, res) => {
    const { cat,name,price,qnt,img} = req.body;
    const data =new vendor({
                name:name,cat:cat,price:price,qnt:qnt,img:img
            });
            const check_cat = await Vcatagory.findOne({catagory:cat});
            const prod = await vendor.findOne({name:name});
            // const d = await Vcatagory.find();

            if(!check_cat && prod){
                res.send('false');
            }
            else{
                res.send('true');
                await data.save();
            }
})
// app.post("/postdata", async (req, res) => {
//     const { username, password } = req.body;
//     const data =new register({
//         username: req.body.username, password: req.body.password
//     });
//     console.log(data);
//     res.send('true');
//     // res.json({message:'exist'});

//     await data.save();
//     console.log(data);
//     // await collection.insertMany([data]);
// })



app.listen(port, () => {
    console.log("server start:5000");
});