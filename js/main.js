$(document).ready(function(){
  var turns = "x";
  //Array win check
  var turns = ["#","#","#","#","#","#","#","#","#"];
  // computer turn
  var computersTurn = "o";
  // tracks computer's turn
  gameOn = false;
  var count = 0;
  //change player's turn to X and computer's turn to O
  $("#x").on("click",function(){
    turn = "o";
    computersTurn = "x";
    $("#x").removeClass("btn");
    $("#o").addClass("btn");
    reset();
  });
  //change player's turn to O and computer's turn to X
  $("#o").on("click",function(){
   turn = "x";
   computersTurn = "o";
   $("#o").removeClass("btn");
   $("#x").addClass("btn");
   reset();
  });
  //computerTurn function
  function computerTurn(){
    var taken = false;
    while(taken === false && count !== 5){
      //generate computer random turn
      var computersMove = (Math.random() * 10).toFixed();
      var move = $("#" + computersMove).text();
      if(move === "#"){
        //set the text
        $("#" + computersMove).text(computersTurn);
        taken = true;
        turns[computersMove] = computersTurn;
      }
    }
  }
  //function player turn
  function playerTurn(turn, id){
    var spotTaken = $("#" + id).text();
    if(spotTaken === "#"){
      count++;
      turns[id] = turn;
      $("#" + id).text(turn);
      //wincondition
      winCondition(turns, turn);
      if(gameOn === false){
        computerTurn();
        winCondition(turns, computersTurn);
      }
    }
  }
  //function winCondition
  function winCondition(turnArray,currentTurn){
    if(turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn){
      gameOn = true;
      reset();
      alert("player " +currentTurn+ " wins!");
    }else if(turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5] == currentTurn){
      gameOn = true;
      reset();
      alert("player " +currentTurn+ " wins!");
    }else if(turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8] == currentTurn){
      gameOn = true;
      reset();
      alert("player " +currentTurn+ " wins!");
    }else if(turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6] == currentTurn){
      gameOn = true;
      reset();
      alert("Player " +currentTurn+ " wins!");
    }else if(turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7] == currentTurn){
       gameOn = true;
       reset();
       alert("Player " +currentTurn+ " wins!");
    }else if(turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8] == currentTurn){
      gameOn = true;
      reset();
      alert("Player " +currentTurn+ " wins !");
    }else if(turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8] == currentTurn){
       gameOn = true;
       reset();
       alert("Player " +currentTurn+ " wins!");
    }else if(turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[6] == currentTurn){
      gameOn = true;
      reset();
      alert("PLayer " +currentTurn+ " wins!");
    }else{
      gameOn = false;
    }
  }
  //click on each  button
  $(".cell").on("click",function(){
     //catching each id
     var slot = $(this).attr('id');
     playerTurn(turn, slot);
  });
  //function reset
  function reset(){
    turns = ["#","#","#","#","#","#","#","#","#"];
    count = 0;
    $(".cell").text("#");
    gameOn = false;
  }
});
