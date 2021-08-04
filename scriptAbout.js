
// //      var name= "Swapnil";
// //      var number= 9918726383;
// //      var message= " Hey! my name is " +  name  + " to connect me, Please call me on this number " +number+ " anytime";
// //      var clickAlert="See on the webpage";
// //      //alert(clickAlert);
// //      //show.message(message);
// //      console.log(message);

// //      function area( length,breadth){
// //     return  length*breadth;
          
// //      }

// //      var areaofrect1= area(10,20);
// //      console.log(areaofrect1);
// //      var areaofrect2= area(20,30);
// //      console.log(areaofrect2);
// //      var rectangleAreas=[];
// //      rectangleAreas.push(area(5, 10));
// //      rectangleAreas.push(areaofrect1);
// //      rectangleAreas.push(areaofrect2);
  
// //      console.log(rectangleAreas);

// //      var bankbalance= 500;
     
// //      function makeTransaction(priceofSale){
// //          if(bankbalance>= priceofSale){
// //               bankbalance-=priceofSale;
              
// //               console.log('transaction done');
// //               console.log(bankbalance);

// //          }
// //          else{
// //               console.log("issuficent funds")
// //          }
// //      }
    

// //      makeTransaction(23);
// //      makeTransaction(44);
// //      makeTransaction(600);


// //      var walletMoney= 600;
// //      var walletBalance= function(moneySpent){
// //           if (moneySpent<= walletMoney){
// //            walletMoney-= moneySpent;
// //            console.log(walletMoney);
// //           }
// //           else(
// //                console.log("not enough money in wallet ")
// //           )
// //      }
  
     
// // walletBalance(30);

// // var printCostumerName= function(firstName,lastName){
// //      console.log(
// //           "First Name: " + firstName +
// //           "Last Name: " + lastName );
// // }
// // var applyforCreditCard= function(creditScore, soul){
// //      // some function for application
// // }

// // var BankOperation=[];
// // BankOperation.push(walletBalance);
// // BankOperation.push(printCostumerName);
// // BankOperation.push(applyforCreditCard);
// // console.log(BankOperation);

// //      //........JavaScript Objects ......//

// // var studentNames=["swapnil", "shivam", "vikas", "ravi"];
// // console.log(studentNames);
// // console.log("Students List-");
// //  for(var index=0; index< studentNames.length; index++) {
// //  console.log(studentNames[index]);
// //  };

// //  console.log("");

// // var studentName1={
// //      id:"Person Details 1:",
// //      firstName:"Swapnil",
// //      lastName:"gupta",
// //      age:21,
// //      phoneNumber:9918726383,
// //      greeting: function(){
// //         return(  "Hi I am " + this.firstName +" I am "
// //           + this.age + " years old");
// //      }
// // };

// // console.log(studentName1.id);
// // console.log(studentName1.greeting());
// // console.log(studentName1.firstName);
// // console.log(studentName1.lastName);
// // console.log(studentName1["age"]);

// // console.log("");

// // var studentName2= {};
// // studentName2.id="Person Details 2:"
// // studentName2.firstName="shivam";
// // studentName2.lastName="tripathi";
// // studentName2.age=22;
// // studentName2.phoneNumber=9871031706;


// // console.log(studentName2.id);
// // console.log(studentName2.firstName);
// // console.log(studentName2.lastName);
// // console.log(studentName2["age"]);
// // console.log("");


// // var studentName3= new Object();
// // studentName3.id="Person Details 3:"
// // studentName3.firstName="Vikas";
// // studentName3.lasttName="kumar";
// // studentName3.age=21;
// // studentName3.phoneNumber= 8887545804;

// // console.log(studentName3.id);
// // console.log(studentName3.firstName);
// // console.log(studentName3.lastName);
// // console.log(studentName3["age"]);
// // console.log("");

// // console.log("Contact details")
// // console.log(studentName1.firstName +":");
// // console.log(studentName1.phoneNumber);
// // console.log(studentName2.firstName+":");
// // console.log(studentName2.phoneNumber);
// // console.log(studentName3.firstName+ ":");
// // console.log(studentName3.phoneNumber);
// // console.log("");

// // var students=[];
// // students.push(studentName1);
// // students.push(studentName2);
// // students.push(studentName3);
// // console.log("Printing the wohle array of objects")
// // console.log(students);
// // console.log("");

// // console.log(" printing the individual objects from array")
// // for(var index=0; index< students.length; index++) {
// //       console.log(students[index]);
// //       };


// //     //.......JavaScript object Constructor........//
// // var students=[];
// // function StudentDetails( firstName, lastName, age, phone){
// //      this.firstName= firstName;
// //      this.lastName= lastName;
// //      this.age= age;
// //      this.phoneNumber= phone;
// //      this.greeting= "Hi my Name is " + firstName + " I am " + "22" + " years old "+
// //      "my contact details are : " + phone ;
// // };

// // var s4= new StudentDetails( "ravi", " m", 23, "9125275656")
// // var s5= new StudentDetails("sohan", "mishra ", 26 , " 99232473847")
// // console.log (s4);
// // console.log(s4.greeting);
// // console.log(s5);
// // console.log(s5.greeting);

// // students.push(new StudentDetails("ashutosh", "mishra", 20, " 918846585"));
// // students.push(s5);
// // console.log(new StudentDetails("aditya", "singh" , 23, "893345432"));
// // console.log(students);

// // console.log("keys");
// // for (var key in students){
// //      console.log(students[key]);
// // }


// //###### Bind Function in JavaScript ######//

// // swapnil's garage 
// this.box= " a blue box with lid";

// var shivamsGarage={
//      box: "Red box",
//      getBox: function() {
//           return this.box;
//      }
// };
// console.log(shivamsGarage.getBox());

// var storeGetBoxLater= shivamsGarage.getBox;
// console.log(storeGetBoxLater());
// //error
// console.log(" we got an error instead of red box we have blue box");

// var getRedBox= shivamsGarage.getBox.bind(shivamsGarage);
// console.log(getRedBox());





//######## JavaScript Calculator ########

/* var numField1=document.getElementById("numField1");
// var numField2=document.getElementById("numField2");
// var resultField=document.getElementById('resultField');
// var form=document.getElementById("xIsWhatPercetageofy");

// form.addEventListener('submit', function(event){
     if(!numField1.value ||  !numField1.value){
          alert("please enter values" );
     }
     else{
    var x=parseFloat(numField1.value);
    var y=parseFloat(numField2.value);

    var result= x/y;
    var percent= x/y*100;
     resultField.innerText= "Answer" + percent +"%";
     event.preventDefault();
     
     }

});*/



//## Advanced JavaScript ##//
console.log("1");
console.log(teddy);
console.log(sing());


var teddy= "bear";
function sing() {
     console.log('I am the one !');
}

var sing2=function (){
     console.log("I am the second function");
}

console.log(sing2());

//##hoisting solution 1##//
console.log("---------------");
one= undefined;
var one= 1;
var one= 2;

console.log(one);

console.log("---------------");
a();

function a() {
console.log("hi");
};
function b() {
     console.log("bye");
};

//## Hoisting Solution 2##//
var favouriteFood=undefined;

var favouriteFood="grapes";
console.log(favouriteFood);
var foodThoughts= function(){
     console.log("original favortie food:" + favouriteFood);
}

var favouriteFood="shushi";
console.log("New Favorite Food:"+ favouriteFood);

foodThoughts();


function marry1 (person1, person2){
     console.log(arguments); //avoid this
     console.log(Array.from(arguments));
     return `${person1} is married to ${person2}`
};
marry1('tim', 'tina');


//spread operator 
console.log("---------------");
function marry2(...args){
     console.log( 'arguments', args);
     console.log(Array.from(args));
     return  `${args[0]} is married to ${args[1]}`;
}

marry2('tim2', 'tina2');


console.log("---------------");
function marry(p1,p2){
     console.log("hello", p1,p2);

}
marry("shivam", "tripathi");
