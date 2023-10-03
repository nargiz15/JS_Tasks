// Istifadeciden soz alin. Eger daxil etdiyi soz "user"-e beraber olsa console-a "xos geldin istifadeci", sozu cixsin. 
// "admin" olsa "xos geldin cenab admin", "guest" olsa "xos geldin qonaq"

let soz =prompt("sen kimsen?")
if(soz === "user"){
    alert("xos geldin istifadeci")
}
else if(soz === "admin"){
    alert("xos geldin cenab admin")
}
else if(soz=== "guest"){
    alert("xos geldin qonaq")
}