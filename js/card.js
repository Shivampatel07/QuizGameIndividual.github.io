let description = document.getElementsByClassName('description')

let CardImg = document.getElementsByClassName('card-img')

function FunOver(element) {
    description[element.id - 1].style.width = element.width
    description[element.id - 1].style.height = element.height
    description[element.id - 1].style.display = 'block'
    element.style.display = 'none'
}

function FunOut(element) {
    description[element.id - 1].style.display = 'none'
    element.style.display = 'inline'
}

function clicked(nice) {
    localStorage.setItem('something', nice);
}