document.body.style = "background-color: var(--bs-dark);transition: 0.5s;";
const sun =
  "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon =
  "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";

var theme = "dark";

const root = document.querySelector(":root");
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");
container.addEventListener("click", setTheme);
function setTheme() {
  switch (theme) {
    case "dark":
      setLight();
      theme = "light";
      break;
    case "light":
      setDark();
      theme = "dark";
      break;
  }
}
function setLight() {
  root.style.setProperty(
    "--bs-dark",
    "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
  );
  container.classList.remove("shadow-dark");
  setTimeout(() => {
    container.classList.add("shadow-light");
    themeIcon.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  document.querySelector(".title").style.color = "black";
  document.querySelector(".subtitle").style.color = "black";
  document.querySelector(".logoOne").style.color = "black";
  document.querySelector(".logoTwo").style.color = "black";
  document.querySelector(".logoThree").style.color = "black";
  document.querySelector(".logoFour").style.color = "black";
  themeIcon.src = sun;

  VANTA.FOG({
    el: "body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    highlightColor: 0xffffff,
    midtoneColor: 0x5300cf,
    lowlightColor: 0x1000ff,
    baseColor: 0xffffff,
  });
}
function setDark() {
  root.style.setProperty("--bs-dark", "#212529");
  container.classList.remove("shadow-light");
  setTimeout(() => {
    container.classList.add("shadow-dark");
    themeIcon.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  themeIcon.src = moon;
  document.querySelector(".title").style.color = "white";
  document.querySelector(".subtitle").style.color = "white";
  document.querySelector(".logoOne").style.color = "white";
  document.querySelector(".logoTwo").style.color = "white";
  document.querySelector(".logoThree").style.color = "white";
  document.querySelector(".logoFour").style.color = "white";
  VANTA.FOG({
    el: "body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    highlightColor: 0x4e00ff,
    midtoneColor: 0x720303,
    lowlightColor: 0xed,
    baseColor: 0x0,
    blurFactor: 0.65,
  });
}
