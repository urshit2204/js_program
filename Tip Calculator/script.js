function tcal(){
    let a = parseInt(document.getElementById("Amount").value); 
    let b = parseInt(document.getElementById("Tip").value); 

    let tip = a*b/100 ;
    let gst = a*18/100 ;
    let r = a + tip + gst ;

    console.log(r); 
    document.getElementById("amount").innerHTML = "amount:-" + a ;
    document.getElementById("tip").innerHTML = "tip:-" + tip ;
    document.getElementById("gst").innerHTML = "gst:-" + gst ;
    document.getElementById("result").innerHTML = "Total:-" + r ;
}