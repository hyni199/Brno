const themeButton = document.getElementById('theme-button');

function applyTheme(isDark) {
    if (isDark) {
        document.body.style.backgroundColor = 'rgb(22, 25, 32)';
        themeButton.textContent = '☀️';
        themeButton.style.background = 'rgb(26, 31, 42)';
        document.querySelector('header').style.backgroundColor = 'rgb(22, 25, 32)';

        const intro = document.getElementById('intro');
        if (intro) intro.style.backgroundImage = 'linear-gradient(rgba(146, 145, 145, 0.322), rgba(0, 0, 0, 0.44)), url(img/main-Brno.jpg)';

        const introH1 = document.querySelector('#intro h1');
        if (introH1) introH1.style.color = 'rgb(255, 255, 255)';

        /* forEach hat mir Ki erklärt*/
        document.querySelectorAll('.h2-heading').forEach(item => item.style.color = 'rgb(255, 255, 255)');
        document.querySelectorAll('h3').forEach(item => item.style.color = 'rgb(200, 195, 185)');
        document.querySelectorAll('.geschichte-item').forEach(item => item.style.borderLeft = '2px solid rgb(200, 195, 185)');
        document.querySelectorAll('.wahrzeichen-item h3, .touristen-item h3, .aussichten-item h3').forEach(item => item.style.color = 'rgb(200, 195, 185)');
        document.querySelectorAll('.restaurant-intro h2').forEach(item => item.style.color = 'rgb(255, 255, 255)');
        document.querySelectorAll('.year').forEach(item => item.style.color = 'rgb(200, 195, 185)');
        document.querySelectorAll('.rating').forEach(item => item.style.color = 'rgb(200, 195, 185)');
        document.querySelectorAll('.mehr').forEach(item => { item.style.backgroundColor = 'rgb(33, 38, 48)' ; item.style.color = 'rgb(200, 195, 185)'})
        document.querySelectorAll('.tags p').forEach(item => { item.style.backgroundColor = 'rgb(33, 38, 48)' ; item.style.color = 'rgb(200, 195, 185)'})
        document.querySelectorAll('.interne-Links a').forEach(item => { item.style.backgroundColor = 'rgb(26, 31, 42)'; item.style.color = 'rgb(200, 195, 185)'});
        document.querySelector('footer').style.color = 'rgb(200, 195, 185)';
    } else {
        document.body.style.backgroundColor = 'rgb(237, 232, 222)';
        themeButton.textContent = '🌙';
        themeButton.style.background = 'rgb(249, 248, 247)';
        document.querySelector('header').style.backgroundColor = 'rgb(237, 232, 222)';

        const introEl = document.getElementById('intro');
        if (introEl) introEl.style.backgroundImage = 'linear-gradient(rgba(146, 145, 145, 0.322), rgba(244, 241, 234, 0.441)), url(img/main-Brno.jpg)';

        const introH1 = document.querySelector('#intro h1');
        if (introH1) introH1.style.color = 'rgb(0, 0, 0)';

        document.querySelectorAll('.h2-heading').forEach(item => item.style.color = 'rgb(0, 0, 0)');
        document.querySelectorAll('h3').forEach(item => item.style.color = 'black');
        document.querySelectorAll('.geschichte-item').forEach(item => item.style.borderLeft = '2px solid black');
        document.querySelectorAll('.wahrzeichen-item h3, .touristen-item h3, .aussichten-item h3').forEach(item => item.style.color = 'black');
        document.querySelectorAll('.restaurant-intro h2').forEach(item => item.style.color = 'black');
        document.querySelectorAll('.year').forEach(item => item.style.color = 'rgb(72, 67, 59)');
        document.querySelectorAll('.rating').forEach(item => item.style.color = 'rgb(0, 0, 0)');
        document.querySelectorAll('.mehr').forEach(item => { item.style.backgroundColor = 'rgb(255, 255, 255)' ; item.style.color = 'rgb(0, 0, 0)'})
        document.querySelectorAll('.tags p').forEach(item => { item.style.backgroundColor = 'rgb(255, 255, 255)' ; item.style.color = 'rgb(0, 0, 0)'})
        document.querySelectorAll('.interne-Links a').forEach(item => { item.style.backgroundColor = 'rgb(249, 248, 247)'; item.style.color = 'rgb(42 46 61)'});
        document.querySelector('footer').style.color = 'rgb(0, 0, 0)';
    }
}

/* Das hab ich von KI und ist dafür das der theme bleibt wenn man seite wechselt.*/
let isDark = localStorage.getItem('theme') === 'dark';
applyTheme(isDark);

themeButton.addEventListener('click', () => {
    isDark = !isDark;
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    applyTheme(isDark);
});