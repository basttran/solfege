

function playNote(frequency) {
  console.log(frequency);
  var context = new AudioContext();
  var o = context.createOscillator();
  o.frequency.setTargetAtTime(frequency, context.currentTime, 0);
  o.connect(context.destination);
  o.start(0);
};
