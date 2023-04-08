class Box {
    constructor(x, y, width, height) {
        this.xpos = x;
        this.ypos = y;
        this.width = width;
        this.height = height;
        
        /* this.speed = speed;
        this.dx = 1 *  this.speed; */
    }
  
    drawBox(contxet){
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        context.beginPath();
        context.fillStyle = "black";
        context.fillRect(this.x, this.y, this.width, this.height);
        context.closePath();
    }
  
    /* updatePosition() {
        context.clearRect(0, 0, canvasWidth, canvasHeight)
        this.drawBox(context);
        this.xpos -= this.dx;
    } */
  }