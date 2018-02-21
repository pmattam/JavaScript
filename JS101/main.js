// Write a function hello which given a myName, says hello to the myName. 
// if no myName is given: hello(), it will print "Hello, world!"

var hello = function (myName) {

    if (myName==undefined) {
        return "Hello, world!"
    }
    return "Hello, " + myName + "!";

};
  
hello();
hello('Mustache');
  
// Write a madlib function, which is given a myName and a subject. 
// It will return(not print) a new string: (myName)'s favorite subject in school is (subject).

var madlib = function (myName, mySubject) {

    return myName + '\'s favorite subject in school is ' + mySubject + '.';

};
  
madlib('Anushka', 'art');

// Write a function tipAmount that is given the bill amount and the level of service 
// (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

// good -> 20%
// fair -> 15%
// bad -> 10%

var tipAmount = function (amount, rating) {

    var tip;
    if (rating == 'good') {
        tip = amount * 0.2;
    }
    else if (rating == 'fair') {
        tip = amount * 0.15;
    }
    else if (rating == 'poor') {
        tip = amount * 0.1;
    }
    return tip;

};

tipAmount(100, 'good');
tipAmount(40, 'fair');

// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total 
// as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

var totalAmount = function (amount, rating) {

    var totalAmount;
    if (rating == 'good') {
        totalAmount = amount + (amount * 0.2);
    }
    else if (rating == 'fair') {
        totalAmount = amount + (amount * 0.15);
    }
    else if (rating == 'poor') {
        totalAmount = amount + (amount * 0.1);
    }
    return totalAmount;

};

totalAmount(100, 'good');
totalAmount(40, 'fair');

// Write a function splitAmount that takes the bill amount and the level of service, 
// and the number of people to split the bill between. It will return the final amount for each person.

var splitAmount = function (amount, rating, split) {

    var totalAmount;
    if (rating == 'good') {
        totalAmount = amount + (amount * 0.2);
    }
    else if (rating == 'fair') {
        totalAmount = amount + (amount * 0.15);
    }
    else if (rating == 'poor') {
        totalAmount = amount + (amount * 0.1);
    }
    var splitAmount = totalAmount / split;
    return splitAmount;
    
};

splitAmount(100, 'good', 5);
splitAmount(40, 'fair', 2);
