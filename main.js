//url address
let url= "https://rickandmortyapi.com/api/character?page=" 
//empty array
let currentPages = [] 
//current number of pages
let page = 1
//index num
let index = 0

//define the span icon of volume
let volumeOn = document.querySelector('.fa-volume-up')
let volumeOff = document.querySelector('.fa-volume-off')

//event listener for welcome prompt
document.getElementById('welcome').addEventListener('click',()=>{
    document.querySelector('.story').style.display='inline'
    document.querySelector('#get-btn').style.display='block'
    document.getElementById('welcome').style.display='none'
})

//event listener for main page that displays data from array
document.querySelector('#get-btn').addEventListener('click', getButton)
function getButton() {
    //loops through the 42 pages of datas in the api
for (let i = 0; i<= 42; i++){
    //fetches the url address and the iterated 42 pages of data
    fetch(url+i)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

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

//to play music
 volumeOn.addEventListener('click',musicOn)
 function musicOn() {
    document.querySelector('audio').play()
 }

 //to off music
 volumeOff.addEventListener('click', musicOff)
 function musicOff() {
    document.querySelector('audio').pause()
 }

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
