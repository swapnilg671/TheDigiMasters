const P= document.getElementById("principalAmount").value;
let interestRate= document.getElementById("interestRate").value;
let N= document.getElementById("tenure").value;
const R=interestRate/(100*12);


function calculateEMI(P,N, R){
let E=P*R*(Math.pow(1+R,N)/(Math.pow(1+R,N)-1));
let EMI=E.toFixed(2);
document.getElementById("result").innerHTML="EMI is Rs."+ EMI;

return false;
};

