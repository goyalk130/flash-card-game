const nameSubmitButton = document.querySelector(".add-name-button")
const loggedUser = document.querySelector(".logged-user")
const nameinput = document.getElementById("name")

const userNameInputtCon = document.querySelector(".user-name-input-con")



nameSubmitButton.addEventListener("click",()=>{
    console.log(nameinput.value)
    loggedUser.innerHTML = nameinput.value
    
    console.log(userNameInputtCon.classList)
    userNameInputtCon.classList.add("karan")
    console.log(userNameInputtCon.classList)
})

