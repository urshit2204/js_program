const array = [];

function duplicate(){
    let inp = document.getElementById("input").value
    array.push(inp);
    
    let dup = (data) => {
        return [...new Set(data)]
    }

    console.log(dup(array));

    document.getElementById("normal").innerHTML = `<h1>Duplicate array : ${JSON.stringify(array)}<br></h1>`
    document.getElementById("Dupli").innerHTML = `<h1>unique array : ${dup(array)}</h1>`
}