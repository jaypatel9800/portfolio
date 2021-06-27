const navBar = () => {
    const eye = document.querySelector(".eye")
    const nav = document.querySelector(".navLinks")
    const navLinks = document.querySelectorAll(".navLinks li")
    

    eye.addEventListener("click", () => {
        nav.classList.toggle('navActive')

        eye.classList.toggle("toggle")

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ""
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        })
        
    })
}
navBar()