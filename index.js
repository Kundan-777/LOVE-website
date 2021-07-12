function myFunction(){ 
    var loveScore = Math.random()*100;
    loveScore = Math.floor(loveScore) + 1;

    var text = "Your love💖score is "+ loveScore + "%";


    document.getElementById("number").innerHTML = text;
}