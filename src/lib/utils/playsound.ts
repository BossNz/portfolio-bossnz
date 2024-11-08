import { scaleFactor } from "$lib/stores/shares";

let audioElement;
let analyser: AnalyserNode;
let bufferLength: number;
let dataArray: Uint8Array;
let audioContext: AudioContext;

function playSound() {
  audioContext = new window.AudioContext();

  audioElement = new Audio("/skibidi.mp3");
  const source = audioContext.createMediaElementSource(audioElement);

  analyser = audioContext.createAnalyser();
  analyser.fftSize = 256;
  bufferLength = analyser.frequencyBinCount;
  dataArray = new Uint8Array(bufferLength);

  source.connect(analyser);
  analyser.connect(audioContext.destination);

  audioElement.play();
  update();
}

function update() {
  analyser.getByteFrequencyData(dataArray);
  let sum = 0;
  for (let i = 0; i < bufferLength; i++) {
    sum += dataArray[i];
  }
  let average = sum / bufferLength;
  scaleFactor.set(1 + average / 128);
  requestAnimationFrame(update);
}

export { playSound };
