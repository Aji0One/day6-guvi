const pi=(22/7);
class Circle{
    constructor(radius,color){
        this.radius=+radius;
        this.color=color;
    }
    
getRadius(){
    return this.radius;
}
setRadius (modify){
    this.radius=+modify;

}
getColor(){
    return this.color;
}
setColor (change){
    this.color=change;
}

getArea(){
    
    return (pi*(Math.pow(this.radius,2)));

}
getCircumference(){
    return (2*pi*this.radius);
}
};
var c=new Circle("5","red");
console.log(c);
console.log(c.getRadius());
c.setRadius="4";
console.log(c.setRadius);
console.log(c.getColor());
c.setColor="Green"
console.log(c.setColor);
console.log(c.toString());
console.log(c.getArea().toFixed(2));
console.log(c.getCircumference().toFixed(2));
