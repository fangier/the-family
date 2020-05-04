const html = document.querySelector("html");
html.style.scrollBehavior = "smooth";

const body = document.querySelector("body");
body.style.backgroundColor = "black";
body.style.color = "white";
body.style.fontFamily = "'Roboto Condensed', sans-serif";

const div = document.getElementById("root");
div.style.position = "relative";
div.style.height = "100vh";
div.style.width = "99vw";

const title = document.createElement("span");
title.innerHTML = "the family";
title.style.textTransform = "uppercase";
title.style.position = "absolute";
title.style.top = "50%";
title.style.left = "50%";
title.style.transform = "translate(-50%, -50%)";
title.style.opacity = "0";
title.style.fontSize = "8em";
title.style.fontFamily = "'Lakki Reddy', cursive";
div.appendChild(title);

document.addEventListener("DOMContentLoaded", function(){
    title.style.animation= "5s ease 0s 1 show";
    title.style.opacity = "1";
});

div.addEventListener("click", function(){
    if(!document.getElementById("menu")){
        const menu = document.createElement("div");
        menu.setAttribute("id", "menu");
        menu.setAttribute("class", "container-fluid");
        menu.style.position = "relative";
        menu.style.height = "98vh";
        menu.style.width = "99vw";
        body.appendChild(menu);

        const tecza = [document.createElement("div"),document.createElement("div"),document.createElement("div"),document.createElement("div"),];
        tecza[0].style.backgroundColor = "red";
        tecza[1].style.backgroundColor = "blue";
        tecza[2].style.backgroundColor = "pink";
        tecza[3].style.backgroundColor = "purple";
        for(let i=0;i<=3;i++)
        {
            menu.appendChild(tecza[i]);
            tecza[i].setAttribute("class", "tyncza");
            const tekst=document.createElement("span");
            tekst.innerHTML = "Cokolwiek";
            tecza[i].appendChild(tekst);
        }
        
    }

    menu.scrollIntoView();
});



function przenies(where){
    let number = where[where.length - 1];


    switch(number){
        case '0':
            spotkaniaPage();
            break;
        case '1':
            wydarzeniaPage()
            break;
        case '2':
            gryPage();
            break;
        case '3':
            myPage();
            break;
    }
}



function spotkaniaPage(){

}

function wydarzeniaPage(){

}

function gryPage(){

}

function myPage(){

    const osoby = [];
    const imiona = ["Domi", "Jasiu", "Magda", "Maros", "Kuba", "Kony", "Wawrzyn", "Łukasz", "Zała", "Aszyk", "Wera", "Karo"];
    const menu = document.createElement("div");
        menu.setAttribute("id", "menu");
        menu.setAttribute("class", "container-fluid row justify-content-center");
        menu.style.position = "relative";
        menu.style.height = "98vh";
        menu.style.width = "99vw";
    body.appendChild(menu);

    for (let i =0; i<12; i++){
        osoby[i] = new osoba(imiona[i]);
        osoby[i].createDiv(menu);
    }
    const button = document.createElement("button");
    button.innerHTML = "<- Go Back"
    button.addEventListener("click", function(e){
        e.stopPropagation();
        fuckGoBack();
    });
    body.appendChild(button);

}

class osoba {
    constructor(imie){
        this.imie = imie;
    }
    createDiv(target){
        const element = document.createElement("div");
        element.setAttribute("id", this.imie);
        element.setAttribute("class", "kafle col-lg-3 m-2");
        if(window.innerWidth>window.innerHeight){

            element.style.height = "50vh";
        }
        else{

            element.style.height = "50vw";
        }
        element.style.borderStyle = "solid";
        element.style.borderColor = "white";
        element.style.borderWidth = "5px";
        element.innerHTML = this.imie;
        target.appendChild(element);
    }
}

function fuckGoBack(){

    body.innerHTML = '';
    body.appendChild(div);

}