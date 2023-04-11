class Player {
    constructor(x, y, width, height, img){
        this.x = x;
        this.y = y;
        this.width = width
        this.height = height;
        this.img = img;
    }

    drawPlayer(context) {
        context.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    movePlayer(context, key, canvasHeight) {
        context.clearRect(this.x, this.y, this.width, this.height);
        switch(key){
            case "ArrowUp":
                // Make sure player doesn't go off the office
                if(this.y > 50) this.y -= 10;
                break;
            case "ArrowDown":
                // Make sure player doesn't go off the office
                if (this.y < canvasHeight - 100 ) this.y += 10
                break;
          }
          // this.drawPlayer(context);
    }
}