const nameSubmitButton = document.querySelector(".add-name-button")

const nameinput = document.getElementById("name")

nameSubmitButton.addEventListener("click",()=>{
    console.log(nameinput.value)
})

