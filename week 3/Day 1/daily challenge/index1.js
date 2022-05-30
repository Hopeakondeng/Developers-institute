let solar_system = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Neptune', 'Uranus']
for(let planet in solar_system){
    let div = document.createElement('div')
    div.classList.add('planet')
    div.classList.add(planet)
    let section = document.querySelector('.listPlanets')
    section.appendChild(div)
}
var s = document.getElementsByClassName('listPlanets')[0]