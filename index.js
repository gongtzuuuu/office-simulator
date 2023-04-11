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

  const footer = document.querySelector('footer');
  const score = document.querySelector('#score');
  let scoreValue = 0;

  const gamePage = document.querySelector('#game');

  let playerImg = new Image();
  playerImg.src = "./source/player.png"

  let workImg = new Image();
  workImg.src = "./source/work.png"

   let sleepImg = new Image();
  sleepImg.src = "./source/sleep.png"

  /*let playerImg = new Image();
  playerImg.src = "./source/player.png"

  let playerImg = new Image();
  playerImg.src = "./source/player.png"

  let playerImg = new Image();
  playerImg.src = "./source/player.png" */

  const resultPage = document.querySelector("#result");
  const restartBtn = document.querySelector('#restartBtn');

  const winPage = document.querySelector("#win");
  const awardBtn = document.querySelector('#award');


  startPage.style.display = 'flex';

  let isMovingUp = false;
  let isMovingDown = false;
 
  let gameover = false;
  let animateId;

  /* ---- Start a game ---- */
  const startGame = () => {
    context.clearRect(0, 0, canvasWidth, canvasHeight)
    // Switch screen display
    startPage.style.display = 'none';
    gamePage.style.display = 'flex';
    footer.style.display = 'block';
    resultPage.style.display = 'none';
    let animateId = undefined;
    
    // Instantiate a new game
    currentGame = new Game();
    createPlayer();
    createBoxes();

    /*setTimeout(() => {
      currentPlayer.movePlayer(context, "ArrowUp")
      currentPlayer.drawPlayer(context);
    }, 2000)*/

    updateCanvas();
    
  }

  let playerY = canvasHeight / 2 - 25;

  /* ---- Draw a player ---- */
  function createPlayer() {
    // Instantiate a new player
    currentPlayer = new Player(50, playerY, 50, 50, playerImg);
    currentGame.player = currentPlayer;
    currentGame.player.drawPlayer(context);
  }

  startBtn.addEventListener('click', startGame)
  restartBtn.addEventListener('click', () => {
    gameover = false;
    scoreValue = 0
    startGame();
  });
    

  /* ---- Make random box ---- */
  function createBoxes(correct) {
    let currentBox;
    let boxX = canvasWidth - 50
    let boxY = Math.floor((Math.random()) * (canvasHeight - 100)) + 50;
    
    currentBox = new Box(boxX, boxY, 100, 50, 20, correct)
    currentGame.boxes.push(currentBox);
    
  }


  /* ---- Update the canvas ---- */
  const updateCanvas = () => {
    //console.log(animateId)
    //Change player's position by press ArrowUp and ArrowDown
    if (isMovingUp) currentPlayer.movePlayer(context, "ArrowUp", canvasHeight)
    if (isMovingDown) currentPlayer.movePlayer(context, "ArrowDown", canvasHeight)
    currentPlayer.drawPlayer(context);
    
    //let rightBoxesArr = [91, 151, 231, 361, 501, 641, 781, 801, 931, 1041]; 

    //Change boxes position by time

    if (animateId % 20 === 1) {

      // If answer correct
      currentGame.boxes.forEach(box => {
        box.moveBox(context);
        box.drawBox(context);
        checkGameStatus(box, currentPlayer);
        //checkCollision(box, currentPlayer);
        //console.log("correct")
        if (box.x < - 100) currentGame.boxes.shift();
      }) 
    } 


    // Update the score
    score.innerHTML = scoreValue;
    
    if (animateId % 200 === 0) {
      if (animateId === 200 || 
        animateId === 400 || 
        animateId === 1200 || 
        animateId === 1400 ||
        animateId === 1800 ||
        animateId === 2000 ||
        animateId === 2600 ||
        animateId === 3000) {
        createBoxes(true);
      } else {
        createBoxes(false);
      }
    }

    if (animateId === 3200) {
        gameover = true;
        alert(`Time's up!`)
        gamePage.style.display = 'none';
        footer.style.display = 'none';
        resultPage.style.display = "flex"
    }
    

    // Check if game over
    if (gameover) {
      cancelAnimationFrame(animateId)
    } else {
      animateId = requestAnimationFrame(updateCanvas);
    }
  } 

  /* ---- listen to keyup and keydown and change player's moving status ---- */
  document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') isMovingUp = true;
    if (event.key === 'ArrowDown') isMovingDown = true;
  })

  document.addEventListener('keyup', event => {
    if (event.key === 'ArrowUp') isMovingUp = false;
    if (event.key === 'ArrowDown') isMovingDown = false;
  })

  /* ---- When collision happens ---- */
  function checkGameStatus(box, currentPlayer) {
    if (box.correct) {
      if ( Math.abs(box.x - currentPlayer.x) < 50 && Math.abs(box.y - currentPlayer.y) < 50) {
        scoreValue += 1;
        if (scoreValue === 16) {
          gameover = true;
          gamePage.style.display = 'none';
          footer.style.display = 'none';
          winPage.style.display = "flex";
        }
      }
    } else {
      if (Math.abs(box.x - currentPlayer.x) < 50 && Math.abs(box.y - currentPlayer.y) < 50) {
        gameover = true;
        alert("Busted!")
        gamePage.style.display = 'none';
        footer.style.display = 'none';
        resultPage.style.display = "flex"
      }
    }
  }

  awardBtn.addEventListener(('click'), () => {
    alert("Kidding :P");
  } )

})