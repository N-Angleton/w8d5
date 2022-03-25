export default class Bird {

  constructor(dimensions) {
    this.velocity = 0;
    this.dimensions = dimensions;
    this.position = [160, 320];
  }

  drawBird(ctx){
    // debugger

  
    var img = new Image();
    img.src = "./hb.png";
    ctx.drawImage(img, 100, 100, 50, 50);
    // debugger
  }

}