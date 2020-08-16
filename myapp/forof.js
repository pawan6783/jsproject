var it = "/*..*/" ;

for(let val of it){
    console.log(`Iterator value : ${val} `);
}

var vals = [...it];
console.log(vals);