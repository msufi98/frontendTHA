ob = document.getElementById("b");

for(var i = 1; i <=20;i++){
    for(var j = 1; j <= 20; j++){
        clone = ob.cloneNode(true)
clone.style.gridArea = ""+i+" / "+j+"/"+ (i+1)+"/"+ (j+1)
console.log(clone.style.gridArea)
document.getElementById("cen").appendChild(clone);

    }
}

