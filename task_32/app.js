// nameFormat(str) —> Alion GreenHeart-=> Alion G.

const nameFormat=(str)=>{
  return str.slice(0,str.indexOf(" ")+2).concat(".")
}
console.log(nameFormat("Alion GreenHeart"))
console.log(nameFormat("nergiz ezizli"))