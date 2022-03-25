import FlappyBird from './game';
// import Level from './level';


const canvas = document.getElementById('bird-game');
let flappy = new FlappyBird(canvas);

flappy.restart();