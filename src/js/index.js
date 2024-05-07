import '../css/index.css';
import '../img/logo.png';
import '../img/coding.svg';

var cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
  card.addEventListener('click', function() {
    console.log('Je hebt op card ' + this.id + ' geklikt');
  });
});