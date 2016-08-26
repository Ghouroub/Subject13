var evenNumbers=[2,4,6,8,10,12,14,16,18,20];
console.log(evenNumbers);
console.log(evenNumbers.length);
console.log(evenNumbers[0],evenNumbers[2], evenNumbers[5]);
console.log(evenNumbers.indexOf(10));
console.log(evenNumbers.splice( 8, 2 ));
console.log(evenNumbers);
var numbers=[1,"one",2,"two",3,"three",4,"four",5,"five"]; 
console.log(numbers);

var student1={
name:"ghouroub",
eyeColor:"green",
height:165
}

var student2={
name:"aiman",
eyeColor:"blue",
height:170
}
var array=[student1,student2];
console.log(array); 

console.log(array.shift());

console.log(array.unshift("Dotan"));

array[0].eyeColor="eyes";
console.log(array);