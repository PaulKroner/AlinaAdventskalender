document.addEventListener('DOMContentLoaded', () => {
  const door = document.getElementById('door16');

  door.addEventListener('click', () => {
    door.classList.toggle('open');
  });

  // Add snowflakes dynamically
  const numberOfSnowflakes = 50;
  for (let i = 0; i < numberOfSnowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';

    // Randomize properties
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.animationDuration = (Math.random() * 5 + 5) + 's, ' + (Math.random() * 3 + 2) + 's'; // Fall 5-10s (slower), Shake 2-5s
    snowflake.style.animationDelay = (Math.random() * 10) + 's, ' + (Math.random() * 10) + 's'; // Start 0-10s (positive delay, starts from top)

    document.body.appendChild(snowflake);
  }
});
