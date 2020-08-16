function div(val){

    try
    {
        console.log(val/0);

    }
    catch(exception)
    {
        console.log(exception);
    }
    console.log("program executed");
}

div(5);