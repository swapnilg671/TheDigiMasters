                       



                       //Regular Expersion
let reg=/Swapnil/; //this is regular literal expression in javascript
let regGlobal=/is/g;// gobal literal, returns diffrent index of matched letter as many time function is called
let s="This is Swapnil Gupta. he is a Developer";

let searchResult=reg.exec(s); //exec is the funtion is which gives index of the matched letter 
console.log(searchResult);
let gSearchResult= regGlobal.exec(s);
console.log(gSearchResult);//index of first match
gSearchResult= regGlobal.exec(s);
console.log(gSearchResult);//index of second match
gSearchResult= regGlobal.exec(s);
console.log(gSearchResult);//index of second match, it returns null
