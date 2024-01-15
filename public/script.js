

function sendData(){
    let nameInput = document.getElementById("name").value 
    let ageInput = document.getElementById("age").value 


    fetch("/addName",{
        method: "POST", 
        headers:{
            " Content-Type":"applicaton/json"
        }, 
        body: JSON.stringify({name : nameInput, age: ageInput})
    })
}