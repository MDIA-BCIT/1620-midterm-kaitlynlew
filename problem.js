/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/

/////////////

//the paramteres will be used to check the following ...
//passwordMatches
//passwordDoesNotMatch
//userForgotPassword
//resetPassword

function passwordCheck(
    passwordMatches,
    passwordDoesNotMatch,
    userForgotPassword,
    resetPassword
) {
    if (passwordMatches) {
        console.log("Access Granted!");
        //if the password matches the users input
    } else if (passwordDoesNotMatch) {
        console.log("Access Denied!");
        //if the password does not match the users input
    } else if (userForgotPassword) {
        console.log("Here is a hint.");
        //if the user forgot the password
    }
    if (resetPassword) {
        console.log("Let's reset your account.");
        //if the user requests a password reset
    }
}
