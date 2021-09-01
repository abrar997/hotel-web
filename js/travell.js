
// swiper

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     loop: true,
//     loopFillGroupWithBlank: true,

//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },

// })

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



// swiper for Destination gallery

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    // loop: true,
    // loopFillGroupWithBlank: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    }
});




// ----------------------------------------------------------------------//

// forms
    function tab(evt, service) {
    var i;

    // to hidden form لمن اضغط على بتون ويطلع الفورم ينحذف الفورم السابق بدون تكرار 
    buttononeflights = document.querySelector(".formcontents1")

    tabcontent = document.getElementsByClassName("formcontents");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //to replace class name =formcontents in active 
    var buttons = document.querySelectorAll(".button-clcik");

    for (i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" active", "")
    }

    // لتفعيل كلاس active

    // to appeare form
    buttononeflights.style.display = "none"
    document.getElementById(service).style.display = "block";
    evt.currentTarget.className += " active";


}

// -------------------------------------------------------------

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

// --------------//

// accordion of about modal
var acc = document.querySelectorAll(".aboutacc");

for (var i=0;i<acc.length;i++) {

    acc[i].addEventListener("click", function () {
        var panel = this.nextElementSibling;
        
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });

}

// 



 
