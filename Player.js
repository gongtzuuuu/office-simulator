class Player {
    constructor(){
        this.x = 50
        this.y = canvasHeight / 2 - 25;
        this.width = 50
        this.height = 50;
        this.img = "./source/player.png"
    }

    drawPlayer() {
        const playerImg = new Image();
        playerImg.src = this.img;

        context.beginPath()
        context.drawImage(playerImg, this.x, this.y, this.width, this.height);
        context.closePath()
    }

    movePlayer(keyCode) {
        context.clearRect(this.x, this.y, this.width, this.height);
        switch(keyCode){
            case 38: // Up Arrow ↑
                // Make sure player doesn't go off the office
                if(this.y > 50) this.y -= 20;
                break;
            case 40: // Down Arrow ↓
                // Make sure player doesn't go off the office
                if (this.y < canvasHeight - 100 ) this.y += 20
                break;
          }
    }
}