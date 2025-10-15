let courser = document.querySelector('.courser');
window.addEventListener('mousemove', (event)=>{
    let top = event.clientY;
    let left = event.clientX;
    courser.style.top = top +'px';
    courser.style.left = left +'px';
})

let togglerBtn = document.querySelector('.togglerBtn');
let body = document.querySelector('body');
let heading = document.querySelector('.toggleMood h2');
togglerBtn.addEventListener('click', ()=>{
    body.classList.toggle('dark');
    if(body.classList.contains('dark')){
        heading.innerHTML = ' Dark Mode';
    }else{
        heading.innerHTML = 'Light Mode';
    }
});

let images = document.querySelectorAll('.imgStor img');
let preview = document.querySelector('.preview');
let previewImg = document.querySelector('.imgContainer img');
let closeBtn = document.querySelector('.imgContainer .closeBtn');
let leftBtn = document.querySelector('.leftBtn');
let rightBtn = document.querySelector('.rightBtn');
let i = 0
images.forEach(img =>{
    img.addEventListener('click',()=>{
        preview.classList.add('active');
        
        previewImg.src = img.src;
    
    })
});

function closePreview(){
    preview.classList.remove('active');
};
closeBtn.addEventListener('click', closePreview);
preview.addEventListener('click', closePreview);

