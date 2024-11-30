function greetUser(name,callbackFunction){
    console.log(`Hello, ${name}`);
    callbackFunction();
}

function callbackFunction(){
    console.log("Greetings Message");
}

greetUser("Suresh", callbackFunction)