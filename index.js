const nameSubmitButton = document.querySelector(".add-name-button")
const loggedUser = document.querySelector(".logged-user")
const nameinput = document.getElementById("name")

nameSubmitButton.addEventListener("click",()=>{
    console.log(nameinput.value)
    loggedUser.innerHTML = nameinput.value
})

