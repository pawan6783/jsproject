function que(arr,item){
    x = [];
    x.push(arr.shift());
    arr.push(item);
    x.push(arr);
    return x;
}

var arr = [1,2,3];
var x = que(arr,4);

console.log("Item removed : "+ JSON.stringify(x[0]));
console.log("New list : "+JSON.stringify(x[1]));