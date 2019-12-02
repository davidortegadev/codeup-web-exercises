"use strict";
// console.log('Hello from external JS!');
// alert('Welcome to my Website!');
// var favColor = prompt('What is your favorite color?');
// alert('Great, ' + favColor + ' is my favorite color too!');
//

// var dailyRentalRate=Number(prompt('How much is the daily rental rate for your local blockbuster?'));
// alert('Welcome to BlockBuster, movie rentals are $'+dailyRentalRate+' per day, and we have a great selection of three movie!');
// var rentMermaid = prompt('How many days would you like to rent The Little Mermaid?');
// var rentBrother = prompt( 'How many days would you like to rent Brother Bear?');
// var rentHercules = prompt('How many days would you like to rent Hercules?');
// alert('Your total from renting movies will be $' + ((Number(rentMermaid)+Number(rentBrother)+Number(rentHercules))*dailyRentalRate) + '. Thanks for supporting small businesses!');

// var googleRate = Number(prompt('What is your Google rate?'));
// var amazonRate = Number(prompt('What is your Amazon rate?'));
// var facebookRate = Number(prompt('What is your Facebook rate?'));
// alert('Wow, you\'ve built up quite the debt by renting movies. You\'re going to have to work that off by being a contractor for Google, Amazon and Facebook.');
// var payGoogle = prompt('How many hours did you work at Google?');
// var payAmazon = prompt('How many hours did you work at Amazon?');
// var payFacebook = prompt('How many hours did you work at Facebook?');
// alert('What a good little capitalist bee. You\'ve earned $' + ((Number(payGoogle)*googleRate)+(Number(payAmazon)*amazonRate)+(Number(payFacebook)*facebookRate)) +' this week by selling your life force as labor. Congratulations!');

var classisNotFull = confirm('Class is not full');
var noScheduleConflicts = confirm('Schedules do not conflict');

console.log('class is not full:' + classisNotFull);
console.log('no schedule conflicts:' + noScheduleConflicts);

var studentEnrolled = classisNotFull && noScheduleConflicts;
console.log(studentEnrolled);

alert("Student can enroll: " + studentEnrolled)


alert('Hello and welcome to MartMart, where a kid can be a kid. For a price.');
var offerValid = confirm('I see that you want to use an offer on your purchase today. We employ the honor system here: is the offer valid? (OK for yes, cancel for no.)');
if (offerValid===false) {
    alert('Sorry, the offer is expired and we are not able to honor it at this time.')
}
else{
    var premiumMember = confirm ('Are you a premium member? (OK for yes, cancel for no)');
    if (premiumMember===true){
        alert('That\'s great to hear! You qualify for the offer.')
    }
    else if (premiumMember===false){
        var newPremium = confirm('Oh, well would you like to sign up to be a premium member?');
        if (newPremium===true){
            alert('Great! Now you qualify for the offer.')
        }
        else{
            alert('Well I sure hope your cart has at least 3 items or you won\'t qualify for the offer.')
            var itemsCart = prompt('How many items are in your cart?')
            if (Number(itemsCart) > 2){
                alert('Oh, you do? well then I guess you qualify for the offer.')
            }
            else{
                alert('You don\'t qualify for the offer darling, sorry.')
            }
        }
    }
}
