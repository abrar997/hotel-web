function myfetch() {
fetch("./dataa.json")
    .then(res=>res.json())
    .then(data => {
        console.log(data);

        var main = document.getElementById("main");
        main.innerHTML = '';
        data.hotelInfo.forEach(hotel => {
            var { baseUrl, name, posName } = hotel;
            var hotelEl = document.createElement("div");
            hotelEl.classList.add("hotel");



            hotelEl.innerHTML = `
        <h3 class="headerh1"> </h3>
         <div class="card">
         <a href="">
        <img src="${baseUrl}"/></a>
        <div class="about">
        <h2 class="h2header">Name : ${name}</h2>
        <h3 class="h3header">posName : ${posName}</h3>
        </div></div>
        `
            main.appendChild(hotelEl);



        })

    });
}

myfetch()
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


// ------------------------------------------


// modal search
var form = document.querySelector("#forms");
var searchIcon = document.getElementById("icon");

searchIcon.addEventListener("click", function () {

    form.classList.add("formsss");

})








































// var my_api_key = "057d442e26mshadaa6b709da5c53p1e87b3jsn5bd69f978ac0"


// fetch("https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=1178275040", {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "hotels4.p.rapidapi.com",
//         "x-rapidapi-key": my_api_key
//     }
// })
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data);
//     })












// fetch("https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=1178275040", {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "hotels4.p.rapidapi.com",
//         "x-rapidapi-key": my_api_key
//     }
// }).then(response => response.json())
//     .then(data=>{
// console.log(data);
//         document.getElementById("demo").innerHTML = data.roomImages[1].roomId
//         document.getElementById("demooo").innerHTML = data.hotelImages[99].mediaGUID
//         showMovies
//     })


//             function showMovies(movies) {
//                 main.innerHTML = '';
//                 movies.forEach(movie => {                                                                                               //jsonp
//                     var { algorithmName, hotelId, vote_average, overview } = movie;
//                     var movieEl = document.createElement("div");
//                     movieEl.classList.add("movie");


//                     movieEl.innerHTML = `
//          <div class="card">
//         <img src="${img_url + poster_path}" alt="${title}"/>
//         // <div class="movie-info">
//         // <h3>${title}</h3>
//         // </div>
//         <div class="overview">
//         <h3> overview: </h3>
//         ${overview}
//         </div>
//         </div>
//         `
//      main.appendChild(movieEl);
//     })
// }



// var url = URL("https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=1178275040")
// var request=URLRequest

// fetch("./data.json")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         document.getElementById("demo").innerHTML = data.hotels[1].city;
//         document.getElementById("main").innerHTML = data.hotels[1].evaluation;
//         document.getElementById("image").src = `${data.flights[2].images}`

//     })

// var my_api_key = "057d442e26mshadaa6b709da5c53p1e87b3jsn5bd69f978ac0"
// // sky scnner loclistcurre
// fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies", {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
//         "x-rapidapi-key": my_api_key
//     }

// })

//     // first way to reload ata json
//     .then(res => res.json())

//     .then(data => {
//         console.log(data);
//         document.getElementById("demo").innerHTML = data.Currencies[1].Symbol
//     })

/* ,

"flights":[
{
    "name": "kristal",
    "city": "Iraq_Erbil",
    "images": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fiq%2Fcristal-erbil.ar.html&psig=AOvVaw1b2lgCrz6Cr1QwUsV6i47G&ust=1630089963248000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCIDXp72sz_ICFQAAAAAdAAAAABAD",
    "evaluation": 5,
    "about": "<p>laoction in center of city </p>"
},
{
    "name": "Erbil view",
    "city": "Iraq_Erbil",
    "images": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2F408720342602090%2Fposts%2Ferbil-view-hotel%25EF%25B8%258F%25EF%25B8%258F%25EF%25B8%258F%25EF%25B8%258F%25D8%25A3%25D8%25B1%25D8%25A8%25D9%258A%25D9%2584-%25DA%25A4%25D9%258A%25D9%2588-%25D9%2587%25D9%2588%25D8%25AA%25D9%258A%25D9%2584%25D9%2581%25D9%258A-%25D8%25AE%25D8%25AF%25D9%2585%25D8%25A9-%25D8%25A7%25D9%2584%25D8%25B6%25D9%258A%25D9%2588%25D9%2581-%25D8%25A7%25D9%2584%25D9%2583%25D8%25B1%25D8%25A7%25D9%2585-%25D8%25B9%25D9%2584%25D9%2589-%25D9%2585%25D8%25AF%25D8%25A7%25D8%25B1-%25D9%25A2%25D9%25A4-%25D8%25B3%25D8%25A7%25D8%25B9%25D8%25A9-%25D9%2584%25D9%2584%25D8%25AD%25D8%25AC%25D8%25B2-%2F1926869397453836%2F&psig=AOvVaw2YWD7mPTPWHumCBmkFZyD3&ust=1630090167211000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOCBiqCtz_ICFQAAAAAdAAAAABAD",
    "evaluation": 4,
    "about": "<p>laoction in center of city </p>"
},
{
    "name": "Devan",
    "city": "Iraq_Erbil",
    "images": "https://erbillifestyle.com/wp-content/uploads/2014/03/divan-hotel.jpg",
    "evaluation": 4,
    "about": "<p>laoction in center of city </p>"
},
{
    "name": "Antusa Design Hotel &spa",
    "city": "turkey_Istanbul",
    "images": "https://www.google.com/url?sa=i&url=https%3A%2F%2Ferbillifestyle.com%2Fdivan-erbil-hotel%2F&psig=AOvVaw1kBK5jUt1HO5WNXtkitShC&ust=1630096053131000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOiDlZbDz_ICFQAAAAAdAAAAABAD",
    "evaluation": 4,
    "about": "<p>laoction in center of city </p>"
},
{
    "name": "Radisson Blu Hotel,Vadistanbul",
    "city": "turkey_Istanbul",
    "images": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fiq%2Fcristal-erbil.ar.html&psig=AOvVaw1b2lgCrz6Cr1QwUsV6i47G&ust=1630089963248000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCIDXp72sz_ICFQAAAAAdAAAAABAD",
    "evaluation": 4,
    "about": "<p>laoction in center of city </p>"
},
{
    "name": "Merador",
    "city": "palestine_ramAllah",
    "images": "https: //www.google.com/url?sa=i&url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fiq%2Fcristal-erbil.ar.html&psig=AOvVaw1b2lgCrz6Cr1QwUsV6i47G&ust=1630089963248000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCIDXp72sz_ICFQAAAAAdAAAAABAD",
    "evaluation": 4,
    "about": "<p>laoction in center of city </p>"
}



],
"busTravel":[
{
        "name": "kristal",
        "city": "Iraq_Erbil",
        "images": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fiq%2Fcristal-erbil.ar.html&psig=AOvVaw1b2lgCrz6Cr1QwUsV6i47G&ust=1630089963248000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCIDXp72sz_ICFQAAAAAdAAAAABAD",
        "evaluation": 5,
        "about": "<p>laoction in center of city </p>"
    },
    {
        "name": "Erbil view",
        "city": "Iraq_Erbil",
        "images": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2F408720342602090%2Fposts%2Ferbil-view-hotel%25EF%25B8%258F%25EF%25B8%258F%25EF%25B8%258F%25EF%25B8%258F%25D8%25A3%25D8%25B1%25D8%25A8%25D9%258A%25D9%2584-%25DA%25A4%25D9%258A%25D9%2588-%25D9%2587%25D9%2588%25D8%25AA%25D9%258A%25D9%2584%25D9%2581%25D9%258A-%25D8%25AE%25D8%25AF%25D9%2585%25D8%25A9-%25D8%25A7%25D9%2584%25D8%25B6%25D9%258A%25D9%2588%25D9%2581-%25D8%25A7%25D9%2584%25D9%2583%25D8%25B1%25D8%25A7%25D9%2585-%25D8%25B9%25D9%2584%25D9%2589-%25D9%2585%25D8%25AF%25D8%25A7%25D8%25B1-%25D9%25A2%25D9%25A4-%25D8%25B3%25D8%25A7%25D8%25B9%25D8%25A9-%25D9%2584%25D9%2584%25D8%25AD%25D8%25AC%25D8%25B2-%2F1926869397453836%2F&psig=AOvVaw2YWD7mPTPWHumCBmkFZyD3&ust=1630090167211000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOCBiqCtz_ICFQAAAAAdAAAAABAD",
        "evaluation": 4,
        "about": "<p>laoction in center of city </p>"
    },
    {
        "name": "Devan",
        "city": "Iraq_Erbil",
        "images": "https://www.google.com/url?sa=i&url=https%3A%2F%2Ferbillifestyle.com%2Fdivan-erbil-hotel%2F&psig=AOvVaw1kBK5jUt1HO5WNXtkitShC&ust=1630096053131000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOiDlZbDz_ICFQAAAAAdAAAAABAD",
        "evaluation": 4,
        "about": "<p>laoction in center of city </p>"
    },
    {
        "name": "Antusa Design Hotel &spa",
        "city": "turkey_Istanbul",
        "images": "https://www.google.com/url?sa=i&url=https%3A%2F%2Ferbillifestyle.com%2Fdivan-erbil-hotel%2F&psig=AOvVaw1kBK5jUt1HO5WNXtkitShC&ust=1630096053131000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOiDlZbDz_ICFQAAAAAdAAAAABAD",
        "evaluation": 4,
        "about": "<p>laoction in center of city </p>"
    },
    {
        "name": "Radisson Blu Hotel,Vadistanbul",
        "city": "turkey_Istanbul",
        "images": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fiq%2Fcristal-erbil.ar.html&psig=AOvVaw1b2lgCrz6Cr1QwUsV6i47G&ust=1630089963248000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCIDXp72sz_ICFQAAAAAdAAAAABAD",
        "evaluation": 4,
        "about":"<p>laoction in center of city </p>"
    },
    {
        "name": "Merador",
        "city": "palestine_ramAllah",
        "images":"https: //www.google.com/url?sa=i&url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fiq%2Fcristal-erbil.ar.html&psig=AOvVaw1b2lgCrz6Cr1QwUsV6i47G&ust=1630089963248000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCIDXp72sz_ICFQAAAAAdAAAAABAD",
        "evaluation": 4,
        "about": "<p>laoction in center of city </p>"
    }


]
}*/

// var hotels = `[
//     {
//         "name": "kristal",
//         "city": "Iraq_Erbil",
//         "images": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fiq%2Fcristal-erbil.ar.html&psig=AOvVaw1b2lgCrz6Cr1QwUsV6i47G&ust=1630089963248000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCIDXp72sz_ICFQAAAAAdAAAAABAD",
//         "evaluation": 5,
//         "about": "<p>laoction in center of city </p>"
//     },
//     {
//         "name": "Erbil view",
//         "city": "Iraq_Erbil",
//         "images": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2F408720342602090%2Fposts%2Ferbil-view-hotel%25EF%25B8%258F%25EF%25B8%258F%25EF%25B8%258F%25EF%25B8%258F%25D8%25A3%25D8%25B1%25D8%25A8%25D9%258A%25D9%2584-%25DA%25A4%25D9%258A%25D9%2588-%25D9%2587%25D9%2588%25D8%25AA%25D9%258A%25D9%2584%25D9%2581%25D9%258A-%25D8%25AE%25D8%25AF%25D9%2585%25D8%25A9-%25D8%25A7%25D9%2584%25D8%25B6%25D9%258A%25D9%2588%25D9%2581-%25D8%25A7%25D9%2584%25D9%2583%25D8%25B1%25D8%25A7%25D9%2585-%25D8%25B9%25D9%2584%25D9%2589-%25D9%2585%25D8%25AF%25D8%25A7%25D8%25B1-%25D9%25A2%25D9%25A4-%25D8%25B3%25D8%25A7%25D8%25B9%25D8%25A9-%25D9%2584%25D9%2584%25D8%25AD%25D8%25AC%25D8%25B2-%2F1926869397453836%2F&psig=AOvVaw2YWD7mPTPWHumCBmkFZyD3&ust=1630090167211000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOCBiqCtz_ICFQAAAAAdAAAAABAD",
//         "evaluation": 4,
//         "about": "<p>laoction in center of city </p>"
//     },
//     {
//         "name": "Devan",
//         "city": "Iraq_Erbil",
//         "images":"https://www.google.com/url?sa=i&url=https%3A%2F%2Ferbillifestyle.com%2Fdivan-erbil-hotel%2F&psig=AOvVaw1kBK5jUt1HO5WNXtkitShC&ust=1630096053131000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOiDlZbDz_ICFQAAAAAdAAAAABAD",
//         "evaluation": 4,
//         "about": "<p>laoction in center of city </p>"
//     },
//     {
//         "name": "Antusa Design Hotel &spa",
//         "city": "turkey_Istanbul",
//         "images": "https://www.google.com/url?sa=i&url=https%3A%2F%2Ferbillifestyle.com%2Fdivan-erbil-hotel%2F&psig=AOvVaw1kBK5jUt1HO5WNXtkitShC&ust=1630096053131000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOiDlZbDz_ICFQAAAAAdAAAAABAD",
//         "evaluation": 4,
//         "about": "<p>laoction in center of city </p>"
//     },
//     {
//         "name": "Radisson Blu Hotel,Vadistanbul",
//         "city": "turkey_Istanbul",
//         "images":"https://www.google.com/url?sa=i&url=https%3A%2F%2Ferbillifestyle.com%2Fdivan-erbil-hotel%2F&psig=AOvVaw1kBK5jUt1HO5WNXtkitShC&ust=1630096053131000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOiDlZbDz_ICFQAAAAAdAAAAABAD",
//         "evaluation": 4,
//         "about":"<p>laoction in center of city </p>"
//     },
//     {
//         "name": "Merador",
//         "city": "palestine_ramAllah",
//         "images":"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcf.bstatic.com%2Fxdata%2Fimages%2Fhotel%2Fmax500%2F95302265.jpg%3Fk%3D0e6ad82dfb01fab6e437c7446251f8523fed5a6424647ffab055bfc9ac2409c3%26o%3D%26hp%3D1&imgrefurl=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fps%2Fmirador.ar.html&tbnid=qZztVqel-BQaeM&vet=12ahUKEwiauPm0zM_yAhVIwLsIHR1VAHgQMygAegUIARCnAQ..i&docid=vACW1_rZpM51wM&w=500&h=333&q=%D9%81%D9%86%D8%AF%D9%82%20%D9%85%D9%8A%D8%B1%D8%A7%D8%AF%D9%88%D8%B1%20%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86&ved=2ahUKEwiauPm0zM_yAhVIwLsIHR1VAHgQMygAegUIARCnAQ",
//         "evaluation":4,
//         "about":"<p>laoction in center of city </p>"
//     }

// ]`



// console.log(JSON.parse(hotels));



// }

// var hotelsList = hotels
// console.log(hotelsList);
// showdata()
// }
// function showdata(){

//     hotels.forEach(hotel =>{
//         var main=document.getElementById("main");
//         main.innerHTML="";
//         var { name, city, images, evaluation}=hotel;
//         var hotelEl=document.createElement("div");
//         hotelEl.classList.add("hotel");
// hotelEl.innerHTML=`
// <div class="card">
// <img src="${images}" alt="${name}">
// <div class="info">
// <h3> ${name}</h3>
// <span>${evaluation}</span>
// </div>

// <div class="about>
// <p>${city}</p>
// </div></div>
// `
// });
// }

// getdata()

// // // // reload 


// // // madameus 


// // var my_api_key =" dPjJjUWPxfILcCBJZEEE3IAJsqqZP43w",
// // base_url = "test.api.amadeus.com",
// //  Secret ="gCKvLMKTPwmX4s7n",

// // web:https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/

// // https://app.ticketmaster.com/discovery/v2/events.json?apikey={apikey}



// // var my_api_key ="voSjCvHGzPIHL8oPYdwum3bI9pXG1HYB"


// // var ConsumerSecret="Aj9U0vFuhHIUlJAk"



// fetch("https://app.ticketmaster.com/discovery/v2/events?countryCode=US&apikey=voSjCvHGzPIHL8oPYdwum3bI9pXG1HYB")
// .then(res=>res.json())
// .then(res=>{
// console.log(res);

//     console.log(res[3].images[3].url);

// })






/*   var main = document.getElementById("main");
        main.innerHTML = '';
        data.hotelImages.forEach(hotel => {                                                                                               //jsonp
            var { baseUrl } = hotel;
            var hotelEl = document.createElement("div");
            hotelEl.classList.add("hotel");

            // symbol `` write html code safy بون لبصيغة القديمة ام الكوتيشن
            //$ declare variables

            hotelEl.innerHTML = `
        <h3 class="headerh1"> </h3>
         <div class="card">
        <img src="${baseUrl}"/>
        </div>
        `
            main.appendChild(hotelEl);



            });*/



// // var my_api_key = "057d442e26mshadaa6b709da5c53p1e87b3jsn5bd69f978ac0"
// // fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
// //     "method": "GET",
// //     "headers": {
// //         "x-rapidapi-host": "quotes15.p.rapidapi.com",
// //         "x-rapidapi-key": my_api_key
// //     }
// // })
// //     .then(response => response.json())
// //     .then(response => {
// //         console.log(response);

// //         document.getElementById('quote').innerHTML = response.content;
// //         // document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -';
// //     })
// //     .catch(err => {
// //         console.log(err);
// //     });







// // import { MY_API_KEY } from './config.js';

// // fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
// //     "method": "GET",
// //     "headers": {
// //         "x-rapidapi-host": "quotes15.p.rapidapi.com",
// //         "x-rapidapi-key": MY_API_KEY
// //     }
// // })
// //     .then(response => response.json())
// //     .then(response => {
// //         console.log(response);

// //         document.getElementById('quote').innerHTML = response.content;
// //         document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -';
// //     })
// //     .catch(err => {
// //         console.log(err);
// //     });















// // impala travel
// fetch( "url:https://sandbox.impala.travel/v1/hotels/hotelId")
// .then(res=>res.json())
// .then(data=>{
//     console.log(data);
// })













//     // .catch(err => {
//     //     console.error(err);
//     // });




// // second way to reload data json
// // .then(function (response) {
// //     return response.json()
// // })
// //     .then(data => {
// //         console.log(data);
// //     })








