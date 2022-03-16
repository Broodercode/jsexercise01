var age = 19
var is_subbed = false;

// I wasn't sure exactly what you were asking for so I just did it both ways I thought it may need to be done.  Then I just decided to do it a third way in a single if statement cause why not.

//Two if else statements for four outputs
if (age < 18 && is_subbed == false) {
    console.log('User is under 18 and not subbed')
} else if (age < 18 && is_subbed == true) {
    console.log('User is subscribed, but under 18')
} else if (age > 18 && is_subbed == false ) {
    console.log('User is over 18, but not subscribed')
} else {
    console.log('User is over 18 and subscribed')
}


//One if else statement
if (age < 18) {
    console.log('Adults Only')
}
else if (is_subbed == false) {
    console.log('Subscription Required')
} else {
    console.log('Welcome in')
} 

//One else statement
if (age < 18 || is_subbed == false) {
    console.log('access denied')
} else {
    console.log('welcome in')
}