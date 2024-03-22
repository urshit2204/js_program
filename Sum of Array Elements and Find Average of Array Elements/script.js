const main = [];

function so(){
    let num = parseInt(document.getElementById("input").value );
    main.push(num);

    let sum = 0
    for(let i=0; i<main.length; i++){

        sum += main[i];
        console.log(sum);
        document.getElementById("output").innerHTML = "sum:-" + sum;
    }
}
