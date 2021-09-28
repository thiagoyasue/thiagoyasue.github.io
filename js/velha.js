$(function(){

    var vez =1;
    var vencedor ="";
    var hiddenBox = $( "#playagain" );
    var velha = 0;

    function casasIguais(a, b, c){
        var casaA = $("#casa"+a);
        var casaB = $("#casa"+b);
        var casaC = $("#casa"+c);
        var bgA = $("#casa"+a).css("background-image");
        var bgB = $("#casa"+b).css("background-image");
        var bgC = $("#casa"+c).css("background-image");

        if((bgA == bgB) && (bgB == bgC) && (bgA != "none" &&  bgA != "")){
            if (bgA.indexOf("1.png")>=0)
                vencedor = "1";
            else
                vencedor ="2";
            return true;    
        }
        else{
            return false;
        }
    }
    function verificarFimDeJogo(){
        if(casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9)
        || casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9)
        || casasIguais(1, 5, 9) || casasIguais(3, 5, 7) || velha>=9
        ){
            if(vencedor==1){
            $('#texto').html('<h1>Jogador X ganhou!</h1>');
            
            }
            else{
                $('#texto').html('<h1>Jogador O ganhou!</h1>');    
            }
            $(".casa").off("click");
             hiddenBox.show();

        }

        if(velha>=9){                
            $('#texto').html('<h1>Empate!</h1>');    
            $(".casa").off("click");
            hiddenBox.show();
        }
    }

    $( "#playagain" ).on( "click", function( event ) {
        window.location = "jogodavelha.html";
      });

    $(".casa").click(function(){
        var bg = $(this).css("background-image");
        if(bg == "none" || bg==""){
            var fig = "url(img/"+ vez.toString()+".png)";
            $(this).css("background",fig);
            vez= (vez == 1? 2:1);
            velha++;
            verificarFimDeJogo();
        }
    });
});