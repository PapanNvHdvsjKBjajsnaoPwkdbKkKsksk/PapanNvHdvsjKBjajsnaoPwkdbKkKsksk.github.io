document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM content loaded Main.js");
  
  const navigationOption = `
    <li><a href="https://jelaskan.my.id/"><i class="bi bi-house"></i> Home</a></li>
    <li><a href="https://jelaskan.my.id/search.html"><i class="bi bi-search"></i> Search</a></li>
    <li><a href="https://jelaskan.my.id/contact.html"><i class="bi bi-telephone"></i> Kontak</a></li>
    <li><a href="https://jelaskan.my.id/tentang.html"><i class="bi bi-person-vcard"></i> Tentang Kami</a></li>
    <li><a href="https://jelaskan.my.id/privacy-policy.html"><i class="bi bi-shield-check"></i> Kebijakan Privasi</a></li>
  `;
  
  // Navigasi utama
  const mainNavigationOnPublic = document.createElement("header");
  mainNavigationOnPublic.innerHTML = `
    <img src="https://i.imgur.com/tStIlVq.png" alt="Jelaskan Logo" id="navigationImage" />
    <i class="fi fi-br-bars-staggered" id="buttonOpenSidebar"></i>
  `;

  // Sidebar Navigation
  const sidebarNavigationContainer = document.createElement("aside");
  sidebarNavigationContainer.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; padding: 25px; width: 100%; font-size: 35px; color: #252525;">
      <i style="margin-left: 25px;" class="fi fi-br-cross" id="buttonCloseSidebar"></i>
      <i style="margin-right: 25px;" class="fi fi-rr-octagon-exclamation"></i>
    </div>
    <ul>
      ${navigationOption}
    </ul>
    <a href="https://saweria.co/silarzai">Suport kami</a>
  `;

  const navigationDesktop = document.createElement("nav");
  navigationDesktop.innerHTML = `
    <img src="https://i.imgur.com/tStIlVq.png" alt="Jelaskan Logo" id="navigationImage" />
    <ul>
      ${navigationOption}
    </ul>
  `;

  document.body.insertBefore(sidebarNavigationContainer, document.body.firstChild);
  document.body.insertBefore(mainNavigationOnPublic, document.body.firstChild);
  document.body.insertBefore(navigationDesktop, document.body.firstChild);
  
  // Navigasi Sidebar
  const buttonOpenSidebar = document.getElementById("buttonOpenSidebar");
  const buttonCloseSidebar = document.getElementById("buttonCloseSidebar");

  if (buttonOpenSidebar) {
    buttonOpenSidebar.addEventListener("click", function () {
      sidebarNavigationContainer.style.width = "100vw";
    });
  }

  if (buttonCloseSidebar) {
    buttonCloseSidebar.addEventListener("click", function() {
      sidebarNavigationContainer.style.width = "0vw";
    });
  }
  
  // Footer yang bagian bawah itu
  const footerWebsite = document.getElementById("footerWeb");
  footerWebsite.innerHTML = `
    <section class="akhiran">
      <h1>Jelaskan itu apa?</h1>
      <p>Jelaskan adalah sumber informasi yang mencakup berbagai aspek kehidupan, mulai dari berita terbaru, edukasi, hingga informasi menarik lainnya. Dengan pendekatan yang informatif dan mudah dipahami, Jelaskan hadir untuk memenuhi rasa ingin tahu pembaca mengenai berbagai topik, baik yang sedang tren maupun yang jarang dibahas. Di sini, kamu bisa menemukan artikel seputar teknologi, sains, sejarah, budaya, serta perkembangan dunia yang up-to-date. Selain itu, ada juga konten edukatif yang membantu memperluas wawasan, mulai dari tips belajar, sains populer, hingga inovasi terbaru. Tak ketinggalan, Jelaskan juga menyajikan berita terkini dengan sudut pandang yang menarik, memberikan pemahaman mendalam tanpa kehilangan esensi informasi.</p>
      <div class="contentakhiran-container">
        <div class="contentakhiran">
          <p>Project</p>
          <a href="">Refresh</a>
        </div>
        <div class="contentakhiran">
          <p>Support</p>
          <a href="https://jelaskan.my.id/contact.html">Kontak</a>
          <a href="https://jelaskan.my.id/tentang.html">Tentang Kami</a>
          <a href="https://jelaskan.my.id/privacy-policy.html">Kebijakan Privasi</a>
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
  moduleSuportArticle.forEach(href => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  });
  
  document.body.appendChild('<script src="https://jelaskan.my.id/upload/script/main.js" type="text/javascript" charset="utf-8"></script>');
});
