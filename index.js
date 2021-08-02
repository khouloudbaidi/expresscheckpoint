const express = require('express')
const app = express()
const port = 3000


// app.set('view engine', 'pug')



// Date
const firstMiddleware = (req, res, next) => {

    // console.log('this is an admin')
    var date = new Date();
    //  [0] = "Sunday" ,[1] = "Monday" ,[2] = "Tuesday" ,[3] = "Wednesday" ,[4] = "Thursday" ,[5] = "Friday" ,[6] = "Saturday" 

    var jour = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    
    if (
        jour < 5 && jour > 0 && hour < 17 && hour > 0 && minute < 59 && minute > 0    
    ) {
        next();
    } else 
        res.end(
            "The web application is only available during working hours (Monday to Friday,  from 9 to 17)"
        );
    

}
app.use(firstMiddleware)


//Home
app.get("/", function (req, res) {
    res.render(__dirname + "/views/Home/home.pug");
    // res.sendFile(path.join(__dirname + '/views/Home/home.pug'))
})

app.get("/home.css", function (req, res) {
    res.sendFile(__dirname + "/views/Home/home.css");
})

//contact
app.get('/contactUs', (req, res) => {
    res.render(__dirname + "/views/ContactUs/contactUs.pug")
})

app.get("/contactUs.css", function (req, res) {
    res.sendFile(__dirname + "/views/ContactUs/contactUs.css");
})

//Services
app.get('/ourServices', (req , res) => {
    res.render(__dirname + '/views/OurServices/ourServices.pug')
})

app.get("/ourServices.css", function (req, res) {
    res.sendFile(__dirname + "/views/OurServices/ourServices.css");
})



app.listen(port, () => { console.log(`server running on http://localhost:${port}`) })