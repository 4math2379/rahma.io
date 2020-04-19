


var output = $('.output');
var input = $('textarea.input');
var toOutput;
var sauronImg = $()


//a quoi ca sert un palantir ?
//qui l'utilise ? 

//des visions



//listener
input.keypress(function(e) {
    if (e.which == 13) {
      var inputVal = $.trim(input.val());
      //console.log(inputVal);
    
      if (inputVal == "saruman") {
        saruman();
        input.val('');
      }
        else if (inputVal == "Mordor") {
        mordor();
        input.val('');
      }else if (inputVal == "Door") {
        door();
        input.val('');
      } else if (inputVal == "clear") {
        clearConsole();
        input.val('');
      } else if (inputVal.startsWith("say") === true) {
        sayThis(inputVal);
        input.val('');
      } else if (inputVal.startsWith("sudo") === true) {
        sudo(inputVal);
        input.val('');
    
      } else if (inputVal == "friend") {
        friend();
        input.val('');
    
      } else if (inputVal == "Rohan") {
        rohan();
        input.val('');
    
      }else if (inputVal == "palantir") {
        showPalantir();
        input.val('');
    
      } else {
        Output('<span>command not found</span></br>');
        input.val('');
      }
    }
    });
    
    //builder la console
    function seperator() {
    Output('<span class="seperator">== == == == == == == == == == == == == == == == == ==</span></br>');
    }
    
    //clears the screen
    function clearConsole() {
    output.html("");
    Output('<span>clear</span></br>');
    }
    
    // prints out a list of "all" commands available
    function saruman() {
    var commandsArray = ['Choose your Vision...Wisely', '~Mordor', '~Door', '~Rohan',];
    for (var i = 0; i < commandsArray.length; i++) {
      var out = '<span>' + commandsArray[i] + '</span><br/>';
      Output(out);
    }
    }
    
    
    
    
    // prints the result for the pong command
   
    
    // function to the say command
    function sayThis(data) {
    data = data.substr(data.indexOf(' ') + 1);
    Output('<span class="green">[say]:</span><span>' + data + '</span></br>');
    }
    
    

    
    //play the palantir
    function showPalantir() {
      window.location.href = "palantir.html";
    
    
    }


    //vision du mordor 

    function mordor() {
        seperator()
        //load 2 images for choice and pursue the vision..
        Output('<span>You see despair and an opportunity to be the new Ringlord...</span></br>' 
        +  '<a href = "palantir.html"><img style="border-radius: 2em; width: 528px; height: 410px;"src = "img/sauron.jpg"></img></a></br>');
        Output('<span class="seperator">== == == == == == == == == == == == == == == == == ==</span></br>' + '<a href = "palantir.html"><img style="border-radius: 2em;"src = "img/ringlord.jpg"></img></a></br>');
        //fear of Sauron
        //Ringlord
        
    }


    //The grey wizards !

    function door() {
        //quest to see further...
        Output('<span> What is this ...  <span/></br>' + '<img style="border-radius: 2em;"src = "img/durinsDoorGlow.jpg"></img></br>' );
        Output('<span> Say the word... <span/></br>')   
            
    }

    function friend() {
        //open the gate of the Moria
        window.location.href = "palantir.html"

    }


    //THE ROHAN IS MINE !

    function rohan() {
        seperator()
        Output('<span> The King\'s heir ... <span/></br>');
        seperator()
        Output('<img style="border-radius: 2em;"src = "img/theodred.jpg"></img></br>')
    }
    
    
    
    

    
    function Output(data) {
    $(data).appendTo(output);
    }