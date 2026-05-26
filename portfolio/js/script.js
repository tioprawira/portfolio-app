// ==========================================
// 1. Hamburger Menu Logic
// ==========================================
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const menuIcon = mobileMenu.querySelector('i');

// Saat tombol menu diklik
mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    
    // Ubah ikon dari "bars" (garis tiga) menjadi "x" (silang)
    if (navList.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
});

// Tutup menu otomatis saat salah satu link diklik (khusus di HP)
document.querySelectorAll('.nav-list li a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    });
});

// ==========================================
// 2. Scroll Animation Logic (Intersection Observer)
// ==========================================
const faders = document.querySelectorAll('.fade-in');

// Pengaturan kapan animasi mulai dipicu
const appearOptions = {
    threshold: 0.15, // Animasi mulai saat 15% elemen terlihat di layar
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target); // Hentikan observasi setelah animasi selesai
        }
    });
}, appearOptions);

// Terapkan observer ke setiap elemen yang memiliki class fade-in
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});