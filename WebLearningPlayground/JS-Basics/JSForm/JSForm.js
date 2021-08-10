                       



                       //Regular Expersion

//Exec()- gives obect and index 
let reg=/Swapnil/; //this is regular literal expression in javascript
let regGlobal=/is/g;// global literal, returns diffrent index of matched letter as many time function is called
reg=/swapnil/i//case insenstive
let s="he is Swapnil Gupta. Swapnil is a Developer";
let r="this is ayush, wapnil is his brother"

let searchResult=reg.exec(s); //exec is the funtion is which gives index of the matched letter 
console.log(searchResult);
searchResult=reg.exec(s); 
console.log(searchResult)
let gSearchResult= regGlobal.exec(s);
console.log(gSearchResult);//index of first match
gSearchResult= regGlobal.exec(s);
console.log(gSearchResult);//index of second match
gSearchResult= regGlobal.exec(s);
console.log(gSearchResult);//index of second match, it returns null
//console.log(gSearchResult.index);

//2.test()- result true or false 
if (searchResult){
searchResult=reg.test(s)
    console.log("words matched:");
    console.log(searchResult);
}
else{
    alert('character not found');
}

console.log("search result for 'ayush'");
let searchResult2=reg.test(r);
if (searchResult2){
console.log('charcter found at index:')
searchResult2=reg.exec(r)
    console.log(searchResult2.index);
}
else if(searchResult2) {
    alert('charcter found');
}
else {
    console.log('please enter correct value, character not found')
}

//3. match()- returns the array of results or null value
    console.log('match function:')
    // !!! Please  watch the Syntax of match!!!  //
// let searchResult3= reg.map(s);--> this is wrong function
let searchResult3= s.match(regGlobal);
console.log(searchResult3);


//4. Search()- Either retunrs the search index or -1
console.log('Search Results:');
        //search syntax is same as the match index
let searchResult4= s.search(regGlobal);
console.log('search found and index is: '+searchResult4);
let searchResultN4= r.search(reg)
console.log('search not found: '  +searchResultN4);


//5. Replace()- replace the first matched results, if global map is given it will replace all the given match
console.log('String Replacment :')

let  replacedResult=s.replace(regGlobal ,'was')
console.log(replacedResult);
