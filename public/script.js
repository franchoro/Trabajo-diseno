const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click",() => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length-1
        if (newIndex > slides.children.length-1) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

const open = document.getElementById("open");
const modal_container = document.getElementById();
const close = document.getElementById("close");

open.addEventListener("click", ()=>{
    modal_container.classList.add("show");
});

close.addEventListener("click", ()=>{
    modal_container.classList.remove("show");
});