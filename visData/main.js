
// object
var numbers = data[Math.floor(Math.random()*data.length)];
//object
var callName = numbers.name;
//string
const firstName = callName.first;
//string
const lastName = callName.last; 

console.log(numbers.name.first)

var person = data[0];
var picture = person.picture;
var thumb = picture.thumbnail
img.src = thumb;






const para = document.createElement("p")
para.innerText = firstName + " " + lastName;

const body = document.querySelector("body");
body.appendChild(para);

para.style.fontFamily = 'Kirang Haerang', cursive;






let body = document.querySelector("body")

for(const person of data){
 let div = document.createElement("div")

 const name = person.name.first + " " + Person.name.last
 let img = document.createElementNS("img")
 img.src = person.picture.thumbnail
 div.appendChild(img)




body.appendChild(div)


}


