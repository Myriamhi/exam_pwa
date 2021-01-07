jQuery(document).ready(function() {
    $.ajax({
        url: "http://newsapi.org/v2/everything?q=apple&from=2021-01-04&to=2021-01-04&sortBy=popularity&apiKey=ea123760bcd0442196436d5522052c26",
        type: "GET",
        dataType: "json",
        success: function(data) {
            console.log(data.articles);
            for (i = 0; i < data.articles.length; i++) {
                $("ul").append("<li>" + "<h2>" + data.articles[i].title + "</h2>" + "<img src=" + data.articles[i].urlToImage + " alt = \"une image\">" + "<p>" +
                    data.articles[i].description + "</p>" + "</li>")
                $("h2").addClass("titre")
                $("img").addClass("image")
                $("li").append("<button>Voir</button>")
            }
        }
    });
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then((res) => console.log("service worker registered"))
            .catch((err) => console.log("service worker not registered", err));
    });
}