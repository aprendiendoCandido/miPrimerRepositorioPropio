const refNote = document.getElementById("note")
const refMessage = document.getElementById("message")
const btnSave = document.getElementById("saveBtn")
const btnDel = document.getElementById("deleteBtn")

btnSave.addEventListener("click", function(){
    let noteValue = refNote.value
    localStorage.setItem("nota", noteValue)
})

btnDel.addEventListener("click", function(){
    localStorage.removeItem("nota")
    refMessage.textContent = ""
    refNote.value = ""
})

function showMessage(){
    refMessage.textContent = localStorage.getItem("nota")
}
showMessage()