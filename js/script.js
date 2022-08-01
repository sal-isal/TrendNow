// Smooth Scrolling
// Script ini untuk mengaktifkan tombol pada header dan tombol section gallery
// Penulisan fungsi nya tidak disatukan dengan perulangan
const navs = document.getElementsByClassName('page-scroll');
const navDown = document.querySelector('.nav-down');

for (const nav of navs) {
    nav.addEventListener('click', clickHandler);
}

navDown.addEventListener('click', clickHandler);

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href")
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}

// Thumb up
// Script ini untuk mengaktifkan tombol vote, tombol yang aktif hanya boleh 1
// Penulisan fungsi nya disatukan dengan perulangan
const thumbs = document.querySelectorAll('.vote i');

thumbs.forEach(function(thumb) {
    thumb.addEventListener('click', function(e) {
        const active = document.querySelector('.vote-active');

        active.classList.remove('vote-active');
        e.target.classList.add('vote-active');
    })
})