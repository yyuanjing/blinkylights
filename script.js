// global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [2, 2, 4, 5, 3, 2, 1, 2, 4, 5];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var winPattern = [1, 2, 3, 4, 5];
var strike = 0;
//var timer = 10;

// function decreaseTimer(){
//   timer-=1;
//   if(timer == 0){
//     clearInterval();
//     stopGame();
//     alert("Out of time! Game over.")
//   }
// }

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  strike = 0;
  //timer = 10;
  //clearInterval();
  for(let i=0; i<10; i++){
    pattern[i] = Math.floor(Math.random()*5 +1);
    console.log(pattern[i])
  }
    
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  //clearInterval();
  gamePlaying = false;
  clueHoldTime = 1000;
  cluePauseTime = 333;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  
  
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  // clearInterval();
  // timer = 10;
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clueHoldTime-=80;
  cluePauseTime-=30;
  //setInterval(decreaseTimer, 1000);
}

function playWinSequence(){
  let delay = nextClueWaitTime;
  for(let i=0; i<=4; i++){
    setTimeout(playSingleClue,delay,winPattern[i])
    delay += 200
    delay += 35;
  }
  setTimeout(stopGame, delay);
  setTimeout(alert, delay,"Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  if(pattern[guessCounter]==btn){
    if(guessCounter == progress){
      if(progress == pattern.length-1){
        winGame();
      }
      else{
        progress++;
        playClueSequence();
      }
    }
    else{
      guessCounter ++;
    }
  }
  else{
    strike ++;
    if(strike==3){
      loseGame(); 
    }
    else{
      guessCounter = 0;
      alert("Incorrect! Try again.");
    }
    
  }
}


// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 530
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  playWinSequence();
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)