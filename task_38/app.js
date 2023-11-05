// 4 ədəd button olsun. Hansına clickləsəm bodynin rəngi o rəngdə olsun. 
// elementi querySelector ile alin. Ve onun onclick propertysinden istifade edin. onClick property-si bir funksiya alir



const firstcircle = document.querySelector("#first")
firstcircle.addEventListener("click", run)
firstcircle.addEventListener("mouseleave", back)


function run(){
    document.querySelector("#first").style.background="red"

}
function back(){
    document.querySelector("#first").style.background="grey"
    document.querySelector("#second").style.background="grey"
    document.querySelector("#third").style.background="grey"
    document.querySelector("#fourth").style.background="grey"
}

const secondcircle = document.querySelector("#second")
secondcircle.addEventListener("click", runn)
secondcircle.addEventListener("mouseleave", back)
 
function runn(){
    document.querySelector("#second").style.background="green"
}

const thirdcircle = document.querySelector("#third")
thirdcircle.addEventListener("click", change)
thirdcircle.addEventListener("mouseleave", back)

function change(){
    document.querySelector("#third").style.background="orange"
}

const fourthcircle = document.querySelector("#fourth")
fourthcircle.addEventListener("click", changee)
fourthcircle.addEventListener("mouseleave", back)

function changee(){
    document.querySelector("#fourth").style.background="yellow"
    
}
