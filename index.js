const nameSubmitButton = document.querySelector(".add-name-button")
const loggedUser = document.querySelector(".logged-user")
const nameinput = document.getElementById("name")
const allAnswerButton = document.querySelectorAll(".answer")
const dishImage = document.querySelector(".dish-image")
// [ button1 , button2 , button3 ]

const userNameInputtCon = document.querySelector(".user-name-input-con")

let apidata = []
async function getData(){
       const data = await fetch("https://foodapiv1.vercel.app/api/random");

       apidata=await data.json()
}

getData()

nameSubmitButton.addEventListener("click", ()=>{
    console.log(nameinput.value)
    loggedUser.innerHTML = nameinput.value

     console.log(userNameInputtCon.classList)
    userNameInputtCon.classList.toggle("hide")
    
})



allAnswerButton.forEach( (button)=>{

    // button.onclick = ()=>{
    //     console.log("clicked")
    // }
    button.addEventListener("click",()=>{
        dishImage.src = apidata.data[0].url
       console.log(apidata)
        console.log("button is clicked")
   })
} )

