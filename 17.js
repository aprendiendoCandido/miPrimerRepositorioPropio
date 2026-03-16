const refTextoResultado = document.getElementById("textoResultado")
const refInput = document.getElementById("inputHTML")

refInput.addEventListener("input", function(){
    let acumulador = 0
    let valorNumerico = Number(refInput.value)
    for(let i=0; i<valorNumerico; i++){
        acumulador += i
    }
    refTextoResultado.textContent = acumulador
})