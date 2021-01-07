jQuery(document).ready(function () {
    $.ajax({
        url: "http://newsapi.org/v2/everything?q=apple&from=2021-01-04&to=2021-01-04&sortBy=popularity&apiKey=ea123760bcd0442196436d5522052c26",
        type: "GET",
        dataType: "json",
        success: function (data) {
            console.log(data.articles);
            for (i = 0; i < data.articles.length; i++) {
                $("ul").append("<li>" + "<img src=" + data.articles[i].urlToImage + " alt = \"une image\">" + "<h2>" + data.articles[i].title + "</h2>" + "<p>" +
                    data.articles[i].description + "</p>" + "<a href=" + data.articles[i].url + ">" + "<button>Voir l'article</button>" + "</a>" + "</li>")
                $("h2").addClass("titre")
                $("img").addClass("image")
                $("button").addClass("bouton")
            }
        },
        error: function (error) {
            alert("erreur API");
        }
    });
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("serviceWorker.js")
            .then((res) => console.log("service worker registered"))
            .catch((err) => console.log("service worker not registered", err));
    });
}

// dark mode 

const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {

    const body = document.body;

    if(body.classList.contains('dark')){

        body.classList.add('light')
        body.classList.remove('dark')
        btnToggle.innerHTML = "Go Dark"

    } else if(body.classList.contains('light')){

        body.classList.add('dark')
        body.classList.remove('light')
        btnToggle.innerHTML = "Go Light"

    }

})

// barre navigation 

const navigation = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if(window.scrollY > 30){
        navigation.classList.add('anim-nav');
    } else {
        navigation.classList.remove('anim-nav');
    }

})