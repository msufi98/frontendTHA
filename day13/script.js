async function getMeme (){
    document.querySelector("#meme").innerHTML="<h2>Loading...</h2>"
    ob = await fetch('https://meme-api.herokuapp.com/gimme')
    obj = await ob.json()
    console.log(obj.url)
    document.querySelector("#meme").innerHTML="<img src="+obj.url+" alt='meme' width='500' height='500'>"

}

