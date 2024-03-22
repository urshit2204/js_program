const array = [];
function sal(){
    let number = document.getElementById("input").value ;
    

    array.push(number);
    

    console.log(array) ;

    let sort = array.sort(function(a,b){return a-b});

    let small = sort[0];
    let large = sort[sort.length-1] ;
    document.getElementById("small").innerHTML = "small:-" + small ;
    document.getElementById("large").innerHTML = "large:-" + large ;
}