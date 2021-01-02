const navElement = document.getElementsByClassName('nav-element');


Array.from(navElement).forEach(element => {
    let ul = element.lastElementChild
    let a = element.firstElementChild
    console.log(a);
    element.addEventListener('mouseover',(e) => {
        e.preventDefault();
        ul.style.display = 'block'; 
        a.className = 'px-4 relative text-red-500';
    });
    element.addEventListener('mouseout',(e) => {
        e.preventDefault();
        ul.style.display = 'none';
        a.className = 'px-4 relative';
    });
    const lastLi  = Array.from(navElement);
    lastLi[lastLi.length - 1].lastElementChild.className = ' ';
})