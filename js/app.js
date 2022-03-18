// var age = 17;
// var is_subbed = true;

// Perhaps it is just me, but the instructions have felt a bit unclear

//this is assignment W9B, the code was modified for this assignement so check a previous commit for assignment W9A
var age = [17,19, 25, 15]
var is_subbed = [true, false, true, false]
var counter = 0

while (counter < age.length) {
    if (age[counter] < 18 && is_subbed[counter] == false) {
        console.log(`User${counter+1} is under 18 and not subbed`)
    } else if (age[counter] < 18 && is_subbed[counter] == true) {
        console.log(`User${counter+1}  is subscribed, but under 18`)
    } else if (age[counter] > 18 && is_subbed[counter] == false ) {
        console.log(`User${counter+1}  is over 18, but not subscribed`)
    } else {
        console.log(`User${counter+1}  is over 18 and subscribed`)
    }
    counter++
}

//Two if else statements for four outputs



//One if else statement
// if (age < 18) {
//     console.log('Adults Only')
// }
// else if (is_subbed == false) {
//     console.log('Subscription Required')
// } else {
//     console.log('Welcome in')
// } 

//One else statement
// if (age < 18 || is_subbed == false) {
//     console.log('access denied')
// } else {
//     console.log('welcome in')
// }