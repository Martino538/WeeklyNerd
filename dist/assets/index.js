function movieDetailUrl() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(function(card) {
    card.addEventListener("click", function() {
      window.location.href = "nerd_detail/" + this.id;
    });
  });
}
function sendToHome() {
  const logo = document.querySelectorAll(".home-btn");
  logo.forEach((element) => {
    element.addEventListener("click", () => {
      window.location.href = "/";
    });
  });
}
sendToHome();
movieDetailUrl();
