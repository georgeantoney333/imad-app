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
};

//counter code
var button = document.getElementById('counter');

button.onclick = function()
{
    
  //create a request
  var req = new XMLHttpRequest();
  
  
  //capture the request and store it in a variable
  request.onreadystatechange = function()
  {
    if(request.readyState === XMLHttpRequest.DONE)
    {
        //Take an action
        if(request.status === 200)
        {
            var counter = request.responseText;
        }
        
    }
    //Do Nothing
  };
  
  //make a request
  request.open('GET', 'http://georgeantony333.imad.hasura-app.io/counter', true);
  request.send(null);
  
};