// verify gmail address. (gmail addressleri sonu @gmail.com ile bitmelidir, 
//     ve ondan evvel en azi 5 simvol olmalidir.
//      abcdf@gmail.com meselen)


let usersGmail=prompt("gmaili girin")
if(usersGmail.endsWith("@gmail.com") && usersGmail.length>15){
    console.log(`siz dogru email yazdiniz ${usersGmail}`)
}else{
    console.log("error")
}
