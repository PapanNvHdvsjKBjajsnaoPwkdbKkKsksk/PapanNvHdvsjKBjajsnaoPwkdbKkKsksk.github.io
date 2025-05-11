document.addEventListener("DOMContentLoaded", function () {
  const bacakanArtikelButton = document.getElementById("bacakanArtikel");

  const suaraBantu = new SpeechSynthesisUtterance();
  suaraBantu.lang = 'id-ID';

  let sedangMembaca = false;

  function bacaArtikel() {
    const teksArtikel = document.getElementById("mainArticle").innerText;
    suaraBantu.text = teksArtikel;
    window.speechSynthesis.speak(suaraBantu);
    bacakanArtikelButton.className = "fi fi-rr-volume-slash";
    sedangMembaca = true;
  }

  function stopBaca() {
    window.speechSynthesis.cancel();
    bacakanArtikelButton.className = "fi fi-rr-volume";
    sedangMembaca = false;
  }

  bacakanArtikelButton.addEventListener("click", function () {
    if (!sedangMembaca) {
      bacaArtikel();
    } else {
      stopBaca();
    }
  });

  suaraBantu.onend = function () {
    bacakanArtikelButton.className = "fi fi-rr-volume";
    sedangMembaca = false;
  };
});
