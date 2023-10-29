/*Scroll*/

ScrollReveal({ 
    reset: true,
    distance: "20px",
    duration: 800,
    delay: 100
});

ScrollReveal().reveal('.contentsText', { delay: 200 });
ScrollReveal().reveal('.experience', { delay: 300, origin: "left" });
ScrollReveal().reveal('.information-detail', { delay: 300, origin: "bottom"});
/*ScrollReveal().reveal('.first', { delay: 100, origin: "left"});
ScrollReveal().reveal('.second', { delay: 150, origin: "left"});
ScrollReveal().reveal('.third', { delay: 200, origin: "left"});
ScrollReveal().reveal('.information-link', { delay: 250, origin: "bottom"});
ScrollReveal().reveal('.information-github', { delay: 300, origin: "bottom"});*/

/*Theme*/

function toggleDarkMode() {
    const body = document.body;
    const moonIcon = document.querySelector(".moon");
    const sunIcon = document.querySelector(".sun");
    const themeBackground = document.querySelector(".theme");

    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        document.getElementById('thirdColor').style.color = '#FFFFFFA3';
        sunIcon.style.display = "inline"
        moonIcon.style.display = "none"
        themeBackground.style.background = "#1F2225"
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        document.getElementById('thirdColor').style.color = '#112F39';
        moonIcon.style.display = "inline"
        sunIcon.style.display = "none"
        themeBackground.style.background = "#ffffff"
    }
}

document.querySelector('.theme').addEventListener('click', function () {
    toggleDarkMode();
});
toggleDarkMode();



