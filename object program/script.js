const ob = [];

function object(){
    let x = document.getElementById("name").value;
    let y = document.getElementById("age").value;
    let z = document.getElementById("gender").value;

    ob.push({
        name : x ,
        age : y ,
        gender : z
    })

    console.log(ob);
    document.getElementById("output").innerHTML = JSON.stringify(ob);
}