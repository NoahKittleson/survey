$(document).ready(function() {
  $("form").submit(function(event) {

    var score = 0;

    var result = parseInt($("input:radio[name=transportation]:checked").val());
    score += result;
    result = parseInt($("input:radio[name=vacation]:checked").val());
    score += result;
    result = parseInt($("#mate").val());
    score += result;
    result = parseInt($("#food").val());
    score += result;

    // calculate results //
    if (score > 100) {
      alert("You are a raccoon...");
    }
    else if (score > 70) {
      alert("You are an Angler Fish. Congratulations!");
    }
    else if (score > 30) {
      alert("You are a Barn Owl.  Hoo rah!");
    }
    else {
      alert("You are a Koala.  Hip hip hooray!");
      alert(score);
    }


    //
    // if (result === "koala") {
    //   koalaFactor += 1;
    // }
    // if (result === "anglerFish") {
    //   anglerFishFactor += 1;
    // }
    // if (result === "barnOwl") {
    //   barnOwlFactor += 1;
    // }
    // if (result === "raccoon") {
    //   raccoonFactor += 1;
    // }

    // var streetInput = $("input#street").val();
    // var cityInput = $("input#city").val();
    // var stateInput = $("input#state").val();
    // var zipCodeInput = $("input#zipCode").val();
    // var nameInput = $("input#name").val();
    // var recipientInput = $("input#recipient").val();
    //
    //
    // $(".street").text(streetInput);
    // $(".city").text(cityInput.toLowerCase());
    // $(".state").text(stateInput);
    // $(".zipCode").text(zipCodeInput);
    // $(".name").text(nameInput);
    // $(".recipient").text(recipientInput);
    //
    // $("#letter").show();

    event.preventDefault();
  });
});
