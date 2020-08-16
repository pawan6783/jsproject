function bicycle(speed,prize,rating)
{
    var newbicycle = {};
    newbicycle.speed = speed;
    newbicycle.prize = prize;
    newbicycle.rating = rating;
    return newbicycle;
}

var nb1 = bicycle(20,100,10);
console.log(nb1);

function bicycleCon(speed,prize,rating)
{
   // var newbicycle = {};
    this.speed = speed;
    this.prize = prize;
    this.rating = rating;
   // return newbicycle;
}

var nb2 = new bicycleCon(30,500,20);
console.log(nb2);