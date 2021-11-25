function compute()
{
    var principal = document.getElementById("principal").value;
    var range = document.getElementById("range").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * range /100;
    var year = new Date().getFullYear()+parseInt(years);
    //Reference to the element "result". Tag <mark> was added to highlight the result numbers:
    document.getElementById("result").innerHTML= "\<br\>\<br\>If you deposit <mark>"+principal+"</mark>,at an interest rate of <mark>"+range+"%</mark><br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark><br\>"
    
        
}
function updateRate() 
{
    var rateval = document.getElementById("range").value;
    document.getElementById("rate_val").innerText=rateval;
}
// To chech numbers new function was added.
function checkdata(){
           var principal = document.getElementById("principal");
                   
            if(principal.value <= 0){
                alert("Enter a positive number");
                principal.focus();
                return false;
            }
 //focus() element was created take the user back to the "Principal" input box.   
            principal.focus();
	    return true;
	    
        }