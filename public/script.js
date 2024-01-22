
function sendData(){
	let password = document.getElementById("password") 
	let name = document.getElementById("name") 
	let email = document.getElementById("email") 

	fetch("/addName",{
        method: "POST", 
        headers:{
            " Content-Type":"applicaton/json"
        }, 
        body: JSON.stringify({name : name.value, password: password, email: email})
    })
}