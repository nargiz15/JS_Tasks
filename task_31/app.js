// removeCharacterFromString("Alion","A") -> "lion" . bele bir funksiya yazin, sozden character silme. 
// Alion sozu verdik ve A characteri verdik, sozden A-ni sildi.



const removeCharacterFromString = (a,b) => {
  return a.replace(b,"")
}
console.log(removeCharacterFromString("Alion","A"));