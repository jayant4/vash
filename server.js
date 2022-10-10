const express = require("express")
const app = express()
const port = 3000
app.set('view engine', 'vash');

app.get("/home", (request, response) => {
    response.render('home')
})

app.get("/about", (request, response) => {
    response.render('about')
})

const books = [ 
    { id:1, title : 'T1', author : 'A1', price : 1000 },
    { id:2,title : 'T1', author : 'A1', price : 1000 },
    { id:3,title : 'T1', author : 'A1', price : 1000 },
    { id:4,title : 'T1', author : 'A1', price : 1000 },
    { id:5,title : 'T1', author : 'A1', price : 1000 },
]
app.get("/books", (request,response) =>{
    response.render("books", { books } )
})
app.get("/books", (request,response) =>{
    response.render("books", { books } )
})
  
app.get("/contact", (request, response) => {
    response.render('contact')
})

app.listen(port, () => {
    console.log("server running");
})