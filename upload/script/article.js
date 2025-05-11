document.addEventListener("DOMContentLoaded", function () {
  const tombol = document.getElementById("bacakanArtikel");
  const suara = new SpeechSynthesisUtterance();
  let membaca = false;

  // Fungsi memilih suara Indonesia jika tersedia
  function pilihSuara() {
    const voices = speechSynthesis.getVoices();
    const indoVoice = voices.find(v => v.lang === 'id-ID');
    if (indoVoice) {
      suara.voice = indoVoice;
      suara.lang = 'id-ID';
    } else {
      // fallback ke bahasa Inggris jika tidak tersedia
      suara.voice = voices.find(v => v.lang === 'en-US') || voices[0];
      suara.lang = suara.voice.lang;
      alert("Suara Bahasa Indonesia tidak tersedia, menggunakan suara: " + suara.voice.name);
    }
  }

  // Tunggu sampai suara tersedia
  speechSynthesis.onvoiceschanged = pilihSuara;
  pilihSuara();

  tombol.addEventListener("click", function () {
    if (!membaca) {
      let textArticle = document.getElementById("mainArticle").innerText;
      if (textArticle.trim() === "") {
        alert("Artikel tidak ditemukan atau kosong.");
        return;
      }
      suara.text = textArticle;
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

  window.addEventListener("beforeunload", function () {
  window.speechSynthesis.cancel();
});
});
