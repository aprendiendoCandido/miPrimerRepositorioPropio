const refBox = document.getElementById("box")

refBox.addEventListener("mouseover" ,function(){
    refBox.style.backgroundColor = "orange"
    refBox.textContent = "The mouse is over me!!!"
})

refBox.addEventListener("mouseleave", function(){
    refBox.style.backgroundColor = "lightblue"
    refBox.textContent = "Not longer over me!!!"
})