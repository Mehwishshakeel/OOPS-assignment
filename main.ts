// Define a class named `Book`. Create an instance of this class.
class Book {
    author:string;
    title:string;
    static numOfBooks=0;
    constructor(author:string,title:string){
        this.author = author;
        this.title =title;
        Book.numOfBooks += 1;
    }
    getDetails(){
        console.log(this)
        console.log(`The author of ${this.title} is ${this.author}`)
    }

};
class Ebook extends Book{
     filesize:string
     constructor(author:string,title:string,filesize:string){
        super(author,title)
        this.filesize =filesize
     }
     getDetails():void{
        console.log(this)
        console.log(`The author of ${this.title} is ${this.author} and file size is ${this.filesize}`)
    }
    getNumOfBooks(){
        return Book.numOfBooks;
    }
}
let Book1 = new Book("Collean Hover","this girl");
let Book2 = new Book("Nimra Ahmed","Peere kamil");
console.log(Book1.author);
Book1.getDetails();
Book2.getDetails();
let Ebook1 = new Ebook("Collean Hover","this girl","10GB");
console.log(Ebook1);
Ebook1.getDetails();
console.log(Ebook1.getNumOfBooks());
