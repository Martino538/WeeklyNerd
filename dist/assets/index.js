const cards = document.querySelectorAll(".div");
cards.forEach((card) => {
  card.addEventListener("click", function() {
    console.log("Je hebt op een card geklikt");
  });
});
