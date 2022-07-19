class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        if(this.rating === undefined)
        this.rating="PG";
        else
        this.rating=rating;
        
    }
    getPG(title){
        var arr;
        if(this.rating=="PG")
        arr=this.title+" ";
        return(arr);
    }
}
var m=new movie("vikram","rajkamal");
var m1= new movie("Casino Royale","Eon Productions","PG 13");
console.log(m1.getPG());
console.log(m);
