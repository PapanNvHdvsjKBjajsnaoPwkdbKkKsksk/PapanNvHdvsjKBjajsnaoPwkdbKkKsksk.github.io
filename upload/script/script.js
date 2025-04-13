document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM content loaded Script.js");
  
  // Navigasi intro
  const introNavigationOnPublic = document.createElement("nav");
  const introInformationTypeArticle = document.getElementById("introInformationTypeArticle").textContent;
  introNavigationOnPublic.style = "order: 1;";
  introNavigationOnPublic.innerHTML = `
    <h1>${introInformationTypeArticle}</h1>
    <span class="icons">
      <i class="fi fi-ss-heart" id="likeButton"></i>
      <i class="fi fi-ss-share" id="shareButton"></i>
      <i class="fi fi-rs-circle-ellipsis-vertical" id="moreOptionButton"></i>
    </span>
  `;
  
  // Add Sosial Media Option
  const sosialMediaOptionAdd = document.getElementById("sosialMediaOption");
  sosialMediaOptionAdd.style = "order: 1;";
  sosialMediaOptionAdd.innerHTML = `
    <a href="https://whatsapp.com/channel/0029Vb3cz5l0wajxNVmGcR2x" style="background-image: url('./image/whatsapp.jpeg')"></a>
    <a href="https://x.com/KeztOfficial?t=4d9COf5KwFw_TvDmi6qlZQ&s=09" style="background-image: url('./image/x.png')"></a>
    <a href="https://www.instagram.com/kezt_official" style="background-image: url('./image/instagram.jpeg')"></a>
    <a href="tiktok.com/@kezt_official" style="background-image: url('./image/tiktok.png')"></a>
  `;
  
  // Footer yang bagian bawah itu
  const footerWebsite = document.getElementById("footerWeb");
  footerWebsite.innerHTML = `
    <section class="akhiran">
      <h1>Jelaskan itu apa?</h1>
      <p>Jelaskan adalah sumber informasi yang mencakup berbagai aspek kehidupan, mulai dari berita terbaru, edukasi, hingga informasi menarik lainnya. Dengan pendekatan yang informatif dan mudah dipahami, Jelaskan hadir untuk memenuhi rasa ingin tahu pembaca mengenai berbagai topik, baik yang sedang tren maupun yang jarang dibahas. Di sini, kamu bisa menemukan artikel seputar teknologi, sains, sejarah, budaya, serta perkembangan dunia yang up-to-date. Selain itu, ada juga konten edukatif yang membantu memperluas wawasan, mulai dari tips belajar, sains populer, hingga inovasi terbaru. Tak ketinggalan, Jelaskan juga menyajikan berita terkini dengan sudut pandang yang menarik, memberikan pemahaman mendalam tanpa kehilangan esensi informasi.</p>
      <div class="contentakhiran-container">
        <div class="contentakhiran">
          <p>Project</p>
          <a href="g90nf.apk">Download</a>
          <a href="">Refresh</a>
        </div>
        <div class="contentakhiran">
          <p>Support</p>
          <a href="https://www.kezt.my.id">Kezt</a>
          <a href="https://saweria.co/silarzai">Suport Kami</a>
        </div>
      </div>
      <section class="sosialmedia">
        <a href=""><i class="fi fi-brands-tik-tok"></i></a>
        <a href=""><i class="fi fi-brands-twitter-alt"></i></a>
        <a href=""><i class="fi fi-brands-whatsapp"></i></a>
        <a href=""><i class="fi fi-brands-instagram"></i></a>
      </section>
      <p>&copy 2025 Jelaskan</p>
    </section>
  `;
  
  // Style and Module css
  const moduleSuportArticle = [
    "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap",
    "https://cdn-uicons.flaticon.com/2.6.0/uicons-solid-straight/css/uicons-solid-straight.css",
    "https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-straight/css/uicons-regular-straight.css",
    "https://cdn-uicons.flaticon.com/2.6.0/uicons-bold-rounded/css/uicons-bold-rounded.css",
    "https://cdn-uicons.flaticon.com/2.6.0/uicons-solid-rounded/css/uicons-solid-rounded.css",
    "https://cdn-uicons.flaticon.com/2.6.0/uicons-brands/css/uicons-brands.css",
    "https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css",
    "https://cdn-uicons.flaticon.com/2.6.0/uicons-thin-rounded/css/uicons-thin-rounded.css",
    "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
  ];
  
  // Load to Web
  const mainIntroArticle = document.getElementById("articleIntro");
  mainIntroArticle.insertBefore(introNavigationOnPublic, mainIntroArticle.firstChild);
  moduleSuportArticle.forEach(href => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  });
  
  // Sistem sumber dari image
  let mainArticle = document.getElementById('mainArticle');
  mainArticle.querySelectorAll("img").forEach(img => {
    const addressImages = document.createElement("address");
    const parsedUrl = new URL(img.src);
    const hostnameParts = parsedUrl.hostname.split('.');
    
    let domain;
    if (hostnameParts.length >= 3 && ['co', 'ac', 'gov', 'or'].includes(hostnameParts[hostnameParts.length - 2])) {
      domain = hostnameParts.slice(-3).join('.');
    } else {
      domain = hostnameParts.slice(-2).join('.');
    }
  
    addressImages.textContent = "Sumber: " + domain;
    img.insertAdjacentElement('afterend', addressImages);
  });
  // Button Option Intro
  let likeButtonIntroOn = document.getElementById("likeButton");
  let shareButtonIntroOn = document.getElementById("shareButton");
  let moreOptionButtonIntroOn = document.getElementById("moreOptionButton");
  
  // Like System
  if (likeButtonIntroOn) {
    likeButtonIntroOn.addEventListener("click", function() {
      if (likeButtonIntroOn.style.color === "red") {
        likeButtonIntroOn.style.color = "white";
      } else {
        likeButtonIntroOn.style.color = "red";
      }
    });
  } else {
    sistem.message.log("Terjadi Kesalahan");
  }
  
  // Share System (hanya jika diperlukan)
  if (shareButtonIntroOn) {
    shareButtonIntroOn.addEventListener("click", function() {
      console.log("Share button clicked");
      if (navigator.share) {
        var judulArticle = document.getElementById('titleArticle').textContent;
        var shareUrl = window.location.href;
        navigator.share({
          title: document.title,
          text: 'Ayo kita baca Artikel: ' + judulArticle + "\n",
          url: "Link: " + shareUrl
        })
        .catch((error) => sistem.message.log('Gagal berbagi', error));
      } else {
        sistem.message.log('Browser tidak mendukung fitur berbagi');
      }
    });
  }
  
  moreOptionButton.addEventListener("click", function () {
    sistem.message.info("Fitur ini masih dalam pengembangan dan belum dapat digunakan. :(");
  });
  
  // Deteksi tag name Account
  const pTagID = document.getElementById('userID');
  const h1UserName = document.getElementById('userName');
  const username = pTagID.textContent.replace('@', '').trim();

  fetch('https://jelaskan.my.id/api/account-data.json')
    .then(response => response.json())
    .then(data => {
      if (data[username]) {
        h1UserName.textContent = data[username].username;
      } else {
        h1UserName.textContent = 'Username tidak ditemukan';
      }
    })
    .catch(error => {
      console.error('Error loading JSON:', error);
      h1UserName.textContent = 'Ups, Gagal memuat data';
    });
});