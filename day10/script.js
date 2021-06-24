let words= ["! Rj_king !","ravi","Tanvi","Uday","kedia","Itsmeayush","anchal singh","AdityA", "MrShambles","ms"]

words = [...words,...words]


for(let i = 0;  i< 20;i++) {
    selectedIndex = Math.floor(Math.random() * (20-1-i))
    createFlipCard(words[selectedIndex])
    words.splice(selectedIndex,1)    
}

function createFlipCard(name){
    let flipCard=document.createElement("div")
    flipCard.classList.add("flip-card")
    let flipCardInner= document.createElement("div");
    flipCardInner.classList.add("flip-card-inner")
    let flipCardFront= document.createElement("div");
    flipCardFront.classList.add("flip-card-front")
    let flipCardBack= document.createElement("div");
    flipCardBack.classList.add("flip-card-back")

    flipCardFront.innerText = "alpha-geeks"
    flipCardBack.innerText =name


    flipCard.appendChild(flipCardInner)
    flipCardInner.appendChild(flipCardFront)
    flipCardInner.appendChild(flipCardBack)
    document.querySelector("#cardarea").appendChild(flipCard)
}

startGame()

function startGame(){
flippedNode=""
flippedName=""
let moves = 50
let matches = 0
flipped=false
document.querySelector("#moves").innerText = moves
document.querySelector("#cardarea").addEventListener("click", e=>{
    //console.log( e.target.nextSibling.innerText)
    document.querySelector("#moves").innerText = moves

    innerNode=e.target.parentNode
    console.log(innerNode.classList)
    if(flipped == false && innerNode.classList.contains("flip-card-inner")){
        console.log(flipped == false && innerNode.classList.contains("flip-card-inner"))
        innerNode.classList.add("flipover")
        flipped=true
        moves = moves -1
        flippedName = e.target.nextSibling.innerText
        flippedNode = innerNode
    }
    else if(innerNode.classList.contains("flip-card-inner")){
        if(!innerNode.classList.contains("flipover")){
            innerNode.classList.add("flipover")
            flipped=false
            moves = moves-1
            if(flippedName == e.target.nextSibling.innerText){
                setTimeout(function(){
                    flippedNode.setAttribute("hidden","")
                innerNode.setAttribute("hidden","")
                }, 500)
                matches = matches+1
            }
            else{
                setTimeout(function(){
                    flippedNode.classList.remove("flipover")
                    innerNode.classList.remove("flipover")
                }, 500)
            }
        }
    }
    document.querySelector("#moves").innerText = moves
        if(moves === 0){
            document.querySelector(".popup").style.display="flex";
            document.querySelector("#page").style.display="none";
            let h2=document.createElement("h2");
            document.querySelector(".popup > div > h2").innerHTML="You lose, try again";
            
             
        }
        if(matches === 10){    
            document.querySelector(".popup").style.display="flex";
            document.querySelector("#page").style.display="none";
            document.querySelector(".popup > div > h2").innerHTML="You Won in "+(50-moves)+" moves"
        }
})};

function reload(){
    window.location.reload();
}