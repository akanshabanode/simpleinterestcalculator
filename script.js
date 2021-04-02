function calculate()
{
    p = document.getElementById("p").value;
    r = document.getElementById("r").value;
    n = document.getElementById("n").value;
    result = document.getElementById("result");
    result.innerHTML = "if you deposit "+ p + " at an interest rate of " + r +"% \n"+"you will receive an amount of "+ (p*r*n/100);

    
}
