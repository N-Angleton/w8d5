import Bird from './bird';
import Level from './level';
export default class FlappyBird {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
  }

  animate() {
    this.nextLevel.animate(this.ctx);
    this.honeyB.drawBird(this.ctx);
  }

  restart() {
    this.nextLevel = new Level(this.dimensions);
    this.honeyB = new Bird(this.dimensions);
    this.animate();
  }
}
