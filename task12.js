const refColorSelect = document.getElementById("colorSelect")
const refResult = document.getElementById("result")

refColorSelect.addEventListener("change" ,function(){
    refResult.textContent = refColorSelect.value
})