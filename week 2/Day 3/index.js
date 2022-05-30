/* //Loop to determine even and odd numbers from 0 to 15
for (let i=0; i <= 15; i++) {
    if(i % 2 === 0){console.log(i + ' is an even number')}
    else{console.log(i + ' is an odd number')}}*/

/* // Loop to display multiples of 10 from 10 to 100    
for (let i=10; i<= 100; i+=10){console.log(i)}*/

//Loop to display prime numbers from 0 to 100
 /*for(let i = 0; i <= 100; i++)
    if(i % 1=== 0 && i % i != 0) return false;
  return num > 1;
}*/
// Loop to display product of consecutive numbers from 15 to 0
//for(let i = 15; i >= 0; i--){console.log(i * (i-1))}

//Loop to display fibonacci sequence
/*let a = 0, b = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= 8; i++) {
    console.log(a);
    nextTerm = a + b;
    a = b;
    b = nextTerm;
}*/
//Loop to iterate through the word 'Alexandra' and replace every 'a' by 'o'






//EXERCISES XP
//Exercise 1

/*let people = ["Greg", "Mary", "Devon", "James"];
people.shift()
people.splice(2,1,'Jason')
people.push('Hope')
console.log(people.indexOf('Mary'))
people2 = people.slice(1,3)
people.indexOf('Foo')
console.log(people)
//returns -1 because 'Foo' is not part of the array
c = people.length - 1
last = people[c]

for(let i in people){
 // console.log(people[i])
}
for(let i of people){
  if(i === 'Jason')
  {
    console.log(i)
    break;
  } 
  console.log(i)
}*/

//Exercise 2

/*let colors = ['black','white','orange','red','blue']
t = 0

  for(let i in colors){
    t = Number(t)+1
    console.log('My ' + t + 'st color is '+ colors[i])
    
  }*/

  // Exercise 3
 /* c = Number(prompt('Pick a number'))
  typeof(c)

  do{
    c = Number(prompt('Pick a number'))
    console.log(c)
  }
while(c < 10)*/
 
//Exercise 4
let building = {
  numberOfFloors : 4,
  numberOfAptByFloor : {
      firstFloor : 3,
      secondFloor : 4,
      thirdFloor : 9,
      fourthFloor : 2,
  },
  nameOfTenants : ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent:  {
      sarah: [3, 990],
      dan :  [4, 1000],
      david : [1, 500],
  },
}


