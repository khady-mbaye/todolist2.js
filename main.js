let valinput = document.getElementById('val')
let list = document.querySelector('.mylist')

valinput.addEventListener('keyup' ,  function(event){
    if(event.key == 'Enter'){
        addItem(this.value)
        this.value = "" //pour que le champ soit vide pres chaque ajout
    }
})
//creation de l'element li
let addItem = (valinput) =>{
    let mydiv = document.createElement('div')
    list.appendChild(mydiv)
    mydiv.setAttribute('id' , 'aligner')

    let newli = document.createElement('li')
    newli.innerHTML = `<li>${valinput}</li>`
    newli.setAttribute('id' , 'myli')
    newli.addEventListener('click' , function(){
        this.classList.toggle('done')
    })
    mydiv.appendChild(newli)
    //creation du bouton supprimer
    let spanx = document.createElement('span')
    spanx.innerHTML = '\u00d7'
    mydiv.appendChild(spanx)
}
//suppression et selection des taches 
list.addEventListener('click' , function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')

    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
    }
})

//pour le changement du background
let firstdiv = document.querySelector('.div1')
let secomddiv = document.querySelector('.div2')
let lastdiv = document.getElementById('aligner')
let sol = document.getElementById('soleil')
let lu = document.getElementById('lune')
sol.addEventListener('click' , blanc)
function blanc(){
    firstdiv.style.backgroundImage = "url('images/bg-desktop-light.jpg')"
    lu.style.display = "block"
    secomddiv.style.backgroundColor = '#eee'
    valinput.style.backgroundColor = 'white'
    valinput.style.color = 'white'
    list.style.backgroundColor = 'white'
    list.style.color = 'black'
    sol.style.display = 'none'
    lastdiv.style.border = '1px solid black'
}

lu.addEventListener('click' , noir)
function noir(){
    firstdiv.style.backgroundImage = "url('images/bg-desktop-dark.jpg')"
    sol.style.display = "block"
    secomddiv.style.backgroundColor = 'black'
    valinput.style.backgroundColor = '#333'
    valinput.style.color = 'black'
    list.style.backgroundColor = '#333'
    list.style.color = 'white'
    lu.style.display = 'none'
    lastdiv.style.border = "1px solid red"
}
