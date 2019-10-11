


// password values

var special = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
// var yourPass = document.getElementById("yourPW").value;

// when create password button is clicked do this function
submit.addEventListener("click", function(e){
    e.preventDefault();
    var lengthPass = prompt("How many character password do you want, 8-128");
    
    // input validation
    if (lengthPass < 8 || lengthPass > 128) {
        alert("Choose between 8 and 128, jerky");
    } else if (lengthPass > 7 || lengthPass < 129) {
        // prompts for user input
        var specialResult = confirm("Would you like special characters in your password?");
        var capsResult = confirm("Would you like capital letters in your password?");
        // var lowerResult = confirm("Would you like lowercase letters in your password?");
        var numberResult = confirm("Would you like numbers in your password?");
    }
    
    
    // if user selects no for all character options there will be all lowercase letters
    var characters = lower;
    var len = lengthPass;
        // all below: what to do when if confirms are true, written in if shorthand to try and simplify.  Concatenate characters that are true to character variable
    specialResult ? characters += special : "";
    capsResult ? characters += caps : "";
    numberResult ? characters += number : "";
    
    // password for the output box is the length of password selected with whatever characters selected by user, selected at random as a result createPass function below
   var yourPass = createPass(lengthPass, characters);   
   document.querySelector("#yourPW").value = yourPass; 
});

function createPass(lengthPass, characters) {
   
    var pwd = "";
    for (var i = 0; i < lengthPass; i++) {
        // takes characters at random index however many charcters user chooses and adds to pwd
        pwd += characters.charAt(Math.floor(Math.random() * characters.length)); 
        console.log(pwd); 
    }
// pwd returned from for above to var pwd
return pwd;  
  
};


  


    