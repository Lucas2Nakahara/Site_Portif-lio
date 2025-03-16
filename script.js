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
    // Role até o segundo elemento com "classe de cabeçalho"
    scrollToElement('.header', 1);
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        let imageUrl = card.getAttribute('data-image');
        if (imageUrl) {
            card.style.backgroundImage = `url(${imageUrl})`;
            card.style.backgroundSize = "cover";
            card.style.backgroundPosition = "center";
            card.style.transition = "background 0.3s ease-in-out";
        }
    });

    card.addEventListener('mouseleave', () => {
        card.style.backgroundImage = "";
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
