var year=(prompt("Enter the year you were born:"));
var month=parseInt(prompt("Enter the month you were born:"));
if (month<1 || month>12) {
  var month=parseInt(prompt("Please enter a valid month between 1 and 12:"));
}
var day=parseInt(prompt("Enter the day you were born:"));
if (day<1 || day>31) {
  var day=parseInt(prompt("Please enter a valid day between 1 and 31:"));
}



var d = new Date (year, (month-1), day);
var gender;

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

