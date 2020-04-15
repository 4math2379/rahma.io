
// var var var ... omg on va voir

var output = $('.output');
var input = $('textarea.input');
var toOutput;

//listener
input.keypress(function(e) {
if (e.which == 13) {
  var inputVal = $.trim(input.val());
  //console.log(inputVal);

  if (inputVal == "help") {
    help();
    input.val('');
  } else if (inputVal == "ping") {
    pong();
    input.val('');
  } else if (inputVal == "about") {
    aboutMe();
    input.val('');
  } else if (inputVal == "contact") {
    contactMe();
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

  } else if (inputVal == "time") {
    getTime();
    input.val('');

  } else if (inputVal == "stars") {
    showStars();
    input.val('');

  } else if (inputVal == 'whats that sound' || inputVal == 'what\'s that sound' || inputVal == 'whats that sound?') {
    seperator();
    Output('<span class="blue">' + inputVal + '</span></br><span class="red">Machine Broken!</span></br>');
    seperator();
    input.val('');
  } else if (inputVal.startsWith("exit") === true) {
    Output('<span class="blue">Goodbye! Comeback soon.</span>');
  } else if (inputVal== "project") {
    project(); 

  } else if (inputVal == "bot") {
   Output(' <span class="blue">Try my Bot in your Slack Team !</span> <a style="text-align:center;" href="https://slack.com/oauth/authorize?&client_id=162822869152.211928533794&scope=bot,incoming-webhook"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /> </a> '

 );

    
  
} else {
    Output('<span>command not found</span></br>');
    input.val('');
  }
}
});

//bulder la console
function seperator() {
Output('<span class="seperator">== == == == == == == == == == == == == == == == == ==</span></br>');
}

//clears the screen
function clearConsole() {
output.html("");
Output('<span>clear</span></br>');
}

// prints out a list of "all" comands available
function help() {
var commandsArray = ['Help: List of available commands', '>help', '>about', '>contact', '>project', '>Stars','>ping', '>time', '>clear', '>say'];
for (var i = 0; i < commandsArray.length; i++) {
  var out = '<span>' + commandsArray[i] + '</span><br/>';
  Output(out);
}
}




// prints the result for the pong command
function pong() {
Output('<span>pong</span></br><span class="pong"><b class="left">|</b><b class="right">|</b></span></br>');
}

// function to the say command
function sayThis(data) {
data = data.substr(data.indexOf(' ') + 1);
Output('<span class="green">[say]:</span><span>' + data + '</span></br>');
}

function sudo(data) {
data = data.substr(data.indexOf(' ') + 1);
if (data.startsWith("say") === true) {
  data = "Not gona " + data + " to you, you don\'t own me!";
} else if (data.startsWith("apt-get") === true) {
  data = "<span class='green'>Updating...</span> You are Not Meryl ... my Baby heart <3";
} else {
  data = "The force is week within you, my master you not be!";
}
Output('<span>' + data + '</span></br>');
}

function getTime() {
Output('<span>It\'s the 21st century man! Get an Apple Watch</span></br>');
}

//show the stars of the day
function showStars() {
  window.location.href = "stars.html";


}





function aboutMe() {
var aboutMeArray = ['>About:', 'Hi There!', 'I\'m Rahma, a Blockchain developer  ', 'Feel free to follow me on twitter @vesuviian and stay tuned for updates ! '];
seperator();
for (var i = 0; i < aboutMeArray.length; i++) {
  var out = '<span>' + aboutMeArray[i] + '</span><br/>';
  Output(out);
}
seperator();
}

function project() {
var projectArray = ['>Project:', 'All of my project are listed on Github ====> <a href=https://github.com/4math2379>HERE </a> '];
seperator();
for (var i = 0; i < projectArray.length; i++) {
  var out = '<span>' + projectArray[i] + '</span><br/>';
  Output(out);
}
seperator();
}

function contactMe() {
var contactArray = ['>Contact:', 'rahma@blockchain101.fr'];
seperator();
for (var i = 0; i < contactArray.length; i++) {
  var out = '<span>' + contactArray[i] + '</span><br/>';
  Output(out);
}
seperator();
}

function Output(data) {
$(data).appendTo(output);
}
