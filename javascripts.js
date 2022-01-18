$(document).ready(function () {
  let secretNumber = Math.trunc(Math.random() * 20 + 1);
  let score = 20;
  let highscore = 0;

  $("#check").on("click", function () {
    const guess = parseInt($(".guess").val());

    console.log(guess, typeof guess);
    //When there is no input
    if (!guess) {
      $(".message").text(`💀 Not a number`);
      // When player wins
    } else if (guess === secretNumber) {
      $(".message").text(`✨ Correct Number!`);
      $("body").css({ "background-color": "#60b347" });
      // highscore stays when player clicks try again button
      $(".number").text(secretNumber);
      if (score > highscore) {
        highscore = score;
        $(".highscore").text(highscore);
      }

      // when input is a high number
    } else if (guess > secretNumber) {
      if (score > 0) {
        $(".message").text(`❌ Number too High`);
        score--;
        $(".score").text(score);
      } else {
        $(".message").text(`🚨 Game Over 🚨`);
        $(".score").text(0);
      }
      // When input is a lower number
    } else if (guess < secretNumber) {
      if (score > 0) {
        $(".message").text(`❌ Number is too Low`);
        score--;
        $(".score").text(score);
        //when score is less than 0
      } else {
        $(".message").text(`🚨 Game Over 🚨`);
        $(".score").text(0);
      }
    }
    // press enter to check number
    // $(".check").keydown(function (event) {
    //  if (event == "Enter") {
    //  $(".guess").val();
    //  }
    //  });
  });
  // press try again button
  $("#again").on("click", function () {
    score = 20;

    let secretNumber = Math.trunc(Math.random() * 20 + 1);

    $(".message").html(`<i class="fas fa-flag-checkered"></i>Start guessing`);
    $("body").css({ "background-color": "#010107" });
    $(".number").css({ width: "240px" });
    $(".number").css({ height: "200px" });
    $(".number").text("?");
    $(".guess").val("");
    $(".score").text(score);
    $(".highscore").text(highscore);
  });
});
