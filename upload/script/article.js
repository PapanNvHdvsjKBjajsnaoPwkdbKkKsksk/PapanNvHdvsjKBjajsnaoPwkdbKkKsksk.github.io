document.addEventListener("DOMContentLoaded", function () {
  const bacakanArtikelButton = document.getElementById("bacakanArtikel");

  const suaraBantu = new SpeechSynthesisUtterance();
  suaraBantu.lang = 'id-ID';

  function bacaArtikel() {
    const teksArtikel = document.getElementById("mainArticle").innerText;
    suaraBantu.text = teksArtikel;
    window.speechSynthesis.speak(suaraBantu);
    bacakanArtikelButton.className = "fi fi-rr-volume-slash";
  }

  function stopBaca() {
    window.speechSynthesis.cancel();
    bacakanArtikelButton.className = "fi fi-rr-volume";
  }

  let sedangMembaca = false;

  bacakanArtikelButton.addEventListener("click", function () {
    if (!sedangMembaca) {
      bacaArtikel();
      sedangMembaca = true;
    } else {
      stopBaca();
      sedangMembaca = false;
    }
  });
});
