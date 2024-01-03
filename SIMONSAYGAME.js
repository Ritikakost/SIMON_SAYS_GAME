let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let max_score=0;
let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "green", "purple"];

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
        levelUp();
    }

});
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);

};
function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let random = Math.floor(Math.random() * 3);
    let randomcolor = btns[random];
    let randbtns = document.querySelector(`.${randomcolor}`);
    //console.log(randbtns);
    //console.log(random);

    // console.log(randomcolor);
    gameSeq.push(randomcolor);
    //
    console.log(gameSeq);
    btnFlash(randbtns);


}
function checkAns(currlevel) {
    //  console.log(`current level is ${level}`);
    let idx = currlevel;
    if (userSeq[idx] === gameSeq[idx]) {
        //console.log("same value");
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000);
            

        }
    }
    else {
        
        h2.innerHTML = ` Game Over! Your score was <b> ${level} </b> <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        max_score=Math.max(max_score,level);
        reset();
    }

}
function btnPress() {
    let btn = this;
    btnFlash(btn);
    let usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    // console.log(userSeq);
    checkAns(userSeq.length-1);




}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnPress);

}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
let exit=document.querySelector("#exit");
exit.addEventListener("click",function(){
    h2.innerText=(`your maximum score is ${max_score} ! Press any key to start the game`);
    max_score=0;


    reset();
});
