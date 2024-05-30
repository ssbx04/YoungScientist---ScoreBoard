var selectEq1 = document.getElementById("equipe1-select");
var selectEq2 = document.getElementById("equipe2-select");
var bouttonCommencer = document.getElementById("commencer");
var eq1Txt = document.getElementById("game-eq1-text");
var eq2Txt = document.getElementById("game-eq2-text");
bouttonCommencer.addEventListener("click",()=>{
    eq1Txt.innerHTML = selectEq1.value;
    eq2Txt.innerHTML = selectEq2.value;
    document.getElementById("choose-teams").style.display = "none";
    document.getElementById("game").style.display = "flex";
    console.log("hello");
});
var nbPointsEq1 = 0;
var nbPointsEq2 = 0;
var nbpointsActuel = 5;
var pointsEq1Txt = document.getElementById("points-eq-1");
var pointsEq2Txt = document.getElementById("points-eq-2");
var plusEq1 = document.getElementById("add-eq1");
var moinsEq1 = document.getElementById("remove-eq1");
var plusEq2 = document.getElementById("add-eq2");
var moinsEq2 = document.getElementById("remove-eq2");
var pointsSelect = document.getElementById("points-ajouter");
plusEq1.addEventListener("click",()=>{
    nbPointsEq1 += nbpointsActuel;
    pointsEq1Txt.innerHTML = nbPointsEq1;
})
moinsEq1.addEventListener("click",()=>{
    if(nbPointsEq1-nbpointsActuel >= 0){
        nbPointsEq1 -= nbpointsActuel;
        pointsEq1Txt.innerHTML = nbPointsEq1;
    }
})
plusEq2.addEventListener("click",()=>{
    nbPointsEq2 += nbpointsActuel;
    pointsEq2Txt.innerHTML = nbPointsEq2;
})
moinsEq2.addEventListener("click",()=>{
    if(nbPointsEq2-nbpointsActuel >= 0){
        nbPointsEq2 -= nbpointsActuel;
        pointsEq2Txt.innerHTML = nbPointsEq2;
    }
})
pointsSelect.addEventListener("change",()=>{
    nbpointsActuel = parseInt(pointsSelect.value);
});
