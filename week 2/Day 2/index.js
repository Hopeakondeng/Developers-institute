//Exercise 1
//let x =Number(prompt('Input value for X')) 
//let y = Number(prompt('Input value for Y')) 
//if(x > y){alert('X is the biggest number')}
//else{alert('Y is the bigger number')}

//Exercise 2
/*let newDog = 'Chihuahua'
console.log(newDog.length)
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())
if(newDog == 'Chihuahua'){console.log("I love Chihuahuas, it's my favorite dog breed")}
else{console.log("I don't care I prefer cats")}*/

//Exercise 3

/*let X = Number(prompt('Input value for X'))
if(X % 2 === 0){console.log(X + ' is an even number')}
else{console.log(X + ' is an odd number')}*/

//Exercise 4
/*let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
c = users.length
if(c==0){console.log('no one is online')}
else if(c==1){console.log(users[0] + " is online")}
else if(c==2){console.log(users[0] +' and' + users[1] + " are online")}
else if(c > 2){console.log( users[0] +' and' + users[1] + ' and '+ (c-2) + " more are online")}*/

//XP GOLD EXERCISE
//Exercise 1
/*let language = prompt('What language do you speak?')
    language = language.toLowerCase()
    switch(language){
    case 'french':
        console.log('Bonjour');
        break;
    case 'english':
        console.log('Hello');
        break;
    case 'hebrew':
        console.log('Shalom');
        break;
    default:
        console.log('01110011 01101111 01110010 01110010 01111001');
    }*/

//Exercise 2
    /*let grade = Number(prompt('What is your score/grade?'))
    if(grade > 90){console.log('A')}
    else if(grade > 80 && grade <=90){console.log('B')}
    else if(grade > 70 && grade <=80){console.log('C')}
    else if(grade < 70){console.log('D')}
    else {
        console.log('Oops')
    }*/

    //EXERCISE XP NINJA

    /*let a = Number(prompt('What is your birth year'))
    let b = Number(prompt('What is your friends birth year'))
    c = (a - b)
    d = (b - a)
    if(a > b){console.log((c+a))}
    else if(a < b){console.log((d+b))}*/




//DAILY CHALLENGE
/*let sentence = 'The food is not that bad '
let wordNot = sentence.indexOf('not')
let wordBad = sentence.indexOf('bad')
let diff = wordBad - wordNot
let good = sentence.splice(wordBad, diff+1, 'good')
if(wordNot!= -1 && wordBad!= -1 && wordBad < wordNot){console.log(sentence)}
else if ( wordNot!= -1 && wordBad!= -1 && wordBad > wordNot){console.log(good)}*/

let sentence = 'The food is really not that bad'
let sentencearray = sentence.split(' ')
let wordNot = sentencearray.indexOf('not')
let wordBad = sentencearray.indexOf('bad')
if(wordNot!= -1 && wordBad!= -1 && wordBad > wordNot){
    let diff = wordBad - wordNot
    sentencearray.splice(wordNot, diff+1, 'good')
    good = sentencearray.join(' ') 
    console.log(good)}
else{console.log(sentence)}












