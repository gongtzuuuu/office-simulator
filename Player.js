class Player {
    constructor(){
        this.xpos = 50
        this.ypos = canvasHeight / 2 - 25;
        this.width = 50
        this.height = 50;
        this.img = "./source/player.png"
    }

    drawPlayer(context) {
        const playerImg = new Image();
        playerImg.src = this.img;

        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.beginPath()
        context.drawImage(playerImg, this.xpos, this.ypos, this.width, this.height);
        context.closePath()
    }

    movePlayer(key) {
        context.clearRect(this.xpos, this.ypos, this.width, this.height);
        switch(key){
            case "ArrowUp":
                // Make sure player doesn't go off the office
                if(this.ypos > 50) this.ypos -= 20;
                break;
            case "ArrowDown":
                // Make sure player doesn't go off the office
                if (this.ypos < canvasHeight - 100 ) this.ypos += 20
                break;
          }
    }
}