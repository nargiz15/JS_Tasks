// JavaScript-də üç ədəd arasında ən böyüyü tapın.(Həm if else həm də Math.max() )*/
let eded1 = +prompt('reqem daxil et 1 ci')
let eded2 = +prompt('reqem daxil et 2 ci')
let eded3 = +prompt('reqem daxil et 3 cu')

  // 5 boyuk oldu true   //  true 
if(eded1 > eded2  && eded1 > eded3){
    console.log("eded 1 boyukdur");
}

else if(eded2 > eded3 && eded2 > eded1){
    console.log("eded2 boyukdur hamsindan");

}


else if(eded3 > eded2 && eded3 > eded1){
    console.log("eded3 boyukdur hamsindan");

}

else{
    console.log('reqem daxil et');
}
