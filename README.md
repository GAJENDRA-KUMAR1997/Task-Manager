MERN-STEP-BY-STEP Summery

Step-by-step guide on how to build a simple MERN stack application. This is basically my notes plus an attempt to explain it further to my future myself.

Let's start
First, what MERN stack stands for?
MERN is a full-stack web development framework, composed of four technologies MongoDB, ExpressJS, ReactJS, NodeJS

MongoDB: A document-oriented, No-SQL database used to store your app data.

NodeJS: It is a JavaScript runtime environment. It provides you with the ability to run JavaScript in a machine rather than in a browser.

ExpressJS: A framework layered on top of NodeJS, used to build the backend of a site using NodeJS functions and structures. Since NodeJS was not developed to make websites but rather run JavaScript on a machine, ExpressJS was developed.

ReactJS: It is a library created by Facebook. It is used to build UI components that create the user interface of the single page web application.

(A) For BACKEND

(A)Create a repository

mkdir mern-app

touch mern-app/server.js npm init -y npm install express mongoose --save

//=============================

//      Dependencies

//=============================

const express = require("express");

const mongoose = require("mongoose");

(B) Make the connection with MongoDB

const mongoose = require("mongoose");

const URI = "mongodb+srv://gajendrakumar325:gprradha%40123@cluster0.ovbdyjy.mongodb.net/FOODZONEMERN?retryWrites=true&w=majority&appName=Cluster0"

mongoose.set('strictQuery', false);

const mongoDB = async() =>{

    await mongoose.connect(URI,{useNewUrlParser:true},(err,result)=>{
    
    if(err) {
    
        console.log("Not Connected",err)
        
    }
    
    else{
    
        console.log("Connected");
        
    }
    
})

}}

module.exports = mongoDB;

(C)Handle connection error message and mongo disconnected

//=================================================

// Listening on Port 3000 or Default to HEROKU

//=================================================

app.listen(PORT, () => {

  console.log(`Ascoltando al porto... ${PORT}`);
  
});

(D) Creating the Models directory

const mongoose = require("mongoose");

const { Schema } = mongoose;

const ListSchema = new Schema({

    title : {
    
        type : String,
        
        require : true,
        
    },
    
    description : {
    
        type : String,
        
        require : true,
        
    },
    
    status : {
    
        type : String,
        
        require : true,
        
    },
    
    createdAt : {
    
        type : Date,
        
        default : Date.now
        
    },
    
    updatedAt : {
    
        type : Date
        
    }
    
})

module.exports = mongoose.model('lists',ListSchema);

(E) Create the get,post,update,delete route and Controller within route
const express = require("express");

const router = express.Router();

const List = require("../model/List.js");

router.get("/getList",async(req,res)=>{

    try {
    
        const data = await List.find({});
        
        res.json(data);
        
    } catch (error) {
    
        console.log(error)
        
        res.status(400).json({success:false});
        
    }
    
})

module.exports = router;

(F) Move Models
app.use("/api",require("./routes/CreateList"));

app.use("/api",require("./routes/GetList"));

app.use("/api",require("./routes/Update"));

app.use("/api",require("./routes/Delete"));

app.use("/api",require("./routes/Description"));

(G) Add cors Policy

app.use(cors({

    origin: 'http://localhost:3000',  // Allow requests from this origin
    
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
    
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow these headers
    
  }));

(B) For FRONTEND

(A) Create All the Components

(1) List.js

(2) UpdateList.js

(3) GetData.js

(4) Description.js

(B) Make all AJAX Call

const [data,setData] = useState([]);

    const fetchData = async() =>{
    
        const response = await fetch("http://localhost:5000/api/getList",{
        
            method: "GET",
            
        headers: {
        
            "Content-Type": "application/json",
            
        }
        
        })
        
        let result = await response.json();
        
        console.log(result);
        
        setData(result);
        
    }
    
    const onClickHandler = async(e) =>{
    
      let id = e.target.value;
      
      e.preventDefault();
      
      console.log(id);
      
      const response = await fetch(`http://localhost:5000/api/delete/${id}`, {
      
        method: 'DELETE',
        
        headers: {
        
          "Content-Type": "application/json",
      }
      
      });
      
      const data1 = await response.json();
      
      console.log(data1);
      
    }
