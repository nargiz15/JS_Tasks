// Car constructor-u yaradin. Biz hemin constructor-u cagiranda onun modelini, istehsal ilini, sahibini verek.
//  Ve elbette, masinin surmek, tormozlamaq kimi methodlari olmalidir ki, onlari da verin.
//  Meselen, surmek methodunu cagirsam ekrana,  ali zapi markali masinina qaz verir.




function car(model,istehsalili,sahibi){
     this.model=model,
     this.istehsalili=istehsalili,
     this.sahibi=sahibi,
     this.surmek=()=>{
        console.log(`Ali ${model} markali masinina qaz verir`);
        this.tormozlamaq=()=>{
            console.log(`Ali ${model} markali masinini tormozladi`);
        }
     }
}
let Ali = new car("Zapi", 1990, "Ali")
Ali.surmek()
Ali.tormozlamaq()