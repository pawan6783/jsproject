
class Publication{
    constructor(title,author) {
        this.title = title;
        this.author = author;
    }

    print()
    {
        console.log(`
        Title : ${this.title} \n
        Author : ${this.author} 
        `);
        
    }
}

class NoteBook extends Publication{
    constructor(bookdetail){

       
        super(
            bookdetail.title,
            bookdetail.author
        );

        this.publication = bookdetail.publication;
        this.publisher = bookdetail.publisher;

    }

    print()
    {
        super.print();
        console.log(`
        publication : ${this.publication} \n
        publisher : ${this.publisher}
        `);
    }
}

var mybook = new NoteBook({
    title: "stories",
    author: "kyle",
    publication: "june 2014",
    publisher: "reilly",

})
mybook.print();