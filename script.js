const showPopup = document.querySelector('.tombol');
const content = document.getElementById("konten");
const loader = document.getElementById("loader");
const music = document.getElementById("musik");

//Menambahkan Event Listener ke tombol "Lihat Website"
showPopup.addEventListener("click", () => {
  //Menampilkan Text Loader dan menyembunyikan tombol "Lihat Website"
  loader.style.display = "";
  showPopup.style.display = "none";
  //Menunggu musik akan diputar
  musik.play().then(() => {
    //Menyembunyikan Loader dan menampilkan konten HTML
    konten.style.display = "";
    loader.style.display = "none";
  });
});