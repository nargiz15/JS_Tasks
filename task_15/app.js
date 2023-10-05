// Body Mass Index (BMI)  calculator yaradin. Internetde axtara bilersiniz bunun haqqinda insanin boyu ve cekisi ile 
// formalasan bir indexlemedir. Hesablama bu formada olur cekini (kq ile) bolursunuz boyun kvadratina (m ile), misal ucun:
// Cekisi 67 kq olan 1.65 m boya sahib adamin BMI bu formada hesablanir: 67 / (1.65 * 1.65) =  24.60
// Demeli bu adam ucun BMI 24.60-dir. 

// Aldigimiz netice 18.5-den kicikdirse, adamin BMI-si azdir, ariqdir. 
// Aldigimiz netice 25-den kicikdirse, adamin BMI-si normal beden olcusune sahibdir. 
// Aldigimiz netice 30-den kicikdirse, adamin BMI-si kokdur.
// Qalan hallarda `"obese"`-dir.


let height =+prompt( 'boyunuzu yazin')
let weight = +prompt( "cekinizi yazin")
let bmi =weight/(height**2);

if(bmi < 18.5){
    console.log("adamin BMI-si azdir, ariqdir");
}
else if( bmi < 25){
    console.log("adamin BMI-si normal beden olcusune sahibdir.");
}
else if( bmi < 30){
    console.log("adamin BMI-si kokdur");
}
else{
    console.log("obese");
}
