const main = [];
const changeArray = [];
function map()
{
   let number = document.getElementById("input").value ; 
   main.push(number) ;
   console.log(number) ;

   let newSalaries = main.map((nextValue) => nextValue * 2);

   document.getElementById("set").innerHTML ="before:-" + JSON.stringify(main);
   document.getElementById("get").innerHTML ="after:-" + JSON.stringify(newSalaries);
}