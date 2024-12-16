const username= document.getElementById ("username");
const password= document.getElementsById ("password");
const eyel = document.querrySelector(".eyeball-i");
const eyer = document.querrySelector(".eyeball-r");
const handl= document.querySelector(".hand-l");
const handr= document.querySelector(".hand-r");
const normalEyeStyle = () => {
    eyel.style.cssText = `
    left:0.6em;
    top:0.6em;`
    eyer.style.cssText = `
    right:0.6em;
    top:0.6em;`;
};
const normalHandStyle = () => {
    handl.style.cssText = `
    height: 2.81em;
    top: 8.4em;
    left: 7.5em;
    transorm: rotate(0deg);`;
    handr.style.ccText = `
    height: 2.81em;
    top: 8.4em;
    right: 7.5em;
    transform: rotate(0deg)`;
};

username.addEventListener("focus" , () => {
    eyel.style.cssText= `
    left: 0.75em;
    top: 1.12em;`;
    eyer.style.cssText = `
    right: 0.75em;
    top: 1.12em;`;
    normalHandStyle();
});
password.addEventlistener("focus", () => {
    handl.style.cssText= `
    height: 6.56em;
    top: 3.87em;
    left: 11.75em;
    transform: rotate(-155deg);`;
    handr.style.cssText = `
    height: 6.56em;
    top: 3.87em;
    right: 11.75em;
    transform: rotate(155deg);`;
});
document.addEventListener("click", e=> {
    let clickedElem = e.target;
    if (clickedElem != username && clickedElem !=
        password) {
            normalEyeStyle();
            normalHandStyle();
        }
});
