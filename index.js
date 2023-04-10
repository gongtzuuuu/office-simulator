window.addEventListener('load', () => {

  let currentGame;
  let currentPlayer;

  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");

  let canvasWidth = window.innerWidth * 0.8;
  let canvasHeight = window.innerHeight * 0.8;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  const startPage = document.querySelector("#start");
  const startBtn = document.querySelector('#startBtn');

  const gamePage = document.querySelector('#game');

  const resultPage = document.querySelector("#result");
  const restartBtn = document.querySelector('#restartBtn');

  startPage.style.display = 'flex';

  let isPlayerGoUp = false;
  let isPlayerGoDown = false;
 
  let gameover = false;
  let animateId;

  let boxesFrequency = 0;
  let boxesArray = [];
  let boxesStillInScreen = [];
  let randomBoxY = Math.floor(Math.random() * (canvasHeight - 50) + 50);

  /* ---- Start a game ---- */
  const startGame = () => {
    // Switch screen display
    startPage.style.display = 'none';
    gamePage.style.display = 'flex';
    
    // Instantiate a new game
    currentGame = new Game;
    drawPlayer();
  }

  /* ---- Draw a player ---- */
  const drawPlayer = () => {
    // Instantiate a new player
    currentPlayer = new Player;
    currentGame.player = currentPlayer;
    currentGame.player.drawPlayer();
  }

  startBtn.addEventListener('click', () => startGame())

  /* ---- Update the canvas ---- */
  const updateCanvas = () => {

    boxesFrequency ++;

    if (boxesFrequency % 200 === 1) boxesArray.push(new Box(randomBoxY));
    // console.log(currentGame.boxes);

    requestAnimationFrame(updateCanvas);
  }

  /* ---- When collision happens ---- */
  boxesStillInScreen.forEach((eachBox) => {
    if (eachBox.checkCollicion) {
      gameover = true;
      alert("Collision detected!");
    }
  })
  

  /* ---- Update the status of player's move ---- */ 
  document.addEventListener('keydown', event => {
    if(currentGame.player.movePlayer(event.key) === "ArrowUp") isPlayerGoUp = true;
    if(currentGame.player.movePlayer(event.key) === "ArrowDown") isPlayerGoDown = true;
  })

  document.addEventListener('keypress', event => {
    if(currentGame.player.movePlayer(event.key) === "ArrowUp") isPlayerGoUp = true;
    if(currentGame.player.movePlayer(event.key) === "ArrowDown") isPlayerGoDown = true;
  })

  document.addEventListener('keyup', event => {
    if(currentGame.player.movePlayer(event.key) === "ArrowUp") isPlayerGoUp = false;
    if(currentGame.player.movePlayer(event.key) === "ArrowDown") isPlayerGoDown = false;
  })
  //console.log(isPlayerGoUp, isPlayerGoDown)


})

  


/* ---- 2. No collision happens ---- */
// function detectNoCollision(box) {
//   return (box.x - currentPlayer.x > 50 && currentPlayer.y - box.y > 50) ||
//   (box.x - currentPlayer.x > 50 && box.y - currentPlayer.y > 50)

//   /* return !((currentPlayer.x > box.x + box.width) || 
//   (currentPlayer.y + currentPlayer.height < box.y) || 
//   (currentPlayer.y - currentPlayer.height  > box.y + box.height)) */
// }


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