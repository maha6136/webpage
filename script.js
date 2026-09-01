const menuBtn = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");

const themeToggle = document.querySelectorAll(".theme-toggle");

//open mobile menu
menuBtn.addEventListener("click", ()=> {
    mobileMenu.classList.remove("hidden");
    menuBtn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
});

//close mobile menu
closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuBtn.classList.remove("hidden");
    closeBtn.classList.add("hidden");
})

//dark mode
themeToggle.forEach((toggle) => {
    toggle.addEventListener("click", () =>{
        document.documentElement.classList.toggle("dark");
    });
});