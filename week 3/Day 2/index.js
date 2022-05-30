/*function inform(){
    alert('You clicked me')
}
function changebackground(){
    document.body.style.backgroundColor = 'blue'
}


function insertRow(){
    let newrow = document.createElement('tr')
    let txt = document.createTextNode('whatever')
    let td = document.createElement('td')
    td.appendChild(txt)
    newrow.appendChild(td)
    let table = document.getElementById('sampleTable')
    table.appendChild(newrow)
}

let x = document.getElementById("btn")
        let y = document.getElementById("btn1")

        y.addEventListener("click", RespondClick);
        y.addEventListener("mouseover", RespondMouseOver);

        x.addEventListener("click", RespondClick); 
        x.addEventListener("mouseover", RespondMouseOver); 
        x.addEventListener("mouseout", RespondMouseOut); 

        function RespondClick() { 
            alert("Button Clicked")
        } 

        function RespondMouseOver() { 
            alert("My mouse is over the btn")
        } 

        function RespondMouseOut() { 
            alert("My mouse is out of the btn")
        }     

        let b = document.getElementById('jsstyle')

        b.addEventListener('click', click )
        b.addEventListener('dblclick', dblclick )
        b.addEventListener('mouseover', over )

        function dblclick(){
            b.style.backgroundColor = 'red'
            b.classList.toggle
            
        }

        function click(){
            b.style.fontSize = '30px'
            b.classList.toggle

        }

        function over(){
            b.style.margin = '50px'
            b.classList.toggle

        }
        */


        function getvalue(){
            
            let form = document.forms[0]
            let name1 = form.elements.fname.value
            let name2 = form.elements.lname.value

            console.log('Your name is ' + name1  + name2 );
            
        }





