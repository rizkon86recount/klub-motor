// Tangkap elemen navbar
var navbar = document.querySelector(".navbar");

// Simpan posisi awal scroll
var lastScrollTop = 0;

// Fungsi untuk menangani discroll
window.addEventListener("scroll", function () {
  // Cek apakah pengguna sedang scroll ke atas atau ke bawah
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll ke bawah, sembunyikan navbar
    navbar.style.top = "-56px"; // Sesuaikan dengan tinggi navbar Anda
  } else {
    // Scroll ke atas, tampilkan kembali navbar
    navbar.style.top = "0";
  }

  // Simpan posisi scroll sekarang sebagai posisi terakhir
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
