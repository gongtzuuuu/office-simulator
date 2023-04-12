class Box {
    constructor(x, y, width, height, speed, correct, text) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.correct = correct;
        this.text = text;
    }

    drawCorrectBox(context){
        context.beginPath();

        context.lineWidth = 2;
        context.strokeStyle = "black";
        context.fillStyle = "#93C8BA";
        context.fillRect(this.x, this.y, this.width, this.height);

        context.fillStyle = "black";
        context.textAlign = "center"; 
        context.textBaseline = "middle";
        context.font = "16px Arial";
        context.fillText(this.text ,this.x+(this.width/2), this.y+(this.height/2));
        
        context.closePath(); 
    }

    drawWrongBox(context){
        context.beginPath();

        context.lineWidth = 2;
        context.strokeStyle = "black";
        context.fillStyle = "#E4BABB";
        context.fillRect(this.x, this.y, this.width, this.height);

        context.fillStyle = "black";
        context.textAlign="center"; 
        context.textBaseline = "middle";
        context.font="16px Arial";
        context.fillText(this.text ,this.x+(this.width/2), this.y+(this.height/2));

        context.closePath(); 
    }
  
    moveBox(context) {
        // context.clearRect(0, 0, canvasWidth, canvasHeight)
        // this.drawBox(context);
        context.clearRect(this.x, this.y, this.width + 1, this.height);
        this.x = this.x - this.speed;
    }

    drawBox(context) {
        if (this.correct === true) {
            this.drawCorrectBox(context);
        } else {
            this.drawWrongBox(context);
        }
    }

}