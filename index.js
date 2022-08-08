const openBottun = document.querySelector("#openBtn")
const modalSection = document.querySelector("#modal")
const closeBottun = document.getElementById("closeBtn")
openBottun.addEventListener("click" , () => {
    modalSection.style.display = "flex"
})
closeBottun.addEventListener("click", () => {
    modalSection.style.display = "none"  
})
addEventListener("click" , (event) =>{
    if (!event.target.closest("#openBtn")){
        if (!event.target.closest("#modal")){
            modalSection.style.display = "none"  
        }
    }
})

