// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

  var currentPlayer = "X";
  var firstPlayer = "X";
  var secondPlayer = "O";



  function winConditions() {

//For Vertical Wins
    if (($('#box1').hasClass('X') && $('#box2').hasClass('X')) && $('#box3').hasClass('X')) {
      alert('X wins!');
    } else if (($('#box1').hasClass('O') && $('#box2').hasClass('O')) && $('#box3').hasClass('O')) {
      alert('O wins!');
    } else if (($('#box4').hasClass('X') && $('#box5').hasClass('X')) && $('#box6').hasClass('X')) {
      alert('X wins!');
    } else if (($('#box4').hasClass('O') && $('#box5').hasClass('O')) && $('#box6').hasClass('O')) {
      alert('O wins!');
    } else if (($('#box7').hasClass('X') && $('#box8').hasClass('X')) && $('#box9').hasClass('X')) {
      alert('X wins!');
    } else if (($('#box7').hasClass('O') && $('#box8').hasClass('O')) && $('#box9').hasClass('O')) {
      alert('O wins!');
//For Horizonal Wins
    } else if (($('#box1').hasClass('X') && $('#box4').hasClass('X')) && $('#box7').hasClass('X')) {
      alert('X wins!');
    } else if (($('#box1').hasClass('O') && $('#box4').hasClass('O')) && $('#box7').hasClass('O')) {
      alert('O wins!');
    } else if (($('#box2').hasClass('X') && $('#box5').hasClass('X')) && $('#box8').hasClass('X')) {
      alert('X wins!');
    } else if (($('#box2').hasClass('O') && $('#box5').hasClass('O')) && $('#box8').hasClass('O')) {
      alert('O wins!');
    } else if (($('#box3').hasClass('X') && $('#box6').hasClass('X')) && $('#box9').hasClass('X')) {
      alert('X wins!');
    } else if (($('#box3').hasClass('O') && $('#box6').hasClass('O')) && $('#box9').hasClass('O')) {
      alert('O wins!');
//Diagonal Wins
    } else if (($('#box1').hasClass('X') && $('#box5').hasClass('X')) && $('#box9').hasClass('X')) {
      alert('X wins!');
    } else if (($('#box1').hasClass('O') && $('#box5').hasClass('O')) && $('#box9').hasClass('O')) {
      alert('O wins!');
    } else if (($('#box3').hasClass('X') && $('#box5').hasClass('X')) && $('#box7').hasClass('X')) {
      alert('X wins!');
    } else if (($('#box3').hasClass('O') && $('#box5').hasClass('O')) && $('#box7').hasClass('O')) {
      alert('O wins!');
    }
  }

//Click Function
  $('.col-md-4').click(function() {
    console.log(currentPlayer);
//Box is claimed
    if ($(this).hasClass('X') || $(this).hasClass('O')) {
      alert("This tile is already filled!");
    } else {
      $(this).addClass(currentPlayer);
      switchPlayer();
      winConditions();
    }
    //Switching Player
      function switchPlayer() {
        if (currentPlayer === "X") {
          currentPlayer = secondPlayer;
        } else {
          currentPlayer = firstPlayer;
        }
      }


  });
//Reset moves
  $('.reset').click(function() {
    $('.col-md-4').removeClass("X");
    $('.col-md-4').removeClass("O");
  });


});
