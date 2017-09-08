var Rschema=require('./RestaurentSchema');
var Lschema=require('./LocationSchema');
var Mschema=require('./MovieSchema');
var  bluebird = require('bluebird');
var mongoose=require('mongoose');
var mongoclinet=require('mongodb').MongoClient;
mongoclinet.Promise = require('bluebird');
var express=require('express');
var assert=require('assert');
var engines=require('consolidate');
var body=require('body-parser');
var cors=require('cors');
app=express();
app.use(body.json())
app.use(cors())
var db;
mongoose.connect("mongodb://localhost:27017/video",{ useMongoClient: true },function (err,database) {
      if(err){
      console.log(JSON.stringify(err));
    }
    else {
        return db=database;

           }

})
app.get('/telugucinema',function (req,res) {
  db.collection('moviesdatas').find().toArray(function (err,movie) {
    // res.render('index',{'movie':movie});
    res.send(JSON.stringify(movie));
  });
})
app.post('/tcinema', function (req,res) {
  var mdata=new Mschema({
    Name:req.body.Name,
    Director:req.body.Director,
    Starring:req.body.Starring,
    Generes:req.body.Generes,
    Country:req.body.Country,
    Language:req.body.Language,
    Trailer:req.body.Trailer,
    Like:parseInt(0),
    DisLike:parseInt(0),
    created_at: new Date(),
    updated_at:new Date()
  })
  console.log("getting values from angular2" + mdata.Name)

  mdata.save(function (err,data) {
    if(err){
      console.log("Email should be unique" + err)
    }
    else {
      console.log("inserted successfully!!")

    }
  })

})
app.post("/UpdateDocument",function (req,res) {
    db.collection("moviesdatas").update({Name:req.body.Mname},
    {$inc:{ Like:req.body.Like, DisLike:req.body.DisLike},
    $push:{Comment:req.body.Comment,Rate:req.body.Rate}})

})
app.post('/Restaurents-Review', function (req,res) {
  var rdata=new Rschema({
    Email:req.body.Email,
    FoodType:"south-indian",
    Feedback:"good food",
    created_at: new Date(),
    updated_at:new Date()
  })
  console.log("getting values from angular2" + rdata.Email)

  rdata.save(function (err,data) {
              if(err){
      console.log("Email should be unique" + err)
                   }
    else {
              console.log("inserted successfully!!")

              }
  })

})
app.post('/Location-review', function (req,res) {
   var ldata=new Lschema({
    Email:req.body.Email,
    Location:req.body.Location,
    Feedback:req.body.Feedback,
    created_at: new Date(),
    updated_at:new Date()
  })
  console.log("getting values from angular2" + ldata.Location)

  ldata.save(function (err,data) {
    if(err){
      console.log("Email should be unique" + err)
    }
    else {
      console.log("inserted successfully!!")

    }
  })

})



app.listen(8080);
console.log("server running at port 8080");

