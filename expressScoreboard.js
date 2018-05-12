console.log("this is the scoreboard using express")
var express = require("express");
var app = express();
app.use(express.json());
// enable requests from client input body 

var scores = [{ name: "Erika", score: 9000 }, { name: "Edwin", score: 50 }, { name: "David", score: 39 }];

app.get("/scores", function (req, res) {
    // in express, req is always 200 unless you stat otherwise
    res.send(scores);
     
        // } else {
        //     return b.value;
        //     }
        // }
    // return a.value - b.value; 
    // defining the route for get requests that use /scores
});

app.post("/scores", function (req, res) {
    scores.push(req.body);
    res.status(201).end();
    scores.sort((a,b) => (b.score - a.score));
        // displays highest scores
        scores.splice(3);
        // shows 3 highest scores
    // res.send(combined);
    // defining the route for post request that use /scores
});

app.listen(3000, function () {
    console.log("server has started test!!!");
    // naming a port and server ID to 3000
});