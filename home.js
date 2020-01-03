//Variable Decleration :-

//let y;var x;

//Getting Input on Page:- 

//y=prompt('Idhar Orr Sexy Betha hai');

//Show Alert Message:-

//alert('hey you are good at progamming' );

//To Print Someting on Page:-  

//console.log(y);

//Function decleration:-

/*function  sum(a,b)
{
   var s=a+b;
   console.log('Sum is:-'+s);
}
sum(4,2);
let x=prompt("Whats your Age:-");
*/

//To Edit Html Content by Javascript By id:-

//document.getElementById('dax').innerHTML=x;

//Numbers:-

/*var x=5.7
console.log("The Multiply is:- "+x*10);
let y=5;
console.log("The Sum is:- "+(y+x));
var s=20;
console.log("The Divide is:- "+s/2);
let d=10;
console.log("The Modulus is :- "+d%2);
*/

//Increment:-

/*
var x=10;
x++;
console.log(x);
++x;
console.log(x);
x+=3
console.log(x);
*/

//Decrement:-

/*
let x=2;
--x;
console.log(x);
x--;
console.log(x);
x-=2;
console.log(x);
*/

//Challenege:- Let create the function of which shows the entered name of user like this "Hey Nitish"?
/*
function greet(a)
{
   console.log("Hey"+" "+a);
}
let x=prompt("Whats Your Name:- ");
greet(x);
*/

//While Loop :-

/*
let n=1;
while(n<=100)
{
   console.log(n);
   n+=1;
}
*/

//For Loop :-
/*
for(let x=1;x<=100;x+=1)
{
   console.log(x);
}
*/

//Data Types :-
/*
let your_Age=18; //Number

let your_name='nitish'; //String 

let name={first:'Nitish', last:'Ojha'}; //Object

let truth=false; //Boolean

let groceries=['apple','banana','oranges']; //Array

let random; //undefined

let nothing=null; //Value null
*/

//Strings in JavaScript:-
/*
let fruit="banana,apple,orange";

morefruits="banana\napple";  // New Line

console.log(morefruits); 

console.log(fruit.length);

console.log(fruit.indexOf('nan'));

console.log(fruit.replace('ba','Sexy'));

console.log(fruit.slice(2,6));

console.log(fruit.toUpperCase());

console.log(fruit.toLowerCase());

console.log(fruit.charAt(2));

console.log(fruit[2]);

console.log(fruit.split(''));  //Split by Char

console.log(fruit.split(','));  //Split by ,
*/

//Array :-
/*
let fruits=['apple','orange','banana','strawberry'];
fruits=new Array('apple','orange','banana','strawberry');

alert(fruits[2]); //Access the 2nd Element of array.

fruits[0]='Peers';
console.log(fruits);

for(let i=0;i<fruits.length;i++)
{
   console.log(fruits[i]);
   alert(fruits[i]);
}


//Array Common Methods:-
console.log('Array To String:- '+ fruits.toString());

console.log(fruits.join('-+-'));  //Join on the Array Element Bases of -+-.

console.log(fruits.pop(),fruits);  //Pop the last Element from the Array.

console.log(fruits.push("Cherry"),fruits);  //Push the Last Element to the Array.

console.log(fruits[4]);
fruits[fruits.length]="New Fruits"; // Same as Push.
console.log(fruits);

console.log(fruits.shift());  //Remove the 1st element of the Array.
console.log(fruits);

console.log(fruits.unshift('Kiwi')); // Add the Element on 1st Postion on array.
console.log(fruits);

let vegetables=['patatoes','tamatoes','broccoli'];

console.log(fruits.concat(vegetables));

let all=fruits.concat(vegetables);
console.log(all.slice(1,4));
console.log(all.reverse());
console.log(all.sort());

let num=[4,56,64,2,6,879,3256,5699,54,69,32,42,46,74];

console.log(num.sort());

console.log(num.sort(function(a,b){return(a-b)})); //Sort in the Accending Order.

console.log(num.sort(function(a,b){return(b-a)})); //Sort in the Decending Order.
*/

//User Entered Array:- 
/*
let x=prompt("Enter the length of the Array:-");
let emptyarr=new Array();
for(let i=0;i<x;i++)
{
   let y=prompt('Enter the Array element:-');
   emptyarr.push(y);
   console.log(emptyarr);
}
*/

//Object in javascript :-
/*
let student=
{
   first:'Nitish',
   last:'Ojha',
   age:22,
   height:6,
   studentInfo:function()
   { 
      return this.first +'\n'+ this.last +'\n'+ this.age ;
   }

};

console.log(student.studentInfo());

console.log(student.first);

console.log(student.last);

student.first='Yo Man';

console.log(student.first);

student.age++;

console.log(student.age);

*/

//Conditional Statement (if else):-
/*

let age=45;
if((age>=18) && (age<=35))
{
   status='Target demo';
}
else
{
   status='not my Audience';
}
console.log(status);

*/

//Switch Statement:-

// 0 --> Sunday
//   6 --> Saturday

/*

switch(0)
{
   case 0:
      {
         text='Weekend';
         break;
      }
   case 6:
      {
         text='Weekend';
         break;
      }   
   default:
      {
         text='WeekDay';
      } 

}
console.log(text);

*/