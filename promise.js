let mypromise = new Promise((resolve,reject) => {
    let x = 'john';
    let y = 'john';

    if(x==y){
        resolve("promise resolved")
    }
    else {
        reject("promise rejected");
    }
})

mypromise
    .then(function(message){
        console.log(message);
    })
    .catch(function(message){
        console.log(message);
    })