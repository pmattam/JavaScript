// Write a function printNumbers which is given a start number and an end number. 
// It will print the numbers from one to the other, one per line.
// Write two versions of the above function. One using a while loop and the other using a for loop.

var printNumbers = function (num1, num2) {

    var count = num1;
    while(count <= num2) {
      console.log(count);
      count++;
    }
  
    for(count; count <=num2; count++) {
      console.log(count);
    }

  };
  
  printNumbers(1, 10);

// Write a function printSquare which is given a size and prints a square of that size using asterisks.

var printSquare = function (num) {

  for(i=0; i<num; i++) {
      var row = "";
      for(j=0; j<num; j++)  {
          row += "*";
      }
      console.log(row);
  }

};

printSquare(10);

// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

var printBox = function (width, height) {

  for(i=1; i<=height; i++) {
      var row = "";
      for(j=1; j<=width; j++) {
          if(i === 1 || i === height) {
              row += "*";
          }
          else {
              if (j === 1 || j === width) {
                  row += "*";
              }
              else {
                  row += " ";
              }
          }
      }
      console.log(row);
  }

};

printBox(6, 4);

// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

var printBanner = function (givenString) {

  var row = "";
  for(i=1; i<=givenString.length+4; i++) {
      row += "*";
  }
  console.log(row);
  console.log("* " + givenString + " *");
  console.log(row);

};

printBanner('Welcome to DigitalCrafts');

// Write a function factors which is given a number and returns an array containing all its factors.

var factors = function (num) {

  var factorslist = [];
  for(i=1; i<=num/2; i++) {
      if(num % i === 0) {
          factorslist.push(i);
      }
  }
  factorslist.push(num);
  return factorslist;

};

console.log(factors(20));

// Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.

var cipher = function  (givenStr, offset) {

  var cipherStr = "";
  for(i=0; i<givenStr.length; i++) {
      var k = givenStr.charCodeAt(i);
      if(k > 96){
          k += offset;
          if(k > 122) {
          k -= 26;
          }
      }
      else if(k > 64) {
          k += offset;
          if(k > 90) {
              k -= 26;
          }
      }
      cipherStr += String.fromCharCode(k);
  }
  return cipherStr;

};

console.log(cipher('Genius without education is like silver in the mine', 13));

// Write a function decipher which is given a string, an offset, and returns the original message.

var decipher = function  (givenStr, offset) {

  var decipherStr = "";
  for(i=0; i<givenStr.length; i++) {
      var k = givenStr.charCodeAt(i);
      if(k > 96){
          k -= offset;
          if(k < 97) {
          k += 26;
          }
      }
      else if(k > 64 && k < 91) {
          k -= offset;
          if(k < 65) {
              k += 26;
          }
      }
      decipherStr += String.fromCharCode(k);
  }
  return decipherStr;

};

console.log(decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13));

// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. 
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7

var characterSheet = {

  'A': 4,
  'E': 3,
  'G': 6,
  'I': 1,
  'O': 0,
  'S': 5,
  'T': 7

};

var leetspeak = function (text) {

  text = text.toUpperCase(); 
  leetspeakText = "";
  
  for(i=0; i<text.length; i++) {
      if(text[i] in characterSheet) {
          leetspeakText += characterSheet[text[i]];
      }
      else {
      leetspeakText += text[i];
      }
  }
  return leetspeakText.toLowerCase();

};

console.log(leetspeak('Leet'));
console.log(leetspeak('hello'));

// Write a function, which is given a string, return the result of extending any long vowels to the length of 5.

var longLongVowels = function (givenStr) {

  givenStr = givenStr.replace(/aa*a/, 'a'.repeat(5));
  givenStr = givenStr.replace(/ee*e/, 'e'.repeat(5));
  givenStr = givenStr.replace(/ii*i/, 'i'.repeat(5));
  givenStr = givenStr.replace(/oo*o/, 'o'.repeat(5));
  givenStr = givenStr.replace(/uu*u/, 'u'.repeat(5));

  return givenStr;

};

console.log(longLongVowels('Good'));
console.log(longLongVowels('Cheese'));
console.log(longLongVowels('Man'));
console.log(longLongVowels('Elephant'));

// Write a function sumNumbers which is given an array of numbers and returns the sum of the numbers.

var sumNumbers = function (numList) {

  var sum = 0;
  for(i=0; i<numList.length; i++) {
      sum += numList[i];
  }
  return sum;

};

console.log(sumNumbers([1, 4, 8]));

// Write a function positiveNumbers which is given an array of numbers 
// and returns a new array containing only the positive numbers within the given array.

var positiveNumbers = function (numList) {

  var newNumList = [];
  for(i=0; i<numList.length; i++) {
      if(numList[i] >= 0) {
          newNumList.push(numList[i]);
      }
  }
  return newNumList;

};

console.log(positiveNumbers([1, -3, 5, -3, 0]));
console.log(positiveNumbers([1, 2, 3]));
console.log(positiveNumbers([-1, -2, -3]));

// Write a function matrixAdd which is given two two-dimensional arrays, 
// and returns a new two-dimensional array containing their matrix sum.

var matrixAdd = function (matrix1, matrix2) {

  var resultMatrix = [];
  for(i=0; i<matrix1.length; i++) {
      console.log(matrix1.length);
      var subList = [];
      for(j=0; j<matrix1[i].length; j++) {
          subList.push(matrix1[i][j] + matrix2[i][j]);
      }
      resultMatrix.push(subList);
  }
  return resultMatrix;

};

console.log(matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]));

// Write a function matrixMultiply which is given two two-dimensional arrays - you can assume the matricies are of size 2x2. 
// It will return the result of matrix multiplication between the two given matricies.
// Matrix multiplication for m x n to n x m matricies

var matrixMultiply = function (matrix1, matrix2) {

  var resultMatrix = [];
  
  if(matrix1.length === matrix2[0].length && matrix1[0].length === matrix2.length) {
      for(i=0; i<matrix1.length; i++) {
          var subList = [];
          for(j=0; j<matrix2[0].length; j++) {
              var cell = 0;
              for(k=0; k<matrix2.length; k++){
                  cell += matrix1[i][k] * matrix2[k][j];
              }
              subList.push(cell); 
          }
          resultMatrix.push(subList);
      }
      return resultMatrix;
  }
  else {
      return "Matricies length don't match for Matrix Multiplicaton - Expected m x n and n x m matricies"
  }

};

console.log(matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]));
console.log(matrixMultiply([[2, 4], [3, 4], [1, 3]], [[5, 2, 8], [1, 2, 3]]));
console.log(matrixMultiply([[5, 2, 8], [1, 2, 3]], [[2, 4], [3, 4], [1, 3]]));
console.log(matrixMultiply([[2, 4], [3, 4]], [[5, 2, 8], [1, 2, 3]]));

// Write a function rockPaperScissors which takes the throw of player 1 and the throw of player 2. 
// A throw can have the values of 'rock', 'paper', or 'scissors'. 
// It will return 'player 1' if player 1 wins, 'player 2' if player 2 wins, and 'draw' if there is no winner.

var rockPaperScissors = function (throw1, throw2) {

  throw1.toLowerCase();
  throw2.toLowerCase();
  if(throw1 === 'rock' && throw2 === 'scissors') {
      return 'player 1';
  }
  if(throw1 === 'scissors' && throw2 === 'rock') {
      return 'player 2';
  }
  if(throw1 === 'scissors' && throw2 === 'paper') {
      return 'player 1';
  } 
  if(throw1 === 'paper' && throw2 === 'scissors') {
      return 'player 2';
  }
  if(throw1 === 'paper' && throw2 === 'rock') {
      return 'player 1';
  }
  if(throw1 === 'rock' && throw2 === 'paper') {
      return 'player 2';
  }
  if(throw1 === throw2) {
      return 'draw';
  }

};

console.log(rockPaperScissors('rock', 'scissors'));
console.log(rockPaperScissors('rock', 'paper'));
console.log(rockPaperScissors('paper', 'paper'));

// Write a function ticTacToe which takes a two-dimensional array of size 3x3. 
// Each cell in the two dimensional array can be one of 'O', 'X', or null. 
// The ticTacToe function will determine the winner by

// returning 'O' if O makes a row
// returning 'X' if X makes a row
// return null if neither makes a row

var ticTacToe = function (tacList) {
 
  var tacStr = "";
  for(i=0; i<tacList.length; i++) {
      for(j=0; j<tacList[i].length; j++) {
          if(tacList[i][j] === null) {
              tacList[i][j] = 'Y';
          }
      }
      tacStr += tacList[i].join('');
  }
  console.log(tacStr);
  if (tacStr.charAt(0) === tacStr.charAt(3) && tacStr.charAt(3) === tacStr.charAt(6)) {
      if(tacStr.charAt(0) !== 'Y') {
          return tacStr.charAt(0);
      }  
  }
  if (tacStr.charAt(1) === tacStr.charAt(4) && tacStr.charAt(4) === tacStr.charAt(7)) {
      if(tacStr.charAt(1) !== 'Y') {
          return tacStr.charAt(1);
      }
  }
  if (tacStr.charAt(2) === tacStr.charAt(5) && tacStr.charAt(5) === tacStr.charAt(8)) {
      if(tacStr.charAt(2) !== 'Y') {
          return tacStr.charAt(2);
      }
  }
  if(tacStr.slice(0,3) === 'OOO' || tacStr.slice(3, 6) === 'OOO' || tacStr.slice(6, 9) === 'OOO') {
      return 'O';
  }
  if(tacStr.slice(0,3) === 'XXX' || tacStr.slice(3, 6) === 'XXX' || tacStr.slice(6, 9) === 'XXX') {
      return 'X';
  }
  if(tacStr.charAt(0) === tacStr.charAt(4) && tacStr.charAt(4) === tacStr.charAt(8)) {
      if(tacStr.charAt(0) !== 'Y') {
          return tacStr.charAt(0);
      }
  }
  if(tacStr.charAt(2) === tacStr.charAt(4) && tacStr.charAt(4) === tacStr.charAt(6)) {
      if(tacStr.charAt(2) !== 'Y') {
          return tacStr.charAt(2);
      }
  }
  return null;
  
};

console.log(ticTacToe([
  ['O', 'O', 'O'],
  ['X', null, 'X'],
  [null, 'X', null]
  ]));

console.log(ticTacToe([
  ['O', 'X', 'O'],
  ['O', 'X', null],
  [null, 'X', null]
  ]));

console.log(ticTacToe([
['O', 'X', 'O'],
['O', 'O', null],
[null, 'X', 'X']
]));

console.log(ticTacToe([
    ['O', 'X', null],
    [null, 'O', 'X'],
    [null, 'X', 'O']
]));

console.log(ticTacToe([
    ['O', 'X', 'X'],
    [null, 'X', 'X'],
    ['X', 'O', 'O']
]));

