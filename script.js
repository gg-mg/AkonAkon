
var year=document.getElementById("myYear").value;
var month=document.getElementById("myMonth").value;
var day=document.getElementById("myDay").value;

function getYear() {
    document.getElementById("myYear").value = (prompt("Enter the year you were born:"));
  }
  function getMonth(){
    document.getElementById("myMonth").value=(parseInt(prompt("Enter the month you were born:")));
  if ( document.getElementById("myMonth").value<1 || document.getElementById("myMonth").value>12) {
    document.getElementById("myMonth").value=parseInt(prompt("Please enter a valid month between 1 and 12:"));
  } }
  
  function dDay(){
    document.getElementById("myDay").value=(parseInt(prompt("Enter the month you were born:")));
  if ( document.getElementById("myDay").value<1 || document.getElementById("myDay").value>31) {
    document.getElementById("myDay").value=parseInt(prompt("Please enter a valid month between 1 and 31:"));
  } }
  
  document.getElementById("demo").innerHTML = toCelsius;
  
  var d = new Date (year, month-1, day);
  
  var dayofweek=d;
  var dayofweek = d.getDay();
  
  
  var male;
  var female;
  function myFunction() {
       male = document.getElementById("male");
       female = document.getElementById("female");
  
           if (female.checked) {
               
               if(dayofweek==0){
                  alert("Akosua");}
               
                   if(dayofweek==1){
                  alert("Adwoa");}
               
                   if(dayofweek==2){
                 alert("Abenaa");}
               
                   if(dayofweek==3){
                 alert("Akua");}
               
                   if(dayofweek==4){
                 alert("Yaa");}
               
                   if(dayofweek==5){
                 alert("Afua");}
               
                   if (dayofweek==6){
                 alert("Ama");}
                 }
  
            else {
               if(dayofweek==0){
                  alert("Kwasi");}
               
                   if(dayofweek==1){
                  alert("Kwadwo");}
               
                   if(dayofweek==2){
                 alert("Kwabena");}
               
                   if(dayofweek==3){
                 alert("Kwaku");}
               
                   if(dayofweek==4){
                 alert("Yaw");}
               
                   if(dayofweek==5){
                 alert("Kofi");}
               
                   if (dayofweek==6){
                 alert("Kwame");}
           }
       
  
  
      
  
  
          }