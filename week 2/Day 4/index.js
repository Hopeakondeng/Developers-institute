//exercise
/*function myAge(age){
    momage = (age * 2)
    dadage = (momage * 1.5)

    console.log("I'm " + age + 'years old. My mom is ' + momage + ' and my dad is ' + dadage);
}

age = Number(prompt("What's your age"))
myAge(age)*/

//EXERCISES XP

//Exercise 1
//Part one
/*function infoAboutMe(){
    console.log('My name is Hope and I love basketball');
}

infoAboutMe()*/

//Part 2

/*function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log("Your name is " + personName + ". You are " + personAge + " years old. And your favorite color is " + personFavoriteColor)
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")*/

//Exercise 2

/*function calculateTip(){
   c = Number(prompt('How much is the bill?'))
   if(c < 50){ t = c * 0.2 }
   else if(c > 50 && c < 200){ t = c * 0.15 }
   else if(c > 200){ t = c * 0.1 }

   console.log((c+t));
}

calculateTip()*/

//Exercise 3
/*let sum = 0

function isDivisible(){
    for ( let i = 0; i<=500; i++){
        if(i % 23 === 0){
            console.log(i)
            sum+=i
            
        }
    }
    console.log(sum)

}

isDivisible()*/




//Bonus with divisor parameter
/*sum = 0
function isDivisible(divisor){
    for ( let i = 0; i<=500; i++){
        if(i % divisor === 0)
        {console.log(i)
        sum +=i

        }


    }
}
 
isDivisible()
console.log(sum)*/




//Exercise 4

/*let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

shoppingList = ['banana','orange','apple']
let totalPrice = 0
function myBill(){

    for( i of shoppingList){
       if(stock[i] >= 1){
           stock[i]=(stock[i] - 1)
           prices[i]
           c = prices[i]
           totalPrice += c
           
          
       }
         
    }
    console.log(totalPrice) 
 
}
myBill()*/


//Exercise 5
/*function changeEnough(itemPrice, amountOfChange){
    let sum = 0 

    let realValue =[0.25, 0.10, 0.05, 0.01]

    for(let i in amountOfChange){
        sum += (Number(amountOfChange[i]) * Number(realValue[i]))
    }
    console.log('Sum is ' + sum);
    if(sum >= itemPrice){
        return true
    }
    else{
        return false
    }
}

changeEnough(14.11, [2,100,0,0])*/

//Exercise 6

function hotelCost(){
    let nights = Number(prompt('How many nights are you going to stay with us?'))
    
    do{
         nights = Number(prompt('How many nights are you going to stay with us?'))
    }
    while( nights == '' || null || undefined || isNaN(nights))

    let costpernight = 140
    let totalprice = nights * costpernight

    return totalprice

}


function planeRideCost(){
    let destination = prompt('How many nights are you going to stay with us?')
    
    do{
        destination = prompt('How many nights are you going to stay with us?')
    }
    while( destination == '' || undefined || !isNaN(nights))

    if (destination = 'London'){
        return 183
    }
    else if(destination = 'Paris'){
        return 220
    }
    else{
        return 300
    }

}

