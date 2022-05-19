function darkmodetoggle() {
    let element = document.body;  // Variable . Looking at the base and picking body.
    let mainbox = document.getElementsByClassName("main-box");
    let mainText = document.getElementsByClassName("main-text");
    let state = localStorage.getItem("state");

    element.classList.toggle("dark-mode"); // using Veribale then toggle what we called it on .html page. Don't forget to link it tho.

    for (const box of mainbox) {
        box.classList.toggle("dark-mode-b");  
    }

    for (const text of mainText) {
        text.classList.toggle("dark-mode-b");
    }

    if (state !=="dark") {
        localStorage.setItem("state", "dark"); 
    } else {
        localStorage.setItem("state", "light"); 
    }
}

function darkCheck() {
    let element = document.body;  
    let mainbox = document.getElementsByClassName("main-box");
    let mainText = document.getElementsByClassName("main-text");
    let state = localStorage.getItem("state")

    if (state =="dark") {

        for (const box of mainbox) {
            box.classList.toggle("dark-mode");  
        }
    
        for (const text of mainText) {
            text.classList.toggle("dark-mode");
        }
    }
    
}

// text = "Once more unto something, something..." 
// function diffText() {
//     document.getElementById("word_guy").innerHTML = text;
//     }