// 1-den verilen edede qeder ededlerin hasili -=>  faktorial 

let eded = +prompt("eded daxil edin")
let vurma = 1
for(let i =1; i<eded; i++){
    vurma*=i
}
console.log(`qeyd etdiyiniz ededlerin hasili ${vurma} dir`);