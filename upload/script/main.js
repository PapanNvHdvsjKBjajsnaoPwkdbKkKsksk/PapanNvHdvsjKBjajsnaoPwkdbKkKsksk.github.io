document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM content loaded Main.js");
  
  const buttonNavigationOptionM = `
    <li><a href="https://jelaskan.my.id/"><i class="bi bi-house"></i> Home</a></li>
    <li><a href=""><i class="bi bi-search"></i> Search</a></li>
    <li><a href=""><i class="bi bi-chat-dots"></i> Chat</a></li>
    <li><a href=""><i class="bi bi-person-fill"></i> Profile</a></li>
  `;
  
  const buttonNavigationOptionD = `
    <a href="https://jelaskan.my.id/"><i class="bi bi-house"></i></a>
    <a href=""><i class="bi bi-search"></i></a>
    <a href=""><i class="bi bi-chat-dots"></i></a>
    <a href=""><i class="bi bi-person-fill"></i></a>
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
      ${buttonNavigationOptionM}
    </ul>
    <a href="https://saweria.co/silarzai">Suport kami</a>
  `;

  const navigationDesktop = document.createElement("div");
  navigationDesktop.classList.add("navigasi-geser");
  navigationDesktop.innerHTML = `
    <div class="nav-content">
      <div id="navigasiGeserPlus" class="toggle-btn">
        <i class="bi bi-plus" style="transition: 0.7s all;" id="mainToggleButton"></i>
      </div>
      <div class="optionButtonDesktop">
        ${buttonNavigationOptionD}
      </div>
    </div>
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

  // Navigasi Geser
  const navigasiGeserPlus = document.getElementById("navigasiGeserPlus");
  const navigasiGeser = document.querySelector(".navigasi-geser");
  const mainToggleButton = document.getElementById("mainToggleButton");
  const optionButtonDesktop = document.querySelector(".optionButtonDesktop");
  let startX, startY;

  if (navigasiGeser) {
    navigasiGeser.addEventListener("touchstart", function(event) {
      startX = event.touches[0].clientX - navigasiGeser.offsetLeft;
      startY = event.touches[0].clientY - navigasiGeser.offsetTop;

      document.addEventListener("touchmove", touchmove);
      document.addEventListener("touchend", touchend);
    });
  }

  function touchmove(event) {
    event.preventDefault();
    var newX = event.touches[0].clientX - startX;
    var newY = event.touches[0].clientY - startY;

    navigasiGeser.style.left = newX + "px";
    navigasiGeser.style.top = newY + "px";
  }

  function touchend() {
    document.removeEventListener("touchmove", touchmove);
    document.removeEventListener("touchend", touchend);
  }

  // Toggle Button
  const toggleBtn = navigasiGeser.querySelector(".toggle-btn");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentColor = window.getComputedStyle(toggleBtn).backgroundColor;
      if (currentColor === "rgb(208, 208, 208)") {
        toggleBtn.style.backgroundColor = "white";
        mainToggleButton.style.transform = "rotate(0deg)";
        optionButtonDesktop.style.height = "0px"
      } else {
        toggleBtn.style.backgroundColor = "#d0d0d0";
        mainToggleButton.style.transform = "rotate(-135deg)";
        optionButtonDesktop.style.height = "120px";
      }
    });
  }
  
  navigasiGeser.addEventListener("mousedown", () => {
    navigasiGeser.addEventListener("mousemove", onDrag);
  });

  navigasiGeser.addEventListener("mouseup", () => {
    navigasiGeser.removeEventListener("mousemove", onDrag);
  });

  navigasiGeser.addEventListener("mouseleave", () => {
    navigasiGeser.removeEventListener("mousemove", onDrag);
  });

  // Show full text when clicked
  function showFullText(element) {
    sistem.message.info(element.innerText);
  }
});