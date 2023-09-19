
function valjasta(tekst) {
    const valjastaElement = document.getElementById(`ylesanded`)
    valjastaElement.innerHTML += tekst
}

function valjastaYlesanne(ylesanneObjekt) {
    valjasta(`<div class="ylesanne">` + ylesanneObjekt.kirjeldus + '<bold>' + ylesanneObjekt.prioriteet +'<bold>' + `</div>`)
}

function lisaUusYlesanne () {
    const sisestusElement = document.getElementById("uus-ylesanne");
    valjasta (`<div class="ylesanne">` + sisestusElement.value + `</div>`)
    sisestusElement.value = ''
}

//valjasta(<h2>Tere Maailm</h2>)



const ylesanne1 = {
    kirjeldus: 'jalutada koera',
    prioriteet: 3,
    tehtud: true
}
const ylesanne2 = {
    kirjeldus: 'praadida muna',
    prioriteet: 2,
    tehtud: false
}
const ylesanne3 = {
    kirjeldus: 'minna tööle',
    prioriteet: 2,
    tehtud: false
}

const ylesanded = [

]

for (let index=0; index< ylesanded.length; index++) {
    valjasta(`<div class="ylesanne">` + ylesanded[index] + `</div>`)
}


