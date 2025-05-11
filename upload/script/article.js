document.addEventListener("DOMContentLoaded", function () {
  const tombol = document.getElementById("bacakanArtikel");
  const suara = new SpeechSynthesisUtterance();
  suara.lang = 'id-ID';

  let membaca = false;

  tombol.addEventListener("click", function () {
    if (!membaca) {
      suara.text = document.getElementById("mainArticle").innerText;
      window.speechSynthesis.speak(suara);
      tombol.className = "fi fi-rr-volume-slash";
      membaca = true;
    } else {
      window.speechSynthesis.cancel();
      tombol.className = "fi fi-rr-volume";
      membaca = false;
    }
  });

  suara.onend = function () {
    tombol.className = "fi fi-rr-volume";
    membaca = false;
  };
});
