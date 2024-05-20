const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
    })
}

var sidemuneu = document.getElementById("sidemuneu");

function openmenu() {
    sidemuneu.style.left = "0";
    document.getElementById("openn").classList.remove("active-bar");
    document.getElementById("closee").classList.add("active-bar");
}

function closemenu() {
    sidemuneu.style.left = "-300px";
    document.getElementById("closee").classList.remove("active-bar");
    document.getElementById("openn").classList.add("active-bar");

}


const scriptUL = 'https://script.google.com/macros/s/AKfycbyqHJh6AabpkbOXURzn9HAumxrrUzN922UVhbVQMC3JuuiyIMMOYzBbkOd2s2-cCUPy/exec'
const frm = document.forms['submit-to-google-sheet2']
const mg =document.getElementById("mssg");

frm.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptUL, { method: 'POST', body: new FormData(frm) })
        .then(response => {
            mg.innerHTML = "Message Save Successfully"
            setTimeout(function(){
                mg.innerHTML =""
            },5000)
            frm.reset()
        })
        .catch(error => console.error('Error!', error.message))
})