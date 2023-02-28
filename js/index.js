//document.getElementsByName('submit').addEventListener('submit' , searchAPI())

function handleSubmit(){
    fetch("https://api.github.com/search/users?")
    .then(resp => resp.json())
    .then((data) => console.log(data))
}

// function searchAPI(search){
//     let input = document.getElementById('search')
//     let p = document.createElement('p')
//     p.textContent = search
//     const BASE_URL =  "https://api.github.com/search/users?q="
//     let finalURL = `${BASE_URL} + ${input.innerHTML}`
//     console.log(finalURL)
// }

// let input = document.getElementbyID('search');



//enter a name to search database for and click submit
// the result should be all of the names that exist in the file rendered on DOM

let input = document.getElementsByClassName('github-form')
let classyDiv = input
console.log(input)



