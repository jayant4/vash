module.exports = function updateBook(title, books, price) {

    let index = books.findIndex((obj => obj.title === title));
    books[index].price = price
}