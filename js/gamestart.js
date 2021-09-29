var canvas = document.createElement("canvas");
var contexto = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

canvas.style = "position:absolute; left: 50%; margin-left: -250px; top: 50%; margin-top: -200px; border-style: solid;";

var bgReady = false;
var bgImage = new Image();
bgImage.onload = function(){
    bgReady = true;
}
bgImage.src = "img/game/background.png";

var heroReady = false;
var heroImage = new Image();
heroImage.onload = function(){
    heroReady = true;
}

function start(){
    heroImage.src = "img/game/orion.png";
}


var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function(){
    monsterReady = true;
}
monsterImage.src = "img/game/romarinho.png";

var hero ={
    speed:256
};

var monster = {};

var monsterCapture = 0;

var teclaApertada = {};

addEventListener("keydown", function(e){
    teclaApertada[e.keyCode] = true;
},false);

addEventListener("keyup", function(e){
   delete teclaApertada[e.keyCode];
},false);

var reset = function(){
    hero.x = canvas.width/2;
    hero.y = canvas.height/2;

    monster.x = (Math.random() * (canvas.width -64));
    monster.y = (Math.random() * (canvas.height - 64));
};

var update = function(modifier){
    if(38 in teclaApertada)
    {
        hero.y -= hero.speed * modifier;
    }
    if(40 in teclaApertada)
    {
        hero.y += hero.speed * modifier;
    }
    if(37 in teclaApertada)
    {
        hero.x -= hero.speed * modifier;
    }
    if(39 in teclaApertada)
    {
        hero.x += hero.speed * modifier;
    }

    if(hero.x <= (monster.x + 32) && monster.x <= (hero.x + 32) && hero.y <= (monster.y + 32) && monster.y <= (hero.y + 32))
    {
        ++monsterCapture;
        capture();
    }
};

    var render = function(){
        if(bgReady)
        {
            contexto.drawImage(bgImage, 0, 0);
        }
        if(heroReady)
        {
            contexto.drawImage(heroImage, hero.x, hero.y);
        }
        if(monsterReady)
        {
            contexto.drawImage(monsterImage, monster.x, monster.y);
        }

        contexto.fillStyle = "rgb(255,255,255)";
        contexto.font = "22px verdana";
        contexto.textAlign = "left";
        contexto.textBaseline = "top";
        contexto.fillText("Hits: " + monsterCapture, 400, 450);
    };

    var main = function(){
        var now = Date.now();
        var delta = now - then;
        update(delta /1000);
        render();
        then = now;
    };

    function startTimer(duration, display) {
        var timer = duration, seconds;

        setInterval(function () {
            seconds = parseInt(timer % 6, 10);
            seconds = seconds < 10 ? "0" + seconds : seconds;
           
            display.textContent = seconds;
    
            if (--timer <= 3) {
                timer = duration;
                capture();
            }
            
        }, 1000);
    }

    var capture = function(){
    
        monster.x = (Math.random() * (canvas.width -64));
        monster.y = (Math.random() * (canvas.height - 64));
        timer = duration;
    }
    
    window.onload = function () {
        var fiveMinutes = 5,
            display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
    };
    

    reset();
    var then = Date.now();
    setInterval(main,1);