function scrollToElement (elementSelector, instance = 0) {
    const elements =document.querySelectorAll(elementSelector);

    if (elements.length > instance) {
        elements[instance].scrollIntoView ({ behavior: 'smooth'});
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});
link2.addEventListener('click', () => {
    scrollToElement('.header', 1);
});

//Cards para levar para os outros sites do meu portifólio
document.querySelectorAll('.project-card').forEach(card => {
    let imageUrl = card.getAttribute('data-image');
    card.style.setProperty('--bg-image', `url(${imageUrl})`);

    card.addEventListener('click', () => {
        card.classList.toggle('active'); 
    });

    card.querySelector('.overlay .btn').addEventListener('click', (event) => {
        event.stopPropagation();
    });
});





const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {  
        scrollToTopButton.classList.remove("hidden");
    } else {
        scrollToTopButton.classList.add("hidden");
    }
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
