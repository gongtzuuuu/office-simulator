class Box {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        
        this.speed = speed;
        this.dx = 1 *  this.speed;
    }

    drawBox(context){
        context.fillStyle = "black";
        context.fillRect(this.xpos, this.ypos, this.width, this.height);
    }
  
    boxMove() {
        // context.clearRect(0, 0, canvasWidth, canvasHeight)
        // this.drawBox(context);
        this.xpos -= this.dx;
  }
}