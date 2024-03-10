let heading = docment.getElementById('heading');
let heading2 = docment.getElementById('heading2');
let moon = docment.getElementById('moon');

window.addEventListener('scroll',() => {
    let value=window.scrollY;

    heading.style.marginTop= value*2.5 + 'px';
    heading2.style.Top= value*2.5 + 'px';
    moon.style.right= value*-1.5 + 'px';
}
);
