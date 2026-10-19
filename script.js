// Menu navigasi untuk tampilan HP
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("open");

  // Memperbarui status menu untuk aksesibilitas
  const menuTerbuka = navLinks.classList.contains("open");
  menuToggle.setAttribute("aria-expanded", menuTerbuka);
});

// Setelah menu dipilih, tutup menu di layar kecil
const semuaLinkMenu = navLinks.querySelectorAll("a");

semuaLinkMenu.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Tahun footer mengikuti tahun saat ini
document.getElementById("year").textContent = new Date().getFullYear();
