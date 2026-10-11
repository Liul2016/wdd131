const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

const btn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

btn.addEventListener('click', toggleMenu);
gallery.addEventListener('click', openModal);
closeButton.addEventListener('click', (event) => modal.close());

modal.addEventListener('click', (event) => event.target === modal ? modal.close() : null);

function toggleMenu() {
    nav.classList.toggle("hide");
}

function openModal(e) {
    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
}