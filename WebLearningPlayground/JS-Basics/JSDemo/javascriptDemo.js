console.log("Hello World");//printing in console
var name='swapnil';//varible decleration
const newdate=new Date();
console.log(newdate);
document.getElementById('date').innerHTML= newdate;
//prompt('this is demo of prompt js click okay to see demo');
//alert('click on ok button of this alert and in next' );

            //Variable
//there are two types of Varible decleration- Primitive/value and Reference
//value-
let firstName="swapnil";//string
let age=22;//Number
let isAdult= true;//boolean
let lastName=undefined;//undefined literal
let selectedColor= null;//no selection 
//Reference-
let marks=[10, 20, 30];//array
console.log(marks[0]);//pointing first element
marks[3]= 35;//dynamically adding 
console.log('length of Array:');
console.log(marks.length);//returns the length of array

//object
let person={
    name:"swapnil",
    age:30
};// {}- object literal
console.log(person.name);//dot notation
let selector='name';//selecting object at run time
person[selector]='mary';//bracket notation

//function
function greet(firstName, lastName){
    console.log("Hello " +  firstName+' '+ lastName);
}// function with parameters
greet('Ayush ', 'Gupta');//ayush is argument here, that passes value in paramenters
greet('Gupta', ' Swapnil')//reuse
console.log(firstName);
Welcome=(firstName, lastName)=>
{
return(firstName +lastName);
}
var timeoutfunction= setTimeout(Welcome,1000, "Bruce","wayne");
//clearTimeout(timeoutfunction, 300);

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

//Permission Program- Bitwise Program 
const readPermission=00000100;
const writePermission=0000010;
const  executePermission=0000001;
 let myPermission=0;
 myPermission= myPermission | readPermission |writePermission;
 let message=(myPermission & readPermission) ?'yes':'no';
 console.log( 'Read permission:'  + message );

          //object oriented programming
const circle={
    radius:1,
    location:{
        x:1,
        y:1
    },
    isVisible:true,
    draw: function(){
    console.log('draw');
    }
};
circle.draw();

        //Factory or Constructor Function
        //used for multiple lines of repetative code

function createCircle(radius){
   return{
        radius,// as equivalent to radius:radius
        draw(){     
            console.log('draw')
        } //draw: function(){console.log('draw');
        
        }
    };
   
    const circle1= createCircle(1);
    console.log(circle1);
    const circle2= createCircle(2);
    console.log(circle2);

                            //JavaScript Document
console.log('JavaScript Dom Component ')
let dom=document;
console.log(dom);//the whole html document can be accessed as object
let a=document;
a= document.all;//gives an array of html documents
a= document.body;
a=document.forms[0];
a=document.scripts;
a= document.links;

//a=document.images;


Array.from(a).forEach(function(element){
   console.log(element);
   //document.write(element);// used to write results in html

}); // it will create an array from a, takes all its element in a function that function will go into forEach that will iterates all the element and print the elements in the console
console.log(a);


                           // html selector //

