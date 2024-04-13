const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const pic = document.querySelector(".pic");
const buttons = document.querySelector(".buttons");
const pics = ["pic2", "pic3"];
const nopics = ["pic5", "pic6", "pic7"];
const yespics=["pic4","pic8", "pic9"];
const colors = ["red", "pink", "red"]; 
const audio1= new Audio("dil2.mp3");
const audio2= new Audio("mehboob2.mp3");
let n = 0;
let c = 0;
let k = 0;
let c2=0
let timerId;
let timerId2;

function ss() {
    console.log(nopics[c]);
    pic.classList.add(nopics[c]);
    c++; 
}

function ss2(){
    pic.classList.add(yespics[c2]);
    c2++; 
}

function change() {
    document.body.style.backgroundColor = colors[k++];
    k %= colors.length; 
}

no.addEventListener("click", () => {
    if (n < 2) {
        pic.classList.add(pics[n++]);
        no.innerHTML = "Still No?";
    } else {
        if (n === 2) {
            pic.classList.add(nopics[0]);
        }
        timerId = setInterval(ss, 3000);
        buttons.style.display = "none";
        audio2.play();
    }
});

yes.addEventListener("click", () => {
    if (n === 0) {
        pic.classList.add(pics[2]);
    }
    buttons.style.display = "none";
    timerId = setInterval(change, 500);
    timerId2= setInterval(ss2, 3000);
    audio1.play();
});
