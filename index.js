document.querySelector(".c").addEventListener("click",function ()
{
    var celcius=document.querySelectorAll(".c")[0].innerHTML=prompt("Enter temprature in celsius");
    var fahrenheit=(celcius*1.8)+32;
    document.querySelectorAll(".f")[0].innerHTML=fahrenheit;
    var kelvin=(celcius+273.15);
    document.querySelectorAll(".k")[0].innerHTML=kelvin;
   
}
);



// var input = document.querySelectorAll("myInput")[0];
// input.addEventListener("keypress", function(event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     document.getElementById("myBtn").click();
//   }
// })
// }
// );
