import express from "express";

const app=express();
const port=3000;

app.get('/', (req, res) => {
    const today=new Date("June 2, 2024 11:00:00")
    let day=today.getDay();

    let type="A Weekday, "
    let advice=" Time to work hard"

    if(day===0 || day===6){
        type="A Weekend, "
        advice=" Time to Chill"
    }
    res.render("index.ejs", {
        'type': type,
        'advice': advice,
    })});
app.listen(port, () =>{
    console.log(`listening on Port: ${port}`);
});