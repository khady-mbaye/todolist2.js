let valinput = document.getElementById('val')
let list = document.querySelector('.mylist')
let array = []
let compteur = document.querySelector('.nombre')

valinput.addEventListener('keyup', function (event) {
    if (valinput.value === ''){
        alert('veillez remplir le champ')
    }
    else if (event.key == 'Enter') {
        addItem(this.value)
        this.value = "" //pour que le champ soit vide apres chaque ajout
        array.push(valinput)
        compteur.innerHTML = `${array.length} items left`
        
    }
})
//creation de l'element li
let addItem = (valinput) => {
    var mydiv = document.createElement('div')
    list.appendChild(mydiv)
    mydiv.setAttribute('id', 'aligner')

    var newli = document.createElement('li')
    newli.innerHTML = `${valinput}`
    newli.setAttribute('id', 'myli')
    newli.addEventListener('click', function () {
        this.classList.toggle('done')
    })
    mydiv.appendChild(newli)
    //creation du bouton supprimer
    let spanx = document.createElement('span')
    spanx.innerHTML = '\u00d7'
    mydiv.appendChild(spanx)
    //calcule
     
       
}
//deactiver et supprimer une tache 
list.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')

    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
    }
})

//pour le changement du background
let firstdiv = document.querySelector('.div1')
let secomddiv = document.querySelector('.div2')
let lastdiv = document.getElementById('aligner')
let sol = document.getElementById('soleil')
let lu = document.getElementById('lune')
let blocw = document.querySelector('.bloc')
sol.addEventListener('click', blanc)
function blanc() {
    firstdiv.style.backgroundImage = "url('images/bg-desktop-light.jpg')"
    lu.style.display = "block"
    secomddiv.style.backgroundColor = '#eee'
    valinput.style.backgroundColor = 'white'
    valinput.style.color = 'white'
    blocw.style.backgroundColor = 'white'
    blocw.style.color = 'black'
    sol.style.display = 'none'
    lastdiv.style.border = '1px solid black'
}

lu.addEventListener('click', noir)
function noir() {
    firstdiv.style.backgroundImage = "url('images/bg-desktop-dark.jpg')"
    sol.style.display = "block"
    secomddiv.style.backgroundColor = 'black'
    valinput.style.backgroundColor = '#333'
    valinput.style.color = 'black'
    blocw.style.backgroundColor = '#333'
    blocw.style.color = 'white'
    lu.style.display = 'none'
    lastdiv.style.border = "1px solid gray"
}

let visibility = document.querySelector('.visible')
function visible() {
    list.style.display = 'block'
}
let novisible = document.querySelector('.tout')
function none() {
    list.style.display = 'none'
}
/*var supprime = document.getElementById('gros-titre')
document.body.removeChild(supprime)
<p class="rien blue" onclick="clear()">Clear Completed</p>*/
let clearall = document.querySelector('.rien')
function clear() {
    document.body.removeChild(list)
}

//contruction de tableau pour sovoir le nombre de tache ajouter 
let numtache = valinput.value
let tab = []
for (i = 0; i < numtache; i++) { tab.push(numtache) }
console.log(tab.length)

// <p class="active blue" onclick="nombre">active</p>
let affichenum = document.querySelector('.nombre')
let num = document.querySelector('.active')
// function activenum(){
// affichenum.textContent = 'items left'
// }


