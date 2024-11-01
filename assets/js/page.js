// load file about
let about = new XMLHttpRequest();
about.open("GET", "about.html", false);
about.send();
document.getElementById("about").innerHTML = about.responseText;

let home = new XMLHttpRequest();
home.open("GET", "home.html", false);
home.send();
document.getElementById("home").innerHTML = home.responseText;

let service = new XMLHttpRequest();
service.open("GET", "service.html", false);
service.send();
document.getElementById("service").innerHTML = service.responseText;

let portfolio = new XMLHttpRequest();
portfolio.open("GET", "portfolio.html", false);
portfolio.send();
document.getElementById("portfolio").innerHTML = portfolio.responseText;

let contact = new XMLHttpRequest();
contact.open("GET", "contact.html", false);
contact.send();
document.getElementById("contact").innerHTML = contact.responseText;
