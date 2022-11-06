function display(result){
    console.log(result);
}

function calculate(num1, num2, callback){
    let result = num1 + num2;
    if(callback) callback(result);
}

calculate(1, 2, display); // 3

calculate(5, 6, function(result){
    console.log("Callback ", result);
}) //Callback  11