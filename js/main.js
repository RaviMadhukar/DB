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

// contact

const scriptURL = 'https://script.google.com/macros/s/AKfycbwn3C2S_pClj4QqlKa8EKcvx5Ec868V2MvToF8ZqQkMRIEwrjRz6ZozY-LKsSIs-OVpoQ/exec'
const form = document.forms['submit-to-google-sheet1']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Save Successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
