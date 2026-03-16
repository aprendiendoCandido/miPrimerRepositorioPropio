const objects = [
    {name : "Erdos", age : 88},
    {name : "Von Neumann", age:44},
    {name: "Mozart", age: 55}
]
localStorage.setItem("myObjects", JSON.stringify(objects))
const arrayDesdeLocalStorage = JSON.parse(localStorage.getItem("myObjects"))
console.log(arrayDesdeLocalStorage)