function ctf(){
    let cel = parseFloat(document.getElementById("celcius").value) ;
    let Fah = parseFloat(document.getElementById("Fahrenheit").value) ;

    let a = cel * 1.8 + 32;
    document.getElementById("Fahrenheit").value = a ;

}