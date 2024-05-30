document.addEventListener("DOMContentLoaded",function(){
    var button = document.getElementById("colourButton");
    button.addEventListener("click", function() {
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        button.style.backgroundColor = randomColor;
    });
});