console.log('Loaded!');

//move element
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + "px";
}
img.onclick = function(){
    var interval = setInterval(moveRight,50);
//  img.style.marginLeft = "100px";
}

//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onClick = function() {
  //make a request
  
  //capture the request and store it in a variable
  
  //renfer the variable in correct span
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
  
};