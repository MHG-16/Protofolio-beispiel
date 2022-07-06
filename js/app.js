const sections = document.querySelectorAll(".section")
const buttons = document.querySelectorAll(".controlls")
const button = document.querySelectorAll(".control")
const mainSection = document.querySelector(".main-content")


function PageTransition() {
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function () {
            let currentButton = document.querySelectorAll(".active-btn")
            currentButton[0].className = currentButton[0].className.replace("active-btn", "")
            this.className += " active-btn"
        })
    }

    //Sections Active
    mainSection.addEventListener("click", (e) => {
        const id = e.target.dataset.id
        if (id) {
            buttons.forEach((btn) => {
                btn.classList.remove("active")
            })
            e.target.classList.add("active")
            buttons.forEach((btn) => {
                btn.classList.remove("active")
            })
            e.target.classList.add("active")

            sections.forEach((section) => {
                section.classList.remove("active")
            })

            const element = document.getElementById(id)
            element.classList.add("active")
        }
    })
}

function changeTheme() {
    const themeBtn = document.querySelector('.theme-btn')
    themeBtn.addEventListener('click', ()=>{
        let element = document.body
        element.classList.toggle('light-mode')
    })
}


changeTheme()
PageTransition()