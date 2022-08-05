console.log("class Exercise");

class library {
    constructor(book) {
        this.books = new Object();
        for (let i = 0; i < book.length; i++) {
            this.books[book[i]] = {
                issued: false,
                user: null,
            };
        }
    }
    getBookList() {
        let issued = "";
        let notIssued = "";
        for (let key in this.books) {
            if (this.books[key].issued) {
                issued += key + " To " + this.books[key].user + " \n";
            } else {
                notIssued += key + " ";
            }
        }
        if (issued.length == 0) {
            console.log("Available: " + notIssued);
        } else {
            console.log("Available: " + notIssued + "\n Issued: " + issued);
        }
    }
    issueBook(bookname, user) {
        if (bookname in this.books) {
            if (this.books[bookname].issued) {
                alert("book is already issued");
            } else {
                this.books[bookname].user = user;
                this.books[bookname].issued = true;
            }
        } else {
            alert("Book isn't in the library");
        }
    }
    returnBook(bookname) {
        if (bookname in this.books) {
            if (this.books[bookname].issued) {
                console.log(
                    `Thank you for returning the book ${this.books[bookname].user}`
                );
                this.books[bookname].user = null;
                this.books[bookname].issued = false;
            } else {
                alert("This book wasn't issued to anyone.");
            }
        } else {
            alert("This book is not in the library");
        }
    }
}

let primary_lib = new library(["A", "B", "C", "D"]);
console.log(primary_lib.books);
// console.log(primary_lib.issuedBooks);
primary_lib.getBookList();
primary_lib.issueBook("A","Kesh");
primary_lib.getBookList();
// primary_lib.issueBook("E","Raj");
primary_lib.returnBook("A");
primary_lib.getBookList();