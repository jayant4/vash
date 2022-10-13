module.exports = function updateBook(title, books, price) {

    //console.log("--------->", title, books);
    let index = books.findIndex((obj => obj.title === title));
    console.log(index);
    books[index].price = 111

}