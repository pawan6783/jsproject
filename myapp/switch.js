function test(val){

    var answer = "";
    switch(val){

        case 1 :
            answer = "alpha";
            break;
        case 2 :
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        
        default :
            answer = "Invalid value";
            break;
    }
    return answer;
}
console.log(test(4));