console.log("Hello World");//printing in console
var name='swapnil';//varible decleration


//there are two types of Varible decleration- Primitive/value and Reference
//value-
let firstName="swapnil";//string
let age=22;//Number
let isAdult= true;//boolean
let lastName=undefined;//undefined literal
let selectedColor= null;//no selection 
//Reference
let marks=[10, 20, 30];//array
console.log(marks[0]);//pointing first element
marks[3]= 35;//dynamically adding 
console.log('length of Array:');
console.log(marks.length);//returns the length of array

let person={
    name:"swapnil",
    age:30
};//object, {}- object literal
console.log(person.name);//dot notation
let selector='name';//selecting object at run time
person[selector]='mary';//bracket notation


function greet(firstName, lastName){
    console.log("Hello " +  firstName+' '+ lastName);
}// function with parameters
greet('Ayush ', 'Gupta');//ayush is argument here, that passes value in paramenters
greet('Gupta', ' Swapnil')//reuse
console.log(firstName);

//operators
x=23;
x+=5;//x=x+5
x*=3//x=x*3
//relational 
console.log(x);
console.log(x>100);
console.log(x<= 84);
//equality
console.log('is x equal to 1?:')
console.log(x===1);//check if it is equal
console.log(x!==1);
Welcome=(firstName, lastName)=>
{
    return(firstName +lastName);
}

//Permission Program- Bitwise Program 
const readPermission=00000100;
const writePermission=0000010;
const  executePermission=0000001;
 let myPermission=0;
 myPermission= myPermission | readPermission |writePermission;
 let message=(myPermission & readPermission) ?'yes':'no';
 console.log( 'Read permission:'  + message );


var timeoutfunction= setTimeout(Welcome,1000, "Bruce","wayne");
//clearTimeout(timeoutfunction, 300);
//prompt('this is demo of prompt js click okay to see demo');
//alert('click on ok button of this alert and in next' );
const newdate=new Date();
console.log(newdate);

document.getElementById('date').innerHTML= newdate;
