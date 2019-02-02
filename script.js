const buttons = document.getElementsByClassName('button');

const loops = document.getElementsByTagName('audio');

let isPlaying = [false, false, false, false];

for (let i = 0; i < buttons.length; i++){

  buttons[i].addEventListener('click', function() {
    console.log("clicked!");
    buttons[i].classList.toggle('pushed');
    if (isPlaying[i] === true) {
      loops[i].pause();
      loops[i].load();
    } else {
      loops[i].play();
    }
    isPlaying[i] = !isPlaying[i];
  });
}
