/**
 * Created by DeepakReddy on 3/23/2017.
 */
var mongoclinet=require('mongodb').MongoClient;
var express=require('express');
var assert=require('assert');
var engines=require('consolidate');
var body=require('body-parser');
var cors=require('cors');
app=express();
app.use(body.json())
app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views',__dirname+"/views");
app.use(body.urlencoded({ extended: false }));
app.use(cors());
//app.use(express.bodyParser());
//app.use(express.router);

mongoclinet.connect("mongodb://localhost:27017/video",function (err,db) {
  // assert(null,err);
  console.log("connected to mongogd");
  app.get("/movies",function (req,res) {
    db.collection('movie').find().toArray(function (err,movie) {
     // res.render('index',{'movie':movie});
        res.send(JSON.stringify(movie));
    });

  })
  app.post("/get_movie",function (req,res) {
    var year=req.body.year;
    console.log(req.body.year);
    var cursot=db.collection('moviesDetails').find({
      year:2010
    });
    cursot.forEach(function (err,movie) {
      console.log(movie.title);
      //res.render('index',{'movieDetails':movie});
    });

  })
  app.post("/add_movie",function (req,res) {
    var year=req.body.UserName;
    var title=req.body.MovieName;
    var imdb=req.body.Comment;
    var Like=req.body.Like;
    var dislike=req.body.DisLike
    db.collection('movie').insertOne({
      title:title,
      year:year,
      imdb:imdb,
      like:Like,
      dislike:dislike
    });
    //res.redirect('/movies');

  })


});

app.listen(8090);
console.log("server runningv at port 3000");
