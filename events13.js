const refTitle = document.getElementById("title")
const refNewTitleInput = document.getElementById("newTitleInput")
const refBtnChangeTitle = document.getElementById("btnChangeTitle")

const refNumber = document.getElementById("number")
const refBtnIncrease = document.getElementById("btnIncrease")
const refBtnDecrease = document.getElementById("btnDecrease")

const refBtnReset = document.getElementById("btnReset")

changeParagraph(0)

refBtnChangeTitle.addEventListener("click", function(){
    changeTitle()
})
refBtnIncrease.addEventListener("click", function(){
    increaseNumber()
})
refBtnDecrease.addEventListener("click", function(){
    decreaseNumber()
})
refBtnReset.addEventListener("click", function(){
    resetNumber()
})

function changeTitle(){
    refTitle.textContent = refNewTitleInput.value
}

function changeParagraph(n){
    refNumber.innerHTML = "<strong>"+  n  +"</strong>"
}
function increaseNumber(){
    const valorNumerico = parseInt(refNumber.textContent)
    const nuevoValorNumerico = valorNumerico + 1
    changeParagraph(nuevoValorNumerico)
}
function decreaseNumber(){
    const valorNumerico = Number(refNumber.textContent)
    const nuevoValorNumerico = valorNumerico - 1
    changeParagraph(nuevoValorNumerico)
}
function resetNumber(){
    refNumber.textContent = 0
}