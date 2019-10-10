
// var passwordButton = document.getElementById ()

// password values

var special = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890"



function createPass(len, characters) {
    var lengthPass = prompt("How many character password do you want, 8-128");
    var pwd = "";
    for (let i = 0; i < len; i++) {
        // takes characters at random index however many charcters user chooses and adds to pwd
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
        
    }

    


    // input validation
    if (lengthPass < 8 || lengthPass > 128) {
        alert("Choose between 8 and 128, jerky");
    } else if (lengthPass > 7 || lengthPass < 129) {
        // prompts for user input
        var specialResult = confirm("Would you like special characters in your password?");
        var capsResult = confirm("Would you like capital letters in your password?");
        var lowerResult = confirm("Would you like lowercase letters in your password?");
        var numberResult = confirm("Would you like capital letters in your password?");

        // if (specialResult) {
        //     for (var)
        // }

        return pwd;
    }

    

        // password creation



        //     for (i = 0; i < lengthPass.length; i++){
        //  //need a way to cycle through each set of values based on what a user chooses 
        //     }
        // }

    //     // set password length
    //     var length = document.getElementById(from prompt)
    // }



        // // add password to display
        // document.getElementbyId("display").value = password;


        // check if length is valid

        // use .textContent to create password
        // then document.body.appendChild (var)

    };