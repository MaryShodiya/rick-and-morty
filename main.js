
let url= "https://rickandmortyapi.com/api/character?page="
let currentPages = []
let page = 1
let index = 0
document.getElementById('welcome').addEventListener('click',()=>{
    document.querySelector('.story').style.display='inline'
    document.querySelector('#get-btn').style.display='block'
    document.getElementById('welcome').style.display='none'
})

document.querySelector('#get-btn').addEventListener('click', getButton)
function getButton() {
for (let i = 0; i<= 42; i++){
    fetch(url+i)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
       document.querySelector('audio').play()
    currentPages.push(data.results)
    document.querySelector('.story').style.display='none'
  document.querySelector('.box').style.display='block'
document.querySelector('img').style.display='block'
document.querySelector('#next-page').style.display='block'
 document.querySelector('.name').innerText = currentPages[page][index].name
 document.querySelector('img').src= currentPages[page][index].image
 document.querySelector('.species').innerText = currentPages[page][index].species
 document.querySelector('.status').innerText = currentPages[page][index]. status
 document.querySelector('.location').innerText = currentPages[page][index].location.name
 document.querySelector('#get-btn').style.display='none'
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
}



 document.querySelector('.fa-hand-point-right').addEventListener('click', nextButton)
function nextButton(){
    currentPages[index++]
    getButton()
}

document.querySelector('#next-page').addEventListener('click', nextPage)
function nextPage(){
    currentPages[page++]
    getButton()
    
}

document.querySelector('.fa-hand-point-left').addEventListener('click', prevButton)
function prevButton(){
    currentPages[index--]
    getButton()
}
