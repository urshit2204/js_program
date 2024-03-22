function bTracker(){
    let amount = document.getElementById("amount").value;
    let Text = document.getElementById("text").value;
    
    let transaction  = JSON.parse(localStorage.getItem("item"))
    let type = ""

    if(amount >= 0){
        type = "i"
    }
    else{
        type = "e"
    }

    if(transaction === null){
        transaction = [];
    }

    transaction.push({
        discripsion : Text,
        amount : amount,
        type : type,
    })

    localStorage.getItem("item", JSON.stringify(transaction));
    console.log(JSON.parse(localStorage.getItem("item")));

    let sum = 0;
    transaction.forEach((x) => {
        sum += parseInt(x.amount)
        
    });

    document.getElementById("balance").innerHTML = sum;

    let his = document.createElement("li")
    let data = document.createTextNode(Text + " " + amount)

    his.appendChild(data)
    document.getElementById("list").appendChild(data)

    let income = 0
    let expences = 0

   transaction.forEach((x) => {

    if(x.type === "i"){
        income += parseInt(x.amount)
    }else{
        expences += parseInt(x.amount)
    }

   })
   document.getElementById("income").innerHTML= income;
   document.getElementById("expensis").innerHTML= expences;
}