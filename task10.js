const refMyForm = document.getElementById("myForm")
const refInputColor = document.getElementById("inputColor")
const refMessageSC = document.getElementById("messageSC")
const refMessageCC = document.getElementById("messageCC")


refMyForm.addEventListener("submit", function(event){
    event.preventDefault()
    saveColor()
})

function saveColor(){
    let valorColor = refInputColor.value
    localStorage.setItem("colorIntroducido", valorColor)
    refMessageSC.textContent = "Thanks! We saved your favorite color"
    document.body.style.backgroundColor = valorColor
}

window.onload = function(){
    checkColor()
}

function checkColor(){
    if(localStorage.getItem("colorIntroducido") != null){
        document.body.style.backgroundColor = localStorage.getItem("colorIntroducido")
        refMessageCC.textContent = "Welcome back! Your favorite color is " + localStorage.getItem("colorIntroducido")
    }else{
        refMessageCC.textContent = ""
    }
}
