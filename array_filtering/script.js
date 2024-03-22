const main = [];
const odd = [] ; 
const even = [] ;

function filterEvenOdd(){
    
    let number = document.getElementById("input").value ;
    
    main.push(number) ;
    console.log(main) ;

    if(number % 2 === 0){
        even.push(number);
    }

    else{
        odd.push(number);
    }
    document.getElementById("even").innerHTML = "Even Numbers:-" + even ;
    document.getElementById("odd").innerHTML =  "Odd Numbers:-" + odd ;

}