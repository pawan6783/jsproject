const compose = (a,b,c) => (data) => a(b(c(data)));

const multi3 = num => num*3;
const multi4 = num => num*4;
const multi5 = num => num*5;

let getNumber = compose(multi3,multi4,multi5);
console.log(getNumber(1))