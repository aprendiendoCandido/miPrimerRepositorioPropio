const studentFormRef = document.getElementById("studentForm")

const nameRef = document.getElementById("name")
const messageNameRef = document.getElementById("messageName")

const ageRef = document.getElementById("age")
const messageAgeRef = document.getElementById("messageAge")

const scoreRef = document.getElementById("score")
const messageScoreRef = document.getElementById("messageScore")

const messageRef = document.getElementById("message")

const pEstudianteRef = document.getElementById("pEstudiante")

const infoRef = document.getElementById("info")

studentFormRef.addEventListener("submit", function(event){
    event.preventDefault()
    if(validateInput() == false){
        messageRef.classList.remove("success")
        messageRef.classList.add("error")
        messageRef.textContent = "Por favor introduzca datos validos"
    }else{
        messageRef.classList.remove("error")
        messageRef.classList.add("success")
        messageRef.textContent = "Datos validos introducidos"
        const estudiante = {
            name: nameRef.value,
            age: ageRef.value,
            score: scoreRef.value
        }
        pEstudianteRef.textContent = "Nombre del estudiante: " + estudiante.name+"  "+"; Edad del estudiante: "+estudiante.age+"; Puntuacion del estudiante: "+estudiante.score
        localStorage.setItem("name", estudiante.name)
        localStorage.setItem("age", estudiante.age)
        localStorage.setItem("score", estudiante.score)
        infoRef.textContent = "Datos sacados del localStorage;" +  " Nombre del estudiante: " + localStorage.getItem("name")+"  "+"; Edad del estudiante: "+localStorage.getItem("age")+"; Puntuacion del estudiante: "+localStorage.getItem("score")
    }
    
})


function validateInput(){
    const okAge = validateAge()
    const okScore = validateScore()
    const okName = thereIsName()
    return (okName && okAge && okScore)
}

function validateAge(){
    const valorAge = Number(ageRef.value)
    if(valorAge > 0){
        messageAgeRef.textContent = ""

        return true
    }else{
        messageAgeRef.classList.add("error")
        messageAgeRef.textContent = "La edad ha de ser un valor positivo"
        return false
    }
}
function validateScore(){
    const valorScore = Number(scoreRef.value)
    if(valorScore > 0 && valorScore < 100){
        messageScoreRef.textContent = ""
        return true
    }else{
        messageScoreRef.classList.add("error")
        messageScoreRef.textContent = "La puntuacion ha de estar entre 0 y 100"
        return false
    }
}
function thereIsName(){
    const valorName = nameRef.value
    if(valorName != ""){
        messageNameRef.textContent = ""
        return true
    }else{
        messageNameRef.classList.add("error")
        messageNameRef.textContent = "Introduzca un nombre valido"
        return false
    }
}
