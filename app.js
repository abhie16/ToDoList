//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    var today = new Date();
    var options ={
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options)

    const weekday =["Sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday"]

  if(today.getDay() === 6 || today.getDay() === 0){
    //   day = weekday[today.getDay()];
      res.render("list",{kindOfDay: day});
  }
  else{
    //   day = weekday[today.getDay()];
      res.render("list",{kindOfDay: day});
  }

});


app.listen(3000,function(){
    console.log("Server started on port 3000")
});