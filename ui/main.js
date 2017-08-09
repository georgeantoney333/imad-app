
//counter code
var button = document.getElementById('counter');

button.onclick = function()
{
    
  //create a request
  var request = new XMLHttpRequest();
  
  
  //capture the request and store it in a variable
  request.onreadystatechange = function()
  {
    if(request.readyState === XMLHttpRequest.DONE)
    {
        //Take an action
        if(request.status === 200)
        {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
        
    }
    //Do Nothing
  };
  
  //make a request
  request.open('GET', 'http://georgeantony333.imad.hasura-app.io/counter', true);
  request.send(null);
  
};