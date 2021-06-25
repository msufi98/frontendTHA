todoList=[]
console.log(localStorage.getItem("todoList", todoList))
todoList = localStorage.getItem("todoList", todoList).split(",")
if(todoList == null) todoList=[]

updateGUIList()
addDeletor()

document.querySelector("#submit").addEventListener("click",()=>{
    list_item = document.querySelector("#todo-input").value
    addElement(list_item)
    document.querySelector("#todo-input").value= ""
    localStorage.setItem("todoList", todoList)
    addDeletor()
})

function addElement(list_item){
    todoList.push(list_item)
    updateGUIList()
}
function addDeletor(){
document.querySelectorAll(".rm").forEach(item =>item.addEventListener("click", (e)=>{
    console.log(e.target.parentElement.previousSibling.innerText)
    todoList = todoList.filter((word)=>!(word === e.target.parentElement.previousSibling.innerText))
    e.target.parentElement.parentElement.remove()
    updateGUIList()
    localStorage.setItem("todoList", todoList) 
    console.log(todoList)
    addDeletor()
}))}

function updateGUIList(){
    todoList.filter(a=>a!=="")
    list = document.querySelector("#list")
    list.innerHTML = ""
    for (ele of todoList){
        listWidget = document.createElement("div")
        listWidget.setAttribute("class", "list-item") 
        listItem = document.createElement("span")
        listItem.setAttribute("class", "list-item")
        listItem.innerText=ele
        listWidget.appendChild(listItem)
        removeButton = document.createElement("span")
        removeButton.innerHTML = "<input type = 'button' value='rm' class ='rm'>"
        listWidget.appendChild(removeButton)
        list.appendChild(listWidget)
    }
    if(todoList.length==1) addDeletor()
}