class Box {
    constructor(ypos, speed) {
        this.xpos = canvasWidth - 100;
        this.ypos = ypos;
        this.width = 50;
        this.height = 50;
        
        this.speed = speed;
        this.dx = 1 *  this.speed;
    }

    drawBox(context){
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.beginPath();
        context.fillStyle = "black";
        context.fillRect(this.xpos, this.ypos, this.width, this.height);
        context.closePath();
    }
  
    boxMove() {
        // context.clearRect(0, 0, canvasWidth, canvasHeight)
        // this.drawBox(context);
        this.xpos -= this.dx;
    }

    checkCollision() {
        //   return (box.x - currentPlayer.x > 50 && currentPlayer.y - box.y > 50) ||
        //   (box.x - currentPlayer.x > 50 && box.y - currentPlayer.y > 50)

        //   /* return !((currentPlayer.x > box.x + box.width) || 
        //   (currentPlayer.y + currentPlayer.height < box.y) || 
        //   (currentPlayer.y - currentPlayer.height  > box.y + box.height)) */
        
        return ((box.xpos - currentPlayer.xpos > 50 && currentPlayer.ypos - box.ypos > 50) ||
        (currentPlayer.ypos + currentPlayer.height < box.ypos) ||
        (currentPlayer.ypos - currentPlayer.height  > box.ypos + box.height))
    }

  }