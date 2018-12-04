$( document ).ready(function(){

var wins = 0;
var losses = 0;
var score = 0;
var randomNum = 0;
var crystalValue = 0;
var images = $(".images");
//console.log(images);
//line above makes array of the 4 images

function reset () {
    console.log(reset);
    randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
// //line above makes random # between 19-120
    $('.col6').text(randomNum);

    score = 0;
    $("#total-score").text(0);
//line above is resetting the score to 0 on the html 

    for (var i = 0; i < images.length; i++){ 
         crystalValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
//line above is adding a value to the images in the array
         $('#img' + i).attr('value', crystalValue);
    } 
}


$('.img').on('click', function(){
//line above allows user to click on a img on the page
       var crystal = $(this).attr("value");    
//line above adds different random point values to each crystal between 1-12
       console.log(crystal);

        var d = parseInt(crystal);
        score=score + d; 
//line above adds the next img clicked to the score       

        $("#total-score").text(score);
        console.log("player score= " + score);    
//line above is adding the players score to the box in the html to show it

    if (score === randomNum){
        wins++;
        reset();
        $("#wins").text("Wins: " + wins);
//line above adds to the html id tag
    }
    else if (score > randomNum){
        losses++;
        reset();
        $("#losses").text("Loses:" + losses);
    }
    })

reset ();
});



