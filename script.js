const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');
const textBox= document.getElementById('text-box');


//Dark Mode Style
function darkMode(){
    nav.style.backgroundColor = 'rgb (0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb (255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');    
    image1.src = 'img/undraw_proud_coder_dark.svg'
    image1.src = 'img/undraw_feeling_proud_dark.svg'
    image1.src = 'img/undraw_conceptual_idea_dark.svg'
}

//Light Mode Style
function lightMode(){
    nav.style.backgroundColor = 'rgb (255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb (0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('fa-smoon');
    toggleIcon.children[1].classList.add('fa-sun');    
    image1.src = 'img/undraw_proud_coder_light.svg'
    image1.src = 'img/undraw_feeling_proud_light.svg'
    image1.src = 'img/undraw_conceptual_idea_light.svg'
}


//Switch Theme Dynamic
function switchTheme(event) {
    const checkSwitch = event.target.checked;
    if (checkSwitch) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
    
}


//Event listner
toggleSwitch.addEventListener('change', switchTheme)