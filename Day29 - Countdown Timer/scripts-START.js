let countdown;

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLEft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //check if we should stop it!
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    //display it
    displayTimeLEft(secondsLeft);
  }, 1000);
}

function displayTimeLEft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  console.log({minutes, remainderSeconds});
}
