let scoreH = document.getElementById("score-H");
let scoreG = document.getElementById("score-G");
let scoreHome=0;
let scoreGuest=0
/*function for home team increament score*/
function incH1(){    
    scoreHome+=1
    scoreH.textContent=scoreHome;
}
function incH2(){    
    scoreHome+=2
    scoreH.textContent=scoreHome;
}
function incH3(){    
    scoreHome+=3
    scoreH.textContent=scoreHome;
}
/*function for guest team increament score*/
function incG1(){    
    scoreGuest+=1
    scoreG.textContent=scoreGuest;
}
function incG2(){    
    scoreGuest+=2;
    scoreG.textContent=scoreGuest;
}
function incG3(){    
    scoreGuest+=3
    scoreG.textContent=scoreGuest;
}