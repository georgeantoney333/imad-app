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

//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function()
{
    //make a request to server and send the name
    
    
    //capture a list of names and render it as a list
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for(var i = 0;i<names.length;i++)
    {
        list += '<li>' + names(i) + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
    
};