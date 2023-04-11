class Box {
    constructor(x, y, width, height, speed, correct) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.correct = correct;
        //this.text = text;
    }

    drawCorrectBox(context){
        context.fillStyle = "#E4BABB"
        //context.textAlign = "center"
        //context.textBaseline = "middle"
        //context.font = "20px Arial"
        //context.fillText(this.text, this.x, this.y)
        // context.strokeStyle = "#8C271E 1px solid";
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    drawWrongBox(context){
        context.fillStyle = "#eee"
        //context.textAlign = "center"
        //context.textBaseline = "middle"
        //context.font = "20px Arial"
        //context.fillText(this.text, this.x, this.y)
        //context.strokeStyle = "#8C271E 1px solid";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
  
    moveBox(context) {
        // context.clearRect(0, 0, canvasWidth, canvasHeight)
        // this.drawBox(context);
        context.clearRect(this.x, this.y, this.width, this.height);
        this.x = this.x - this.speed;
    }

    /* setCorrect(correct) {
        this.correct = correct;
    */

    drawBox(context) {
        if (this.correct === true) {
            this.drawCorrectBox(context);
        } else {
            this.drawWrongBox(context);
        }
    }

}