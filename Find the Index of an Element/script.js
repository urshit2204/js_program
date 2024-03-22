const array = ["banana","orange","apple","mango","graps","pinapple"];

function Element(){
    let name = document.getElementById("input").value ;
    let r = array.indexOf(name);
    
    // document.getElementById("option").innerHTML = `<h1>${array}</h1>`
    document.getElementById("lab").innerHTML = `<h1>${r}</h1>`
}