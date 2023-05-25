var voteCounts = {
    ironman: 0,
    captainamerica: 0,
    thor: 0
};

document.getElementById("ironman").addEventListener("click", function() {
    voteCounts.ironman++;
});
document.getElementById("captainamerica").addEventListener("click", function() {
    voteCounts.captainamerica++;
});
document.getElementById("thor").addEventListener("click", function() {
    voteCounts.thor++;
});

document.getElementById("vote-button").addEventListener("click", function() {
    var resultText = "Vote Result:<br><br>";
    resultText += "Iron Man: " + voteCounts.ironman + " votes<br>";
    resultText += "Captain America: " + voteCounts.captainamerica + " votes<br>";
    resultText += "Thor: " + voteCounts.thor + " votes";
    document.getElementById("result").innerHTML = resultText;
});
