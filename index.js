let currentGame;
let currentPlayer;
//let firstBox = {x: 100, y: 100, width: 50, 50};

const startPage = document.getElementById("start");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.style.display = 'none';

let canvasWidth = window.innerWidth * 0.8;
let canvasHeight = window.innerHeight * 0.8;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

document.getElementById('startBtn').onclick = () => startGame();

document.onkeydown = (event) => {
  let whereToGo = event.keyCode;
  currentGame.player.movePlayer(whereToGo);
}

document.onkeypress = (event) => {
  let whereToGo = event.keyCode;
  currentGame.player.movePlayer(whereToGo);
}


/* ---- 1. Initiate a game ---- */
function startGame() {
  startPage.style.display = 'none';
  canvas.style.display = 'flex';

  // Instantiate a new game of the game class
  currentGame = new Game;
  // Instantiate a new player
  currentPlayer = new Player;
  currentGame.player = currentPlayer;
  currentGame.player.drawPlayer();
  // Update canvas
  updateCanvas(); 
}


/* ---- 2. No collision happens ---- */
// function detectNoCollision(box) {
//   return (box.x - currentPlayer.x > 50 && currentPlayer.y - box.y > 50) ||
//   (box.x - currentPlayer.x > 50 && box.y - currentPlayer.y > 50)

//   /* return !((currentPlayer.x > box.x + box.width) || 
//   (currentPlayer.y + currentPlayer.height < box.y) || 
//   (currentPlayer.y - currentPlayer.height  > box.y + box.height)) */
// }


/* ---- 3. Update the canvas ---- */
let boxesFrequency = 0;
function updateCanvas() {

  context.clearRect(0, 0, canvasWidth, canvasHeight);
  currentGame.player.drawPlayer();
  
  boxesFrequency ++;
  if (boxesFrequency % 200 === 1) {
    //Draw an box
    let randomBoxX = canvasWidth - 100;
    let randomBoxY = Math.floor(Math.random() * canvasHeight) - 50;
    let boxWidth = 50;
    let boxHeight = 50;
    
    let newBox = new Box(randomBoxX, randomBoxY, boxWidth, boxHeight);
    currentGame.boxes.push(newBox);
    newBox.drawBox(context);
    // console.log(currentGame.boxes);  
  }


  /* ---- 4. If the collision ---- */
  // for(let i = 0; i < currentGame.boxes.length; i++) {
  //   currentGame.boxes[i].x -= 1;
  //   currentGame.boxes[i].drawBox();

  //   if (detectNoCollision(currentGame.boxes[i])) {
  //       alert('BOOOOOMM!')
  //       boxesFrequency = 0;
  //       // currentGame.score = 0;
  //       // document.getElementById('score').innerHTML = 0;
  //       currentGame.boxes = [];
  //       // document.getElementById('game-board').style.display = 'none';
  //   }

  //   // Obstacle moved outside the canvas
  //   if (currentGame.boxes.length > 0) {
  //       currentGame.boxes.splice(i, 1);
  //       // currentGame.score++;
  //       // document.getElementById('score').innerHTML = currentGame.score;
  //   }
  // }

  requestAnimationFrame(updateCanvas);
}