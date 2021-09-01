function myFetch(){
fetch("./flight.json")
.then(res=>res.json())
.then(data=>{
console.log(data);
// document.getElementById("main").innerHTML=data[2].name

var main=document.getElementById("main");
    main.innerHTML='';

    data.flightlInfo.forEach(flight=> {
  var { name, city, country, state } = flight;
    var flightDiv=document.createElement("div")
    flightDiv.classList.add("flight");
   flightDiv.innerHTML=
   `
   <div class="flights">
<i class="fas fa-plane"></i>
   <div class="fligh">
   <h2> name : ${name}</h2>
   <h3>city : ${city}</h3>
   <h4>country : ${country}</h4>
   <h5>state:${state}</h5>
   <button class="btn">more info </button>  </div>
   
   </div>
   `
    main.appendChild(flightDiv)
    }) 
})

}
myFetch()

// --------------//


// modals for about
var modalButton = document.getElementById("modal-btn")
var modal = document.querySelector(".modal")
var cloesbtn = document.querySelector(".close-btn")

modalButton.onclick = function () {

    modal.style.display = "block";
    modal.classList.add("background");

}

cloesbtn.onclick = function () {
modal.style.display = "none";
    modal2.classList.remove("background")

}
window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none"

    }
}
// accordion of about modal
var acc = document.querySelectorAll(".aboutacc");

for (var i = 0; i < acc.length; i++) {

    acc[i].addEventListener("click", function () {
        var panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });

}


// modal search
var form = document.querySelector("#forms");
var searchIcon = document.getElementById("icon");

searchIcon.addEventListener("click", function () {

    form.classList.add("formsss");

})


