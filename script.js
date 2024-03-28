const tulisan = document.getElementById('judul');
const cont = document.getElementById('containt');
const kotak = document.getElementById('kotak');
const image = document.getElementById('foto');
const title = document.getElementById('title');
const text = document.getElementById('text');
const btn = document.getElementById('btn');
const yes = document.getElementById('y');
const no = document.getElementById('n');

yes.addEventListener('click', e => {
    tulisan.innerHTML = 'Anda Berbohong!';
    text.innerHTML = 'Anda adalah seorang Teknisi'
    kotak.style.backgroundColor = "#E12E2E";
    btn.style.display = "none"
    image.src = "img js.png"
});

no.addEventListener('click', e => {
    tulisan.innerHTML = 'Anda Benar!';
    text.innerHTML = 'Anda adalah seorang Mahasiswa'
    kotak.style.backgroundColor = "#6FD240";
    btn.style.display = "none"
    image.src = "img css.png"
});