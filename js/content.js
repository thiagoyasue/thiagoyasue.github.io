var today = new Date();
var hourNow = today.getHours();
var message;

    if(hourNow>18){
        message = 'Boa Noite!<br>Que tal um<br>Kobe Beef?';
    }
    else if(hourNow > 12)
    {
        message = 'Boa Tarde!<br>Que tal um<br>Kobe Beef?';
    }
    else if(hourNow > 0){
        message = 'Bom Dia!<br>Que tal um<br>Kobe Beef?';
}
    else{
        message = 'Hola';
    }

    document.write('<div id="feattext">' + message + '</div');