const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let canvasWidth = window.innerWidth * 0.8;
let canvasHeight = window.innerHeight * 0.8;

let startPositionX = canvasWidth - 100;
let startPositionY = canvasHeight / 2 - 25;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

let player = context.fillRect(50, startPositionY, 50, 50);

class Box {
    constructor(xpos, ypos, width, height, speed) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.width = width;
        this.height = height;
        this.speed = speed;

        this.dx = 1 *  this.speed;
    }

    drawBox(context){
        context.fillRect(this.xpos, this.ypos, this.width, this.height, this.speed);
    }

    updatePosition() {
        context.clearRect(0, 0, canvasWidth, canvasHeight)
        this.drawBox(context);
        this.xpos -= this.dx;
    }
}

let randomY = Math.floor(Math.random() * canvasHeight);

let myBox = new Box(startPositionX, randomY, 50, 50, 2);
myBox.drawBox(context);

let updateBox = () => {
    requestAnimationFrame(updateBox); // Update 60 times per seconds
    myBox.updatePosition();
}

updateBox();


/* let boxes = [];
boxes.push({x:0, y:0, width: 200, height: 50, color: "yellow"});
boxes.push({x:0, y:0, width: 100, height: 10, color: "green"});

let drawBox = (context) => {
    context.clearRect(0, 0, canvasWidth, canvasHeight)
    boxes.forEach((box) => {
        context.beginPath();
        context.fillStyle = shape.color;
        context.fillRect(shape.x, shape.y, shape.width, shape.height)
        context.closePath();
    })
}

drawBox(context); */
    

/* class Box {
    constructor(xpos, ypos, width, height, color, text, speed) {
      this.xpos = xpos;
      this.ypos = ypos;
      this.width = width;
      this.height = height;
      this.color = color;
      // Add some texts in the boxes
      this.text = text;
      // Change an amount of pixels in a period of time
      this.speed = speed;
      // Make changes in x and y in a period of time
      this.dx = 1 * this.speed;
    }
  
    // Create a function that renders the boxes
    draw(context) {
      // Begin drawing
      context.beginPath();
  
      // Manipulate some texts in the boxes
      context.strokeStyle = this.color
      context.textAlign = "center"
      context.textBaseline = "middle"
      context.font = "20px Arial"
      context.fillText(this.text, this.xpos, this.ypos)
      // context.strokeText(this.text, this.xpos, this.ypos)
      // Should put .fillText or .strokeText in the end
  
      // Manipulate the style of the boxes
      context.lineWidth = "1"
      //context.strokeStyle = "grey";
      context.fillText('grey');
      context.fillRect(canvasWidth + 10, this.ypos, this.width, this.height)
      context.stroke();
  
      // End up drawing
      context.closePath();
    }
  
    // Create a function that changes the poisition of circle(s)
    updatePosition() {
      // Clean the old ones, the syntax must go in the beginning
      context.clearRect(0, 0, canvasWidth, canvasHeight)
  
      // Prevent the circle(s) get out of the frame
      if(this.xpos < canvasWidth) {
        this.dx -= this.speed;
      }
  
      // Draw a new box
      this.draw(context);
      this.xpos += this.dx;
    }
  }

let randomY = Math.random() * canvasHeight;

// constructor(xpos, ypos, width, height, color, text, speed)
let myBox = new Box(canvasWidth, randomY, 50, 50, "black", "Hello", 1);
myBox.draw(context);

let generateBox = (box) => box.draw(context);

let updateBox = () => {
  requestAnimationFrame(generateBox);
  myBox.updatePosition();
}

updateBox();
*/