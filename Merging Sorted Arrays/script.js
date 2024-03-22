const array1 = [24,62,49,78,12]
const array2 = [88,11,55,77,33]
const array3 = []

function ms(){
    let Result = array3.concat(array1,array2);
    let r = Result.sort(function(a,b){return a-b});
    let res = (data) => {
        return[...new Set(data)];
    }
    console.log(res(r));
}