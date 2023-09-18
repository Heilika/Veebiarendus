let lemmikvarvElement
let lemmikvarv

lemmikvarvElement = document.getElementById(`lemmikvarv`)
lemmikvarv = prompt(`Sisesta enda lemmikvärv`)



if (lemmikvarv == "roosa") {
    lemmikvarvElement.innerHTML = `<div class="roosa">` + lemmikvarv + ` on mu lemmikvärv` + `</div>`;
} else {
    lemmikvarvElement.innerHTML = `<div>` + lemmikvarv + ` ei ole minu lemmikvärv` + `</div>`;
}

