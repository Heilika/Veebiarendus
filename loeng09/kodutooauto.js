function valjasta(tekst) {
    const valjastaElement = document.getElementById('automargid')
    valjastaElement.innerHTML += tekst 
    
    // let src = document.images.namedItem("myImg").src;
    // document.getElementById("myImg").innerHTML = src;
}

function valjastaAutomark(automarkObjekt) {
    let valjund = ''
    valjund += '<div class="automark row">'
    valjund += '<img class="col-4" src="' +  automarkObjekt.src + '">'
    valjund += '<div class="col-4">' + automarkObjekt.kirjeldus + '</div>'
    valjund += '<div class="col-4">' + automarkObjekt.hinnang + '</div>'
    valjund += '</div>'
    valjasta(valjund);
}

function lisaUusAutomark() {
    const sisestusElement = document.getElementById('uus-automark');
    const sisestusHinnangElement = document.getElementById('uus-hinnang');
    
    const UusAutomakr = {
        kirjeldus: sisestusElement.value,
        hinnang: sisestusHinnangElement.value,
        tehtud: false
    }
    valjastaAutomark(UusAutomakr)
    sisestusElement.value = ''
    sisestusHinnangElement.value = ''
}

const automark1 = {
    src: "./image/RX450.jpeg",
    kirjeldus: 'Lexus',
    hinnang: 3,
    tehtud: true
}
const automark2 = {
    src: "./image/MercS500.jpeg",
    kirjeldus: 'Mercedes',
    hinnang: 2,
    tehtud: false
}
const automark3 = {
    src: "./image/Bently.jpeg",
    kirjeldus: 'Bently',
    hinnang: 2,
    tehtud: false
}

const automargid = [
    automark1,
    automark2,
    automark3
]

for (let index = 0; index < automargid.length; index++) {
    valjastaAutomark(automargid[index])
}
