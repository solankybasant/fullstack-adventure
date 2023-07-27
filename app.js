var express=require("express");
var bodyParser=require("body-parser");
const path = require("path");
const hbs = require("hbs");
const Register = require("./src/models/registers")
require("./src/db/conn")
const port = process.env.PORT || 5000;
var app=express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Sneaky');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection done");
})


//////////////////
const static_path = path.join(__dirname,"/public");

// console.log(path.join(__dirname, "/public"));
app.use(express.static(static_path))

app.set("view engine","hbs")

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static("public/"));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get("/",(req,res)=>{
	res.render("index")
});

app.post("/sneaky",async(req,res)=>{
	// res.render("index");
	try{
		// console.log(req.body.name);
		// res.send(req.body.name);

		const finalSchema = new Register({
			Yname : req.body.Yname,
			email : req.body.email,
			phone : req.body.phone,
			date : req.body.date,
			people : req.body.people
		})

		const registered = await finalSchema.save();
		res.status(201).render("index");

	}catch(error){
		res.status(400).send(error);
	}

})

///////////////


// app.post('/sign', function(req,res){
// 	var name = req.body.name;
// 	var email =req.body.email;
// 	var pass = req.body.password;
// 	var phone =req.body.phone;

// 	var data = {
// 		"name": name,
// 		"email":email,
// 		"password":pass,
// 		"phone":phone
// 	}
// db.collection('details').insertOne(data,function(err, collection){
// 		if (err) throw err;
// 		console.log("Record inserted Successfully");
			
// 	});
		
// 	return res.redirect('sneaky.html');
// })


// app.get('/',function(req,res){
// res.set({
// 	'Access-control-Allow-Origin': '*'
// 	});
// return res.redirect('sneaky.html');
// }).listen(7000)

app.listen(port,()=>{

	console.log(`server listening at port ${port}`);
})

