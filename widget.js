var ch_head = document.getElementsByTagName("head")[0];
var ch_body = document.getElementsByTagName("body")[0];

window.onload = function () {

    let attri = document.currentScript.getAttribute('one');
    console.log(attri);
    var app = document.createElement("div");
    app.setAttribute("id", "chatbot");

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "http://192.168.1.22:8073/build/static/css/main.e6c13ad2.css";

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.defer = true;
    s.src = "http://192.168.1.22:8073/build/static/js/main.1899c077.js";

    ch_body.appendChild(app);
    ch_head.appendChild(link);
    ch_body.appendChild(s);
}









