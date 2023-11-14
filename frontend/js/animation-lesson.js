const header = document.querySelector('header');
const title = document.querySelector('#header-h1-title');
const img = document.querySelector('#header-img-theme');

window.addEventListener('scroll', function () {
    console.log(scrollY)
    if (window.scrollY > 280) {
        img.style.display = 'none';
        title.style.position = 'inherit';
        title.style.top = 'unset';
        title.style.fontSize = '1.2rem';
        title.style.lineHeight = '2rem';
        title.style.letterSpacing = '3px';
        title.style.alignSelf = 'center';
        title.style.width = 'unset';
        title.style.height = 'unset';
        title.style.justifyContent = 'center';
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.width = '100%';
        header.style.height = '8vh';
        header.style.borderRadius = '0 0 40px 40px';
        
    } 
})