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
        const fetchData = mongoose.connection.db.collection("lists");
        fetchData.find({}).toArray(async function(err,data){
            if(err){
                console.log(err);
            }
            else{
                console.log(data);
            }
        })
    }
})
}
module.exports = mongoDB;