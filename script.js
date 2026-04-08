// Mengambil elemen navbar
const navbar = document.getElementById('navbar');

// Menambahkan event listener untuk mendeteksi scroll
window.addEventListener('scroll', () => {
    // Jika halaman di-scroll lebih dari 50px dari atas
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Tambahkan class .scrolled (ada di CSS)
    } else {
        navbar.classList.remove('scrolled'); // Hapus class jika kembali ke atas
    }
});


// --- LOGIKA HAMBURGER MENU ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

// Event listener saat tombol hamburger diklik
hamburger.addEventListener('click', () => {
    // Menambahkan atau menghapus class 'active'
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Event listener untuk menutup menu otomatis saat salah satu link diklik
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});