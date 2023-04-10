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
  function drawPlayer() {
    // Instantiate a new player
    let playerY = canvasHeight / 2 - 25;
    currentPlayer = new Player(50, playerY, 50, 50);
    currentGame.player = currentPlayer;
    currentGame.player.drawPlayer(context);
  }

  startBtn.addEventListener('click', startGame)

  /* ---- Update the canvas ---- */
  const updateCanvas = () => {
    let boxX = canvasWidth - 50;
    let boxY = Math.floor(Math.random() * (canvasHeight - 50) + 50);


    boxesFrequency ++;

    if (boxesFrequency % 200 === 1) boxesArray.push(new Box(boxX, boxY, 50, 50));
    // xpos, ypos, width, height
    // console.log(currentGame.boxes);

    requestAnimationFrame(updateCanvas);
  }

  /* ---- When collision happens ---- */
  function checkCollision(box, currentPlayer) {
    return ((box.xpos - currentPlayer.xpos > 50 && currentPlayer.ypos - box.ypos > 50) ||
    (currentPlayer.ypos + currentPlayer.height < box.ypos) ||
    (currentPlayer.ypos - currentPlayer.height  > box.ypos + box.height))
  }

  boxesStillInScreen.forEach((eachBox) => {
    if (checkCollision(eachBox, currentPlayer)) {
      alert("Collision detected!");
      gameover = true;
      startPage.style.display = 'none';
      gamePage.style.display = 'none';
      resultPage.style.display = "flex"
    }
  })

  restartBtn.addEventListener('click', startGame)
  

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