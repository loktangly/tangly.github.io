const wrapper = document.querySelector('.wrapper'); 
const question = document.querySelector('.question'); 
const yesbtn = document.querySelector('.yes-btn'); 
const nobtn = document.querySelector('.no-btn'); 
 
const wrapperrect = wrapper.getBoundingClientRect(); 
const nobtnrect = nobtn.getBoundingClientRect(); 
 
yesbtn.addEventListener('click', () => { 
    question.innerHTML = "I love you too babe :)"; 
}); 
 
nobtn.addEventListener('mouseover', () => { 
    const i = Math.floor(Math.random() * (wrapperrect.width - nobtnrect.width)) + 1; 
    const j = Math.floor(Math.random() * (wrapperrect.height - nobtnrect.height)) + 1; 
 
    nobtn.style.left = i + 'px'; 
    nobtn.style.top = j + 'px'; 
 
});