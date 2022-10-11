const express = require("express")
const app = express()
const port = 3000
app.set('view engine', 'vash');
const updateBook = require("./logic")

app.get("/home", (request, response) => {
    response.render('home')
})

app.get("/about", (request, response) => {
    response.render('about')
})

const books = [
    { id: 1, title: 'T1', author: 'A1', price: 1000 },
    { id: 2, title: 'T2', author: 'A2', price: 1000 },
    { id: 3, title: 'T3', author: 'A3', price: 1000 },
    { id: 4, title: 'T4', author: 'A4', price: 1000 },
    { id: 5, title: 'T5', author: 'A5', price: 1000 },
]

app.get("/books", (request, response) => {
    response.render("books", { books })
})


app.get("/books/edit", (request, response) => {
    const title = request.query.title
    // console.log(title);
    // updateBook(title,books);
    // console.log(books);
    response.render("editBook", { books })
})
app.get("/books/update", (request, response) => {
    const title = request.query.title
    console.log(title);
    updateBook(title, books);
    console.log(books);
    response.render("editBook", { title })
})

app.get("/contact", (request, response) => {
    response.render('contact')
})

app.listen(port, () => {
    console.log("server running");
})