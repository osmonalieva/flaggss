document.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementById("btn")
  let flag = document.getElementById("flag")
  fetch("https://restcountries.com/v3.1/all")
   .then(response => response.json())
   .then(data => {
    btn.addEventListener("click", function () {
     let div = document.createElement("div")
     div.classList.add("flagd")
     let currentCountry = data[Math.floor(Math.random() * data.length)]
     div.innerHTML = `
           <img src="${currentCountry.flags.png}" alt="Flag">
           <h2>${currentCountry.name.common}</h2>
         `
     flag.append(div)
    })
   })
 })
 
   
 