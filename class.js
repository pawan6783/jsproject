class Page{
    constructor(text){
        this.text = text;
    }

    print()
    {
        console.log(this.text);
    }
}



class NoteBook{
    constructor(){
        this.pages = [];
    }

    addPage(text){
        var page = new Page(text);
        this.pages.push(page);
    }

    print(){
        for(let page of this.pages)
        {
            page.print();
        }
    }
}

var mybook = new NoteBook();
mybook.addPage("first page");
mybook.addPage("second page");
mybook.print();