var cards = document.querySelectorAll(".card");
cards.forEach(function(card) {
  card.addEventListener("click", function() {
    console.log("Je hebt op card " + this.id + " geklikt");
  });
});
