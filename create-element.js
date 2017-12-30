/*Create List of Names;
========================*/

//Create ul with id "myName"
var Names = document.createElement("UL");
Names.setAttribute("id","myName");
document.body.appendChild(Names);
//Create li and texts
var Name1 = document.createElement("LI");
var n1 = document.createTextNode("Dhoni");
Name1.appendChild(n1);
var Name2 = document.createElement("LI");
var n2 = document.createTextNode("Virat");
Name2.appendChild(n2);
var Name3 = document.createElement("LI");
var n3 = document.createTextNode("Rohit");
Name3.appendChild(n3);
//place the list in ul with id myName
document.getElementById("myName").appendChild(Name1);
document.getElementById("myName").appendChild(Name2);
document.getElementById("myName").appendChild(Name3);

/*Similarly the ul are creates with different id and name
=========================================================*/
//Create ul with id "myFruit"
var Fruits = document.createElement("UL");
Fruits.setAttribute("id","myFruit");
document.body.appendChild(Fruits);
//Create li and text
var Fruit1 = document.createElement("LI");
var f1 = document.createTextNode("Banana");
Fruit1.appendChild(f1);
var Fruit2 = document.createElement("LI");
var f2 = document.createTextNode("Apple");
Fruit2.appendChild(f2);
var Fruit3 = document.createElement("LI");
var f3 = document.createTextNode("Papaya");
Fruit3.appendChild(f3);
//place the list in ul with id myFruit
document.getElementById("myFruit").appendChild(Fruit1);
document.getElementById("myFruit").appendChild(Fruit2);
document.getElementById("myFruit").appendChild(Fruit3);

//list of Names and Fruits are stored in the Array
var collections = [Names,Fruits];
console.log(collections);
