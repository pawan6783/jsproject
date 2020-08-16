var whatToSay = {

    greeting() {
        console.log("Hello");
    },
    question(){
        console.log("what's your name?");
    },
    answer(name){
        console.log(`my name is ${name}`);
    }
}

whatToSay.greeting();
whatToSay.question();
whatToSay.answer("kyle");