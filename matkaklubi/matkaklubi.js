const matkadElement = document.getElementById('matkad')
matkadElement.innerHTML = ''

const matk1 = {
    nimetus: 'Süstamatk Soomaal',
    pildiURL: './assets/matk.jpeg',
    kirjeldus: 'Varakevadine matk mägedes, kus vaated lummavad sind'
}
const matk2 = {
    nimetus: 'Rattamatk Pärnumaal',
    pildiURL: './assets/matk2.jpeg',
    kirjeldus: 'Varakevadine matk Pärnus'
}
const matk3 = {
    nimetus: 'Liigume Hiiumaale',
    pildiURL: './assets/matk3.jpeg',
    kirjeldus: 'Avastame uut saart, nimega Hiiumaa'
}

const matkad = [matk1, matk2, matk3]

function valjastaMatk(matk) {
    console.log(`

    <h3>
    Matk ${matk.nimetus}
    
    </h3>
    `)


    let matkmall = `
        <div class="col-md-4 card">
            <img src="${matk.pildiURL}" class="card-img-top" alt="">
            <div class="card-body"></div>
            <h5 class="card-title">${matk.nimetus}</h5>
            <p>
            ${matk.kirjeldus}
            </p>
            <a href="#" class="btn btn-primary">Registreeru</a>
        </div>
    ` 
matkadElement.innerHTML += matkmall

}


// valjastaMatk(matk1)
// valjastaMatk(matk2)
// valjastaMatk(matk1)
// valjastaMatk(matk1)

matkad.forEach(valjastaMatk)
