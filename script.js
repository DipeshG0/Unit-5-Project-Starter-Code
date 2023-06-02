let angerButton=document.querySelector(".anger-button");
let marvelButton=document.querySelector(".marvel-button");


angerButton.onclick= function() {
    let angerInput = Number(document.querySelector(".anger").value);
    if(angerInput>=50) 
    { let dipesh=document.querySelector(".anger-message");
    dipesh.innerHTML="very Hulk-like";
                             
       } else { 
     let wrong=document.querySelector(".anger-message");
           wrong.innerHTML="Not very hulk";
    }
  
}



marvelButton.onclick= function () {
  let hulkInput= document.querySelector(".hulker");
  if("Avengers"===hulkInput.value) { let hulksmash=document.querySelector(".marvel-message");
                           hulksmash.innerHTML="very Hulk-like";
                          } else { 
    let hulksmash=document.querySelector(".marvel-message");
    hulksmash.innerHTML="Not very Hulk-like";
                          }
}

                                      
    
  
    

