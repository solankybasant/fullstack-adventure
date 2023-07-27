const mongoose  = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Sneaky", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then(()=>{
    console.log(`conn js success`);
}).catch((e)=>{
    console.log(`no connection`,e);
});
