import '../css/index.css';
import '../img/logo.png';
import '../img/coding.svg';

const cards = document.querySelectorAll('.div');
cards.forEach((card) => {
  card.addEventListener('click', function() {
    // Log dat er op de card is geklikt
    console.log('Je hebt op een card geklikt');
  });
});