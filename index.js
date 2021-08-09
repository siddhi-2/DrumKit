//alert("hello");

var numberofDrumButtons=document.querySelectorAll(".drum").length;

for (i=0; i<numberofDrumButtons; i++)
{
     document.querySelectorAll("button")[i].addEventListener("click",handleClick);

}
function handleClick()
{
    //console.log(this);it gives us which button we have clicked.
    //o/p- <button class="a drum">a</button>
 // this.style.color="white";
 var buttonInnerHTML = this.innerHTML;
 makeSound(buttonInnerHTML);
 buttonAnimation(buttonInnerHTML);
 
}
//document.addEventListener-->
document.addEventListener("keydown",function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
   // function(event) is a callback function
 

   /*what happens here

   function anotherAddeventlistener(typedOfEvent,callback)
   {
   
       first detecs the event code;

   then o/p the event happened which is an imaginary for understanding sake function's constructor
    var eventThatHappened
    {
        eventType:
        key:
        
    }   
    if (eventThatHappened.eventType==typedOfEvent)
    {
        callback(eventThatHappened);
    }

   */

});

function makeSound(key)
{
    switch(key)
 {
     case "w":
         var aduiow=new Audio("sounds/tom-1.mp3");
         aduiow.play();
         break;
    case "a":
         var aduioa=new Audio("sounds/tom-2.mp3");
         aduioa.play();
         break;
    case "s":
            var aduios=new Audio("sounds/tom-3.mp3");
            aduios.play();
            break;
    case "d":
         var aduiod=new Audio("sounds/tom-4.mp3");
         aduiod.play();
         break;
    case "j":
         var aduiosnare=new Audio("sounds/snare.mp3");
         aduiosnare.play();
         break;
    case "k":
         var aduioc=new Audio("sounds/crash.mp3");
         aduioc.play();
         break;
    case "l":
            var aduiok=new Audio("sounds/kick-bass.mp3");
            aduiok.play();
            break;
    default:
        console.log(buttonInnerHTML);
    
 }
}
function buttonAnimation(currentKey)
{
 var active= document.querySelector("."+ currentKey);
 //o/p-> .w or .a or any class of 7 buttons
 active.classList.add("pressed");

 //added class pressed to active button then delay for few time(here 100) then remove the pressed class.

 setTimeout(function()
 {
   active.classList.remove("pressed");
 }, 100);
}