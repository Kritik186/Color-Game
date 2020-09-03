var n=6;
var colors= generateRandomColors(n);
var squares= document.querySelectorAll(".square");
var colorPicked=pickColor();
var displayColor=document.querySelector("#ColorDisplay");
displayColor.textContent=colorPicked;
var displayContent=document.querySelector("#message");
var h= document.querySelector("h1");
var reset=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard")

easy.addEventListener("click",function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    n=3;
    colors=generateRandomColors(n);
    colorPicked=pickColor();
    displayColor.textContent=colorPicked;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
})
hard.addEventListener("click",function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    n=6;
    colors=generateRandomColors(n);
    colorPicked=pickColor();
    displayColor.textContent=colorPicked;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
            squares[i].style.display="block";
    }
    }
})

reset.addEventListener("click",function(){
    // generate new colors
    colors=generateRandomColors(n);
    // select new color
    colorPicked=pickColor();
    displayColor.textContent=colorPicked;
    displayContent.textContent="";
    reset.textContent="New Colors";
    // change the color of boxes
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=colors[i];
    }
    h.style.backgroundColor= "steelblue";
})

for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor=colors[i];

    squares[i].addEventListener("click",function(){
        //grab the color
        var colorSelected= this.style.backgroundColor;

        if(colorSelected===colorPicked){
            displayContent.textContent="Correct";
            correctColor(colorPicked);
            h.style.backgroundColor=colorPicked;
            reset.textContent="Play Again?";
        }
        else{
            this.style.backgroundColor="#232323";
            displayContent.textContent="Try Again";
        }
    })
}

function correctColor(color){
    for(var i=0; i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}

function pickColor (){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r= Math.floor(Math.random()*256);
    var g= Math.floor(Math.random()*256);
    var b= Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}