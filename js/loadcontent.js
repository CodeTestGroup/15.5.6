document.addEventListener('DOMContentLoaded', function() {
  const boxes = document.querySelectorAll('.box-link');
  boxes.forEach(box => {
    box.addEventListener('click', function(event) {
      event.preventDefault();
      const gameUrl = this.getAttribute('data-game');
      loadGame(gameUrl);
    });
  });

  // The missing closing brace was added here

  const fancyButtons = document.querySelectorAll('.fancy-button');
  fancyButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      const gameUrl = this.getAttribute('data-game');
      loadGame(gameUrl);
    });
  });

  function loadGame(url) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        document.getElementById('gameContent').innerHTML = html; // Load game content
        document.getElementById('footer').style.display = 'flex'; // Display the footer
      })
      .catch(error => console.error('Error:', error));
  }
});
