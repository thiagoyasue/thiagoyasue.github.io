/*var canvas = document.createElement("canvas");
var contexto = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;


var bgReady = false;
var bgImage = new Image();
bgImage.onload = function(){
    bgReady = true;
}
bgImage.src = "img/background.png";

var heroReady = false;
var heroImage = new Image();
heroImage.onload = function(){
    heroReady = true;
}
heroImage.src = "img/romarinho.png";

var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function(){
    monsterReady = true;
}
monsterImage.src = "img/orion.png";

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

    monster.x = Math.random() * canvas.width;
    monster.y = Math.random() * canvas.height;
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

        contexto.fillStyle = "rgb(0,0,0)";
        contexto.font = "22px verdana";
        contexto.textAlign = "left";
        contexto.textBaseline = "top";
        contexto.fillText("Monsters Captures: " + monsterCapture, 32, 32);
    };

    var main = function(){
        var now = Date.now();
        var delta = now -TouchEvent;
        update(delta /1000);
        render();
        then = now;
    };

    reset();
    var then = Date.now();
    setInterval(main,1);

    document.body.appendChild(canvas);
=============================
*/

   var canvas = document.createElement("canvas");
   var contexto = canvas.getContext("2d");
   canvas.width = 800;
   canvas.height = 800;
   document.body.appendChild(canvas);
   
   var bgReady = false;
   var bgImage = new Image();
   bgImage.onload = function(){
       bgReady = true;
   }
   bgImage.src = "img/background.png";
   
   var heroReady = false;
   var heroImage = new Image();
   heroImage.onload = function(){
       heroReady = true;
   }
   heroImage.src = "img/orion.png";
   
   var monsterReady = false;
   var monsterImage = new Image();
   monsterImage.onload = function(){
       monsterReady = true;
   }
   monsterImage.src = "img/romarinho.png";
   
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
   
       monster.x = 32 + (Math.random() * (canvas.width - 64));
       monster.y = 32 + (Math.random() * (canvas.height - 64));
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
   
       if(hero.x <= (monster.x + 32)&& monster.x <=(hero.x + 32) && hero.y <= (monster.y +32)
       && monster.y <= (hero.y + 32)){
           ++monsterCapture;
           reset();
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
   
           contexto.fillStyle = "rgb(0,0,0)";
           contexto.font = "22px verdana";
           contexto.textAlign = "left";
           contexto.textBaseline = "top";
           contexto.fillText("Monsters Captures: " + monsterCapture, 32, 32);
       };
   
       var main = function(){
           var now = Date.now();
           var delta = now -then;
           update(delta /1000);
           render();
           then = now;
       };
   
       reset();
       var then = Date.now();
       setInterval(main,1);

