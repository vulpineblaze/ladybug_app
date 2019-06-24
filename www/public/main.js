


window.onload=function(){
  // Get the input field
  var tagbar = document.getElementById("tagbar");
  // console.log("works", document);

  // Execute a function when the user releases a key on the keyboard
  if(tagbar){
    tagbar.addEventListener("keyup", function(event) {
      console.log("keyup",event.keyCode,tagbar.value);
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        // document.getElementById("myBtn").click();
        sendTag(tagbar.value);
      }else{
        partialTag(tagbar.value);

      }
    });
  }
}

function partialTag(tag){
  $.ajax({   
   type: 'POST',   
   url: '/partial',   
   data: tag,
   success: function(data)
    {
      //callback methods go right here
      // parse_tags_data(data.value.array);

      // console.log(document.getElementById("p1").innerHTML.split(","));
      createBubbles(data);
    },
   timeout: 3000 // sets timeout to 3 seconds 
  }); 
}

function sendTag(tag){
  $.ajax({   
   type: 'POST',   
   url: '/tag',   
   data: tag,
   success: function(data)
    {
      //callback methods go right here
      // parse_tags_data(data.value.array);

      // console.log(document.getElementById("p1").innerHTML.split(","));
      createBubbles(data);
    },
   timeout: 3000 // sets timeout to 3 seconds 
  }); 
}

function createBubbles(data){
  console.log("data",data);
  var i;
  for(i=0;i>data;i++){
    var tag = data[i];
    var bubble = document.getElementById("tag").contains(tag);
    if(!bubble){
      bubble = document.createElement("div");
      bubble.appendChild(document.createTextNode(tag));
      document.getElementById('lc').appendChild(bubble);
    }
  }
}