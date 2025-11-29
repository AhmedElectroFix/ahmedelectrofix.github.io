const toggle = document.getElementById('lang-toggle');
let isAr = false;

toggle.addEventListener("click", () => {
  isAr = !isAr;
  document.documentElement.dir = isAr ? "rtl" : "ltr";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = isAr ? el.getAttribute("data-ar") : el.getAttribute("data-en");
  });

  toggle.textContent = isAr ? "EN" : "العربية";
});
