
/* TOMBOL SAPAAN */

const tombol = document.getElementById("greetingButton");

const pesan = document.getElementById("greetingMessage");

tombol.addEventListener("click", function() {

    pesan.textContent = "Halo! Terima kasih sudah mengunjungi portofolio saya.";

});


/* MENU NAVIGASI HP */

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function() {

    navMenu.classList.toggle("active");

});


/* MENUTUP MENU SETELAH DIPILIH */

const menuLinks = document.querySelectorAll(".nav-menu a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

    });

});


/* MENAMPILKAN TAHUN OTOMATIS */

const tahun = document.getElementById("year");

tahun.textContent = new Date().getFullYear();
