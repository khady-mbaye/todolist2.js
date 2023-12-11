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
        // saveData()
        array.push(valinput)
        compteur.innerHTML = `${array.length} items left`
        if(array.length===8){
            list.style.cssText = ' margin:5px;position: relative;height: 350px;overflow-y: auto;'
        }
        
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
        // saveData()

    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        // saveData()
        array.splice(0,1)
        compteur.innerHTML = `${array.length} items left`
       
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
    // valinput.style.color = 'black'
    valinput.style.color = 'white'
    blocw.style.backgroundColor = 'white'
    blocw.style.color = 'black'
    sol.style.display = 'none'
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
}

let visibility = document.querySelector('.visible')
function visible() {
    list.style.display = 'block'
}
let novisible = document.querySelector('.tout')
function none() {
    list.style.display = 'none'
}

//local storage
// function saveData(){
//     localStorage.setItem('data',list.innerHTML)
// }
// function showtask(){
//     list.innerHTML = localStorage.getItem('data')
// }
// showtask()

