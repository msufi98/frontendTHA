ob = document.getElementById("seat");

for(var i = 1; i <=8;i++){
    for(var j = 1; j <= 6; j++){
        clone = ob.cloneNode(true)
clone.style.gridArea = ""+i+" / "+j+"/"+ (i+1)+"/"+ (j+1)
clone.classList.add("untaken")
clone.setAttribute("id","r"+i+"c"+j)

document.getElementById("seats").appendChild(clone);
console.log(clone.classList)

    }
}

var untaken = 48
var taken = 0

document.querySelector("#bookedNumber").innerHTML = untaken;

document.querySelector("#unbookedNumber").innerHTML = taken;

document.querySelector('#seats').addEventListener('click', function(e){
  if (e.target.classList.contains('untaken')) {
		
		e.target.classList.remove("untaken")
		e.target.classList.add("taken")
		untaken = untaken -1
		taken = taken +1
		document.querySelector("#bookedNumber").innerHTML = untaken;
		document.querySelector("#unbookedNumber").innerHTML = taken;
	}
    else if (e.target.classList.contains('taken')) {
		
		e.target.classList.remove("taken")
		e.target.classList.add("untaken")
		untaken = untaken +1
		taken = taken -1
		document.querySelector("#bookedNumber").innerHTML = untaken;
		document.querySelector("#unbookedNumber").innerHTML = taken;
	}
});
