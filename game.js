var r = (Math.floor(Math.random() * Math.floor(5))) + 1;
console.log(r);
var select = confirm("Want to play?");
if(select){
  var i = 0;
  do {
    var num = prompt("Enter a digit:");
    if (num == r){
      alert("Congratulations: You are winner!");
      break;
    } else {
      i++;
    }
    if (i == 3) {
      alert("Today is not your day");
      break;
    }
  }
  while(true);
} else {
  alert("Not today");
}