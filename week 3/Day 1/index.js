 /*let text = document.getElementById("one").innerHTML;
        //alert("The first heading is " + text); //output : "The first heading is Welcome"
        //Accessing the first div
        let div1 = document.body.firstElementChild
        let div_array = document.getElementsByTagName('div') //output an array of divs
        let div1__ = document.getElementsByTagName('div')[0]
        //Accessing the ul node​
        let u = document.getElementsByTagName('ul')[0] 
        let u1 = div1.nextElementSibling
        //Accessing the second li node​
        let li2 = document.querySelectorAll('li')[1]
        let li2_ = document.querySelector('li:nth-child(2)')
        let x = u1.children[1]
        let x_ = u1.lastElementChild
        let x__ = document.getElementsByTagName('ul')[0].children[1]
        //Accessing the last div
        let last_div = document.getElementsByClassName('div_class')[0]
        //Accessing the text inside the last div
        let div_text = last_div.innerText  //OUtput : 'Hello HI from the paragraph'
        //Accessing everything inside the last div
        let div_elements = last_div.innerHTML //Output: 'Hello <p>HI from the paragraph</p>'
        
        //Creating a new html element from js
        let h3 = document.createElement('h3') //we created a new h3 tag
        //Creating a text node​
        let h3_text =  document.createTextNode('This is a new heading') //We created the text we want to put into our new h3
        //Adding the text node to the element node
        //h3.appendChild(h3_text)
        //Adding our new element to the body of the page​
        //document.body.appendChild(h3)
        //Second example : we want to add a li element to the ul list​
            //let li_node = document.createElement('li')
            //let li_textnode = document.createTextNode('Natasha')
            //li_node.appendChild(li_textnode)
        //Appending our new li to the list, using the u1 node variable we obtained earlier​
        //u1.appendChild(li_node)
        //Deleting an html element 
        //u.removeChild(li2)
        //Changing the css ​
            //u.style.backgroundColor = 'green'
            //u.style.fontSize='30px'
            //u.style.margin = '20px'
        //Looping inside an array of element nodes​
        let list_div = document.getElementsByTagName('div')
        for(let div of list_div){console.log(div1)}
        //Loop and render the text
        for(let div of list_div){console.log(div.innerText)} //Output :  Users:  Hello HI from the paragraph
        //Loop and changing the content of each element of our array
        //for(let div of list_div){div.innerHTML = 'I modify this div content'}

        //We hide the html that we dont need for the rest of the exercise
        let html_to_hide = document.querySelector('.hide')
        html_to_hide.style.display = 'none'
        

        //Last exercise of the lesson
        //1. The div node
        let d = document.getElementById('container')

        //2. The ul nodes, and render all of it's children one by one
        let list = document.querySelectorAll('.list') //let list = document.getElementsByTagName('ul')
        for(let ul of list){
            for(let li of ul.children){
                console.log(li);
            }
        }

        //3. The first li of each ul
        for(let ul of list){
            console.log(ul.firstElementChild);
        }

        //Exercises XP
        //Exercise 1
        //Retrieve the div and console.log it
        let div_container = document.getElementById('container')
        let c = document.getElementsByTagName('div')[0]
        console.log(div_container);
        //Change the name “Pete” to “Richard”.
        let li = document.querySelectorAll('.list')[0].lastElementChild //OR document.querySelector('ul:nth-child(2) li:nth-child(2)')
        li.innerText = 'Richard'
        //Change each first name of the two <ul>'s to your name.
        let ul_list = document.getElementsByClassName('list')
        for(let ul of ul_list){
            console.log(ul.firstElementChild);
            ul.firstElementChild.innerText = 'Alexandra'
        }
        //Delete the <li> that contains the text node “Sarah”.
        //let sarah_node = document.querySelector('ul:nth-child(3) li:nth-child(2)')
        let sarah_node = document.getElementsByTagName('ul')[1].children[1]
        ul_list[1].removeChild(sarah_node)
        //Bonus - Using Javascript:
        //Add a class called student_list to both of the <ul>'s.
            for(let ul of ul_list){
                ul.classList.add('student_list')
                //a.setAttribute('href','google.com')
            }
        //Add the classes university and attendance to the first <ul>
            ul_list[0].classList.add('university', 'attendance')

        //Exercise 2
        let div4 = document.querySelector('div')
        div4.style.background = 'lightblue'
        let john_li = document.querySelector('li')
        john_li.style.display= 'none'
        let pete_li = document.querySelector('li:last-child')
        pete_li.style.border = '5px solid black'
        document.body.style.fontSize = '25px'
        
        if(div4.style.background == 'lightblue'){
            alert(`Hello ${john_li.innerText} and ${pete_li.innerText}`)
        }
        */
        //Exercise 3
        let nav_div = document.querySelector('#navBar')
        nav_div.setAttribute('id','socialNetworkNavigation')

        let li = document.createElement('li')
        let txt = document.createTextNode('Logout')
        li.appendChild(txt)
        nav_div.children[0].appendChild(li)
        nav_div.firstElementChild.appendChild(li)
        console.log(nav_div.firstElementChild.firstElementChild.textContent)
        console.log(nav_div.firstElementChild.lastElementChild.textContent)

        //Category of properties that ignores text, attributes and comments nodes
        //.children, .firstElementChild, .lastElementChild
        //.childNodes, .firstChild, .lastChild
