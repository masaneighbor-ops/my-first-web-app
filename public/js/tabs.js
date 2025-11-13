// ここからコードを書いてください
export function setupTabs() {
  const homeLink = document.querySelector('[data-tab="home"]');
  const converterLink = document.querySelector('[data-tab="converter"]');
  const homeSection = document.getElementById("home");
  const converterSection = document.getElementById("converter");

  homeLink.addEventListener("click", function (event) {
    event.preventDefault();
    homeSection.classList.remove("hidden");
    converterSection.classList.add("hidden");
  });

  converterLink.addEventListener("click", function (event) {
    event.preventDefault();
    converterSection.classList.remove("hidden");
    homeSection.classList.add("hidden");
  });
}
