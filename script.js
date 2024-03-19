let nav = document.querySelector('nav ul');

document.querySelector('.menu-but').onclick = () => {
    nav.classList.toggle('active');
}

function changeVal(el, st, en, duration) {
    let current = st, range = en - st, inc = en > st ? 1 : -1, step = Math.abs(Math.floor(duration / range));

    const timer = setInterval(() => {
        current += inc;
        el.textContent = current;
        if (current == en) {
            clearInterval(timer);
        }
    }, step);
}
function startCount() {
    let counter = document.querySelectorAll('#about .right .flex h2');

    counter.forEach(el => {
        let target = parseInt(el.getAttribute('data-target'));
        changeVal(el, 0, target, 1500);
    })
}

window.onscroll = () => {
    let countSec = document.querySelector('.counter'), secTop = countSec.getBoundingClientRect().top, height =
        window.innerHeight;

    if (secTop < height) {
        startCount();
        window.removeEventListener('scroll', startCount);
    }

    nav.classList.remove('active');
}

let teamBut = document.querySelectorAll('#team .teams button'), gallery = 
    document.querySelectorAll('#team .gallery .slide');

teamBut.forEach(op => {
    op.onclick = () => {
        teamBut.forEach(el => el.classList.remove('active'));
        op.classList.add('active');
        
        let showTeam = op.getAttribute('data-name');

        gallery.forEach(ga => {
            if (showTeam == 'all' || showTeam == ga.getAttribute('data-name')) {
                ga.style.display = 'flex';
            }
            else {
                ga.style.display = 'none';
            }
        })
    }
})