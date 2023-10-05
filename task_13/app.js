/* 6### JavaScript-də sadə kalkulyator hazırlayın.(if else və switch case istifadə edin).
 ( 2 eded ve 1 operatoru (+, -) prompt-la alin). Sonra yoxlayin, 
// operator +dursa, cemini ekrana cixari*/


// let operator = prompt("operator daxil et(+ , - , * , /)")
// let eded1 = +prompt("eded daxil edin")
// let eded2 = +prompt("eded daxil edin")
// let result;
// if (operator === "+") {
//     console.log(eded1 + eded2);
//      = eded1+eded2
// }

// else if (operator === "-") {
//     console.log(eded1 - eded2);
// }
// else if (operator === "*") {
//     console.log(eded1 * eded2);
// }
// else if (operator === "/") {
//     console.log(eded1 / eded2);
// }

// alert(result)



let operator = prompt("operator daxil et(+ , - , * , /)")
 let eded1 = +prompt("eded daxil edin")
let eded2 = +prompt("eded daxil edin")

switch (operator){
    case "+":
        console.log(eded1 + eded2)
     break

     case "-":
        console.log(eded1- eded2);
        break

    case "*":
        console.log(eded1 * eded2);
        break
    
    case "/":
        console.log(eded1 / eded2);
        
}
;

