$(document).ready(function(){


    //lane and character setup

    function createPlayer(image) {
        this.image = image;
    };

    var spiderman = new createPlayer('http://fanaru.com/spiderman/image/148665-spiderman-spiderman.gif');
    $(".spiderman").append("<img src='"+spiderman.image+"' width='60' height='60'>");

    var hulk = new createPlayer('http://www.comicheroes.co.uk/images/gifs/Hulk/Hulk_walkfoward.gif');
    $(".hulk").append("<img src='"+hulk.image+"' width='60' height='60'>");
    
    var ironMan = new createPlayer('http://photos.imageevent.com/afap/heroesandvillans/marvelanimatedgifs/Iron-Man-2.gif');
    $(".ironMan").append("<img src='"+ironMan.image+"' width='60' height='60'>");

    var thor = new createPlayer('http://www.gifmania.co.uk/Comics-Animated-Gifs/Animated-Thor-Superhero/Thor-Attack-64902.gif');
    $(".thor").append("<img src='"+thor.image+"' width='60' height='60'>");


    function createLane(width,height,color,border,left_margin,top_margin) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.border = border;
        this.left_margin = left_margin;
        this.top_margin = top_margin;
    };

    var lane = new createLane(140,30,'rgba(192,192,192,0.5)','solid #880000 3px',20,50)
    $(".lane").css('width', lane.width+'vh');
    $(".lane").css('height', lane.height+'vh');
    $(".lane").css('background-color', lane.color);
    $(".lane").css('border', lane.border);
    $(".lane").css('margin-left', lane.left_margin+'vh');
    $(".lane").css('margin-top', lane.top_margin+'vh');

    

    //player choice

    function playerChoice(image){
        this.image = image;
        this.left_margin = left_margin;
        this.top_margin = top_margin;
    };

    var input;

    $(".player1Button").on("click", function(event) {
        input = $(".player1").val();
        if(input==="thor"){
            var thor2 = new createPlayer('http://www.gifmania.co.uk/Comics-Animated-Gifs/Animated-Thor-Superhero/Thor-Attack-64902.gif');
            $(".player1Choice").append("<img src='"+thor2.image+"' width='60' height='60'>");
        }
        else if(input==="spiderman"){
            var spiderman2 = new createPlayer('http://fanaru.com/spiderman/image/148665-spiderman-spiderman.gif');
            $(".player1Choice").append("<img src='"+spiderman2.image+"' width='60' height='60'>");
        }
        else if(input==="hulk"){
            var hulk2 = new createPlayer('http://www.comicheroes.co.uk/images/gifs/Hulk/Hulk_walkfoward.gif');
            $(".player1Choice").append("<img src='"+hulk2.image+"' width='60' height='60'>");
        }
        else if(input==="iron man"){
             var ironMan2 = new createPlayer('http://photos.imageevent.com/afap/heroesandvillans/marvelanimatedgifs/Iron-Man-2.gif');
            $(".player1Choice").append("<img src='"+ironMan2.image+"' width='60' height='60'>");
        }
    });



    $(".player2Button").on("click", function(event) {
        input2 = $(".player2").val();
        if(input2==="thor"){
            var thor3 = new createPlayer('http://www.gifmania.co.uk/Comics-Animated-Gifs/Animated-Thor-Superhero/Thor-Attack-64902.gif');
            $(".player2Choice").append("<img src='"+thor3.image+"' width='60' height='60'>");
        }
        else if(input2==="spiderman"){
            var spiderman3 = new createPlayer('http://fanaru.com/spiderman/image/148665-spiderman-spiderman.gif');
            $(".player2Choice").append("<img src='"+spiderman3.image+"' width='60' height='60'>");
        }
        else if(input2==="hulk"){
            var hulk3 = new createPlayer('http://www.comicheroes.co.uk/images/gifs/Hulk/Hulk_walkfoward.gif');
            $(".player2Choice").append("<img src='"+hulk3.image+"' width='60' height='60'>");
        }
        else if(input2==="iron man"){
             var ironMan3 = new createPlayer('http://photos.imageevent.com/afap/heroesandvillans/marvelanimatedgifs/Iron-Man-2.gif');
            $(".player2Choice").append("<img src='"+ironMan3.image+"' width='60' height='60'>");
        }
    });


    //movement

    var pos1 = 180;
    var pos2 = 180;
    var player1key = 49;
    var player2key = 48;
    var movement = 10;
    var finish = 1180;
    
    $(document).keydown(function(event) {
      switch (event.keyCode) {
        case player1key:
          console.log(pos1);
          if(pos1<finish){
            pos1 = pos1 + movement;
            $(".player1Choice").css('margin-left', pos1 + 'px');
            break;
          }
          else{
            alert(input+" is the winner!");
          }
        case player2key:
          if(pos2<finish){
            pos2 = pos2 + movement;
            $(".player2Choice").css('margin-left', pos2 + 'px');
            break;
          }
          else{
            alert(input2+" is the winner!");
          }
      };
    });



});














// Start the game!
// var game = new Game();
// game.init();
