//Exercises
//exercise 1
/*
//1
let h1 = document.getElementsByTagName('h1')[0]
console.log(h1)
//2
let article = document.getElementsByTagName('article')[0]

let lastparagraph = article.lastElementChild
article.removeChild(lastparagraph)

//3
let h2 = document.getElementsByTagName('h2')[0]
h2.addEventListener('click', clickh2)

function clickh2(){
    h2.style.backgroundColor = 'red'
}

//4
let h3 = document.getElementsByTagName('h3')[0]
h3.addEventListener('click', clickh3)

function clickh3(){
    h3.style.display= 'none'
}

//5
let p = document.getElementsByTagName('p')

function boldparagraphs(){
    for(let i of p){
        i.style.fontWeight = 'bold'
    }
}
*/

//Exercise 2
//1
let form = document.forms[0]
console.log(form)

//2
let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
console.log(fname)
console.log(lname)

//3
let name1 = form.elements.fname
let name2 = form.elements.lname
console.log(name1)
console.log(name2)

//4
//let name1value = form.elements.fname.value
//let name2value = form.elements.lname.value

let submit = document.getElementById('submit')

form.addEventListener('submit', clicksubmit)

function clicksubmit(e){
    e.preventDefault()
    let name1value = form.elements.fname.value
    let name2value = form.elements.lname.value
    console.log(name1value);
    
    if(name1value != ''){
        let li = document.createElement('li')
        let ul = document.getElementsByClassName('usersAnswer')[0]
        li.textContent = name1value
        ul.appendChild(li)

    }
    if(name2value != ''){
        let li = document.createElement('li')
        let ul = document.getElementsByClassName('usersAnswer')[0]
        li.innerText = name2value
        ul.appendChild(li)

    }


}