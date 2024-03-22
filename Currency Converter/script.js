function con(){
    let rs = document.getElementById("rup").value ;
    

    let con = rs*82.88;
    console.log(con);

    document.getElementById("dol").value = con ; 
}
function con2(){
let usd = document.getElementById("dol").value ;

    let con = usd/82.88;

    document.getElementById("rup").value = con ;
}