import express from "express";
import fs from "fs"
const app=express();


app.get("/", (req, res) => {
    
    console.log(req.rawHeaders);
    
    res.send("<h1>Hello World !</h1>");
    console.log(res.statusCode,);
});

app.get("/about", (req, res) => {
    if(res.statusCode>=200 & res.statusCode<300){
        
        res.send("<center><h1>About Me !</h1></center>");
        res.send(res.statusCode);
    }
    
});

app.post("/register", (req, res) => {
    res.sendStatus(201);
});

app.put("/user/ram", (req, res) => {
    res.sendStatus(200);
});
app.patch("/user/ram", (req, res) => {
    res.sendStatus(200);
});
app.delete("/user/ram", (req, res) => {
    res.sendStatus(202);
});
app.get("/register", (req, res) => {
    res.send(res.statusCode);
});
app.listen(3000, () => {
    console.log("Server Running at Port 3000");
});