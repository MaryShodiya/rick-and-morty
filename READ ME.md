# Adventures With Rick and MOrty

Adventures with Rick and Morty is a full-stack web application that takes you on an adventure with the entire rick and morty team. Data was collected from the [rick and morty api](https://rickandmortyapi.com)

[Tap to access the project here](https://adventure-with-the-rick-and-morty-team.netlify.app)

<img align="center" width="300" src="img/rick.gif" alt="rick and morty" />

### The Process

Tech Used: HTML, CSS, JavaScript, REST API

An app that gives rick and morty lovers a complete adventure with the entire rick and morty team
## Optimization
This project uses the click event to handle navigation through the page

## Lessons Learnt

Spent more hours than I would have spent creating this project trying to figure how to get the entire data from the page as the api was divided into 42(forty-two) pages as against previous experience of working with an api with a single page. I had to create an empty array, loop through the entire 42 pages, then push the data to the empty array. Check out the syntax of the solution below-:
# Syntax

```
let currentPages = []

document.querySelector('#get-btn').addEventListener('click', getButton)
function getButton() {
for (let i = 0; i<= 42; i++){
    fetch(url+i)
    .then(res => res.json()) 
    .then(data => {
    currentPages.push(data.results)
```


## Resources Used
Stack Overflow
WW3 schools

