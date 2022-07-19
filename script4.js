// -> Base (or initial) fare – A flat fee charged at the beginning of every ride
// -> Cost per minute – How much you are charged for each minute you are inside the ride
// -> Cost per mile – How much you are charged for each mile of the ride
// -> Booking Fee (Formerly ‘Safe Rides Fee’) – A flat fee to cover Uber’s ‘operating costs’.

// -> Base Fare + (Cost per minute * time in ride) + 
// (Cost per mile * ride distance) + Booking Fee = Your Fare
// The above mentioned parameter are used calculate the fair price.

class fair{
    constructor (basef,costpmin,costpmile,bookfee,time,ridedis){
        this.basef=+basef;
        this.costpmin=+costpmin;
        this.costpmile=+costpmile;
        this.bookfee=+bookfee;
        this.time=+time;
        this.ridedis=+ridedis;
    }
    retvalue(){
        return (this.basef+(this.costpmin*this.time)+(this.costpmile*this.ridedis)+this.bookfee);
    }
};
var price= new fair("10","4","15","100","2","250");
console.log(price.retvalue());