var adjOneArray = [];
var adjTwoArray = [];
var nounArray = [];
var click = 0;

function getData(data){
    $.ajax({
        url: "/data",
        success: function(data){
            $.each(data, function(){
                adjOneArray.push(this.adj1);
                adjTwoArray.push(this.adj2);
                nounArray.push(this.noun);
            });
            getRandomValue(adjOneArray);
            getRandomValue(adjTwoArray);
            getRandomValue(nounArray);
            console.log("outside each loop", adjOneArray[getRandomValue(adjOneArray)]);
            console.log("outside each loop", adjTwoArray[getRandomValue(adjTwoArray)]);
            console.log("outside each loop", nounArray[getRandomValue(nounArray)]);
        }
    });
}

function getRandomValue(array){
    var random = Math.floor(Math.random()* array.length);
    return random;
}

function appendWords(){
    $('#program-description').append('<p>' + adjOneArray[getRandomValue(adjOneArray)] + " " + adjTwoArray[getRandomValue(adjTwoArray)] + " " + nounArray[getRandomValue(nounArray)] + '</p>');
}

function removeWords(){
    $('p').first().remove();
}








$(document).ready(function(){
    getData();
    $('#randomizer').on('click', function(){
        appendWords();
        click++;
        if(click > 1){
            removeWords();
        }
    });
});