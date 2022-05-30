let a = ''
function number(num){
    a+=num
    console.log(a);
    document.getElementsByTagName('div')[0].textContent = a

}
function operator(operator){
    a+= operator
    console.log(a);
}

function equal(){
    let result = eval(a)
    console.log(result);
    a=''
    document.getElementsByTagName('div')[0].textContent = result

    
}