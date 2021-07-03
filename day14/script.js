let dragged=""

document.addEventListener("dragstart", function( event ) {
    // store a ref. on the dragged elem
    if(event.target.classList.contains("number"))
    dragged = event.target;
    // make it half transparent
    console.log(dragged)
    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function( event ) {
    // reset the transparency
    event.target.style.opacity = "";
}, false);

document.addEventListener("dragover", function( event ) {
    // prevent default to allow drop
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function( event ) {
    // highlight potential drop target when the draggable element enters it
    if ( event.target.className == "subcontainer" ) {
        event.target.style.background = "lightblue";
    }

}, false);

document.addEventListener("dragleave", function( event ) {
    // reset background of potential drop target when the draggable element leaves it
    if ( event.target.className == "subcontainer" ) {
        event.target.style.background = "";
    }

}, false);

document.addEventListener("drop", function( event ) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if ( event.target.className == "subcontainer" ) {
        event.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );
    }
  
}, false);

document.querySelector("#cars").addEventListener("change", (e)=>{
    document.querySelector("#carVal").innerText=e.target.value
})